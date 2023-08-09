import { rest } from "msw";
import { setupServer } from "msw/node";
import { describe, it, expect, beforeAll, afterAll, afterEach } from "vitest";
import { mount } from "@vue/test-utils";

import App from "../src/App.vue";

const apiHost =
  "https://api.testnet.chainweb.com/chainweb/0.0/testnet04/chain/0/pact/api/v1/local";

const server = setupServer(
  rest.post(apiHost, (_, res, ctx) => {
    return res(
      ctx.json({
        result: {
          status: "success",
          data: [
            "coin.COIN",
            "coin.GAS",
            "coin.GAS_ACCOUNT",
            "coin.GAS_TABLE",
            "free.gas-station",
          ],
        },
      })
    );
  })
);

describe("App", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("renders properly", () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain("Kadena Blockchain: Modules' explorer");
  });

  it("renders modules in <li> tags", async () => {
    const wrapper = mount(App);

    const items = wrapper.findAll("role[listitem]");
    expect(items.length).toEqual(5);
  });

  it("module's names on Pact-lang are unique per namespace", async () => {
    const wrapper = mount(App);

    const searchInput = wrapper.getComponent('input[role="searchbox"]');
    searchInput.setValue("free.gas-station");

    const items = wrapper.findAll('li[role="listitem"]');
    expect(items.length).toEqual(5);
  });
});
