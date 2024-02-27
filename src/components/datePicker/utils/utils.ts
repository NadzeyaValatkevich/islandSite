export interface IDatePicker {
  value: Date;
  handler: (date: any) => void;
}

export interface IDateCellItem {
  date: number;
  month: number;
  year: number;

  ///???
  isToday?: boolean;
  isSelected?: boolean;
}

export const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export const daysOfTheWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
const VISIBLE_CELLS_AMOUNT = 7 * 6;

// get number of the days in month
export const getDaysAmountInMonths = (year: number, month: number, day = 1) => {
  const nextMonthDate = new Date(year, month + 1, day);
  nextMonthDate.setMinutes(-1);
  return nextMonthDate.getDate();
};

const sundayWeekToMondayWeekDayMap: Record<number, number> = {
  0: 6,
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
};

// converting to standard days from monday to sunday
const getDayOfTheWeek = (date: Date) => {
  const day = date.getDay();
  return sundayWeekToMondayWeekDayMap[day];
};

export const getPreviousMonthDays = (year: number, month: number) => {
  const currentMonthFirstDay = new Date(year, month, 1);

  const prevMonthCellsAmount = getDayOfTheWeek(currentMonthFirstDay);
  const daysAmountInPrevMonth = getDaysAmountInMonths(year, month - 1);

  const dateCells: IDateCellItem[] = [];
  const [cellYear, cellMonth] =
    month === 0 ? [year - 1, 11] : [year, month - 1];

  for (let i = 0; i < prevMonthCellsAmount; i++) {
    dateCells.push({
      year: cellYear,
      month: cellMonth,
      date: daysAmountInPrevMonth - i,
    });
  }
  return dateCells.reverse();
};

export const getNextMonthDays = (year: number, month: number) => {
  const currentMonthFirstDay = new Date(year, month, 1);

  const prevMonthCellsAmount = getDayOfTheWeek(currentMonthFirstDay);

  const daysAmount = getDaysAmountInMonths(year, month);

  const nextMonthDays =
    VISIBLE_CELLS_AMOUNT - daysAmount - prevMonthCellsAmount;
  const [cellYear, cellMonth] =
    month === 11 ? [year + 1, 0] : [year, month + 1];

  const dateCells: IDateCellItem[] = [];

  for (let i = 1; i <= nextMonthDays; i++) {
    dateCells.push({
      year: cellYear,
      month: cellMonth,
      date: i,
    });
  }
  return dateCells;
};

export const getCurrentMonthDays = (
  year: number,
  month: number,
  numberOfDays: number,
) => {
  const dateCells: IDateCellItem[] = [];
  for (let i = 1; i <= numberOfDays; i++) {
    dateCells.push({
      year,
      month,
      date: i,
    });
  }

  return dateCells;
};
