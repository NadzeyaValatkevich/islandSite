import { BabyBed } from "../assets/icons/features/BabyBed";
import { Balcony } from "../assets/icons/features/Balcony";
import { Conditioner } from "../assets/icons/features/Conditioner";
import { Dishes } from "../assets/icons/features/Dishes";
import { Dishwasher } from "../assets/icons/features/Dishwasher";
import { Fridge } from "../assets/icons/features/Fridge";
import { Hairdryer } from "../assets/icons/features/Hairdryer";
import { Internet } from "../assets/icons/features/Internet";
import { Iron } from "../assets/icons/features/Iron/Iron";
import { KitchenIcon } from "../assets/icons/features/KitchenIcon";
import { Mangal } from "../assets/icons/features/Mangal";
import { Microwave } from "../assets/icons/features/Microwave";
import { Parking } from "../assets/icons/features/Parking";
import { Patio } from "../assets/icons/features/Patio";
import { PersonalPier } from "../assets/icons/features/PersonalPier";
import { Shower } from "../assets/icons/features/Shower";
import { Stove } from "../assets/icons/features/Stove";
import { Terrace } from "../assets/icons/features/Terrace";
import { TV } from "../assets/icons/features/TV";
import { WashingMaсhine } from "../assets/icons/features/WashingMaсhine";

export const getFeaturesIcon = (
  id: number,
  littleIcon?: boolean,
): JSX.Element | null => {
  switch (id) {
    case 1:
      return Internet({ littleIcon });
    case 2:
      return Parking({ littleIcon });
    case 3:
      return Terrace({ littleIcon });
    case 4:
      return Balcony({ littleIcon });
    case 5:
      return Conditioner({ littleIcon });
    case 6:
      return TV({ littleIcon });
    case 7:
        return Patio({ littleIcon });
    case 8:
      return Mangal({ littleIcon });
    case 9:
      return PersonalPier({ littleIcon });
    case 10:
      return KitchenIcon({ littleIcon });
    case 11:
      return Fridge({ littleIcon });
    case 12:
      return Dishes({ littleIcon });
    case 13:
      return Stove({ littleIcon });
    case 14:
      return Microwave({ littleIcon });
    case 15:
      return Dishwasher({ littleIcon });
    case 16:
      return BabyBed({ littleIcon });
    case 17:
      return Shower({ littleIcon });
    case 18:
      return WashingMaсhine({ littleIcon });
    case 19:
      return Iron({ littleIcon });
    case 20:
      return Hairdryer({ littleIcon });
      
    default:
      return null;
  }
};

export const getFeaturesText = (id: number): string | null => {
  switch (id) {
    case 1:
      return "Бесплатный Wi-Fi";
    case 2:
      return "Бесплатная парковка";
    case 3:
      return "Терраса";    
    case 4:
      return "Балкон";
    case 5:
      return "Кондиционер";
    case 6:
      return "Телевизор";    
    case 7:
      return "Патио";
    case 8:
      return "Мангал";
    case 9:
      return "Личный пирс";
    case 10:
      return "Кухня";
    case 11:
      return "Холодильник";
    case 12:
        return "Посуда";
    case 13:
      return "Плита";
    case 14:
      return "Микроволновая печь";
    case 15:
      return "Посудомоечная машина";
    case 16:
      return "Мебель для грудных детей";
    case 17:
      return "Душ/ванна";
    case 18:
        return "Стиральная машина";  
    case 19:
      return "Утюг";
    case 20:
      return "Фен";

    default:
      return null;
  }
};
