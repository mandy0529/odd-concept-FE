const paginate = (products) => {
  const itemsPerPage = 50;
  const numberOfPages = Math.ceil(products.length / itemsPerPage);

  const newProducts = Array.from({length: numberOfPages}, (_, index) => {
    const start = index * itemsPerPage;
    return products.slice(start, start + itemsPerPage);
  });

  return newProducts;
};

const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(number);
  return newNumber;
};

export {paginate, formatPrice};
