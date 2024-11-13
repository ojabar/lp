// plugins/hotjar.client.ts
import { defineNuxtPlugin } from "#app";
import hotjar from "@hotjar/browser";

export default defineNuxtPlugin(() => {
  const siteId = 5206777;
  const hotjarVersion = 6;
  hotjar.init(siteId, hotjarVersion);
});
