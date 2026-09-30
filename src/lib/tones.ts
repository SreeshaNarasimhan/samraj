export type Tone = "coral" | "sun" | "sky" | "mint" | "blossom" | "lilac" | "navy";

/** Soft pastel surface + matching accent text for each brand tone. */
export const toneSurface: Record<Tone, string> = {
  coral: "bg-coral-soft",
  sun: "bg-sun-soft",
  sky: "bg-sky-soft",
  mint: "bg-mint-soft",
  blossom: "bg-blossom-soft",
  lilac: "bg-lilac-soft",
  navy: "bg-secondary",
};

export const toneAccent: Record<Tone, string> = {
  coral: "text-coral",
  sun: "text-sun",
  sky: "text-sky",
  mint: "text-mint",
  blossom: "text-blossom",
  lilac: "text-primary",
  navy: "text-navy",
};

export const toneSolid: Record<Tone, string> = {
  coral: "bg-coral",
  sun: "bg-sun",
  sky: "bg-sky",
  mint: "bg-mint",
  blossom: "bg-blossom",
  lilac: "bg-primary",
  navy: "bg-navy",
};
