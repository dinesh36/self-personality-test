import { sleep } from '../../shared/utils';
import { IQuestion } from './test.types';

const answerSheet = [
  {
    questionId: 1,
    answer: [{ id: 1, result: 'introvert' },
      { id: 2, result: 'extrovert' }],
  },
  {
    questionId: 2,
    answer: [{ id: 1, result: 'introvert' },
      { id: 1, result: 'extrovert' }],
  },
  {
    questionId: 3,
    answer: [{ id: 1, result: 'introvert' },
      { id: 2, result: 'extrovert' }],
  },
];

export const getAllQuestions: ()=>Promise<Array<IQuestion>> = async () => {
  await sleep(3000);

  return [{
    title: 'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
    id: 1,
    answerOptions: [
      { title: 'Don’t dare to interrupt them', id: 1, alphabet: 'A' },
      { title: 'Think it’s more important to give them some of your time; work can wait', id: 2, alphabet: 'B' },
    ],
  },
  {
    title: 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You: ',
    id: 2,
    answerOptions: [
      { title: 'Look at your watch every two minutes', id: 1, alphabet: 'A' },
      { title: 'Complain in a loud voice, while tapping your foot impatiently', id: 2, alphabet: 'B' },
    ],
  },
  {
    title: 'You are taking part in a guided tour of a museum. You:',
    id: 3,
    answerOptions: [
      { title: 'Follow the group without question', id: 1, alphabet: 'A' },
      { title: 'Are right up the front, adding your own comments in a loud voice', id: 2, alphabet: 'B' },
    ],
  },
  ];
};

export const getTestResult = async (answers: object) => {
  await sleep(3000);
  let introvertCount = 0;
  let extrovertCount = 0;
  Object.keys(answers).forEach((questionId) => {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { answer } = answerSheet.find(
      ({ questionId: answerSheetQuestionId }) => answerSheetQuestionId === Number(questionId),
    );
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const selectedOption = answers[questionId];
    // @ts-ignore
    const foundPersonality = answer.find(({ id }) => id === selectedOption)?.result;
    if (foundPersonality === 'introvert') {
      introvertCount += 1;
    } else {
      extrovertCount += 1;
    }
  });
  return introvertCount > extrovertCount ? 'introvert' : 'extrovert';
};
