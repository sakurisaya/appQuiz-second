export default function Loading({active}) {
  return (
    <div className={`bg-gray-800 fixed z-50 left-0 top-0 w-full h-full grid place-items-center text-white text-3xl transition-transform duration-500 ${active ? "translate-y-[-100%]" : ""}`}>
      {/* <div className={`${styles.loading} ${active ? styles.isActive : ""}`}> */}
      <span className="animate-shake text-3xl">- 結果発表 -</span>
    </div>
  )
}
