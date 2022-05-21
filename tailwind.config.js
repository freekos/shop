module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubikOne: ["RubikOne"],
        rubik: ["Rubik"]
      },
      animation: {
        animateHotDog: 'animateHotDog 3s ease-in-out infinite',
        animateBurger: 'animateBurger 3s ease-in-out infinite',
        animateDrumstick: 'animateDrumstick 4s ease-in-out infinite',
      },
      keyframes: {
        animateHotDog: {
          '0%, 100%': { transform: 'translateY(-8px)'},
          '50%': { transform: 'translateY(8px)' }
        },
        animateBurger: {
          '0%, 100%': { transform: 'translateY(-15px)'},
          '50%': { transform: 'translateY(15px)' }
        },
        animateDrumstick: {
          '0%, 100%': { transform: 'translateY(-20px)'},
          '50%': { transform: 'translateY(20px)' }
        },
      }
    },
  },
  plugins: [],
}
