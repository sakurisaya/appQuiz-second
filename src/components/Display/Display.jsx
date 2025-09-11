// 問題タイトル
export default function Display({children}) {
  return (
    <div className="flex flex-col items-center gap-5 text-xl md:text-3xl text-start mb-8 w-full">{children}</div>
  )
}
