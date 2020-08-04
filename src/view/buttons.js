export const btnObj = {
  text: [`Save`, `Cancel`],
  type: [`submit`, `reset`],
  btnClass: [`event__save-btn  btn  btn--blue`, `event__reset-btn`]
};

export const addBtn = (i) => {
  return (
    `<button class="${btnObj.btnClass[i]}" type="${btnObj.type[i]}">${btnObj.text[i]}</button>`
  );
};
