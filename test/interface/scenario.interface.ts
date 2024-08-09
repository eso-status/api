import { Initial } from './initial.interface';
import { Step } from './step.interface';

export interface Scenario {
  initial: Initial;
  steps: Step[];
}
