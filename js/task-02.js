const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl =
  document.querySelector("#ingredients");
const ingredientsPackageEl = ingredients.forEach(
  (ingredient) => {
    const ingredientsItemEl = document.createElement("li");
    ingredientsItemEl.textContent = ingredient;
    ingredientsItemEl.classList.add("item");

    ingredientsListEl.prepend(ingredientsItemEl);
  }
);
