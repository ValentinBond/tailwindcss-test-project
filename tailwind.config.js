module.exports = {
    important: true,
    theme: {
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
        display: ['Montserrat', 'sans-serif']
      },
      extend: {
        margin: {
          '96': '24rem',
          '128': '32rem',
        },
        backgroundColor: {
            gray: {
                default: '#E5E5E5',
                '100': '#F5F5F5',
                '200': '#EEEEEE',
                '300': '#EEEEEE',
                '400': '#EAEAEA'
            },
            black: {
              default: '#2E2E2E'
            },
            white: {
              default: '#ffffff',
              '200': '#FBFBFB',
              '300': '#F7F7F7'
            }
        },
        minWidth: {
          '0': '0',
          '1/4': '25%',
          '1/2': '50%',
          '3/4': '75%',
          'full': '100%',
          '78': '19.5rem'
        },
        spacing: {
          '1/2': '0.125rem',  
          '7': '1.75rem',
          '11': '2.75rem',
          '22': '5.75rem',
          '24': '6rem',
          '30': '7.5rem',
          '45': '10rem',
          '78': '19.5rem',
          '96': '24rem',
          '100': '25rem',
          'mcontent': 'max-content'
        },
        top: {
          '0': 0,
          auto: 'auto',
          '1/2': '50%',
          '2': '1rem',
        }
      }
    }
  }