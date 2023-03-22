const state = {
  navbar: [
    { url: "/profile", name: "Моя страница", id: 1 },
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
};

export default state;
