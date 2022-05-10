import path from "path";
import { MenuItemType, SocialsEnum } from "./components/ui/types";
import GitHubLogo from "./assets/socials/gh-logo";
import TwitterLogo from "./assets/socials/tw-logo";
import DiscordLogo from "./assets/socials/dc-logo";

export const SOCIALS_LINKS = {
  [SocialsEnum.GITHUB]: "https://github.com/NomicFoundation/hardhat",
  [SocialsEnum.TWITTER]: "https://twitter.com/HardhatHQ",
  [SocialsEnum.DISCORD]: "https://discord.com/invite/TETZs2KK4k",
};

export const BANNER_LINK =
  "https://www.notion.so/Nomic-Foundation-jobs-991b37c547554f75b89a95f437fd5056";

export const bannerContent = {
  text: "Join the Hardhat team! Nomic Labs is hiring",
  href: BANNER_LINK,
};

export const DOCS_PATH = path.join(process.cwd(), "src/content/");
export const PLUGINS_PATH = path.join(process.cwd(), "src/content/plugins");
export const TEMP_PATH = path.join(process.cwd(), "temp/");
// TODO: change this to "https://github.com/NomicFoundation/hardhat/edit/master/docs/src/content/" before publishing to production
export const REPO_URL =
  "https://github.com/NomicFoundation/hardhat/edit/master/docs/";

export const menuItemsList: MenuItemType[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Tools",
    href: "/#tools",
    subItems: [
      {
        prefix: "Hardhat",
        label: "Runner",
        href: "/tools/runner",
      },
      {
        prefix: "Hardhat",
        label: "Ignition",
        href: "/tools/ignition",
      },
      {
        prefix: "Hardhat",
        label: "Network",
        href: "/tools/network",
      },
      {
        prefix: "Hardhat",
        label: "Solidity",
        href: "/tools/solidity",
      },
    ],
  },
  {
    label: "Plugins",
    href: "/plugins",
  },
  {
    label: "Documentation",
    href: "/getting-started",
  },
  {
    label: "Tutorial",
    href: "/tutorial",
  },
];

export enum Tools {
  RUNNER = "RUNNER",
  IGNITION = "IGNITION",
  NETWORK = "NETWORK",
  VS_CODE = "VS_CODE",
}

export const socialsItems = [
  {
    name: SocialsEnum.GITHUB,
    href: SOCIALS_LINKS[SocialsEnum.GITHUB],
    Icon: GitHubLogo,
  },
  {
    name: SocialsEnum.TWITTER,
    href: SOCIALS_LINKS[SocialsEnum.TWITTER],
    Icon: TwitterLogo,
  },
  {
    name: SocialsEnum.DISCORD,
    href: SOCIALS_LINKS[SocialsEnum.DISCORD],
    Icon: DiscordLogo,
  },
];

export enum DirInfoConfigKeys {
  SECTION_TYPE = "section-type",
  SECTION_TITLE = "section-title",
  ORDER = "order",
}

export enum LayoutsConfigKeys {
  TITLE = "title",
  FOLDERS = "folders",
}
