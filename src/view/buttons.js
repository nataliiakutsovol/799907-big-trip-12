import {btnObj} from "./../const.js";
import Abstract from "../abstract.js";

export default class Buttons extends Abstract {
  constructor(i) {
    super();
    this._i = i;
  }

  _getTemplate() {
    return (
      `<button class="${btnObj.btnClass[this._i]}" type="${btnObj.type[this._i]}">${btnObj.text[this._i]}</button>`
    );
  }
}
