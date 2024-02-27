import {ChangeEvent,useEffect, useRef, useState} from "react";
import {Controller, DefaultValues,FormProvider, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {Adress} from "../../../assets/icons/inputIcons/Adress";
import {Email} from "../../../assets/icons/inputIcons/Email";
import {HouseIcon} from "../../../assets/icons/inputIcons/HouseIcon";
import {Name} from "../../../assets/icons/inputIcons/Name";
import {Passport} from "../../../assets/icons/inputIcons/Passport";
import {Persons} from "../../../assets/icons/inputIcons/Persons";
import {Pets} from "../../../assets/icons/inputIcons/Pets";
import {Phone} from "../../../assets/icons/inputIcons/Phone";
import {Telegram} from "../../../assets/icons/inputIcons/Telegram";
import {closeFormStateAction} from "../../../reduxTools/formForOrderHouse/actions";
import {useCreatePurchaseMutation,useGetObjectsQuery} from "../../../reduxTools/requests/apiRequests";
import {getErrorText} from "../../../services/errorText";
import {countNumber, country, FormValues, gender, Purchases} from "../../../types";
import {MainButton} from "../../buttons/mainButton/MainButton";
import {Calendar} from "../Calendar";
import {FormInput} from "../FormInput";
import {SelectComponent} from "../SelectComponent";

import Modal from "./../../Modal";
import {PolicyAgreement} from './../../PolicyAgreement/PolicyAgreement';

import styles from "./Form.module.scss";

const defaultValues: DefaultValues<FormValues> = {
    address: "",
    agreement: false,
    comment: "",
    count_adult: {
        label: "1",
        value: 1
    },
    count_kids: {
        label: "0",
        value: 0
    },
    desired_arrival: new Date(),
    desired_departure: new Date(),
    email: "",
    fio: "",
    object: undefined,
    passport_country: undefined,
    pets: "",
    phone_number: "",
    sex: undefined,
    telegram: ""
}

export const Form = () => {
    const dispatch = useDispatch();
    const methods = useForm<FormValues>({
        defaultValues,
        mode: "onBlur",
    });
    const {
        handleSubmit,
        control,
        reset,
        formState: {errors},
        register
    } = methods;
    const {data: houses} = useGetObjectsQuery();
    const [createPurchase] = useCreatePurchaseMutation();
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const [openModal, setOpenModal] = useState(false);
    const [myClass, setMyClass] = useState("");
    const [modalContent, setModalContent] = useState("");
    const [textareaValue, setTextareaValue] = useState("");

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => setTextareaValue(e.target.value)

    const resizeTextArea = () => {
        textareaRef.current && (textareaRef.current.style.height = "90px");
        textareaRef.current && (textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px');
    };

    useEffect(resizeTextArea);

    const onSubmit = (data: FormValues) => {
        
        const purchase: Purchases = {
            object: data.object.value,
            fio: data.fio,
            sex: data.sex.value,
            passport_country: data.passport_country.value,
            address: data.address,
            phone_number: data.phone_number,
            email: data.email,
            telegram: data.telegram,
            desired_arrival: data.desired_arrival.toString(),
            desired_departure: data.desired_departure.toString(),
            count_adult: data.count_adult.value,
            count_kids: data.count_kids.value,
            pets: data.pets,
            comment: textareaValue
        }
        createPurchase(purchase)
            .unwrap()
            .then((response) => {
                setOpenModal(true);
                setMyClass("success wrapper")
                setModalContent("Заявка отправлена. В ближайшее время мы свяжемся с Вами для уточнения деталей " +
                    "брони. Спасибо что Вы с нами.")
                setTimeout(() => setOpenModal(false), 4000)
                reset(defaultValues);
                dispatch(closeFormStateAction())
            })
            .catch((error) => {
                
                setOpenModal(true);
                setMyClass("danger wrapper");
                setModalContent(getErrorText(error.data?.detail))
                setTimeout(() => setOpenModal(false), 4000)
            })
    };
    const [isOpenPolicy, setIsOpenPolicy] = useState(false);
    const [typeModal, setTypeModal] = useState("");
    const openPolicy = (type: string) => {
        setIsOpenPolicy(true)
        setTypeModal(type)
    }

    let countAdult: countNumber[] = Array.from({length: 20}, (_, i) => i + 1).map((item) => ({
        title: item
    }));
    let countKids: countNumber[] = Array.from(Array(10).keys()).map((item) => ({
        title: item
    }));

    if (houses === undefined) {
        return null;
    }
    
    return (
        <>
            <FormProvider {...methods} >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={`${styles.grid} ${styles["first-grid"]}`}>
                        <SelectComponent
                            optionBase={houses}
                            label="Домик"
                            icon={<HouseIcon/>}
                            name="object"
                            required={true}
                            isSearchable={false}
                            error={errors["object"] ? true : false}
                        />
                        <Calendar/>
                    </div>
                    <div className={`${styles.grid} ${styles["second-grid"]}`}>
                        <FormInput
                            type="text"
                            label="Ф.И.О."
                            name="fio"
                            required={true}
                            placeholder="Иванов Иван Иванович"
                            icon={<Name/>}
                            error={errors["fio"] ? true : false}
                        />
                        <SelectComponent
                            optionBase={gender}
                            label="Пол"
                            icon={<Persons/>}
                            name="sex"
                            required={true}
                            isSearchable={true}
                            error={errors["sex"] ? true : false}
                        />
                    </div>
                    <div className={`${styles.grid} ${styles["second-grid"]}`}>
                        <SelectComponent
                            optionBase={country}
                            label="Страна проживания"
                            icon={<Passport/>}
                            name="passport_country"
                            required={true}
                            isSearchable={true}
                            error={errors["passport_country"] ? true : false}
                        />
                        <FormInput
                            type="text"
                            label="Адрес регистрации"
                            name="address"
                            required={true}
                            placeholder="ул. Ленина 42, кв 42, г. Минск, Беларусь"
                            icon={<Adress/>}
                            error={errors["address"] ? true : false}
                        />
                    </div>
                    <h2>контакты</h2>
                    <div className={`${styles.grid} ${styles.contacts}`}>
                        <FormInput
                            type="tel"
                            label="Телефон"
                            name="phone_number"
                            required={true}
                            placeholder="+375 (29) 123-45-67"
                            icon={<Phone/>}
                            error={errors["phone_number"] ? true : false}
                            pattern={/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){7,14}(\s*)?$/}
                        />
                        <FormInput
                            type="email"
                            label="Почта"
                            name="email"
                            required={true}
                            placeholder="ivanov@gmail.com"
                            icon={<Email/>}
                            error={errors["email"] ? true : false}
                            pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
                        />
                        <FormInput
                            type="text"
                            label="Telegram"
                            name="telegram"
                            required={false}
                            placeholder="@ivanov"
                            icon={<Telegram/>}
                            error={errors["telegram"] ? true : false}
                        />
                    </div>
                    <h2>подробности</h2>
                    <div className={`${styles.grid} ${styles.more}`}>
                        <SelectComponent
                            optionBase={countAdult}
                            label="Количество взрослых"
                            icon={<Persons/>}
                            name="count_adult"
                            required={true}
                            isSearchable={true}
                            error={errors["count_adult"] ? true : false}
                        />
                        <SelectComponent
                            optionBase={countKids}
                            label="Количество детей"
                            icon={<Persons/>}
                            name="count_kids"
                            required={true}
                            isSearchable={true}
                            error={errors["count_kids"] ? true : false}
                        />

                        <FormInput
                            type="text"
                            label="Путешествуете с домашними животными?"
                            name="pets"
                            required={false}
                            placeholder="Собака Корги"
                            icon={<Pets/>}
                            error={errors["pets"] ? true : false}
                        />
                    </div>
                    <div className={styles["textarea-container"]}>

                        <input type="checkbox" id="agr"
                               className={errors["agreement"] ? `${styles["customCheckbox"]} ${styles["error"]}` : styles["customCheckbox"]}
                               {...register("agreement", {
                                   required: true,
                               })}>
                        </input>
                        <label htmlFor="agr" className={errors["agreement"] ? `${styles["error"]}` : undefined}></label>
                        <span> Даю согласие на обработку моих персональных данных в соответствии с
              <span className={styles["modal-link"]} onClick={() => openPolicy("policy")}> Политикой </span>
              и <span className={styles["modal-link"]} onClick={() => openPolicy("agreement")}>Пользовательским соглашением</span>
            </span>
                    </div>
                    <div className={styles["textarea-container"]}>
                        <p>Комментарий</p>
                        <Controller
                            render={({field}) => (
                                <textarea
                                    {...field}
                                    placeholder="Комментарий"
                                    className={styles.textarea}
                                    ref={textareaRef}
                                    value={textareaValue}
                                    onChange={onChangeHandler}
                                />
                            )}
                            name="comment"
                            control={control}
                        />
                    </div>
                    <MainButton
                        className={styles["submit-button"]}
                        value={"Отправить"}
                        type="submit"
                    />
                </form>
            </FormProvider>
            {openModal &&
                <Modal myClass={myClass}
                       content={modalContent}
                       onClose={() => setOpenModal(false)}
                       isOpen={true}
                />}
            {isOpenPolicy &&
                <PolicyAgreement type={typeModal}
                                 onClose={() => setIsOpenPolicy(false)}
                                 isOpen={true}
                />}
        </>)
};