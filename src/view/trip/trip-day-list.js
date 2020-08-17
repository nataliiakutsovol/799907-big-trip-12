export const addTripDayList = (i, trip) => {
  const {date} = trip;

  return (
    `<li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${i + 1}</span>
        <time class="day__date" datetime="2019-03-18">${date.toLocaleString(`en-US`, {day: `numeric`, month: `short`})}</time>
      </div>
      <ul class="trip-events__list"></ul>
    </li>`
  );
};
