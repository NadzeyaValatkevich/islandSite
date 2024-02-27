import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import cn from "classnames";
import styles from "./DatePicker.module.scss";
import {
  IDateCellItem,
  IDatePicker,
  daysOfTheWeek,
  getCurrentMonthDays,
  getDaysAmountInMonths,
  getNextMonthDays,
  getPreviousMonthDays,
  months,
} from "./utils/utils";

const [date, setDate] = useState(() => new Date());
const setFirstDate = (date: any) => {
  setDate(date);
};

const getInputValueFromDate = (value: Date) => {
  const dateValue = value.getDate();
  const date = dateValue <= 9 ? `0${dateValue}` : dateValue;
  const monthValue = value.getMonth();

  const month = monthValue > 9 ? monthValue + 1 : `0${monthValue + 1}`;
  const year = value.getFullYear();
  return `${date}-${month}-${year}`;
};

const validValueRegex = /^\d{2}-\d{2}-\d{4}$/;

export const isValidDateString = (value: string) => {
  if (!validValueRegex.test(value)) {
    return false;
  }
  const [date, month, year] = value.split("-").map((v) => parseInt(v, 10));

  if (month < 1 || month > 12 || date < 1) {
    return false;
  }

  const maxDaysinMonth = getDaysAmountInMonths(year, month - 1);

  if (date > maxDaysinMonth) {
    return false;
  }
  return true;
};

export const DatePicker = (props: IDatePicker) => {
  const { value, handler } = props;
  const [showPopup, setShowPopup] = useState(false);
  const datePickerElementRef = useRef<HTMLDivElement>(null);

  const [inputValue, setInputValue] = useState("");

  useLayoutEffect(() => {
    setInputValue(getInputValueFromDate(value));
  }, [value]);

  useEffect(() => {
    const element = datePickerElementRef.current;
    if (!element) return;

    const onDocumentClick = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Node)) {
        return;
      }

      if (element.contains(target)) {
        return;
      }
      setShowPopup(false);
    };

    document.addEventListener("click", onDocumentClick);

    return () => {
      document.removeEventListener("click", onDocumentClick);
      console.log("unmount");
    };
  }, []);

  const onInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.trim());
  };

  const onFocus = () => {
    setShowPopup(true);
  };

  const updateValueFromInputValue = () => {
    if (!isValidDateString(inputValue)) {
      return;
    }
    const [date, month, year] = inputValue
      .split("-")
      .map((v) => parseInt(v, 10));
    const dateObj = new Date(year, month - 1, date);
    handler(dateObj);
  };

  const onBlur = () => {
    updateValueFromInputValue();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Enter") {
      return;
    }
    updateValueFromInputValue();
  };

  return (
    <div className={styles["datepicker__container"]} ref={datePickerElementRef}>
      <input
        value={inputValue}
        onChange={onInputValueChange}
        type="text"
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
      {showPopup && <DatePickerPopupContent value={value} handler={handler} />}
    </div>
  );
};

const DatePickerPopupContent = (props: IDatePicker) => {
  const { value, handler } = props;
  const [panelYear, setPanelYear] = useState(() => value.getFullYear());
  const [panelMonth, setPanelMonth] = useState(() => value.getMonth());

  const [year, month, day] = useMemo(() => {
    const currentYear = value.getFullYear();
    const currentMonth = value.getMonth();
    const currentDay = value.getDate();

    return [currentYear, currentMonth, currentDay];
  }, [value]);

  const [prevMonthDays, currentMonthDays, nextMonthDays] = useMemo(() => {
    const daysInMonth = getDaysAmountInMonths(panelYear, panelMonth);

    const prevMonthDays = getPreviousMonthDays(panelYear, panelMonth);
    const currentMonthDays = getCurrentMonthDays(
      panelYear,
      panelMonth,
      daysInMonth,
    );

    const nextMonthDays = getNextMonthDays(panelYear, panelMonth);

    return [prevMonthDays, currentMonthDays, nextMonthDays];
  }, [panelYear, panelMonth]);

  const onDateSelect = (item: IDateCellItem) => {
    handler(new Date(item.year, item.month, item.date));
  };

  const prevYear = () => {
    setPanelYear((year) => year - 1);
  };
  const prevMonth = () => {
    if (panelMonth === 0) {
      setPanelMonth(11);
      setPanelYear((year) => year - 1);
    } else {
      setPanelMonth((prevMonth) => prevMonth - 1);
    }
  };
  const nextMonth = () => {
    if (panelMonth === 11) {
      setPanelMonth(0);
      setPanelYear((year) => year + 1);
    } else {
      setPanelMonth((prevMonth) => prevMonth + 1);
    }
  };
  const nextYear = () => {
    setPanelYear((year) => year + 1);
  };
  return (
    <div>
      <div>
        {panelYear}
        {months[panelMonth]}
      </div>
      <div>
        {year} {month} {day}
      </div>
      <div>
        <button onClick={prevYear}>PrevYear</button>
        <button onClick={prevMonth}>PrevMonth</button>
        <button onClick={nextMonth}>NextMonth</button>
        <button onClick={nextYear}>NextYear</button>
      </div>
      <div className={styles["datepicker-popup"]}>
        {daysOfTheWeek.map((days) => {
          return (
            <div key={days} className={styles["datepicker-popup__days"]}>
              {days}
            </div>
          );
        })}
        {prevMonthDays.map((cell, index) => {
          return (
            <div
              key={index}
              className={cn(styles["datepicker-popup__cell_not-current-month"])}
              onClick={() => prevMonth()}
            >
              {cell.date}
            </div>
          );
        })}
        {currentMonthDays.map((cell, index) => {
          const isCurrentDate =
            cell.year === year && cell.month === month && cell.date === day;

          return (
            <div
              key={index}
              className={cn(styles["datepicker-popup__cell"], {
                [styles["datepicker-popup__cell_active"]]: isCurrentDate,
                [styles["datepicker-popup__cell_date-now"]]: isCurrentDate,
              })}
              onClick={() => onDateSelect(cell)}
            >
              {cell.date}
            </div>
          );
        })}
        {nextMonthDays.map((cell, index) => {
          return (
            <div
              key={index}
              className={cn(styles["datepicker-popup__cell_not-current-month"])}
              onClick={() => nextMonth()}
              style={{ transform: "translateX(120px)" }}
            >
              {cell.date}
            </div>
          );
        })}
      </div>
    </div>
  );
};
