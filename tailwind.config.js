/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
    "./public/**/*.html"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        md: "2rem",
        lg: "2.5rem",
        xl: "3rem",
        "2xl": "4rem"
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px"
      }
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      colors: {
        // Tokens read from CSS variables so you can theme in global.css
        brand: {
          DEFAULT: "hsl(var(--brand))",
          fg: "hsl(var(--brand-foreground))",
        },
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",

        terracotta: {
          DEFAULT: "hsl(var(--terracotta))",
          fg: "hsl(var(--terracotta-foreground))",
        },

        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          fg: "hsl(var(--tertiary-foreground))",
        },

        quaternary: {
          DEFAULT: "hsl(var(--quaternary))",
          fg: "hsl(var(--quaternary-foreground))",
        },

        cream: "hsl(var(--section-cream))",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",

        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",

        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",

        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        xl: "0.9rem",
        "2xl": "1.25rem"
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,.06)",
        hover: "0 10px 28px rgba(0,0,0,.10)"
      },
      spacing: {
        "section-y": "clamp(3rem, 6vw, 6rem)"
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.foreground"),
            a: { color: theme("colors.terracotta.DEFAULT") }, // use terracotta for links
            h1: { color: theme("colors.brand.DEFAULT") },
            h2: { color: theme("colors.brand.DEFAULT") },
            h3: { color: theme("colors.brand.DEFAULT") },
          }
        }
      })
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    function ({ addUtilities }) {
      const utils = {
        ".container-narrow": {
          maxWidth: "880px",
          marginInline: "auto",
          paddingInline: "var(--container-x, 1rem)"
        },
        ".container-wide": {
          maxWidth: "1400px",
          marginInline: "auto",
          paddingInline: "var(--container-x, 1rem)"
        }
      };
      addUtilities(utils);
    }
  ]
};
