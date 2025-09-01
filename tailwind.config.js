module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Forest Green
        primary: {
          DEFAULT: "#2C5F41", // forest-green
          50: "#F0F7F3", // forest-green-50
          100: "#D4E8DC", // forest-green-100
          200: "#A9D1B8", // forest-green-200
          300: "#7EBA95", // forest-green-300
          400: "#53A371", // forest-green-400
          500: "#2C5F41", // forest-green-500
          600: "#234F35", // forest-green-600
          700: "#1A3F29", // forest-green-700
          800: "#112F1D", // forest-green-800
          900: "#081F11", // forest-green-900
        },
        // Secondary Colors - Patagonian Blue
        secondary: {
          DEFAULT: "#4A90A4", // patagonian-blue
          50: "#F2F8FA", // patagonian-blue-50
          100: "#D9EBF0", // patagonian-blue-100
          200: "#B3D7E1", // patagonian-blue-200
          300: "#8DC3D2", // patagonian-blue-300
          400: "#67AFC3", // patagonian-blue-400
          500: "#4A90A4", // patagonian-blue-500
          600: "#3B7383", // patagonian-blue-600
          700: "#2C5662", // patagonian-blue-700
          800: "#1D3941", // patagonian-blue-800
          900: "#0E1C21", // patagonian-blue-900
        },
        // Accent Colors - Sunset Orange
        accent: {
          DEFAULT: "#E67E22", // sunset-orange
          50: "#FDF4F0", // sunset-orange-50
          100: "#F9E2D4", // sunset-orange-100
          200: "#F3C5A9", // sunset-orange-200
          300: "#EDA87E", // sunset-orange-300
          400: "#E78B53", // sunset-orange-400
          500: "#E67E22", // sunset-orange-500
          600: "#B8651B", // sunset-orange-600
          700: "#8A4C14", // sunset-orange-700
          800: "#5C330D", // sunset-orange-800
          900: "#2E1A07", // sunset-orange-900
        },
        // Background Colors
        background: "#FAFAFA", // neutral-50
        surface: "#FFFFFF", // white
        // Text Colors
        text: {
          primary: "#2C3E50", // slate-800
          secondary: "#7F8C8D", // slate-500
        },
        // Status Colors
        success: {
          DEFAULT: "#27AE60", // emerald-500
          50: "#F0FDF4", // emerald-50
          100: "#DCFCE7", // emerald-100
          500: "#27AE60", // emerald-500
        },
        warning: {
          DEFAULT: "#F39C12", // amber-500
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F39C12", // amber-500
        },
        error: {
          DEFAULT: "#E74C3C", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#E74C3C", // red-500
        },
        // Border Colors
        border: "#E0E0E0", // gray-300
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      fontWeight: {
        'heading-semibold': '600',
        'heading-bold': '700',
        'body-normal': '400',
        'body-semibold': '600',
        'cta-bold': '700',
        'accent-normal': '400',
        'accent-semibold': '600',
      },
      boxShadow: {
        'cta': '0 4px 12px rgba(230, 126, 34, 0.3)',
        'cta-hover': '0 6px 16px rgba(230, 126, 34, 0.4)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'testimonial': '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      animation: {
        'smooth-scroll': 'smooth-scroll 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}