import { getAllQuestions, getTestResult, mockQuestions } from '../test.services';

describe('Test Service', () => {
  it('Should return the mock test questions', (done) => {
    getAllQuestions()
      .then((questions) => {
        expect(JSON.stringify(questions)).toMatch(JSON.stringify(mockQuestions));
        done();
      });
  });

  it('Should return the introvert test result', (done) => {
    getTestResult({ 1: 1, 2: 1, 3: 1 })
      .then((answer) => {
        expect(answer).toMatch('introvert');
        done();
      });
  });

  it('Should return the extrovert test result', (done) => {
    getTestResult({ 1: 2, 2: 2, 3: 2 })
      .then((answer) => {
        expect(answer).toMatch('extrovert');
        done();
      });
  });
});
