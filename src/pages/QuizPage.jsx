import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display";
import quizDate from "../date/quiz";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "../const";

export default function QuizPage() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answerLogs, setAnswerLogs] = useState([]);

  const navigation = useNavigate();
  const MAX_QUIZ_LEN = quizDate.length;

  const handleClick = (clickedIndex) => {
    if (clickedIndex === quizDate[quizIndex].answerIndex) {
      setAnswerLogs((prev) => [...prev, true]);
    } else {
      setAnswerLogs((prev) => [...prev, false]);
    }
    setQuizIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (answerLogs.length === MAX_QUIZ_LEN) {
      const correctNum = answerLogs.filter((answer) => answer === true)
      navigation(ROUTES_PATH.RESULT, {
        state: {
          maxQuizLen: MAX_QUIZ_LEN,
          correctNumLen: correctNum.length
        }
      });
    }
  }, [answerLogs, MAX_QUIZ_LEN, navigation]);

  return (
    <>
      {quizDate[quizIndex] && <Display> {`Q${quizIndex + 1}.${quizDate[quizIndex].question}`} </Display>}
      {quizDate[quizIndex] && quizDate[quizIndex].options.map((option, index) =>
          <Button key={`option-${index}`} onClick={() => handleClick(index)}>{option}</Button>
        )}
    </>
  );
}
