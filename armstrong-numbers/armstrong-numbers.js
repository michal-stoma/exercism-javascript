export const validate = (number) => {
  let numberAsString = number.toString(10);
  let power = numberAsString.length;
  let armstrong = 0;

  for (let i=0; i < power; i++) {
  	let digit = parseInt(numberAsString.charAt(i));
  	armstrong += digit ** power;
  }

  return number === armstrong;

/**
 * Esoteric one-liner that does the same:
  return number === number.toString(10).split('').map(it => parseInt(it)).reduce((a,c,i,s) => a += c ** s.length, 0);
  **/
};
