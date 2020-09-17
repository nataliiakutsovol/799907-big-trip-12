import Abstract from "../../abstract.js";
import {cities} from "../../const.js";

const addCitiesList = () => {
  return cities.map((city) =>
    `<option value="${city}"></option>`).join(``);
};

export default class EventDestination extends Abstract {

  _getTemplate(i) {
    const citiesListTemplate = addCitiesList(i);
    return (
      `<div><label class="event__label  event__type-output" for="event-destination-1">Bus to</label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="" list="destination-list-1">
      <datalist id="destination-list-1">
      ${citiesListTemplate}
      </datalist></div>`
    );
  }
}
