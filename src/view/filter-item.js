export const filterObj = {
  value: [`past`, `future`, `everything`],
  text: [`Past`, `Future`, `Everything`],
  id: [`filter-past`, `filter-future`, `filter-everything`]
};

export const addFilterInput = (i) => {
  return (
    `<div class="trip-filters__filter">
      <input id="${filterObj.id[i]}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filterObj.value[i]}" checked>
      <label class="trip-filters__filter-label" for="${filterObj.id[i]}">${filterObj.text[i]}</label>
    </div>`
  );
};
