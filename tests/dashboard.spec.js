import { expect, test } from "@playwright/test";

test("Check Popular Pet Breeds section", async ({ page }) => {
  // Go to the dashboard page
  await page.goto("http://localhost:5174");

  // Wait for the breed images to load (based on the "bg-gray-300 img" selector)
  const breedImages = page.locator(".bg-gray-300 img");

  // Wait for the images to be loaded correctly
  await expect(breedImages).toHaveCount(7); // Adjust the count based on what you expect to display initially

  // Ensure the first breed image is visible
  await expect(breedImages.first()).toBeVisible();
});

test("Dashboard - Check Pets Available For Adoption section", async ({
  page,
}) => {
  await page.goto("http://localhost:5174");

  // Ensure Pets Available for Adoption section is visible
  const petsTitle = page.locator("text=Pets Available For Adoption");
  await expect(petsTitle).toBeVisible();

  // Ensure pets are displayed in a grid
  const petCards = page.locator(".grid .rounded-lg");
  await expect(petCards).toHaveCount(4); // Verify at least 4 pets are shown

  // Check for click interaction to navigate to the pet's profile
  const firstPetCard = petCards.first();
  await expect(firstPetCard).toBeVisible();

  // Simulate click on first pet card and ensure navigation happens (based on URL change)
  const petName = firstPetCard.locator("h4");
  await petName.click();

  // Assuming URL changes to profile page for the clicked pet
  await expect(page).toHaveURL(/profile/);
});

test("Dashboard - Check responsiveness of pet breed display", async ({
  page,
}) => {
  // Resize viewport to mobile size
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("http://localhost:5174");

  // Check if only two pet breeds are displayed
  const breedImagesMobile = page.locator(".bg-gray-300 img");
  await expect(breedImagesMobile).toHaveCount(2); // Mobile should display only 2 breeds

  // Resize viewport to tablet size
  await page.setViewportSize({ width: 768, height: 800 });
  await page.goto("http://localhost:5174");

  // Check if four pet breeds are displayed
  const breedImagesTablet = page.locator(".bg-gray-300 img");
  await expect(breedImagesTablet).toHaveCount(4); // Tablet should display 4 breeds

  // Resize viewport to desktop size
  await page.setViewportSize({ width: 1024, height: 800 });
  await page.goto("http://localhost:5174");

  // Check if all pet breeds are displayed
  const breedImagesDesktop = page.locator(".bg-gray-300 img");
  await expect(breedImagesDesktop).toHaveCount(7); // Desktop should display all 7 breeds
});

test("Dashboard - Check if data is loaded correctly", async ({ page }) => {
  // Go to the dashboard
  await page.goto("http://localhost:5174");

  // Check if pets data is being rendered correctly
  const petNames = page.locator(".text-lg");
  await expect(petNames).toHaveCount(4); // Ensure at least 4 pets are being rendered

  // Check if error handling is triggered for missing data (if any)
  const errorMessage = page.locator("text=Error loading pets");
  await expect(errorMessage).toBeHidden();
});
