import { EsoStatus, EsoStatusRawData, Slug, Status } from '@eso-status/types';

import * as moment from 'moment';

import { Moment } from 'moment';

import { EsoStatus as CustomEsoStatus } from '../../src/interface/esoStatus.interface';
import { EsoStatusMaintenance as CustomEsoStatusMaintenance } from '../../src/interface/esoStatusMaintenance.interface';
import { EsoStatusRawData as CustomEsoStatusRawData } from '../../src/interface/esoStatusRawData.interface';
import { Archive } from '../../src/resource/archive/entities/archive.entity';
import { Log } from '../../src/resource/log/entities/log.entity';
import { Maintenance } from '../../src/resource/maintenance/entities/maintenance.entity';
import { Service } from '../../src/resource/service/entities/service.entity';
import { Connector } from '../../src/type/connector.type';

import Helper from './helper';
import ScenarioInitialParamInterface from './scenarioInitialParam.interface';
import ScenarioStep from './scenarioStep.interface';

export default class Step {
  public first: ScenarioInitialParamInterface;

  public last: ScenarioInitialParamInterface;

  constructor(
    public readonly stepsParams: ScenarioStep,
    public readonly old: ScenarioInitialParamInterface,
    public oldLiveServices: ScenarioInitialParamInterface,
    public oldServiceAlerts: ScenarioInitialParamInterface,
    public oldForumMessagePts: ScenarioInitialParamInterface,
    public oldForumMessage: ScenarioInitialParamInterface,
  ) {}

  public static generateInitial(
    connector: Connector,
    rawList: EsoStatusRawData[],
    initial: {
      logs: Log[];
      archives: Archive[];
      services: Service[];
      maintenances: Maintenance[];
      serviceControllerReturn: CustomEsoStatus[];
    },
  ): ScenarioInitialParamInterface {
    return {
      connector,
      connectorData: rawList,
      statusUpdateList: [],
      maintenancePlannedList: [],
      maintenanceRemovedList: [],
      logs: initial.logs,
      archives: initial.archives,
      services: initial.services,
      maintenances: initial.maintenances,
      serviceControllerReturn: initial.serviceControllerReturn,
    };
  }

  public generateFirst(): ScenarioInitialParamInterface {
    return {
      connector: this.stepsParams.connector,
      connectorData: this.stepsParams.connectorParams.rawList,
      statusUpdateList: this.generateStatusUpdateList(
        this.stepsParams.connectorParams.statusUpdateList,
      ),
      maintenancePlannedList: this.generateMaintenancePlannedListList(
        this.stepsParams.connectorParams.maintenancePlannedList,
      ),
      maintenanceRemovedList:
        this.stepsParams.connectorParams.maintenanceRemovedList,
      logs: this.generateLogList(
        this.old.logs,
        this.stepsParams.connectorParams.newLogs,
      ),
      archives: this.generateArchiveList(
        this.old.archives,
        this.stepsParams.connectorParams.changedArchives,
      ),
      services: this.generateServiceList(
        this.old.services,
        this.stepsParams.connectorParams.changedServices,
      ),
      maintenances: this.generateMaintenanceList(
        this.stepsParams.connectorParams.maintenances,
      ),
      serviceControllerReturn: this.generateControllerReturnList(
        this.old.serviceControllerReturn,
        this.stepsParams.connectorParams.changedControllerReturn,
      ),
    };
  }

  public generateLiveServices(): ScenarioInitialParamInterface[] {
    return [
      this.first,
      this.generateOther('ServiceAlerts', this.oldServiceAlerts, this.first),
      this.generateOther(
        'ForumMessagePts',
        this.oldForumMessagePts,
        this.first,
      ),
      this.generateOther('ForumMessage', this.oldForumMessage, this.first),
    ];
  }

  public generateForumMessage(): ScenarioInitialParamInterface[] {
    return [
      this.generateOther(
        'LiveServices',
        this.oldLiveServices,
        this.oldLiveServices,
      ),
      this.generateOther(
        'ServiceAlerts',
        this.oldServiceAlerts,
        this.oldServiceAlerts,
      ),
      this.generateOther(
        'ForumMessagePts',
        this.oldForumMessagePts,
        this.oldForumMessagePts,
      ),
      this.first,
    ];
  }

  public generateForumMessagePts(): ScenarioInitialParamInterface[] {
    return [
      this.generateOther(
        'LiveServices',
        this.oldLiveServices,
        this.oldLiveServices,
      ),
      this.generateOther(
        'ServiceAlerts',
        this.oldServiceAlerts,
        this.oldServiceAlerts,
      ),
      this.first,
      this.generateOther('ForumMessage', this.oldForumMessage, this.first),
    ];
  }

  public generateServiceAlerts(): ScenarioInitialParamInterface[] {
    return [
      this.generateOther(
        'LiveServices',
        this.oldLiveServices,
        this.oldLiveServices,
      ),
      this.first,
      this.generateOther(
        'ForumMessagePts',
        this.oldForumMessagePts,
        this.first,
      ),
      this.generateOther('ForumMessage', this.oldForumMessage, this.first),
    ];
  }

  public generateNext(simple: boolean = true): ScenarioInitialParamInterface[] {
    const result: ScenarioInitialParamInterface[] = [
      this.generateOther('LiveServices', this.oldLiveServices, this.first),
    ];

    if (!simple) {
      result.push(
        this.generateOther('ServiceAlerts', this.oldServiceAlerts, this.first),
      );
    }

    result.push(
      this.generateOther(
        'ForumMessagePts',
        this.oldForumMessagePts,
        this.first,
      ),
    );
    result.push(
      this.generateOther('ForumMessage', this.oldForumMessage, this.first),
    );

    return result;
  }

  public generate(): ScenarioInitialParamInterface[] {
    this.first = this.generateFirst();

    const step: ScenarioInitialParamInterface[] = [];

    if (this.stepsParams.connector === 'LiveServices') {
      this.oldLiveServices = this.first;

      step.push(...this.generateLiveServices());
    } else if (this.stepsParams.connector === 'ServiceAlerts') {
      this.oldServiceAlerts = this.first;

      step.push(...this.generateServiceAlerts());
    } else if (this.stepsParams.connector === 'ForumMessagePts') {
      this.oldForumMessagePts = this.first;

      step.push(...this.generateForumMessagePts());
    } else if (this.stepsParams.connector === 'ForumMessage') {
      this.oldForumMessage = this.first;

      step.push(...this.generateForumMessage());
    }

    step.push(...this.generateNext());
    step.push(...this.generateNext());
    step.push(...this.generateNext(false));
    step.push(...this.generateNext());
    step.push(...this.generateNext());
    step.push(...this.generateNext(false));
    step.push(...this.generateNext());
    step.push(...this.generateNext());

    this.last = step[step.length - 1];
    return step;
  }

  public generateOther(
    connector: Connector,
    old: ScenarioInitialParamInterface,
    first: ScenarioInitialParamInterface,
  ): ScenarioInitialParamInterface {
    return {
      connector,
      connectorData: old.connectorData,
      statusUpdateList: [],
      maintenancePlannedList: [],
      maintenanceRemovedList: [],
      logs: first.logs,
      archives: first.archives,
      services: first.services,
      maintenances: first.maintenances,
      serviceControllerReturn: first.serviceControllerReturn,
    };
  }

  public generateStatusUpdateList(slugList: Slug[]): EsoStatus[] {
    return slugList.map((slug: Slug): EsoStatus => {
      const esoStatusRawData: EsoStatusRawData =
        this.stepsParams.connectorParams.rawList.find(
          (raw: EsoStatusRawData): boolean => raw.slug === slug,
        );

      return {
        rawData: esoStatusRawData,
        status: esoStatusRawData.status,
        statusSince: moment(0), // TODO to replace
        slug: esoStatusRawData.slug,
        type: esoStatusRawData.type,
        support: esoStatusRawData.support,
        zone: esoStatusRawData.zone,
      };
    });
  }

  public generateLogList(initial: Log[], changed: Slug[]): Log[] {
    return [
      ...initial,
      ...changed.map((slug: Slug): Log => {
        const esoStatusRawData: EsoStatusRawData =
          this.stepsParams.connectorParams.rawList.find(
            (raw: EsoStatusRawData): boolean => raw.slug === slug,
          );
        return {
          connector: this.stepsParams.connector,
          serviceId: Helper.getServiceId(slug),
          statusId: Helper.getStatusId(esoStatusRawData.status),
          rawData: JSON.stringify(Helper.generateCustomRaw(esoStatusRawData)),
        };
      }),
    ];
  }

  public generateArchiveList(initial: Archive[], changed: Slug[]): Archive[] {
    return initial.map((archive: Archive): Archive => {
      const filter: Slug[] = changed.filter(
        (slug: Slug): boolean =>
          slug === Helper.getSlugByServiceId(archive.serviceId) &&
          this.stepsParams.connector === archive.connector,
      );
      if (filter.length === 1) {
        const esoStatusRawData: EsoStatusRawData =
          this.stepsParams.connectorParams.rawList.find(
            (raw: EsoStatusRawData): boolean => raw.slug === filter[0],
          );

        return {
          connector: this.stepsParams.connector,
          serviceId: Helper.getServiceId(esoStatusRawData.slug),
          statusId: Helper.getStatusId(esoStatusRawData.status),
          rawData: JSON.stringify(Helper.generateCustomRaw(esoStatusRawData)),
        };
      }

      return archive;
    });
  }

  public generateMaintenanceList(slugList: Slug[]): Maintenance[] {
    return slugList.map((slug: Slug): Maintenance => {
      let esoStatusRawData: EsoStatusRawData =
        this.stepsParams.connectorParams.rawList.find(
          (raw: EsoStatusRawData): boolean => raw.slug === slug,
        );

      if (!esoStatusRawData) {
        esoStatusRawData = <EsoStatusRawData>(
          JSON.parse(
            this.old.maintenances.find(
              (maintenance: Maintenance): boolean =>
                maintenance.serviceId === Helper.getServiceId(slug),
            ).rawData,
          )
        );
        esoStatusRawData.dates = esoStatusRawData.dates.map(
          // @ts-ignore
          (date: string): Moment => {
            return moment(new Date(date));
          },
        );
      }

      const formatedEsoStatusRawData: CustomEsoStatusRawData =
        Helper.generateCustomRaw(esoStatusRawData);

      if (formatedEsoStatusRawData.dates.length > 1) {
        return {
          serviceId: Helper.getServiceId(esoStatusRawData.slug),
          beginnerAt: new Date(formatedEsoStatusRawData.dates[0]),
          endingAt: new Date(formatedEsoStatusRawData.dates[1]),
          rawData: JSON.stringify(esoStatusRawData),
        };
      }

      return {
        serviceId: Helper.getServiceId(esoStatusRawData.slug),
        beginnerAt: new Date(formatedEsoStatusRawData.dates[0]),
        rawData: JSON.stringify(esoStatusRawData),
      };
    });
  }

  public generateMaintenancePlannedListList(
    slugList: Slug[],
  ): CustomEsoStatusMaintenance[] {
    return slugList.map((slug: Slug): CustomEsoStatusMaintenance => {
      const esoStatusRawData: EsoStatusRawData =
        this.stepsParams.connectorParams.rawList.find(
          (raw: EsoStatusRawData): boolean => raw.slug === slug,
        );

      const formatedEsoStatusRawData: CustomEsoStatusRawData =
        Helper.generateCustomRaw(esoStatusRawData);

      if (formatedEsoStatusRawData.dates.length > 1) {
        return {
          rawDataList: [formatedEsoStatusRawData],
          beginnerAt: formatedEsoStatusRawData.dates[0],
          endingAt: formatedEsoStatusRawData.dates[1],
        };
      }

      return {
        rawDataList: [formatedEsoStatusRawData],
        beginnerAt: formatedEsoStatusRawData.dates[0],
      };
    });
  }

  public generateServiceList(initial: Service[], changed: Slug[]): Service[] {
    return initial.map((service: Service): Service => {
      const filter: Slug[] = changed.filter(
        (item: Slug): boolean => Helper.getServiceId(item) === service.id,
      );
      if (filter.length === 1) {
        const esoStatusRawData: EsoStatusRawData =
          this.stepsParams.connectorParams.rawList.find(
            (raw: EsoStatusRawData): boolean => raw.slug === filter[0],
          );

        return {
          id: Helper.getServiceId(esoStatusRawData.slug),
          slugId: Helper.getServiceId(esoStatusRawData.slug),
          statusId: Helper.getStatusId(esoStatusRawData.status),
          typeId: Helper.getTypeId(esoStatusRawData.slug),
          supportId: Helper.getSupportId(esoStatusRawData.slug),
          zoneId: Helper.getZoneId(esoStatusRawData.slug),
          rawData: JSON.stringify(esoStatusRawData),
        };
      }

      return service;
    });
  }

  public generateControllerReturnList(
    initial: CustomEsoStatus[],
    changed: {
      slug: Slug;
      status?: Status;
    }[],
  ): CustomEsoStatus[] {
    return initial.map((controllerReturn: CustomEsoStatus): CustomEsoStatus => {
      const filter: {
        slug: Slug;
        status?: Status;
      }[] = changed.filter(
        (item: { slug: Slug; status?: Status }): boolean =>
          item.slug === controllerReturn.slug,
      );
      if (filter.length === 1) {
        const esoStatusRawData: EsoStatusRawData =
          this.stepsParams.connectorParams.rawList.find(
            (raw: EsoStatusRawData): boolean => raw.slug === filter[0].slug,
          );

        const result: CustomEsoStatus = {
          slug: controllerReturn.slug,
          status: controllerReturn.status,
          type: controllerReturn.type,
          support: controllerReturn.support,
          zone: controllerReturn.zone,
          rawData: controllerReturn.rawData,
          statusSince: moment(0).toISOString(), // TODO to replace
        };

        if (filter[0].status) {
          result.status = filter[0].status;
          result.rawData = Helper.generateCustomRaw(esoStatusRawData);
        }

        if (esoStatusRawData.status === 'planned') {
          result.maintenance = {
            rawDataList: [Helper.generateCustomRaw(esoStatusRawData)],
            beginnerAt: esoStatusRawData.dates[0].toISOString(),
          };

          if (esoStatusRawData.dates.length > 1) {
            result.maintenance.endingAt =
              esoStatusRawData.dates[1].toISOString();
          }
        }

        return result;
      }

      return controllerReturn;
    });
  }
}
