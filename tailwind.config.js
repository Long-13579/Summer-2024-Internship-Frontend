module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './app/**/*.{js,jsx}', './src/**/*.{js,jsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        main: 'var(--main-color)',
        'white-custom-700': 'var(--white-color-700)',
        'yellow-custom-700': 'var(--yellow-color-700)',
        'yellow-custom-700/50': 'var(--yellow-color-700-50)',
        'black-custom-700': 'var(--black-color-700)',
        'blue-custom-100': 'var(--blue-color-100)',
        'blue-custom-700': 'var(--blue-color-700)',
        'purple-custom-700': 'var(--purple-color-700)',
        'gray-custom-100': 'var(--gray-color-100)',
        'gray-custom-400': 'var(--gray-color-400)',
        'gray-custom-500': 'var(--gray-color-500)',
        'gray-custom-700': 'var(--gray-color-700)',
        'gray-custom-800': 'var(--gray-color-800)',
        'gray-custom-900': 'var(--gray-color-900)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      maxWidth: {
        container: 'var(--max-width)'
      },
      padding: {
        container: '20px'
      },
      boxShadow: {
        'lg-yellow-700': 'var(--shadow-lg-yellow-700)'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/aspect-ratio'),
    function ({ addUtilities }) {
      const values = [0, 1, 2, 3, 4, 5, 6, 7, 8]

      const underlineOffset = values.reduce((acc, value) => {
        return {
          ...acc,
          [`.underline-offset-${value}`]: {
            textUnderlineOffset: `${value}px`
          }
        }
      }, {})

      const filterLightGray = {
        '.filter-light-gray-custom': {
          filter:
            'brightness(0) saturate(100%) invert(88%) sepia(7%) saturate(57%) hue-rotate(131deg) brightness(100%) contrast(89%)'
        }
      }

      const filterDarkGray = {
        '.filter-dark-gray-custom': {
          filter:
            'brightness(0) saturate(100%) invert(32%) sepia(9%) saturate(1380%) hue-rotate(176deg) brightness(94%) contrast(88%)'
        }
      }

      const filterYellow = {
        '.filter-yellow-custom': {
          filter:
            'brightness(0) saturate(100%) invert(82%) sepia(85%) saturate(423%) hue-rotate(357deg) brightness(92%) contrast(107%)'
        }
      }

      const filterBlue = {
        '.filter-blue-custom': {
          filter:
            'brightness(0) saturate(100%) invert(33%) sepia(70%) saturate(1284%) hue-rotate(201deg) brightness(87%) contrast(89%)'
        }
      }

      addUtilities(underlineOffset, ['responsive', 'hover'])
      addUtilities(filterLightGray, ['responsive', 'hover'])
      addUtilities(filterDarkGray, ['responsive', 'hover'])
      addUtilities(filterYellow, ['responsive', 'hover'])
      addUtilities(filterBlue, ['responsive', 'hover'])
    }
  ]
}
