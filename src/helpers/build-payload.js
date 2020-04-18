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
    attributes: allowedAttributes(attributes),
  };
};

const allowedPrices = (selectedPrice) => {
  if (selectedPrice === null) {
    return "1,2,3,4";
  }
  let prices = [];
  let i = 1;
  while (prices.length <= selectedPrice) {
    prices.push(i.toString());
    i++;
  }
  return prices.length > 0 && prices.join(",");
};

const allowedAttributes = (attributes) => {
  return Object.keys(attributes)
    .filter((attribute) => {
      if (attributes[attribute]) {
        return attribute;
      }
    })
    .join(",");
};
