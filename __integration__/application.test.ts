import type { StartCliResult } from '@tramvai/test-integration';
import { startCli } from '@tramvai/test-integration';

describe('sketch', () => {
  let app: StartCliResult;

  beforeAll(async () => {
    app = await startCli('sketch');
  }, 80000);

  afterAll(() => {
    return app.close();
  });

  it('request to main page return status 200', async () => {
    return app.request('/').expect(200);
  });
});
