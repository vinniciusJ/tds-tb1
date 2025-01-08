import { formatCurrency } from '../utils.js'

class CarCard extends HTMLElement {
    connectedCallback() {
        const imageUrl = this.getAttribute("imageUrl")
        const name = this.getAttribute("name")
        const category = this.getAttribute("category")
        const price = this.getAttribute("price")
        const id = this.getAttribute("id")

        this.innerHTML = `
            <div class="card">
                <img
                    src="${imageUrl}"
                    class="card-img-top"
                    alt="${name}"
                />
                <div class="card-body text-center">
                    <h6 class="card-subtitle mb-2 text-muted">${category}</h6>
                    <h5 class="card-title text-truncate w-100">
                        ${name}
                    </h5>
                </div>
                <div class="card-footer d-flex align-items-center justify-content-between flex-row">
                    <span class="car-price">${formatCurrency(price)}</span>
                    <a href="pages/details.html?id=${id}" class="btn btn-link">Ver Detalhes</a>
                </div>
            </div>
        `
    }
}

customElements.define("car-card", CarCard);
