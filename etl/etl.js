//
// This is only a SKELETON file for the 'etl' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (input) => {
  var result = {};

  for (let [key, value] of Object.entries(input)) {
  	value.forEach(x => result[x.toLowerCase()] = parseInt(key));
  }
  
  return result;

};
