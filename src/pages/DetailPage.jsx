import { Navigate, useLocation } from "react-router-dom";
import { quizdataBasic, quizdataAdvance } from "../data/quiz";
import { ROUTES_PATH } from "../const";
import AnswerList from "../components/AnswerList/AnswerList";
import Button from "../components/Button/Button"
import Result from "../components/Result/Result";


export default function DetailPage() {
  const {state} = useLocation() || {};
  console.log(state);

  if(!state?.selectedAnswers) return <Navigate to={ROUTES_PATH.HOME} replace/>;

  const { selectedAnswers, maxQuizLen, correctNumLen, course } = state;
  const quizdata = course === "advance" ? quizdataAdvance : quizdataBasic;


  return (
    <>
    <h2 className="text-4xl">詳細結果</h2>
    <div className="text-xl font-semibold mt-2">全{maxQuizLen}問中{correctNumLen}問正解</div>
    <AnswerList quizdata={quizdata} selectedAnswers={selectedAnswers}/>
    <Button to={ROUTES_PATH.HOME}>もう一回チャレンジする</Button>
    </>
  )
}
