import { Link } from "react-router-dom"
import styles from "./Button.module.css";
function Button({ to, children, onClick }) {
  // `to` が渡されてたら Link として動く
  if (to) {
    return (
      <Link
        to={to}
        className={styles.button}
      >
        {children}
      </Link>
    )
  }

  // 通常のボタン
  return (
    <button
      className={styles.button}
      type="button" onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
