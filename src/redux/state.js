let renderDOM;

const state = {
  profile: {
    textareaVal: "Какой то текст",
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
    textareaVal: "Текст сообщения",
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
};

let thisId = 99;

export const addMessage = () => {
  thisId++;
  state.messagesPage.messages.push({
    id: thisId,
    text: state.messagesPage.textareaVal,
  });
  state.messagesPage.textareaVal = "";
  renderDOM(state);
};

export const addPost = () => {
  thisId++;
  const now = new Date().toLocaleString();
  const date = now;
  state.profile.posts.push({
    id: thisId,
    text: state.profile.textareaVal,
    date: date,
  });
  state.profile.textareaVal = "";
  renderDOM(state);
};

export const changeTextarea = (text) => {
  state.profile.textareaVal = text;
  renderDOM(state);
};

export const changeTextarea2 = (text) => {
  state.messagesPage.textareaVal = text;
  renderDOM(state);
};

export const subscribe = (observer) => {
  renderDOM = observer;
};

export default state;
