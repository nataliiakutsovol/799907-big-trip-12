export const sortObj = {
  text: [`Event`, `Time`, `Price`],
  id: [`event`, `time`, `price`]
};

export const addSortInput = (i) => {
  return (
    `<div class="trip-sort__item  trip-sort__item--${sortObj.id[i]}">
      <input id="sort-${sortObj.id[i]}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortObj.id[i]}">
      <label class="trip-sort__btn" for="sort-${sortObj.id[i]}">${sortObj.text[i]}</label>
    </div>`
  );
};
