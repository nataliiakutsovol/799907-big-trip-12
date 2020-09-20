import Observer from "./../utils/observer";
import {FilterType} from "./../const";

export default class FiltersModel extends Observer {
  constructor() {
      super();
      this._activeFilter = FilterType.EVERYTHING;
  }

  setFilters(updateType, filter) {
    this._activeFilter = filter;
    this._notify(updateType, filter);
  }

  getFilters() {
    return this._activeFilter;
  }
}