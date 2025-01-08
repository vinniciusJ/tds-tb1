import { convertFormDataToObject } from '../utils.js'

class CarForm extends HTMLElement {
    formElement;

    connectedCallback() {
        this.innerHTML = `
            <div class="modal fade" id="carModal" tabindex="-1" aria-labelledby="carModalLabel" aria-hidden="true">
                <div class="modal-dialog custom-modal-width" style="max-width: 50vw">
                    <div class="modal-content">
                        <form id="car-form">
                            <div class="modal-header">
                                <h5 class="modal-title" id="carModalLabel">Cadastrar carro</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-3">
                                    <div class="col-6">
                                        <label for="name" class="form-label">Nome do carro</label>
                                        <input type="text" class="form-control" id="name" name="name" placeholder="Digite o nome do carro" required />
                                    </div>
                                    <div class="col-6">
                                        <label for="price" class="form-label">Preço do carro</label>
                                        <input type="number" class="form-control" id="price" name="price" placeholder="Digite o preço do carro" min="0" required />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-6">
                                        <label for="year" class="form-label">Ano de Fabricação</label>
                                        <input type="date" class="form-control" id="year" name="year" required />
                                    </div>
                                    <div class="col-6">
                                        <label for="color" class="form-label">Cor do carro</label>
                                        <input type="text" class="form-control" id="color" name="color" placeholder="Digite a cor do carro" required />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-6">
                                        <label for="brand" class="form-label">Marca do carro</label>
                                        <select class="form-select" id="brand" name="brand" required>
                                            <option value="" disabled selected>Escolha a marca</option>
                                            <option value="fiat">Fiat</option>
                                            <option value="ford">Ford</option>
                                            <option value="chevrolet">Chevrolet</option>
                                            <option value="toyota">Toyota</option>
                                        </select>
                                    </div>
                                    <div class="col-6">
                                        <label for="model" class="form-label">Modelo do carro</label>
                                        <input list="modelList" class="form-control" id="model" name="model" placeholder="Digite o modelo" />
                                        <datalist id="modelList">
                                            <option value="Fiorino"></option>
                                            <option value="Fiesta"></option>
                                            <option value="Onix"></option>
                                            <option value="Corolla"></option>
                                        </datalist>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-12">
                                        <label class="form-label">Tipo de carro</label><br />
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="type" id="suv" value="suv" checked />
                                            <label class="form-check-label" for="suv">SUV</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="type" id="sedan" value="sedan" />
                                            <label class="form-check-label" for="sedan">Sedan</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="type" id="hatch" value="hatch" />
                                            <label class="form-check-label" for="hatch">Hatch</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="type" id="pickup" value="pickup" />
                                            <label class="form-check-label" for="pickup">Picape</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="type" id="minivan" value="minivan" />
                                            <label class="form-check-label" for="minivan">Minivan</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="features" class="form-label">Características</label>
                                    <textarea class="form-control" id="features" name="features" rows="3" placeholder="Descreva as características do carro"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="image" class="form-label">Imagem do carro</label>
                                    <input type="file" class="form-control" id="image" name="image" accept="image/*" />
                                </div>
                                <div class="form-check mb-3">
                                    <input type="checkbox" class="form-check-input" id="available" name="available" checked />
                                    <label class="form-check-label" for="available">Disponível para venda</label>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                <button type="submit" class="btn btn-primary">Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `

        this.formElement = document.querySelector("#car-form")

        this.createOnSubmitEvent()
    }

    createOnSubmitEvent() {
        this.formElement.addEventListener('submit', event => {
            event.preventDefault()

            const data = convertFormDataToObject(new FormData(event.target))

            console.log(data)
        })
    }
}

customElements.define('car-form', CarForm)
