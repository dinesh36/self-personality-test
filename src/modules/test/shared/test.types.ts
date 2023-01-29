export interface IAnswerOption{
  title: string,
  id: number,
  alphabet: string
}

export interface IQuestion{
  title: string;
  id: number,
  answerOptions: Array<IAnswerOption>
}

export type IResult = 'introvert' | 'extrovert' | '';

export interface ITestState {
  questions: Array<IQuestion>,
  isCompleted: boolean,
  result: IResult,
  currentQuestionIndex: number,
  answers: object
}
