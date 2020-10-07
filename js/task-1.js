const ulRef = document.querySelector("#categories");
console.log(ulRef);
const itemRef = document.querySelectorAll(".item");
console.log(itemRef);
console.log(`В списке ${itemRef.length} категории.`);
itemRef.forEach((li) => {
  console.log(`Категория: ${li.firstElementChild.textContent}`);
  console.log(`Количесвто элементов: ${li.querySelectorAll("li").length}`);
});
