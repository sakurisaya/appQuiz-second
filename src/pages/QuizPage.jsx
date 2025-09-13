import { useEffect, useRef, useState } from "react";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display";
import { quizdataBasic, quizdataAdvance } from "../data/quiz";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "../const";

export default function QuizPage() {

  const { state } = useLocation();
  const course = state?.course || "basic";
  const quizdata = course === "advance" ? quizdataAdvance : quizdataBasic

  const [quizIndex, setQuizIndex] = useState(0);
  const [answerLogs, setAnswerLogs] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const navigation = useNavigate();
  const MAX_QUIZ_LEN = quizdata.length;

  const optionsContainerRef = useRef(null)

  const handleClick = (clickedIndex) => {
    setSelectedAnswers(prev => [...prev, clickedIndex]);
    setQuizIndex(prev => prev + 1);
  };

  useEffect(() => {
    if (selectedAnswers.length === MAX_QUIZ_LEN) {
      const correctNum = selectedAnswers.filter((sel, i) => sel === quizdata[i].answerIndex).length;
      navigation(ROUTES_PATH.RESULT, {
        state: {
          maxQuizLen: MAX_QUIZ_LEN,
          correctNumLen: correctNum,
          selectedAnswers,
          course,
        }
      });
    }
  }, [selectedAnswers, MAX_QUIZ_LEN, quizdata,navigation]);

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
      {quizdata[quizIndex] && <Display> <span className="text-5xl font-semibold text-cyan-500 opacity-30 mr-2">Q{quizIndex + 1}</span>{quizdata[quizIndex].question} </Display>}
      <div ref={optionsContainerRef} key={`quiz-${quizIndex}`}>
      {quizdata[quizIndex] && quizdata[quizIndex].options.map((option, index) =>
          <Button key={`option-${index}`} onClick={() => handleClick(index)} variant="quiz">{option}</Button>
        )}
        </div>
    </>
  );
}
