import Abstract from "../abstract.js";

export default class AcceptFiltersBtn extends Abstract {

  _getTemplate(text) {
    text = `Accept filter`;
    return (
      `<form class="trip-filters" action="#" method="get">
        <button class="visually-hidden" type="submit">${text}</button>
      </form>`
    );
  }
}
