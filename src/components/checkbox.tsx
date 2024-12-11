/* eslint-disable @typescript-eslint/no-unused-expressions */
import { FC, useEffect, useState } from 'react';
import styles from './checkbox.module.css';

type CheckboxProps = {
    checked: boolean;
    runCheckAnswer: boolean;
    question: string;
    comment: string;
}

const Checkbox: FC<CheckboxProps> = ({ checked, runCheckAnswer, question, comment }) => {
    const [state, setState] = useState('');
    const [showText, setShowText] = useState(false);
    useEffect(() => {
        setState('default')
         if (runCheckAnswer && checked) {
            (state === 'checked') ? setState('checkedtrue') : setState('uncheckedtrue');
            if (state === 'checked') {
                setShowText(true);
            }
        }
        if (runCheckAnswer && !checked) {
            (state === 'checked') ? setState('checkedfalse') : setState('default');
            if (state === 'checked') {
                setShowText(true);
            }
        }
    }, [runCheckAnswer])
    let checkboxStyle;
    if (state === 'default') {
        checkboxStyle = styles.label;
    } else if (state === 'checked') {
        checkboxStyle = styles.labelChecked
    } else if (state === 'checkedtrue') {
        checkboxStyle = styles.labelCheckedTrue
    } else if (state === 'checkedfalse') {
        checkboxStyle = styles.labelCheckedFalse
    } else if (state === 'uncheckedtrue') {
        checkboxStyle = styles.labelUncheckedTrue
    }

    function onClick() {
        if (!runCheckAnswer && state === 'default') { setState('checked') } else if (!runCheckAnswer && state === 'checked') { setState('default') }
    }



    return (
        <>
            <div className={styles.container}>
                <label className={checkboxStyle} onClick={onClick}></label>
                <span>{question}</span>
            </div>
            {showText && <p>{comment}</p>}

        </>
    )
}

export default Checkbox;