import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr min-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
      },
      borderWidth: {
        6: '6px',
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2xp)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
      animation: {
        slideDownAndFade:
          'slideDownAndFade 300ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 300ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
}
export default config
