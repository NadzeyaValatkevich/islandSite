import {RuleCard} from "../../components/cards/RuleCard";
import {HomeBlockTemplate} from "../../components/HomeBlockTemplate";
import {useGetRuleQuery} from "../../reduxTools/requests/apiRequests";

import {ToFormButton} from "./../../components/buttons/toFormButton/ToFormButton";

import styles from "./Rules.module.scss";
import {BeatLoader} from "react-spinners";
import React from "react";

export const Rules = () => {
    const {data} = useGetRuleQuery();

    return (
        <>
            <HomeBlockTemplate title="Правила усадьбы">
                {(data && data.length === 0) &&
                    <div className={styles.cap}>
                        Скоро здесь будет информация
                    </div>
                }
                {!data && (
                    <div className={styles.preload}>
                        <BeatLoader color="#583711"/>
                    </div>
                )}
                <div className={styles["rules-block"]}>
                    {data &&
                        data.map((el, index) => {
                            return <RuleCard key={index} content={el.content}/>;
                        })}
                </div>
            </HomeBlockTemplate>
            <HomeBlockTemplate>
                <ToFormButton className={styles.form}/>
            </HomeBlockTemplate>
        </>
    );
};
