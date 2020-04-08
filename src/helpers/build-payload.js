
export const buildPayload = ( 
    category,
    selectedPrice,
    selectedDistance,
    attributes,
    zip
    ) => {
        return {
            location: zip,
            term: category,
            price: allowedPrices(selectedPrice),
            open_now: attributes.open_now,
            radius: selectedDistance || 40000,
            attributes: allowedAttributes(attributes)
        }
}

const allowedPrices = (selectedPrice) => {
    let prices = []
        Object.keys(selectedPrice).forEach((price) => {
            if( selectedPrice[price] ) {
                prices.push(Number(price) + 1).toString()
            }
        })
        return prices.length > 0
            ? prices.join(',')
            : '1,2,3,4'
}

const allowedAttributes = (attributes) => {
    return Object.keys(attributes).filter((attribute) => {
        if(attributes[attribute]){
            return attribute
        }
    }).join(',')
}
