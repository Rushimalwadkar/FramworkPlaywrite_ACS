import { test, expect } from '../../src/fixtures/test.fixture';
import { primaryNavigation } from '../../src/test-data/site.data';

test.describe('Primary navigation routes', () => {
  for (const item of primaryNavigation) {
    test(`${item.label} route responds successfully`, async ({ contentPage, page }) => {
      const response = await contentPage.goto(item.path);

      expect(response?.status(), `${item.path} should return HTTP 200`).toBe(200);
      await expect(page).toHaveTitle(/\S/);
    });
  }
});
