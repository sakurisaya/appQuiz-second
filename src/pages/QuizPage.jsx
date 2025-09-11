import { useEffect, useRef, useState } from "react";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display";
import { quizDateBasic, quizDateAdvance } from "../date/quiz";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "../const";

export default function QuizPage() {

  const { state } = useLocation();
  const course = state?.course || "basic";
  const quizDate = course === "advance" ? quizDateAdvance : quizDateBasic

  const [quizIndex, setQuizIndex] = useState(0);
  const [answerLogs, setAnswerLogs] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const navigation = useNavigate();
  const MAX_QUIZ_LEN = quizDate.length;

  const optionsContainerRef = useRef(null)

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

  useEffect(() => {
    if (optionsContainerRef.current) {
      // Remove focus from any focused element
      if (document.activeElement && document.activeElement.blur) {
        document.activeElement.blur()
      }
    }
  }, [quizIndex])

  return (
    <>
      {quizDate[quizIndex] && <Display> <span className="text-5xl font-semibold text-cyan-500 opacity-30 mr-2">Q{quizIndex + 1}</span>{quizDate[quizIndex].question} </Display>}
      <div ref={optionsContainerRef} key={`quiz-${quizIndex}`}>
      {quizDate[quizIndex] && quizDate[quizIndex].options.map((option, index) =>
          <Button key={`option-${index}`} onClick={() => handleClick(index)} variant="quiz">{option}</Button>
        )}
        </div>
    </>
  );
}
