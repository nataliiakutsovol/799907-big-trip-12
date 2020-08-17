export const transferObj = {
  id: [`event-type-taxi-1`, `event-type-bus-1`, `event-type-train-1`, `event-type-ship-1`, `event-type-transport-1`, `event-type-drive-1`, `event-type-flight-1`],
  value: [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`],
  text: [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`],
  labelClass: [`event__type-label--taxi`, `event__type-label--bus`, `event__type-label--train`, `event__type-label--ship`, `event__type-label--transport`, `event__type-label--drive`, `event__type-label--flight`]
};

export const addTransferInput = (i) => {
  return (
    `<div class="event__type-item">
      <input id="${transferObj.id[i]}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${transferObj.value[i]}">
      <label class="event__type-label  ${transferObj.labelClass[i]}" for="${transferObj.id[i]}">${transferObj.text[i]}</label>
    </div>`
  );
};
