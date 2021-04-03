/* eslint-disable camelcase */
interface IThemeColors {
  light: {
    header: {
      title: string;
      nav: {
        item: {
          color: string;
        };
      };
    };
    home: {
      input_text: {
        button: {
          color: string;
          background_color: string;
          background_color_hover: string;
        };
      };
      words: {
        background_color: string;
        color: string;
        button_exclude: {
          background_color_hover: string;
        };
      };
    };
  };
}

const themeColors = {
  light: {
    header: {
      title: '#555756',
      nav: {
        item: {
          color: '#555756',
        },
      },
    },
    home: {
      input_text: {
        button: {
          color: '#fff',
          background_color: '#5F00AD',
          background_color_hover: '#43007A',
        },
      },
      words: {
        background_color: '#5F00AD',
        color: '#fff',
        button_exclude: {
          background_color_hover: '#43007A',
        },
      },
    },
  },
} as IThemeColors;

// 8900FA, 8038BB, 5F00AD, AB4BFA, 43007A

export default themeColors;
