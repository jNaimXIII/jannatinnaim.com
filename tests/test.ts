import { expect, test } from "@playwright/test";

test("home page has greeting", async ({ page }) => {
  await page.goto("/");
  expect(await page.textContent("[data-role='greeting']")).toBe("Heyo! How's it going?");
});
