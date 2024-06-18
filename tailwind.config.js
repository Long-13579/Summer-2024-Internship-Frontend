const filters = [
  {
    name: '.filter-light-gray-custom',
    filterValue: {
      brightness: 0,
      saturate: '100%',
      invert: '88%',
      sepia: '7%',
      hueRotate: '131deg',
      brightnessAfter: '100%',
      contrast: '89%'
    }
  },
  {
    name: '.filter-dark-gray-custom',
    filterValue: {
      brightness: 0,
      saturate: '100%',
      invert: '32%',
      sepia: '9%',
      saturateAfter: '1380%',
      hueRotate: '176deg',
      brightnessAfter: '94%',
      contrast: '88%'
    }
  },
  {
    name: '.filter-yellow-custom',
    filterValue: {
      brightness: 0,
      saturate: '100%',
      invert: '82%',
      sepia: '85%',
      saturateAfter: '423%',
      hueRotate: '357deg',
      brightnessAfter: '92%',
      contrast: '107%'
    }
  },
  {
    name: '.filter-blue-custom',
    filterValue: {
      brightness: 0,
      saturate: '100%',
      invert: '33%',
      sepia: '70%',
      saturateAfter: '1284%',
      hueRotate: '201deg',
      brightnessAfter: '87%',
      contrast: '89%'
    }
  }
]

const getFilterString = (filterValue) => {
  return Object.entries(filterValue)
    .map(([key, value]) => {
      const keyWithoutAfter = key.replace(/After$/, '')
      const cssProperty = keyWithoutAfter.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
      return `${cssProperty}(${value})`
    })
    .join(' ')
}

const convertFiltersToUtilities = (filters) => {
  const utilities = {}

  filters.forEach((filter) => {
    const filterString = getFilterString(filter.filterValue)
    utilities[filter.name] = {
      filter: filterString
    }
  })
  return utilities
}

const getUnderlineOffsetUtilities = (maxValue) => {
  const values = Array.from({ length: maxValue }, (_, i) => i)

  const underlineOffset = values.reduce((acc, value) => {
    return {
      ...acc,
      [`.underline-offset-${value}`]: {
        textUnderlineOffset: `${value}px`
      }
    }
  }, {})

  return underlineOffset
}

const MAX_UNDERLINE_OFFSET = 10
const underlineOffsetUtilities = getUnderlineOffsetUtilities(MAX_UNDERLINE_OFFSET)

const filterUtilities = convertFiltersToUtilities(filters)

const expandUtilities = {
  '.expand-enter': {
    maxHeight: '0',
    overflow: 'hidden',
    opacity: '0'
  },
  '.expand-enter-active': {
    maxHeight: '100px',
    opacity: '1',
    transition: 'all 0.3s ease-in-out'
  },
  '.expand-exit': {
    maxHeight: '100px',
    overflow: 'hidden',
    opacity: '1'
  },
  '.expand-exit-active': {
    maxHeight: '0',
    opacity: '0',
    transition: 'all 0.3s ease-in-out'
  }
}

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
      },
      width: {
        'button-expanded': 'calc(100% + 2px)'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/aspect-ratio'),
    function ({ addUtilities }) {
      addUtilities(underlineOffsetUtilities, ['responsive', 'hover'])
      addUtilities(filterUtilities, ['responsive', 'hover'])
      addUtilities(expandUtilities, ['responsive', 'hover'])
    }
  ]
}
