export function getError({ fetchers }) {
  const { currentProduct, searchResults } = fetchers;
  if (currentProduct.error) {
    return currentProduct.error;
  }

  if (searchResults.error) {
    return searchResults.error;
  }
}
