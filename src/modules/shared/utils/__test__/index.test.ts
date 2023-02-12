import { sleep } from '../index';

it('should wait the function for the specified time.', (done) => {
  sleep(2000).then(() => {
    done();
  });
});
