import Abstract from "../../abstract.js";

export default class FirstTripEvent extends Abstract {

  _getTemplate() {
    return (
      `<form class="trip-events__item  event  event--edit" action="#" method="post">
        <header class="event__header">
              
          <div class="event__type-wrapper"></div>
    
          <div class="event__field-group  event__field-group--destination"></div>
    
          <div class="event__field-group  event__field-group--time"></div>
    
          <div class="event__field-group  event__field-group--price"></div>
        </header>
      </form>`
    );
  }
}
