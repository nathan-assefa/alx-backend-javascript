const cleanSet = (set, startString) => {
  const strings = [];

  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((item) => {
    if (item && item.startsWith(startString)) {
      strings.push(item.slice(startString.length));
    }
  });
  return strings.join('-');
};

export default cleanSet;
