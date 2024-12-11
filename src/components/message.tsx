import styles from './message.module.css';
import { FC } from "react";

type MesageProps = {
    img: string;
    name: string;
    text: string;
    recieved: boolean;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Message: FC<MesageProps> = ({ img, name, text, recieved}) => {
    return (
        <div className={recieved ? styles.recievedcontainer : styles.sendcontainer}>
            <p className={styles.name}>{name}</p>
            <div className={styles.subcontainer}>
                <img src={img} alt='аватарка' className={styles.avatar} />
              { recieved ?  (<div className={ `${styles.text} ${styles.receive}`}>{text}</div>) : (<div className={ `${styles.text} ${styles.send}`}>{text}</div>)}
            </div>
        </div>
    )
}