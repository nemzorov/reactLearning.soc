const CHANGE_TEXTAREA_MESS = "CHANGE-TEXTAREA_MESS";
const ADD_MESSAGE = "ADD-MESSAGE";

const messageReducer = (state, action) => {
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
