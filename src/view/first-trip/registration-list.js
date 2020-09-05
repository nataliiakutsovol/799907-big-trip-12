import Abstract from "../../abstract.js";

export default class RegistrationList extends Abstract {

  _getTemplate() {
    return (
      `<fieldset class="event__type-group event__registration">
        <legend class="visually-hidden">Activity</legend>
      </fieldset>`
    );
  }
}
