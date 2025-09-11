import { Link } from "react-router-dom"

function Button({ to, children, onClick, state ,variant}) {
  const classNames =[ "btn"];
  if (variant === "quiz") classNames.push("quizButton");

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
