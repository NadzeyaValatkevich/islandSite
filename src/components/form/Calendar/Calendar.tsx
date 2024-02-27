import { ChangeEventHandler, useEffect,useRef, useState } from "react";
import {
  DateRange,
  DayPicker,
  SelectRangeEventHandler,
} from "react-day-picker";
import { Controller,useFormContext } from "react-hook-form";
import { format, isAfter, isBefore, isValid, parse } from "date-fns";
import { ru } from "date-fns/locale";

import { CalendarIcon } from "../../../assets/icons/inputIcons/Calendar";
import { DateInput } from "../DateInput";

import "react-day-picker/dist/style.css";
import styles from "./Calendar.module.scss";

export const Calendar = () => {
  const refCalendarOne = useRef<any>(null);
  const [fromValue, setFromValue] = useState<string>("");
  const [isFocus, setIsFocus] = useState(false);
  const [selectedRange, setSelectedRange] = useState<DateRange>();
  const [toValue, setToValue] = useState<string>("");
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  });

  useEffect(() => {
    setValue("desired_departure", toValue);
  }, [setValue, toValue]);

  useEffect(() => {
    setValue("desired_arrival", fromValue);
  }, [fromValue, setValue]);

  const hideOnEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsFocus(false);
    }
  };

  const handleToChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setToValue(e.target.value);
    const date = parse(e.target.value, "y-MM-dd", new Date());
    if (!isValid(date)) {
      return setSelectedRange({ from: selectedRange?.from, to: undefined });
    }
    if (selectedRange?.from && isBefore(date, selectedRange.from)) {
      setSelectedRange({ from: date, to: selectedRange.from });
    } else {
      setSelectedRange({ from: selectedRange?.from, to: date });
    }
    setValue("desired_departure", toValue);
  };
  const handleFromChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFromValue(e.target.value);
    const date = parse(e.target.value, "y-MM-dd", new Date());
    if (!isValid(date)) {
      return setSelectedRange({ from: undefined, to: undefined });
    }
    if (selectedRange?.to && isAfter(date, selectedRange.to)) {
      setSelectedRange({ from: selectedRange.to, to: date });
    } else {
      setSelectedRange({ from: date, to: selectedRange?.to });
    }
    setValue("desired_arrival", fromValue);
  };
  const hideOnClickOutside = (e: any) => {
    if (refCalendarOne.current && !refCalendarOne.current.contains(e.target)) {
      setIsFocus(false);
    }
  };
  const handleRangeSelect: SelectRangeEventHandler = (
    range: DateRange | undefined,
  ) => {
    setSelectedRange(range);
    if (range?.from) {
      setFromValue(format(range.from, "y-MM-dd"));
    } else {
      setFromValue("");
    }
    if (range?.to) {
      setToValue(format(range.to, "y-MM-dd"));
    } else {
      setToValue("");
    }
  };
  
  return (
    <>
      <div className={styles["from-date"]}>
        <Controller
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <DateInput
              type="text"
              label="Дата заезда"
              required={false}
              value={fromValue}
              placeholder="2023-09-01"
              icon={<CalendarIcon />}
              onClick={() => setIsFocus(true)}
              onChange={handleFromChange}
              name="desired_arrival"
              error={errors["desired_arrival"] ? true : false}
            />
          )}
          name="desired_arrival"
          control={control}
        />
        <div ref={refCalendarOne} className={styles.calendar}>
          {isFocus && (
            <DayPicker
              mode="range"
              selected={selectedRange}
              onSelect={handleRangeSelect}
              showOutsideDays
              locale={ru}
              disabled={{ before: new Date() }}
            />
          )}
        </div>
      </div>
      <div>
        <Controller
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <DateInput
              type="text"
              label="Дата выезда"
              name="desired_departure"
              required={false}
              value={toValue}
              placeholder="2023-09-01"
              icon={<CalendarIcon />}
              onClick={() => setIsFocus(true)}
              onChange={handleToChange}
              error={errors["desired_departure"] ? true : false}
            />
          )}
          name="desired_departure"
          control={control}
        />
      </div>
    </>
  );
};
