import { Locator, Page, expect } from '@playwright/test';

export class SignupPage {
  readonly page: Page;
  readonly modal: Locator;

  constructor(page: Page) {
    this.page = page;
    
    //Locators
    this.modal = page.locator('#signin2');
  }

  //Methods
  async register(username: string, password: string): Promise<void> {
    await this.page.locator('#sign-username').fill(username);
    await this.page.locator('#sign-password').fill(password);
    await this.page.locator('button:has-text("Sign up")').click(); 
  }
}