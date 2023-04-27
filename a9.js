function selectRandomItemsFromFile(contents) {
  const myArray = contents.split('\n');
  const randomItems = [];

  while (randomItems.length < 12) {
    const randomIndex = Math.floor(Math.random() * myArray.length);
    const randomItem = myArray[randomIndex].trim();
    if (!randomItems.includes(randomItem) && randomItem !== '') {
      randomItems.push(randomItem);
    }
  }

  return randomItems;
}

function selectRandomItems() {
  const httpRequest = new XMLHttpRequest();
  const url = 'my_array.txt';
  httpRequest.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const randomItems = selectRandomItemsFromFile(this.responseText);
      const myList = document.getElementById('myList');
      myList.innerHTML = '';
      randomItems.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        myList.appendChild(li);
      });
    }
  };
  httpRequest.open('GET', url, true);
  httpRequest.send();
}
