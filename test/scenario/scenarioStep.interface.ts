import { Connector } from '../../src/type/connector.type';

import ScenarioStepParam from './scenarioStepParam.interface';

export default interface ScenarioStep {
  connector: Connector;
  connectorParams: ScenarioStepParam;
}
