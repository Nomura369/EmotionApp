import { DefaultTheme } from '@react-navigation/native';

const TheTheme = {
   ...DefaultTheme,
   colors: {
     ...DefaultTheme.colors,
     bg_normal: '#F5F5F5',
     bg_happy_dark: '#F7E098',
     bg_happy_light: '#FFF7D3',
     bg_angry_dark: "#D9A7A4",
     bg_angry_light: "#F2DEDD",
     bg_sad_dark: "#A9CAD7",
     bg_sad_light: "#D0E1E8",
     bg_fear_dark: "#C2B4D8",
     bg_fear_light: "#DCD1ED",
     character: '#515151',
     character_sec: "#898989"
   },
 };

 export default TheTheme;