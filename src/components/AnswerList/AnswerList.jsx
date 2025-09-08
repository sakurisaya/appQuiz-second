import styles from "./AnswerList.module.css";
import { useEffect } from 'react';
export default function AnswerList({quizDate, selectedAnswers}) {


  return (
    <>
      <ul className={styles.answerList}>
      {quizDate.map((q, i) =>{
        const userIdx = selectedAnswers[i];
        const correctIdx = q.answerIndex;
        const isCorrect = userIdx === correctIdx;
        return(
      <li key={i} className={isCorrect ? styles.correct : styles.incorrect}>
        <p className={styles.question}>{`Q${i + 1}. ${q.question}`}</p>
        <p className={styles.answer}><span className={styles.label}>回答</span> {q.options[userIdx] ?? "未回答"}</p>
        <p><span className={styles.label}>正解</span> {q.options[correctIdx]}</p>
        <p className={`text-end ${styles.judgement}`}>{isCorrect ? "〇 正解" : "× 不正解"}</p>
        <p className="mt-10">{q.explanation}</p>

      </li>
      );
      })}

    </ul>

    </>
  )
}