import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ROUTES_PATH } from "./const"
import Home from "./pages/Home"
import QuizPage from "./pages/QuizPage"
import ResultPage from "./pages/ResultPage"
import "./App.css";
import DetailPage from "./pages/DetailPage"

function App() {
  return (
    <BrowserRouter basename="/appQuiz-second">
      <Routes>
        <Route path={ROUTES_PATH.HOME} element={<Home/>} />
        <Route path={ROUTES_PATH.QUIZ} element={<QuizPage/>} />
        <Route path={ROUTES_PATH.RESULT} element={<ResultPage/>} />
        <Route path={ROUTES_PATH.DETAIL} element={<DetailPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
