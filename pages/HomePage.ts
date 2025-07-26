import { Locator, Page } from '@playwright/test';
import { SignupPage } from './SignupPage';
import { ProductPage } from './ProductPage';
import { CheckoutPage } from './CheckoutPage';

export class HomePage {
  readonly page: Page;
  readonly signUpLink: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;

    //Locators
    this.signUpLink = page.locator('#signin2');
    this.cartLink = page.locator('#cartur');
  }

  //Methods
  async navigate(): Promise<void> {
    await this.page.goto('https://www.demoblaze.com/index.html');
  }

  async openSignupModal(): Promise<SignupPage> {
    await this.signUpLink.click();
    return new SignupPage(this.page);
  }

  async openProduct(productName: string): Promise<ProductPage> {
    await this.page.getByRole('link', { name: productName }).click();
    return new ProductPage(this.page);
}

  async goToCart(): Promise<CheckoutPage> {
    await this.cartLink.click();
    return new CheckoutPage(this.page);
  }
}