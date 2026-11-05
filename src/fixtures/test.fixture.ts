import { test as base, expect } from '@playwright/test';
import { ContentPage } from '../pages/content.page';
import { HomePage } from '../pages/home.page';

type PageObjects = {
  homePage: HomePage;
  contentPage: ContentPage;
};

export const test = base.extend<PageObjects>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  contentPage: async ({ page }, use) => {
    await use(new ContentPage(page));
  },
});

export { expect };
