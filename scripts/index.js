import cars from '../database/index.js'
import { getSearchParam, paginateArray } from './utils.js'

const createCardCardElement = (car) =>
    `<car-card 
        id="${car.id}" 
        price="${car.price}"
        category="${car.type}" 
        name="${car.name}" 
        imageUrl="${car.imageUrl}"
    />`

const createGridElement = (children) => {
    const article = document.createElement('article')

    article.className = 'col-12 col-md-6 col-lg-3'
    article.innerHTML = children

    return article
}

function loadCars() {
    const page = Number(getSearchParam('page', 0))
    const pageSize = Number(getSearchParam('pageSize', 20))

    const carsSectionElement = document.querySelector('#cars-section')
    const paginatedCars = paginateArray(cars, page, pageSize)

    carsSectionElement.innerHTML = ''

    paginatedCars.forEach(car => {
        carsSectionElement.append(
            createGridElement(createCardCardElement(car))
        )
    })
}

document.addEventListener('DOMContentLoaded', loadCars)
window.addEventListener('change-page', loadCars)