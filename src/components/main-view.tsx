import { ButtonArea } from './button-area';
import styles from './main-view.module.css';
import { Message } from './message';
import oslik from '../assets/oslik.png';
import pyatochok from '../assets/pyatochok.webp';
import { useState } from 'react';
import Fieldset from './fieldset';

export const MainView = () => {
    const [showText, setShowText] = useState(false);
    const [showAnotherText, setShowAnotherText] = useState(false);
    const [showButton, setShowButton] = useState({
        firstButton :  true,
        secondButton : false,
        thirdButton: false
    });
    const handleShowText = () => {
        setShowText(true)
        if(showButton.firstButton === true && showButton.secondButton === false) {
            setShowButton({firstButton : false, secondButton : true, thirdButton : false})
        } else if(showButton.secondButton === true && showButton.thirdButton === false) {
            setShowButton({firstButton : false, secondButton : false, thirdButton : true})
            setShowAnotherText(true)
        }else if(showButton.thirdButton === true) {
            setShowButton({firstButton : false, secondButton : false, thirdButton : false})
        }
    }
    return (
        <div className={styles.container}>
            <p className={styles.textmain}>
                На дворе стоял декабрь.Дождливый, мрачный Декабрь 2024 года. Тысячи выпускников курсов по программированию пытались найти свою первую работу в IT.
                Искал ее и Ослик Иа-Иа недавно закончивший курс по вэб разработке на JavaScript. Он стоял один-одинешенек в заросшем чертополохом уголке леса, широко расставив передние ноги и свесив голову набок, уставившись в монитор ноутбука и пролистывал вакансии на одном известном сайте. Иногда он грустно думал: «Почему такие высокие требования при такой маленькой зарплате?», а иногда: «По какой причине мне отказали, уж не потому ли, что я осел?», а иногда он думал даже так: «Какой же отсюда следует вывод ?» И неудивительно, что порой он вообще переставал понимать, о чем же он, собственно, думает.
                Как раз в этот момент ему пришло уведомление в месенджере о скором начале HR-консультации поэтому, сказать вам по правде, Иа очень обрадовался, что может на минутку перестать думать и просто послушать других таких же джунов как и он. На таких консультациях каждый участник расказывал о своих успехах в поиске за последние пару недель. Ведущим на этой консультации выступал Пяточок и вот он дал слово ослику: "Привет Иа, рассказывай какие у тебя успехи в поиске за последнюю неделю?"
            </p>
            {showButton.firstButton === true && <ButtonArea text={'Успехи?...'}  onClick = {handleShowText} /> }
            {showText === true && < Message img={pyatochok} name={'HR-консультант Пяточок'} text={'Привет Иа, рассказывай какие у тебя успехи в поиске за последнюю неделю?'} recieved={true} />}
            {showText === true &&  < Message img={oslik} name={'Junior developer Ослик Иа'} text={'Нууу, на этой недели я получил 10 отказов на сайте поиска работы....'} recieved={false} />}
            {showText === true && < Message img={pyatochok} name={'HR-консультант Пяточок'} text={'Это очень круто, ведь на той неделе у тебя было целых 20 отказов, а теперь всего 10...'} recieved={true} />}
            {showButton.secondButton === true && <ButtonArea text={'Я бы не спешил радоваться...'}  onClick = {handleShowText} /> }
            {showAnotherText === true &&  < Message img={oslik} name={'Junior developer Ослик Иа'} text={'Да, наверно это круто, но на этой неделе я сделал всего 10 откликов....'} recieved={false} />}
            {showAnotherText === true && < Message img={pyatochok} name={'HR-консультант Пяточок'} text={'Не унывай, Иа, пройди тест, чтобы понять что ты можешь сделать еще для увеличения конверсии при откликах'} recieved={true} />}
            {showButton.thirdButton === true && <ButtonArea text={'Пройти тест'}  onClick = {handleShowText} /> }
            {!showButton.firstButton && !showButton.secondButton && !showButton.thirdButton && <Fieldset />}
       </div>
    )
} 