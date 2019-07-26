export const validate = (number) => {
  let array = [...number.toString(10)];
  let armstrong = 0;

  for (let digit of array) {
    armstrong += digit ** array.length;
  }

  return number === armstrong;

/**
 * Esoteric one-liner that does the same:
 return number === [...number.toString(10)].reduce((a,c,_,s) => a+=c**s.length, 0);
  **/
};
