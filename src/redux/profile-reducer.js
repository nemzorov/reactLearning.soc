const CHANGE_TEXTAREA_PROF = "CHANGE-TEXTAREA-PROF";
const ADD_POST = "ADD-POST";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      state.thisId++;
      const now = new Date().toLocaleString();
      const date = now;
      const newPost = {
        id: state.thisId,
        text: state.textareaVal,
        date: date,
      };
      state.posts.push(newPost);
      state.textareaVal = "";
      return state;

    case CHANGE_TEXTAREA_PROF:
      state.textareaVal = action.text;
      return state;

    default:
      return state;
  }
};

export const changePostActionCreator = (text) => {
  return { type: CHANGE_TEXTAREA_PROF, text: text };
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export default profileReducer;
