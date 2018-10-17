export const required = value => (value ? undefined : 'Required');

export const nonEmpty = value => {
  return value.trim() !== '' ? undefined : 'field cannot be empty';
};

export const isTrimmed = value => {
  return value.trim() === value ? undefined : 'Cannont start or end with spaces';
}

export const length = length => value => {
  if (length.min && value.length < length.min) {
    return `Must be at least ${length.min} characters long`;
  }
  if (length.max && value.length > length.max) {
    return `Must be at most ${length.max} characters long`;
  }
};

export const matches = field => (value, allValues) => {
  return field in allValues && value.trim() === allValues[field].trim
    ? undefined
    : 'Does not match';
}
