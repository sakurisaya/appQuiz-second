import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ROUTES_PATH } from "./const"
import Home from "./pages/Home"
import QuizPage from "./pages/QuizPage"
import ResultPage from "./pages/ResultPage"
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES_PATH.HOME} element={<Home/>} />
        <Route path={ROUTES_PATH.QUIZ} element={<QuizPage/>} />
        <Route path={ROUTES_PATH.RESULT} element={<ResultPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
