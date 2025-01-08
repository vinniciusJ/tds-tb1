export const paginateArray = (array, page, pageSize) => {
    const offset = (page) * pageSize;

    return array.slice(offset, offset + pageSize)
}

export const setSearchParam = (key, value) => {
    const url = new URL(window.location)

    if (value === null || value === undefined) {
        url.searchParams.delete(key)
    } else {
        url.searchParams.set(key, value)
    }

    window.history.pushState({}, '', url)
}

export const getSearchParam = (key, defaultValue = '') => {
    const url = new URL(window.location)

    return url.searchParams.get(key) || defaultValue
}

export const convertFormDataToObject = (formData) => {
    const obj = {}

    formData.forEach((value, key) => {
        obj[key] = value
    })

    return obj
}

export const formatCurrency = (value = 0) => {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return formatter.format(value)
}