import c from './helpers/data/color';

const colors = c.getColors();

const forEachFunc = () => {
  for (let i = 0; i < colors.length; i += 1) {
    console.log('for', colors[i].name);
  }
  colors.forEach((color) => console.log('forEach', color.name));
};

const filterFunc = () => {
  // find within array and return new array
  const newColors = [];
  for (let i = 0; i < colors.length; i += 1) {
    if (colors[i].hexValue.startsWith('F')) {
      // (colors[i].hexValue[0] === 'F')
      newColors.push(colors[i]);
    }
  }
  console.log('for', newColors);

  const filterColors = colors.filter((x) => x.hexValue.startsWith('F'));
  console.log('filter', filterColors);
};

const findFunc = () => {
  // Find one non-array
  let colorToFind = {};
  for (let k = 0; k < colors.length; k += 1) {
    if (colors[k].name === 'green') {
      colorToFind = colors[k];
    }
  }
  console.log('for', colorToFind.hexValue);

  const colorFind = colors.find((x) => x.name === 'green');
  console.log('find', colorFind.hexValue);
};

const mapFunc = () => {
  // creating an array of h1 tags for each color name
  const h1Tags = [];
  for (let l = 0; l < colors.length; l += 1) {
    h1Tags.push(`<h1>${colors[l].name}</h1>`);
  }
  console.log('for', h1Tags);

  // map will always return an array
  const colorMap = colors.map((color) => `<h1>${color.name}</h1>`);
  console.log('map', colorMap);
};

const reduceFunc = () => {
  let total = 0;
  for (let m = 0; m < colors.length; m += 1) {
    total += colors[m].upVotes;
  }
  console.log('for', total);

  const upVoteTotal = colors.reduce((prev, curr) => prev + curr.upVotes, 0);
  console.log('reduce', upVoteTotal);
};

const init = () => {
  forEachFunc();
  filterFunc();
  findFunc();
  mapFunc();
  reduceFunc();
};

export default { init };
