import Button from "../components/Button/Button"
import { ROUTES_PATH } from "../const"

function Home() {
  return (
    <>
      <h1 className="text-[#707676]">HAIR & MAKE QUIZ</h1>
      <br />
      <Button to={ROUTES_PATH.QUIZ}>START!!</Button>
    </>
  )
}

export default Home
