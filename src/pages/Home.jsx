import Button from "../components/Button/Button"
import { ROUTES_PATH } from "../const"

function Home() {
  return (
    <>
      <h1>HAIR & MAKE QUIZ</h1>
      <br />
      <Button to={ROUTES_PATH.QUIZ} state= {{ course: "basic"}}>BASIC</Button>
      <Button to={ROUTES_PATH.QUIZ} state= {{ course: "advance"}}>ADVANCE</Button>
    </>
  )
}

export default Home
