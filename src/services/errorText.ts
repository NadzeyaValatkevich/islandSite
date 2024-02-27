export const getErrorText = (error: string) => {
  switch (error) {
    case "House is already taken. Point another house.":
      return "На выбранные даты домик занят";
    case "The departure date should be later than the arrival date":
      return "Дата выезда должна быть позднее даты заезда";
    default:
      return "Повторите отправление анкеты";
  }
};
