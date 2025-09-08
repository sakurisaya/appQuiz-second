import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display";
import { quizDateBasic, quizDateAdvance } from "../date/quiz";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "../const";
import styles from "./Pages.module.css";

export default function QuizPage() {

  const { state } = useLocation();
  const course = state?.course || "basic";
  const quizDate = course === "advance" ? quizDateAdvance : quizDateBasic

  const [quizIndex, setQuizIndex] = useState(0);
  const [answerLogs, setAnswerLogs] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const navigation = useNavigate();
  const MAX_QUIZ_LEN = quizDate.length;

  const handleClick = (clickedIndex) => {
    setSelectedAnswers(prev => [...prev, clickedIndex]);
    setQuizIndex(prev => prev + 1);
  };

  useEffect(() => {
    if (selectedAnswers.length === MAX_QUIZ_LEN) {
      const correctNum = selectedAnswers.filter((sel, i) => sel === quizDate[i].answerIndex).length;
      navigation(ROUTES_PATH.RESULT, {
        state: {
          maxQuizLen: MAX_QUIZ_LEN,
          correctNumLen: correctNum,
          selectedAnswers,
          course,
        }
      });
    }
  }, [selectedAnswers, MAX_QUIZ_LEN, quizDate,navigation]);

  return (
    <>
      {quizDate[quizIndex] && <Display> <span className={styles.quizNum}>Q{quizIndex + 1}.</span>{quizDate[quizIndex].question} </Display>}
      {quizDate[quizIndex] && quizDate[quizIndex].options.map((option, index) =>
          <Button key={`option-${index}`} onClick={() => handleClick(index)} variant="quiz">{option}</Button>
        )}
    </>
  );
}
