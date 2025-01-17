import cars from "../database/index.js";
import { getSearchParam, paginateArray, setSearchParam } from "./utils.js";

const createCardCardElement = function (car) {
    return (
        `<car-card 
        id="${car.id}" 
        price="${car.price}"
        category="${car.type}" 
        name="${car.name}" 
        imageUrl="${car.imageUrl}"
        />`
    )
}

const createGridElement = function (children) {
  const article = document.createElement("article");

  article.className = "col-12 col-md-6 col-lg-3";
  article.innerHTML = children;

  return article;
};

function loadCars() {
  const page = Number(getSearchParam("page", 0));
  const pageSize = Number(getSearchParam("pageSize", 4));

  const filters = getSearchParam("filters", "").split(",").filter(Boolean);

  const carsSectionElement = document.querySelector("#cars-section");

  let filteredCars = cars;

  if (filters.length > 0) {
    filteredCars = cars.filter((car) => filters.includes(car.type));
  }

  const paginatedCars = paginateArray(filteredCars, page, pageSize);

  carsSectionElement.innerHTML = "";

  paginatedCars.forEach((car) => {
    carsSectionElement.append(createGridElement(createCardCardElement(car)));
  });
}

function updateFilters(filterCheckboxes) {
  const activeFilters = Array.from(filterCheckboxes)
    .filter((input) => input.checked)
    .map((input) => input.value);

  setSearchParam("page", 0);
  setSearchParam("filters", activeFilters.join(","));

  loadCars();
}

function addFilterListeners() {
  const toggleFilterButton = document.querySelector("#toggleFilter");
  const filterMenu = document.querySelector("#filterMenu");

  toggleFilterButton.addEventListener("click", () => {
    filterMenu.classList.toggle("show");
  });

  const filterCheckboxes = filterMenu.querySelectorAll("input[name='type']");

  filterCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => updateFilters(filterCheckboxes));
  });
}

function initializeFilters() {
  const filters = getSearchParam("filters", "").split(",").filter(Boolean);

  const filterCheckboxes = document.querySelectorAll("input[name='type']");

  filterCheckboxes.forEach((checkbox) => {
    checkbox.checked = filters.includes(checkbox.value);
  });

  addFilterListeners();
}

document.addEventListener("DOMContentLoaded", initializeFilters);

document.addEventListener("DOMContentLoaded", loadCars);
window.addEventListener("change-page", loadCars);

