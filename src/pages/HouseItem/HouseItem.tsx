import { useParams } from "react-router";
import { BeatLoader } from "react-spinners";

import { Person } from "../../assets/icons/features/Person";
import { ToFormButton } from "../../components/buttons/toFormButton";
import { LittleKitchenCard } from "../../components/cards/LittleKitchenCard";
import { FaceBlock } from "../../components/FaceBlock/FaceBlock";
import { FlagItem } from "../../components/FlagItem";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { MyGallery } from "../../components/ImageGalleryCarousel";
import {
  useGetFeedingInfoQuery,
  useGetObjectCurrentQuery,
} from "../../reduxTools/requests/apiRequests";
import { getBedsIcon, getBedsTitle } from "../../services/getBeds";
import {  getFeaturesIcon, getFeaturesText } from "../../services/getFeatures";
import { useDatas } from "../../services/useDatas";
import { useRate } from "../../services/useRate";

import styles from "./HouseItem.module.scss";

export const HouseItem = () => {
  const { id } = useParams();
  const { data } = useGetObjectCurrentQuery(id!);
  const { data: meal } = useGetFeedingInfoQuery();
  const datas = useDatas();
  const { title, nameForSearchButton } = datas;

  const { currency, cur_rate, cur_scale } = useRate();
    
  const price_weekday = data?.price_weekday
    ? currency==="BYN"? data.price_weekday
      : (Math.round((+data.price_weekday / cur_scale) * cur_rate)/ 10)* 10       
      : null;
  const price_weekdayScreen = price_weekday? `от ${price_weekday} BYN будние дни` : "цену уточняйте"
      
  const price_holiday = data?.price_holiday
    ? currency==="BYN"? data.price_holiday
    : (Math.round((+data.price_holiday / cur_scale) * cur_rate)/ 10)* 10      
    : price_weekday;

    const price_holidayScreen = price_holiday? `от ${price_holiday} BYN выходные дни` : "цену уточняйте"
  if (!data)
    return (
      <div className={styles.preload}>
        <BeatLoader color="#583711" />
      </div>
    );

  
  return (
    <>
      {JSON.stringify(data) !== "{}" ? (
        <>
          <FaceBlock title={data.title} image={data.photos[0]} />
          <HomeBlockTemplate>
            <div className={styles.container}>
              <div className={styles["house-info"]}>
                <h1>{data.title}</h1>
                <div className={styles["block-commonInfo"]}>
                  <div>
                    <span>{data.pers_num}</span>
                    <Person />
                  </div>
                  <div className={styles["beds-container"]}>
                    {data.rooms_types &&
                      data.rooms_types.map((el, index)=>{
                        for (let i = 0; i < 2; i++) {
                          if (el.type === "Спальня") {
                            return (
                              <p key={index}>
                                {el.count}
                                {el.count === 1
                                  ? " спальня"
                                  : el.count < 5
                                  ? " спальни"
                                  : " спален"}
                              </p>
                            );
                          }
                        }
                      })}
                  </div>
                </div>
              </div>
              <div className={styles["left-column"]}>
                <MyGallery images={data.photos} />
                <p className={styles["description-short"]}>
                  {data.description_short}
                </p>
                <p className={styles["description-long"]}>
                  {data.description_long}
                </p>
              </div>
              <div className={styles["right-column"]}>
                <ToFormButton
                  value={title}
                  buttonValue={nameForSearchButton}
                  className={styles.form}                  
                />
                <div className={styles.features}>
                  <h2>Удобства в домике</h2>
                  <div className={styles.line}></div>
                  <div className={styles.grid}>

                    {data.beds_types && data.beds_types.length > 0 ? (
                      data.beds_types.map((elem) => {
                        return(
                        <div className={styles["grid-item"]} key={elem.id}>
                        {getBedsIcon(elem.id, true)} {elem.count}
                        {getBedsTitle(elem.id,+elem.count )}
                       
                      </div>
                        )
                      })
                      
                    ) : null}

                    {data.features?.map((elem, index) => {
                      return (
                        <div className={styles["grid-item"]} key={index}>
                          {getFeaturesIcon(elem.id, true)}
                          {getFeaturesText(elem.id)}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.prices}>
                  <FlagItem value="За дом в сутки" className={styles.flag} />
                  <div className={styles.row}>{price_weekdayScreen}</div>
                  <div className={styles.row}>{price_holidayScreen}</div>
                </div>
                {meal && (
                  <LittleKitchenCard
                  currency = {currency}
                  cur_rate = {cur_rate}
                  cur_scale = {cur_scale}
                  data={meal}                    
                  />
                )}
              </div>
            </div>
          </HomeBlockTemplate>
        </>
      ) : (
        <div className={styles.preload}>
          <BeatLoader color="#583711" />
        </div>
      )}
    </>
  );
};
