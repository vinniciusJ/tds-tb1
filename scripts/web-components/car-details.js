import { formatCurrency } from '../utils.js'

class CarDetails extends HTMLElement {
    car

    createCarouselItems() {
        return Array.from({ length: 5 }).map(() => `
            <div class="carousel-item active">
                <img
                    src="${this.car.imageUrl}"
                    class="d-block w-100"
                    alt="${this.car.name}"
                />
            </div>
        `).join('\n')
    }

    connectedCallback() {
        this.car = {
            name: this.getAttribute("name"),
            price: Number(this.getAttribute("price")),
            year: this.getAttribute("year"),
            color: this.getAttribute("color"),
            brand: this.getAttribute("brand"),
            model: this.getAttribute("model"),
            type: this.getAttribute("type"),
            features: this.getAttribute("features"),
            imageUrl: this.getAttribute("imageUrl")
        }

        this.innerHTML = `
            <div
                id="carImageCarousel"
                class="carousel slide mb-4"
                data-bs-ride="carousel"
            >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img
                            src="${this.car.imageUrl}"
                            class="d-block w-100"
                            alt="${this.car.name}"
                        />
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carImageCarousel"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carImageCarousel"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Próximo</span>
                </button>
            </div>

            <div class="accordion" id="carDetailsAccordion">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSpecs">
                        <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSpecs"
                            aria-expanded="true"
                            aria-controls="collapseSpecs"
                        >
                            Especificações Técnicas
                        </button>
                    </h2>
                    <div
                        id="collapseSpecs"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingSpecs"
                    >
                        <div class="accordion-body">
                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th scope="row">Nome</th>
                                        <td>${this.car.name}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Preço</th>
                                        <td>${formatCurrency(this.car.price)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Ano de Fabricação</th>
                                        <td>${this.car.year}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Cor</th>
                                        <td>${this.car.color}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Marca</th>
                                        <td>${this.car.brand}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Modelo</th>
                                        <td>${this.car.model}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Tipo</th>
                                        <td>${this.car.type}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Disponível</th>
                                        <td>Sim</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFeatures">
                        <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFeatures"
                            aria-expanded="true"
                            aria-controls="collapseFeatures"
                        >
                            Características
                        </button>
                    </h2>
                    <div
                        id="collapseFeatures"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingFeatures"
                    >
                        <div class="accordion-body">
                            <ul>
                                ${this.car.features.split(',').map((feat) => `<li>${feat}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define("car-details", CarDetails)
