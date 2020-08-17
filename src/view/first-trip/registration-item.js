export const registrationObj = {
  id: [`event-type-check-in-1`, `event-type-sightseeing-1`, `event-type-restaurant-1`],
  value: [`check-in`, `sightseeing`, `restaurant`],
  text: [`Check-in`, `Sightseeing`, `Restaurant`],
  labelClass: [`event__type-label--check-in`, `event__type-label--sightseeing`, `event__type-label--restaurant`]
};

export const addRegistrationInput = (i) => {
  return (
    `<div class="event__type-item">
      <input id="${registrationObj.id[i]}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${registrationObj.value[i]}">
      <label class="event__type-label  ${registrationObj.labelClass[i]}" for="${registrationObj.id[i]}">${registrationObj.text[i]}</label>
    </div>`
  );
};
