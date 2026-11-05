import { test, expect } from '../../src/fixtures/test.fixture';
import { primaryNavigation } from '../../src/test-data/site.data';

test.describe('ACS International India homepage', () => {
  test('loads the homepage and displays its main heading', async ({ homePage, page }) => {
    const response = await homePage.goto();

    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/ACS International India/i);
    await expect(homePage.heroHeading).toContainText(
      'Join us to help organizations worldwide reach their next breakthrough',
    );
  });

  for (const item of primaryNavigation) {
    test(`shows the ${item.label} navigation link`, async ({ homePage }) => {
      await homePage.goto();

      const link = homePage.navigationLink(item.label);
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', item.path);
    });
  }
});
