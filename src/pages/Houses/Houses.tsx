import { BeatLoader } from "react-spinners";

import { ToFormButton } from "../../components/buttons/toFormButton";
import HouseBigCard from "../../components/cards/HouseBigCard";
import { FaceBlock } from "../../components/FaceBlock/FaceBlock";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { useGetObjectsQuery } from "../../reduxTools/requests/apiRequests";
import { useDatas } from "../../services/useDatas";
import { useRate } from "../../services/useRate";
import { House } from "../../types";

import styles from "./Houses.module.scss";

export const Houses = () => {
  const { data } = useGetObjectsQuery();
  const datas = useDatas();
  const { currency, cur_rate, cur_scale } = useRate();
  
  const { title, titleHouse, house_back, nameForSearchButton } = datas;
  
  return (
    <>
      <FaceBlock title={titleHouse} image={house_back} />
      <HomeBlockTemplate title="">
        <div className={styles["houses-container"]}>
          {data ? (
            data.map((house: House) => {
              return (
                <HouseBigCard
                  {...house}
                  key={house.id}
                  currency = {currency}
                  cur_scale = {cur_scale}
                  cur_rate={cur_rate} 
                />
              );
            })
          ) : (
            <div className={styles.preload}>
              <BeatLoader color="#583711" />
            </div>
          )}
        </div>
      </HomeBlockTemplate>
      <HomeBlockTemplate>
        <ToFormButton value={title} buttonValue={nameForSearchButton} />
      </HomeBlockTemplate>
    </>
  );
};
