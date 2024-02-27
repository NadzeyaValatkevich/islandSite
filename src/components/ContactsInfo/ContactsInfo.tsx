import { BigLogo } from "../../assets/icons/BigLogo";
import { ApplePay } from "../../assets/icons/payments/ApplePay";
import { BelCard } from "../../assets/icons/payments/BelCard";
import { BelCardSecure } from "../../assets/icons/payments/BelCardSecure";
import { BePaid } from "../../assets/icons/payments/BePaid";
import { GPay } from "../../assets/icons/payments/GPay";
import { MasterCard } from "../../assets/icons/payments/MasterCard";
import { MasterCardCheck } from "../../assets/icons/payments/MasterCardCheck";
import { Mir } from "../../assets/icons/payments/Mir";
import { SamsungPay } from "../../assets/icons/payments/SamsungPay";
import { Visa } from "../../assets/icons/payments/Visa";
import { VisaSecure } from "../../assets/icons/payments/VisaSecure";
import { YPay } from "../../assets/icons/payments/YPay";
import { Facebook } from "../../assets/icons/socials/Facebook";
import { Instagram } from "../../assets/icons/socials/Instagram";
import { useGetInfoQuery } from "../../reduxTools/requests/apiRequests";
import { ClassName } from "../../types";

import styles from "./ContactsInfo.module.scss";

interface IProps extends ClassName {
  hideLogo?: boolean;
}

export const ContactsInfo = (props: IProps) => {
  const { hideLogo = false, className } = props;
  const { data } = useGetInfoQuery();
  const phones = data
    ? data[0].phones.map((item, index) => {
        return <p key={index}>{item}</p>;
      })
    : null;
  return (
    <div
      className={
        className
          ? `${styles["contacts-info"]} ${className}`
          : `${styles["contacts-info"]}`
      }
    >
      {hideLogo ? null : (
        <div className={styles["footer-logo"]}>
          <BigLogo />
        </div>
      )}
      <div className={styles["contacts-header"]}>
        <div className={styles.title}>Контакты</div>
        <div className={styles.subtitle}>Мы рады видеть вас!!!</div>
      </div>
      <div className={styles["contacts-description"]}>
        {data && (
          <div className={styles.text}>
            <p>{data[0].address}</p>
            <p>{data[0].comment}</p>
            <p>
              Координаты: {data[0].latitude}, {data[0].longitude}
            </p>
          </div>
        )}
        <div className={styles.phones}>{phones}</div>
        <div className={styles.socials}>
          <a
            href={data && data[0].social[0].Facebook}
            target="_blank"
            rel="noreferrer"
          >
            <Facebook />
          </a>
          <a
            href={data && data[0].social[0].Instagram}
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
        </div>
      </div>
      <div className={styles.payments}>
        <Visa />
        <VisaSecure />
        <MasterCard />
        <MasterCardCheck />
        <BelCard />
        <BelCardSecure />
        <BePaid />
        <GPay />
        <ApplePay />
        <SamsungPay />
        <Mir />
        <YPay />
      </div>
    </div>
  );
};
