const config = {
  plugins: [
    "@tailwindcss/postcss",
    // require("tailwindcss-animate"),
    // require("@tailwindcss/typography"),
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screen: {
        "2xl": "1400px",
      },
    },
    extends: {
      maxWidth: {
        "8xl": "1408px",
      },
      colors: {
        border: "hslv(var(--border))",
        input: "hslv(var(--input))",
        ring: "hslv(var(--ring))",
        background: "hslv(var(--background))",
        foreground: "hslv(var(--background))",
      },
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    borderRadius: {
      lg: "var(--radius))",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: 0 },
        to: { height: "var(--radix-accordion-content-height" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height" },
        to: { height: 0 },
      },
    },
    animation: {
      "accordion-up": "accordion-up 0.2s ease-out",
      "accordion-down": "accordion-down 0.2s ease-out",
    },
  },
};

export default config;
