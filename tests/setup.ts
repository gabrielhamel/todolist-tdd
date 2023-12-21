import { loadEnvConfig } from "@next/env";
import { cleanup } from "@testing-library/react";
import { afterAll, afterEach, beforeAll } from "vitest";
import "@testing-library/jest-dom/vitest";
import { msw } from "./msw";

loadEnvConfig(process.cwd());

afterEach(() => {
  msw.resetHandlers();
  cleanup();
});

beforeAll(() => {
  msw.listen();
});

afterAll(() => msw.close());
