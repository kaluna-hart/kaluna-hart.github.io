export default {
  colors: {
    text: '#333',
    background: '#FFFFFF',
    imBackground: '#F0FFF0',
    gray: '#6c6c6c',
    accent: '#3f3f3f',
  },
  fonts: {
    body: '"ヒラギノ 角ゴ", "メイリオ", sans-serif',
    heading: 'Cardo',
    cursive: 'Dancing Script',
    monospace: 'Menlo, monospace',
    footer: 'Roboto',
  },
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  text: {
    default: {
      color: 'text',
    },
    heading: {
      fontFamily: 'heading',
    },
    codeName: {
      fontFamily: 'cursive',
      fontSize: [5],
    },
    copylight: {
      fontFamily: 'footer',
      fontSize: '0.5em',
    },
  },
  buttons: {
    primary: {
      bg: 'background',
      color: 'gray',
      '&:hover': {
        bg: 'imBackground',
      },
    },
    icon: {
      color: 'gray',
      borderRadius: '50%',
      ':hover': {
        bg: 'imBackground',
      },
    },
    floating: {
      textAlign: 'center',
      lineHeight: 'inherit',
      transition: '0.3s',
      boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
      border: 'solid 2px',
      borderRadius: '100%',
      bg: 'imBackground',
      ':hover': {
        boxShadow:
          '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  breakoints: ['40em', '52em', '64em'], // 640px, 832px, 1024px
  layout: {
    skillBox: {
      boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
      bg: 'imBackground',
      mx: '0.3em',
      borderRadius: '0.5em',
      overflowX: 'scroll',
      zIndex: 3,
    },

    pageHeader: {
      textAlign: 'center',
      fontFamily: 'cursive',
      whiteSpace: 'nowrap',
      fontSize: [4, 5, 5, 6],
    },
  },
  profile: {
    section: {
      display: 'inline-block',
      textAlign: 'left',
      position: 'relative',
      border: 'solid 1px',
      borderRadius: '15px',
      mx: 'auto',
      maxWidth: '100%',
      minWidth: '100%',
      fontSize: ['1em', '1.5em'],
      my: '0.8em',
      boxShadow: '0 5px 20px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.4)',
      '& h2': {
        position: 'absolute',
        top: '-0.7em',
        left: '0.7em',
        bg: 'white',
        borderRadius: '5px',
        fontSize: ['1em', '1.5em'],
        boxShadow: '0 5px 20px 0 rgba(0, 0, 0, 0.1) inset',
      },
    },
    container: {
      textAlign: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: ['95%', '40em', null, '70em'],
      minWidth: ['90%', '40em', null, '60em'],
      m: 'auto',
    },
  },
  blog: {},
};
// background: '#E1EBF4',
