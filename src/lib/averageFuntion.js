const average = (numArray) => {
  return numArray.reduce((prev,num) => prev + num, 0)/ numArray.length;
};

export default average;