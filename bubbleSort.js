let bubbleSort = function(array) {
  for (let loop = 0; loop < array.length; loop++) {
    for (let position = 0; position < array.length; position++) {
      if (array[position] > array[position + 1]) {
        const smallNumber = array[position + 1];
                array[position +1] = array[position];
                array[position] = smallNumber;
      }
    }
          console.log(array);
}
    return array;
}