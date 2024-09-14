import { EsoStatusRawData, Slug, Status } from '@eso-status/types';

export default interface ScenarioStepParam {
  rawList: EsoStatusRawData[];
  statusUpdateList: Slug[];
  maintenancePlannedList: Slug[];
  maintenanceRemovedList: Slug[];
  newLogs: Slug[];
  changedArchives: Slug[];
  changedServices: Slug[];
  maintenances: Slug[];
  changedControllerReturn: {
    slug: Slug;
    status?: Status;
  }[];
}
