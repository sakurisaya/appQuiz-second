import { Link } from "react-router-dom"
import styles from "./Button.module.css";

function Button({ to, children, onClick, state ,variant}) {
  const classNames = [styles.button];
  if (variant === "quiz") classNames.push(styles.quizButton);

  // `to` が渡されてたら Link として動く
  if (to) {
    return (
      <Link
        to={to} state={state}
      className={classNames.join(" ")}
      >
        {children}
      </Link>
    )
  }

  // 通常のボタン
  return (
    <button
    className={classNames.join(" ")}
      type="button" onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
