import { expect, test } from "@playwright/test";

test("Admin Dashboard UI test", async ({ page }) => {
  // Navigate to the admin dashboard page
  await page.goto("http://localhost:5174/dashboard");
});
