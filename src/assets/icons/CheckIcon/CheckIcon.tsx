import styles from "./CheckIcon.module.scss";

export const CheckIcon = () => {
    return (
        <div className={styles.checkIcon}>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M20 6L9 17L4 12"
                    stroke="#107A54"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};
