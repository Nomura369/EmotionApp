import { DefaultTheme } from '@react-navigation/native';

const TheTheme = {
   ...DefaultTheme,
   colors: {
     ...DefaultTheme.colors,
     bg_normal: '#F5F5F5',
     bg_happy_dark: '#F7E098',
     bg_happy_light: '#FFF7D3',
     character: '#515151',
   },
 };

 export default TheTheme;