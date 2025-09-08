import Button from "../components/Button/Button"
import { ROUTES_PATH } from "../const"

function Home() {
  return (
    <>
      <h1>HAIR & MAKE UP QUIZ</h1>
      <p　className="text-xm">あなたの美容偏差値は？</p>
      <br />
      <Button to={ROUTES_PATH.QUIZ} state= {{ course: "basic"}}>BASIC</Button>
      <Button to={ROUTES_PATH.QUIZ} state= {{ course: "advance"}}>ADVANCE</Button>
    </>
  )
}

export default Home
