import { ITestState } from '../../modules/test/shared/test.types';

export interface IRootStore{
  layoutState: {
    title: string
  },
  testState: ITestState
}
