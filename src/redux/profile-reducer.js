const CHANGE_TEXTAREA_PROF = "CHANGE-TEXTAREA-PROF";
const ADD_POST = "ADD-POST";

const initialState = {
  textareaVal: "Есть что рассказать?",
  thisId: 99,
  posts: [
    {
      date: "01.02.2023",
      text: "Даже если вы берете что-то у соседа на время, все равно лучше делать это под покровом темноты",
    },
    {
      date: "05.02.2023",
      text: "Я не стану лукавить: быть отцом непросто. Не то что матерью",
    },
    {
      date: "13.03.2023",
      text: "Знаете, парни, вы можете смеяться, но мне гораздо приятнее чувствовать на шее сладкое дыхание спящей жены, чем запихивать долларовые купюры в стринги какой-то неизвестной дамочки",
    },
    {
      date: "22.03.2023",
      text: "Женщины - они как пиво. Хорошо выглядят, хорошо пахнут, и ты готов переступить через собственную мать, лишь бы заполучить их",
    },
  ],
};

const profileReducer = (state = initialState, action) => {
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
