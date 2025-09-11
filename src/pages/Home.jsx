import Button from "../components/Button/Button"
import { ROUTES_PATH } from "../const"
function Home() {
  return (
    <><p className="animate-fuwafuwa w-fit mx-auto mb-8 rounded-full bg-gray-50 p-2 duration-500 transition-transform [filter:drop-shadow(10px_15px_10px_#cccccc77)]"><img src="/appQuiz-second/img/icon.svg" alt="" width={50} height={50} /></p>
      <br />
      <h1 className="mb-5 md:text-3xl text-3xl max-md:text-[7vw]">HAIR & MAKE UP QUIZ</h1>
      <p className="text-xm mb-5">あなたの美容偏差値は？</p>
      <br />
      <Button to={ROUTES_PATH.QUIZ} state= {{ course: "basic"}}>BASIC</Button>
      <Button to={ROUTES_PATH.QUIZ} state= {{ course: "advance"}}>ADVANCE</Button>
    </>
  )
}

export default Home
