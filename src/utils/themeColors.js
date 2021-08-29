// removes space from styled.css``
const regex = /(\r\n)+|\r+|\n+|\s/g;
const changeColors = ({ styles }) => {
  const mike = styles.replace(regex, '').split(';').reduce((all, item, index) => {
    if (item) {
      const jsonItem = item.replace(/:|-|[^:|]*$/g, '');
      all[jsonItem] = `var(--${jsonItem})`;
    }
    return all;
  }, {});

  return mike;
};

export default changeColors;
