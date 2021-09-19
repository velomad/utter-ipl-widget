 export const getFirstCharacter = (string) => {
  let firstCharcters = "";
  const arryString = string.split(" ");
  for (var i in arryString) {
    firstCharcters += arryString[i].charAt(0);
  }
  return firstCharcters.toUpperCase();
};

console.log(getFirstCharacter("chennai suo kinhgs")); 