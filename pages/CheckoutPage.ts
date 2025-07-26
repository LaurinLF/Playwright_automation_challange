// src/pages/CheckoutPage.ts
import { Locator, Page, expect } from '@playwright/test';

export class CheckoutPage {
  private readonly page: Page;

  private readonly nameInput: Locator;
  private readonly countryInput: Locator;
  private readonly cityInput: Locator;
  private readonly cardInput: Locator;
  private readonly monthInput: Locator;
  private readonly yearInput: Locator;
  readonly placeOrderBtn: Locator;
  readonly purchaseBtn: Locator;
  readonly successAlert: Locator;

  constructor(page: Page) {
    this.page = page;

    //Locators
    this.nameInput = this.page.locator('#name');
    this.countryInput = this.page.locator('#country');
    this.cityInput = this.page.locator('#city');
    this.cardInput = this.page.locator('#card');
    this.monthInput = this.page.locator('#month');
    this.yearInput = this.page.locator('#year');
    this.placeOrderBtn = this.page.locator('button:has-text("Place Order")');
    this.purchaseBtn = this.page.locator('button:has-text("Purchase")');
    this.successAlert = this.page.locator('.sweet-alert');
  }

  // Methods
  async startOrder() {
    await this.placeOrderBtn.click();
  }

  async fillName(name: string) {
    await this.nameInput.fill(name);
  }

  async fillCountry(country: string) {
    await this.countryInput.fill(country);
  }

  async fillCity(city: string) {
    await this.cityInput.fill(city);
  }

  async fillCard(card: string) {
    await this.cardInput.fill(card);
  }

  async fillMonth(month: string) {
    await this.monthInput.fill(month);
  }   

  async fillYear(year: string) {
    await this.yearInput.fill(year);
  }

  async submitOrder() {
    await this.purchaseBtn.click();
  }

  async verifySuccess() {
    await expect(this.successAlert).toContainText('Thank you for your purchase!');
  }

  async completeCheckout(
    name: string,
    country: string,
    city: string,
    card: string,
    month: string,
    year: string
  ) {
    await this.startOrder();
    await this.fillName(name);
    await this.fillCountry(country);
    await this.cityInput.fill(city);
    await this.cardInput.fill(card);
    await this.monthInput.fill(month);
    await this.yearInput.fill(year);
    await this.submitOrder();
    await this.verifySuccess();
  }
}