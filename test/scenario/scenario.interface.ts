import { Initial } from './initial.interface';
import ScenarioInitialParamInterface from './scenarioInitialParam.interface';

export default interface Scenario {
  initial: Initial;
  steps: ScenarioInitialParamInterface[];
}
