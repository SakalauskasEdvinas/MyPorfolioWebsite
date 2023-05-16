function sortList() {
  const list = document.querySelector("#list").value;

 
  const items = list.split(", ").map(item => item.trim());

  const filteredItems = items.sort((a, b) => {
    if (!isNaN(a) && !isNaN(b)) {
      return a - b;
    } else if (!isNaN(a)) {
      return -1;
    } else if (!isNaN(b)) {
      return 1;
    } else {
      return a.localeCompare(b);
    }
  });

  console.log(filteredItems);
  
  const sortedList = filteredItems.join(", ");

  let sortedListElement = document.querySelector("#sorted-list");
  sortedListElement.innerHTML = ""; 
  let h2 = document.createElement("h2");
  h2.innerHTML = "Sorted List";
  sortedListElement.appendChild(h2);
  sortedListElement.innerHTML += sortedList;
}
