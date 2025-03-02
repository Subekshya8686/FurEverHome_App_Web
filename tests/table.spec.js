// import test, { expect } from "playwright/test";

// const mockData = [
//   { userId: 1, id: 1, title: "test todo", completed: false },
//   { userId: 1, id: 2, title: "test todo 2", completed: true },
// ];

// test("Table renders correctly", async ({ page }) => {
//   await page.route("https://jsonplaceholder.typicode.com/todos", (route) => {
//     route.fulfill({
//       status: 200,
//       contentType: "application/json",
//       body: JSON.stringify(mockData),
//     });
//   });

//   await page.goto("http://localhost:5174");

//   for (const todo of mockData) {
//     await expect(page.locator('table')).toContainText(todo.title);
//   }
// });
