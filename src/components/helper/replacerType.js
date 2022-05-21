export const replacerType = (text) => {
  let newText = text.replace(/[a-z]+/i, (match) => {return match === 'Login' ? 'text' : match.toLowerCase()});
  return newText.match(/[a-z]+/i);
}