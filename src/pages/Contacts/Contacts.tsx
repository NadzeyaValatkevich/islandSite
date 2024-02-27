import {
  FullscreenControl,
  GeolocationControl,
  Map,
  Placemark,
  YMaps,
} from "@pbe/react-yandex-maps";

import { BigLogo } from "../../assets/icons/BigLogo";
import { ContactsInfo } from "../../components/ContactsInfo";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { useGetInfoQuery } from "../../reduxTools/requests/apiRequests";

import styles from "./Contacts.module.scss";

export const Contacts = () => {
  const { data } = useGetInfoQuery();
  const latitude = data ? +data[0].latitude : 55.167786;
  const longitude = data ? +data[0].longitude : 28.250614;

  return (
    <>
      <HomeBlockTemplate title="">
        <div className={styles["contacts-block"]}>
          <div className={styles.logo}>
            <BigLogo />
          </div>
          <ContactsInfo hideLogo={true} className={styles.contacts} />
        </div>
      </HomeBlockTemplate>
      <YMaps>
        <Map
          defaultState={{
            center: [latitude, longitude],
            zoom: 14,
            controls: [],
          }}
          className={styles.map}
        >
          <GeolocationControl options={{ float: "right" }} />
          <FullscreenControl />
          <Placemark geometry={[latitude, longitude]} />
        </Map>
      </YMaps>
    </>
  );
};
