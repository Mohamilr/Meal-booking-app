import meals from '../models/data/meals';

const check = (element) => {
  if (meals.length === 0) {
    return false;
  }

  for (let i = 0; i < meals.length - 1; i + 1) {
    if (meals[i].meal === element) {
      return true;
    }
  }

  return false;
};

export default check;
