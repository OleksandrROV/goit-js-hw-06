const topCategoriesEl = document.querySelectorAll(".item");
console.log(
  "Number of categories: ",
  topCategoriesEl.length
);

const totalCategories = topCategoriesEl.forEach(
  (category) => {
    console.log(
      "Category: ",
      category.firstElementChild.textContent
    );
    console.log(
      "Elements: ",
      category.querySelectorAll("li").length
    );
  }
);
