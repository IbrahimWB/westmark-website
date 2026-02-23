export const themeTokens = {
  fonts: {
    heading:
      'Clash Grotesk, "Helvetica Neue", Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
    body: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  },
  colors: {
    bg: "#000000",
    text: "rgba(224,224,224,0.95)",
    muted: "rgba(255,255,255,0.62)",
    accent: "#00FFC8",
    warn: "#FFB800",
    danger: "#FF5252",
    panel: "rgba(10,14,16,0.62)",
    panelStrong: "rgba(10,14,16,0.72)",
    border: "rgba(0,255,200,0.18)",
    borderStrong: "rgba(0,255,200,0.22)",
  },
  layout: {
    maxWidth: 1120,
    pxDesktop: 24,
    pxTablet: 20,
    pxMobile: 16,
    radius: 16,
  },
} as const;

export type ThemeTokens = typeof themeTokens;
