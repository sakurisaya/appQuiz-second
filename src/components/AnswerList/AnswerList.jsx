import { useEffect } from 'react';
export default function AnswerList({quizdata, selectedAnswers}) {


  return (
    <>
      <ul className="mt-[5vh] mb-[5vh] list-none text-white tracking-widest">
      {quizdata.map((q, i) =>{
        const userIdx = selectedAnswers[i];
        const correctIdx = q.answerIndex;
        const isCorrect = userIdx === correctIdx;
        return(
      <li key={i} className={`p-8 rounded-md text-start mb-4 shadow ${isCorrect ? "text-cyan-500 bg-gray-50" : "bg-cyan-500"}`}>
        <p className="text-lg mb-2.5">{`Q${i + 1}. ${q.question}`}</p>
        <p><span className="font-semibold inline-block min-w-[4em] text-center">回答</span> {q.options[userIdx] ?? "未回答"}</p>
        <p><span className="font-semibold inline-block min-w-[4em] text-center">正解</span> {q.options[correctIdx]}</p>
        <p className={`text-end mt-4 font-semibold w-fit ml-auto p-1 px-3 rounded-sm ${isCorrect ? "text-white bg-cyan-500" : "bg-gray-50 text-pink-500"}`}>{isCorrect ? "〇 正解" : "× 不正解"}</p>
        <p className="mt-7">{q.explanation}</p>

      </li>
      );
      })}

    </ul>

    </>
  )
}