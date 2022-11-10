export const socialSections = [
  "YouTube",
  "Twitter",
  "GitHub",
  "Discord",
  "Facebook",
  "LinkedIn",
  "MyAnimeList",
] as const;
export type SocialSection = typeof socialSections[number];

export interface SocialData {
  YouTube?: {
    data?: string;
  };
  Twitter?: {
    data?: string;
  };
  GitHub?: {
    data?: string;
  };
  Discord?: {
    data?: string;
  };
  Facebook?: {
    data?: string;
  };
  LinkedIn?: {
    data?: string;
  };
  MyAnimeList?: {
    animeCount?: number;
  };
}

export const components = new Map<SocialSection, string>([
  ["YouTube", "./_SocialSectionYouTube.svelte"],
  ["Twitter", "./_SocialSectionTwitter.svelte"],
  ["GitHub", "./_SocialSectionGitHub.svelte"],
  ["Discord", "./_SocialSectionDiscord.svelte"],
  ["Facebook", "./_SocialSectionFacebook.svelte"],
  ["LinkedIn", "./_SocialSectionLinkedIn.svelte"],
  ["MyAnimeList", "./_SocialSectionMyAnimeList.svelte"],
]);
