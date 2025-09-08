import Button from "../components/Button/Button"
import { ROUTES_PATH } from "../const"
import styles from "./pages.module.css";
function Home() {
  return (
    <><p  className={styles.homeIcon}><img src="/appQuiz-second/img/icon.png" alt="" width={50} height={50} /></p>
      <br />
      <h1 className={styles.Home_ttl}>HAIR & MAKE UP QUIZ</h1>
      <p className="text-xm mb-5">あなたの美容偏差値は？</p>
      <br />
      <Button to={ROUTES_PATH.QUIZ} state= {{ course: "basic"}}>BASIC</Button>
      <Button to={ROUTES_PATH.QUIZ} state= {{ course: "advance"}}>ADVANCE</Button>
    </>
  )
}

export default Home
