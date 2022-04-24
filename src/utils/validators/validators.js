export const required = (value) => {
  if (value) return undefined;
  return "is req";
};

export const maxLenghtTc = (maxLenght) => (value) => {
  if (value.length > maxLenght) return `Max len is ${maxLenght}`;
  return undefined;
};
