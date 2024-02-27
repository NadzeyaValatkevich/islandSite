import { BabyBed } from "../assets/icons/features/BabyBed";
import { BigBed } from "../assets/icons/features/BigBed";
import { ExtraBed } from "../assets/icons/features/ExtraBed";
import { SingleBed } from "../assets/icons/features/SingleBed";

export const getBedsIcon = (
  id: number,
  littleIcon?: boolean,
): JSX.Element | null => {
  switch (id) {
    case 1:
      return SingleBed({ littleIcon });
    case 2:
      return BigBed({ littleIcon });
    case 3:
      return ExtraBed({ littleIcon });
    case 4:
      return BabyBed({ littleIcon });
    
      
    default:
      return null;
  }
};

export const getBedsTitle = (id: number, count:number): string | null => {
  switch (id) {
    case 1:
      return " Односпальн"+getEndOfTitle(count)+" кроват"+getEndOfBed(count);
    case 2:
      return " Двуспальн"+getEndOfTitle(count)+" кроват"+getEndOfBed(count);
    case 3:
      return " Добавочн"+getEndOfTitle(count)+" кроват"+getEndOfBed(count);    
    case 4:
      return " Детск"+getEndOfBabyBed(count)+" кроват"+getEndOfBed(count);   

    default:
      return null;
  }
};

const getEndOfTitle = (count: number) => {
  if (count===1) return "ая"
  else if (count<5) return "ые"
  else if (count >=5) return "ых"
};

const getEndOfBed = (count: number) => {
  if (count===1) return "ь"
  else if (count<5) return "и"
  else if (count >=5) return "ей"
};

const getEndOfBabyBed = (count: number) => {
  if (count===1) return "ая"
  else if (count<5) return "ие"
  else if (count >=5) return "их"
};