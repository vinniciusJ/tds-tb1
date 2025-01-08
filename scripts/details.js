import { getSearchParam } from './utils.js'
import cars from '../database/index.js'

function findCarById(id) {
    return cars.find(car => car.id === id)
}

function loadCarDetails() {
    const carsDetailsSection = document.querySelector("#cars-details-section")

    const id = getSearchParam('id', '')
    const car = findCarById(id)

    carsDetailsSection.innerHTML = `
        <car-details
            name="${car.name}"
            price="${car.price}"
            year="${car.year}"
            color="${car.color}"
            brand="${car.brand}"
            model="${car.model}"
            type="${car.type}"
            features="${car.features}"
            imageUrl="${car.imageUrl}"
        >
        </car-details>
    `
}

document.addEventListener('DOMContentLoaded', loadCarDetails)