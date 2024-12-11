import { useState } from "react";
import styles from './fieldset.module.css';
import Checkbox from "./checkbox";
import questions from "../data/questions";

function Fieldset() {
  const [runCheckAnswer, setRunCheckAnswer] = useState(false);
  function checkAnswer(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setRunCheckAnswer(true);
  }

  function resetAnswer(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setRunCheckAnswer(false);
  }
  return (
    <>
      <form>
        <p>Пройдите этот тест чтобы увеличить конверсию при откликах</p>
        <fieldset>
          {questions.map((item) => <Checkbox key={item.id} checked={item.checked} question={item.question} comment={item.comment} runCheckAnswer={runCheckAnswer} />)}
        </fieldset>
      </form>
      <button className={styles.button} onClick={checkAnswer}>проверить</button>
      <button onClick={resetAnswer}>пройти тест еще раз</button>
    </>
  )
}

export default Fieldset;