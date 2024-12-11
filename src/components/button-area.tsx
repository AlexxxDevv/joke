import styles from './button-area.module.css';
import { FC } from "react";

type ButtonProps = {
    text: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick: any;
}

export const ButtonArea: FC<ButtonProps> = ({text, onClick}) => {
    return (
        <div className={styles.area}>
            <button onClick={onClick} className={styles.button}>{text}</button>
        </div>
    )
}