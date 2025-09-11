import { useLocation } from "react-router-dom";
import Button from "../components/Button/Button"
import Loading from "../components/Loading/Loading"
import Result from "../components/Result/Result";
import { ROUTES_PATH } from "../const";
import { useEffect, useState } from "react";


function ResultPage() {
const [active, setActive] = useState(false);
const location = useLocation();
const maxQuizLen = location.state.maxQuizLen;
const correctNumLen = location.state.correctNumLen;
const {state} = useLocation() || {};
// state: { maxQuizLen, correctNumLen, selectedAnswers }

useEffect(() =>{
  setTimeout(() => setActive(true),2000);
},[])

  return (
    <>
    <Loading active={active}/>
      <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen}/>
      <br />
      <Button to={ROUTES_PATH.DETAIL} state={state}>詳しく見る</Button>
      <Button to={ROUTES_PATH.HOME}>もう一回！</Button>
    </>
  )
}

export default ResultPage
