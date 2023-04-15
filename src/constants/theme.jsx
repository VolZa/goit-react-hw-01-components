export const theme = {
  colors: {
    text: '#212121',
    black: '#000',
    white: '#fff',
    gray: 'tomato',
    lightGray: '#f3f4f3',
    accent: 'tomato',
    green: 'green',
    red: 'orangeRed',
    lightBlue: 'lightblue',
  },
}
export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}