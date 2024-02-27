import { MouseEventHandler, useState } from "react";
import { BigLogo } from "../../assets/icons/BigLogo";
import { ContactsInfo } from "../ContactsInfo";
import { Container } from "../Container";
import styles from "./Footer.module.scss";
import PolicyAgreement from './../PolicyAgreement';

export const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [typeModal, setTypeModal] = useState("");
    const openModal = (type:string) => {
        setIsOpen(true)
        setTypeModal(type)
    }
    return (
        <>
            <div className={styles.footer}>
                <Container>
                    <ContactsInfo/>
                    <div className={styles.line}/>
                    <div className={styles["last-row"]}>
                        <div>
                            <span onClick={()=>openModal("policy")} >Политика конфиденциальности</span>
                            <span onClick={()=>openModal("agreement")} >Пользовательское соглашение</span>
                        </div>
                        <div >Сайт создан на платформе<a href="https://travelweb.dev/" target="_blank">©TravelWeb 2023г.</a></div>
                    </div>
                </Container>
            </div>
            {isOpen &&
                <PolicyAgreement type={typeModal}
                                 onClose={() => setIsOpen(false)}
                                 isOpen={true}
                />}
        </>
    );
};