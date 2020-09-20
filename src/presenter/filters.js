import FilterInput from './../view/filter-item.js';
import {render, remove} from './../utils/render.js';
//import {filter} from "./../utils/filter.js";
import {FilterType, UpdateType} from "./../const.js";

export default class FilterPresenter {
  constructor(mainBody, tripsModel, filtersModel) {
    this._mainBody = mainBody;
    this._filtersModel = filtersModel;
    this._tripsModel = tripsModel;
    this._currentFilter = null;

    this._filterElement = null;

    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleFilterTypeChange = this._handleFilterTypeChange.bind(this);

    this._tripsModel.addObserver(this._handleModelEvent);
    this._filtersModel.addObserver(this._handleModelEvent);
  }

  init() {
    this._currentFilter = this._filtersModel.getFilters();
    const filters = this._getFilters();
    const prevFilterComponent = this._filterElement;

    this._filterElement = new FilterInput(filters, this._currentFilter);
    this._filterElement.setFilterTypeChangeHandler(this._handleFilterTypeChange);


    if (prevFilterComponent === null) {
        const filtersContainer = this._mainBody.querySelector(`.trip-controls`);
        render(filtersContainer, this._filterElement);
        return;
      }

  }

  _handleModelEvent() {
    this.init();
  }

  _handleFilterTypeChange(filterType) {
    if (this._currentFilter === filterType) {
      return;
    }

    this._filtersModel.setFilter(UpdateType.MAJOR, filterType);
  }

  _getFilters() {

    return [
      {
        type: FilterType.PAST,
        name: `past`,
      },
      {
        type: FilterType.FUTURE,
        name: `future`,
      },
      {
        type: FilterType.EVERYTHING,
        name: `everything`,
      },
    ];
  }

}