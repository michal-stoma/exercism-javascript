export const convert = (number) => {
	const FACTORS = new Map([[3, 'Pling'], [5, 'Plang'], [7, 'Plong']])
	var sound = String()

	FACTORS.forEach((value, key) => number % key === 0 ? sound +=value : null)

	return sound || String(number)
};
