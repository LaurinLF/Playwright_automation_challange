import { Locator, Page, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    
    //Locators
    this.addToCartButton = page.locator('text=Add to cart');
  }

  //Methods
  async addToCart(): Promise<void> {
    await this.addToCartButton.click();
    this.page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Product added');
      await dialog.accept();
    });
  }
}