const GIGA_MILLISECOND = 10**12

export const gigasecond = (date) => {
  return new Date(date.getTime() + GIGA_MILLISECOND);
};
