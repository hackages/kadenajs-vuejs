export type Links = {
  [key: string]: Array<{ name: string; url: string }>;
};

export const links: Links = {
  Build: [
    {
      name: "Pact resources",
      url: "https://docs.kadena.io/build/resources/pact-resources",
    },
    { name: "Useful tools", url: "https://docs.kadena.io" },
    { name: "Quickstart", url: "https://docs.kadena.io/basics/quickstart" },
    { name: "Pact developer", url: "https://docs.kadena.io/learn-pact/intro" },
    { name: "Chat on Discord", url: "https://discord.gg/jRn8GwcFCj" },
  ],
  Apply: [
    { name: "Grants", url: "https://kadena.io/grants/" },
    {
      name: "Ambassador",
      url: "https://docs.kadena.io/contribute/ambassadors/overview",
    },
    {
      name: "Careers",
      url: "https://boards.greenhouse.io/kadenallc",
    },
  ],
  Learn: [
    { name: "About", url: "https://kadena.io/about/" },
    { name: "Team", url: "https://kadena.io/about/" },
    {
      name: "What is KDA",
      url: "https://docs.kadena.io/kda/what-is-kda",
    },
    { name: "FAQ", url: "https://docs.kadena.io/faq/faq" },
    {
      name: "Whitepapers",
      url: "https://docs.kadena.io/whitepapers/overview",
    },
    { name: "Press releases", url: "https://kadena.io/press-releases/" },
  ],
  More: [
    { name: "DAO", url: "https://kadena-io.github.io/dao.init-frontend" },
    {
      name: "Chain Relay",
      url: "https://medium.com/kadena-io/chain-relay-bonding-launch-3ee23bc95d1d",
    },
    { name: "Kaddex", url: "https://kaddex.com/" },
    { name: "Marmalade", url: "https://marmalade.art/" },
    { name: "Swag", url: "http://swag.kadena.io" },
  ],
};
