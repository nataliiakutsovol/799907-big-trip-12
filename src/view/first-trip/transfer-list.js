import Abstract from "../../abstract.js";

export default class TransferList extends Abstract {

  _getTemplate() {
    return (
      `<fieldset class="event__type-group event__transfer">
        <legend class="visually-hidden">Transfer</legend>
      </fieldset>`
    );
  }
}
