export const addFiltersBtn = (text) => {
  text = `Accept filter`;
  return (
    `<form class="trip-filters" action="#" method="get">
      <button class="visually-hidden" type="submit">${text}</button>
    </form>`
  );
};
