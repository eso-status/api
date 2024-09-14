import { EsoStatusRawData, PlannedStatus, Slug } from '@eso-status/types';
import * as moment from 'moment/moment';

import { EsoStatus as CustomEsoStatus } from '../../src/interface/esoStatus.interface';
import { Connector } from '../../src/type/connector.type';

import Helper from './helper';
import { Initial } from './initial.interface';
import ScenarioInitialParamInterface from './scenarioInitialParam.interface';
import ScenarioStep from './scenarioStep.interface';
import Step from './step.class';

const getConnector = (url: string): Connector => {
  switch (url) {
    case 'https://forums.elderscrollsonline.com':
      return 'ForumMessage';
    case 'https://forums.elderscrollsonline.com/': // TODO a delete
      return 'ForumMessage';
    case 'https://forums.elderscrollsonline.com/en/categories/pts':
      return 'ForumMessagePts';
    case 'https://help.elderscrollsonline.com/app/answers/detail/a_id/4320':
      return 'ServiceAlerts';
    default:
      return 'LiveServices';
  }
};

export default class ScenarioClass {
  public initial: Initial = {
    logs: [],
    archives: [],
    services: [],
    maintenances: [],
    serviceControllerReturn: [],
  };

  public oldStep: ScenarioInitialParamInterface;

  public oldLiveServices: ScenarioInitialParamInterface;

  public oldServiceAlerts: ScenarioInitialParamInterface;

  public oldForumMessagePts: ScenarioInitialParamInterface;

  public oldForumMessage: ScenarioInitialParamInterface;

  constructor(
    public initialLiveServices: EsoStatusRawData[],
    public initialServiceAlerts: EsoStatusRawData[],
    public initialForumMessagePts: EsoStatusRawData[],
    public initialForumMessage: EsoStatusRawData[],
    public firstLiveServices: EsoStatusRawData[],
    public firstServiceAlerts: EsoStatusRawData[],
    public firstForumMessagePts: EsoStatusRawData[],
    public firstForumMessage: EsoStatusRawData[],
    public steps: ScenarioStep[],
  ) {
    this.generateInitial();

    this.oldLiveServices = Step.generateInitial(
      'LiveServices',
      this.firstLiveServices,
      this.initial,
    );

    this.oldServiceAlerts = Step.generateInitial(
      'ServiceAlerts',
      this.firstServiceAlerts,
      this.initial,
    );

    this.oldForumMessagePts = Step.generateInitial(
      'ForumMessagePts',
      this.firstForumMessagePts,
      this.initial,
    );

    this.oldForumMessage = Step.generateInitial(
      'ForumMessage',
      this.firstForumMessage,
      this.initial,
    );

    this.oldStep = this.oldForumMessage;
  }

  public generate() {
    return {
      initial: this.initial,
      steps: this.generateSteps(),
    };
  }

  public generateSteps(): ScenarioInitialParamInterface[] {
    const result: ScenarioInitialParamInterface[] = [];
    this.steps.forEach((step: ScenarioStep): void => {
      const steps: Step = new Step(
        step,
        this.oldStep,
        this.oldLiveServices,
        this.oldServiceAlerts,
        this.oldForumMessagePts,
        this.oldForumMessage,
      );

      const stepList: ScenarioInitialParamInterface[] = steps.generate();

      result.push(...stepList);
      this.oldLiveServices = stepList[stepList.length - 3];
      this.oldServiceAlerts = stepList[stepList.length - 9];
      this.oldForumMessagePts = stepList[stepList.length - 2];
      this.oldForumMessage = stepList[stepList.length - 1];
      this.oldStep = this.oldForumMessage;
    });

    return result;
  }

  public generateInitial(): void {
    const knowServices: Slug[] = [];

    [
      ...this.initialLiveServices,
      ...this.initialServiceAlerts,
      ...this.initialForumMessagePts,
      ...this.initialForumMessage,
    ].forEach((raw: EsoStatusRawData): void => {
      this.initial.logs.push({
        connector: getConnector(raw.source),
        serviceId: Helper.getServiceId(raw.slug),
        statusId: Helper.getStatusId(raw.status),
        rawData: JSON.stringify(raw),
      });

      this.initial.archives.push({
        connector: getConnector(raw.source),
        serviceId: Helper.getServiceId(raw.slug),
        statusId: Helper.getStatusId(raw.status),
        rawData: JSON.stringify(raw),
      });

      if (!knowServices.includes(raw.slug)) {
        this.initial.services.push({
          id: Helper.getServiceId(raw.slug),
          slugId: Helper.getServiceId(raw.slug),
          statusId: Helper.getStatusId(raw.status),
          typeId: Helper.getTypeId(raw.slug),
          supportId: Helper.getSupportId(raw.slug),
          zoneId: Helper.getZoneId(raw.slug),
          rawData: JSON.stringify(raw),
        });

        let serviceControllerReturn: CustomEsoStatus = {
          slug: raw.slug,
          status: raw.status,
          type: raw.type,
          support: raw.support,
          zone: raw.zone,
          rawData: Helper.generateCustomRaw(raw),
          statusSince: moment(0).toISOString(), // TODO to replace
        };
        serviceControllerReturn = this.getMaintenance(
          raw,
          serviceControllerReturn,
        );

        this.initial.serviceControllerReturn.push(serviceControllerReturn);
        knowServices.push(raw.slug);
      }
    });
  }

  public getMaintenance(
    raw: EsoStatusRawData,
    serviceControllerReturn: CustomEsoStatus,
  ): CustomEsoStatus {
    const serviceControllerReturnCustom: CustomEsoStatus =
      serviceControllerReturn;
    if (serviceControllerReturnCustom.status === PlannedStatus) {
      serviceControllerReturnCustom.maintenance = {
        rawDataList: [Helper.generateCustomRaw(raw)],
        beginnerAt: raw.dates[0].toISOString(),
        endingAt: raw.dates[1].toISOString(),
      };
    }

    return serviceControllerReturn;
  }
}
