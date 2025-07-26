import { test } from '@playwright/test';

import { HomePage } from '../pages/HomePage';

// Test data defined at suite level

const productName = 'Samsung galaxy s6';
const checkoutData = {
  name: 'Jane Doe',
  country: 'Springfield',
  city: 'NEvergreen Terrace',
  card: '4111111111111111',
  month: '12',
  year: '2025'
};

test.describe('DemoBlaze Tests with POM', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  });

  test('User Registration', async () => {
    const signupPage = await homePage.openSignupModal();
    await signupPage.register(`testuser_${Date.now()}`, 'testpass');
  });

  test('Add Product to Cart', async () => {
    const productPage = await homePage.openProduct('Samsung galaxy s6');
    await productPage.addToCart();
  });

  test('Complete Checkout', async ({ page }) => {
    const productPage = await homePage.openProduct(productName);
    await productPage.addToCart();
    const checkoutPage = await homePage.goToCart();
    await checkoutPage.completeCheckout(
      checkoutData.name,
      checkoutData.country,
      checkoutData.city,
      checkoutData.card,
      checkoutData.month,
      checkoutData.year
    );
  });
});