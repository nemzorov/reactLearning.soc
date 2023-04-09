const CHANGE_TEXTAREA_MESS = "CHANGE-TEXTAREA_MESS";
const ADD_MESSAGE = "ADD-MESSAGE";

const initialState = {
  textareaVal: "Введите сообщение",
  thisId: 99,
  messages: [
    { id: "1", text: "Привет", my: true },
    { id: "2", text: "Привет" },
    { id: "3", text: "Как дела", my: true },
    { id: "4", text: "Норм" },
    { id: "5", text: "Че делаешь", my: true },
    { id: "6", text: "Пока" },
  ],
  dialogs: [
    { id: "1", name: "Иван" },
    { id: "2", name: "Максим" },
    { id: "3", name: "Андрей" },
    { id: "4", name: "Антон" },
    { id: "5", name: "Семен" },
    { id: "6", name: "Игорь" },
  ],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      state.thisId++;
      state.messages.push({
        id: state.thisId,
        text: state.textareaVal,
      });
      state.textareaVal = "";
      return state;

    case CHANGE_TEXTAREA_MESS:
      state.textareaVal = action.text;
      return state;

    default:
      return state;
  }
};

export const changeMessageActionCreator = (text) => {
  return { type: CHANGE_TEXTAREA_MESS, text: text };
};

export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};

export default messageReducer;
