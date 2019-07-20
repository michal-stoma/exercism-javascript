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

// reducer reduces Array of digits into an integer based on radix 10
const reducer = (acc, cur, idx, src) => acc += cur * 10 ** (src.length - idx - 1);

export const value = (colorsList) => colorsList
										.map(it => COLORS.indexOf(it))
										.reduce(reducer, 0); // initialize with 0 for reducer to process first digit properly
