const COLORS = ["black",
				"brown",
				"red",
				"orange",
				"yellow",
				"green",
				"blue",
				"violet",
				"grey",
				"white"
				];

function reducer (acc, cur, idx, src) {
	/**
	 * Reducer function to reduce Array of digits into an radix 10 based integer
	 * Usage:
	 * [4,3,1].reduce(reducer, 0). This will return: 431
	 * idx starts with 0 when initial value is used.
	 * (src.length - idx - 1) calculates power value for a digit base on it's position.
	 * For example: for digit 4 from [4,3,2] src.length is 3, idx is 0,
	 * therefore its power is 2 representing value of hundreds in the output.
	 **/

	return acc += cur * 10 ** (src.length - idx - 1);
}

export const value = (colorsList) => colorsList
										.map(it => COLORS.indexOf(it))
										.reduce(reducer, 0); // initialize with 0 for reducer to process first digit properly
