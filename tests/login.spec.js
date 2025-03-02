// import { expect, test } from "@playwright/test";

// test.describe("Login Modal", () => {
//   // Navigate to your app
//   test.beforeEach(async ({ page }) => {
//     await page.goto("http://localhost:5174"); // Adjust URL as needed
//   });

//   test("should open and close the login modal", async ({ page }) => {
//     // Open the modal
//     await page.click("text=Login"); // Adjust this selector to trigger the modal opening
//     await expect(page.locator("div.fixed")).toBeVisible(); // Check if modal is visible

//     // Close the modal
//     await page.click('button:text("×")'); // Adjust to close button selector
//     await expect(page.locator("div.fixed")).not.toBeVisible(); // Check if modal is hidden
//   });

//   test("should show error when invalid email or password is entered", async ({
//     page,
//   }) => {
//     // Open the modal
//     await page.click("text=Login");

//     // Enter invalid credentials
//     await page.fill('input[name="email"]', "invalid-email");
//     await page.fill('input[name="password"]', "short"); // Assuming 8+ chars validation

//     // Submit the form
//     await page.click('button[type="submit"]');

//     // Assert error message appears
//     await expect(page.locator("div.text-red-500")).toBeVisible();
//     await expect(page.locator("div.text-red-500")).toContainText(
//       "Invalid email or password."
//     );
//   });

//   test("should successfully log in with valid credentials", async ({
//     page,
//   }) => {
//     // Open the modal
//     await page.click("text=Login");

//     // Enter valid credentials (mock or real login credentials)
//     await page.fill('input[name="email"]', "testuser@example.com");
//     await page.fill('input[name="password"]', "validpassword123");

//     // Submit the form
//     await page.click('button[type="submit"]');

//     // Wait for the redirect or modal close
//     await page.waitForTimeout(2000); // Wait a bit for login to process

//     // Check if user is redirected or modal closed (check URL change or any state change)
//     await expect(page).toHaveURL("http://localhost:5174/dashboard"); // Adjust for your app
//   });

//   test("should show forgot password modal on click", async ({ page }) => {
//     // Open the login modal
//     await page.click("text=Login");

//     // Click on the forgot password link
//     await page.click("text=Forgot Password?");

//     // Assert that forgot password modal is visible
//     await expect(page.locator("div.forgot-password-modal")).toBeVisible(); // Adjust to match the modal
//   });

//   test("should redirect to sign-up page when clicked", async ({ page }) => {
//     // Open the login modal
//     await page.click("text=Login");

//     // Click on the Sign-Up link
//     await page.click("text=Sign up");

//     // Assert that user is redirected to the registration page
//     await expect(page).toHaveURL("http://localhost:5174/register"); // Adjust for your app
//   });
// });
