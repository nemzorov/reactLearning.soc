const store = {
  _thisId: 99,

  _renderDOM() {
    console.log("renderDOM");
  },
  _state: {
    textareaVal: "Введите сообщение",

    profile: {
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
    },

    navbar: [
      { url: "/profile", name: "Моя страница", id: 1 },
      { url: "/friends", name: "Друзья", id: 12 },
      { url: "/message", name: "Сообщения", id: 2 },
      { url: "/news", name: "Новости", id: 3 },
      { url: "/music", name: "Музыка", id: 4 },
      { url: "/settings", name: "Настройки", id: 5 },
    ],

    messagesPage: {
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
    },
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._renderDOM = observer;
  },

  dispath(action) {
    if (action.type === "ADD-MESSAGE") {
      this._thisId++;
      this._state.messagesPage.messages.push({
        id: this._thisId,
        text: this._state.textareaVal,
      });
      this._state.textareaVal = "";
      this._renderDOM(this._state);
    } else if (action.type === "ADD-POST") {
      this._thisId++;
      const now = new Date().toLocaleString();
      const date = now;
      const newPost = {
        id: this._thisId,
        text: this._state.textareaVal,
        date: date,
      };
      this._state.profile.posts.push(newPost);
      this._state.textareaVal = "";
      this._renderDOM(this._state);
    } else if (action.type === "CHANGE-TEXTAREA") {
      this._state.textareaVal = action.text;
      this._renderDOM(this._state);
    }
  },
};

export default store;

//
//
//
const CHANGE_TEXTAREA = "CHANGE-TEXTAREA";
const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";

export const changeMessageActionCreator = (text) => {
  return { type: CHANGE_TEXTAREA, text: text };
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};
