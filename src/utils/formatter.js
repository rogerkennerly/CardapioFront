export function priceFormatter(price, pt = true) {
  if (pt) {
    return price.toLocaleString("pt-br", { minimumFractionDigits: 2 });
  } else {
    price = price.replace(".", "");
    price = price.replace(",", ".");
    return price;
  }
}
