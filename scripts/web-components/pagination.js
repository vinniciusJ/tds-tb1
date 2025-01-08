import { setSearchParam, getSearchParam } from '../utils.js'

class Pagination extends HTMLElement {
    goBackButton
    goNextButton

    dispatchChangePageEvent(page) {
        window.dispatchEvent(new CustomEvent('change-page', {
            detail: { value: page }
        }))
    }

    createGoNextEventListener() {
        this.goNextButton.addEventListener('click', () => {
            const page = Number(getSearchParam('page', 0))

            setSearchParam('page', page + 1)
            this.dispatchChangePageEvent(page + 1)
        })
    }

    createGoBackEventListener() {
        this.goBackButton.addEventListener('click', () => {
            const page = Number(getSearchParam('page', 0))

            if (page != 0) {
                setSearchParam('page', page - 1)
                this.dispatchChangePageEvent(page - 1)
            }
        })
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="d-flex justify-content-center mt-4">
                <button id="go-back-btn" class="btn btn-outline-secondary me-2" aria-label="Anterior">
                    &lt;
                </button>
                <button id="go-next-btn" class="btn btn-outline-secondary" aria-label="Próximo">
                    &gt;
                </button>
            </nav>
        `

        this.goNextButton = document.querySelector("#go-next-btn")
        this.goBackButton = document.querySelector("#go-back-btn")

        this.createGoBackEventListener()
        this.createGoNextEventListener()
    }
}

customElements.define("pagination-buttons", Pagination)