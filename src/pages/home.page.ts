import { type Locator, type Page, type Response } from '@playwright/test';

export class HomePage {
  readonly heroHeading: Locator;

  constructor(private readonly page: Page) {
    this.heroHeading = page.getByRole('heading', { level: 1 });
  }

  goto(): Promise<Response | null> {
    return this.page.goto('/');
  }

  navigationLink(label: string): Locator {
    return this.page.getByRole('link', { name: label, exact: true }).first();
  }
}
