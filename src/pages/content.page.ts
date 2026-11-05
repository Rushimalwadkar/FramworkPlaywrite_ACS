import { type Locator, type Page, type Response } from '@playwright/test';

export class ContentPage {
  readonly heading: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { level: 1 });
  }

  goto(path: string): Promise<Response | null> {
    return this.page.goto(path);
  }

  linkTo(path: string): Locator {
    return this.page.locator(`a[href="${path}"]`).first();
  }

  emailLink(email: string): Locator {
    return this.page.locator(`a[href="mailto:${email}"]`);
  }
}
