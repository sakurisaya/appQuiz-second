import { useReward } from 'react-rewards';
import { useEffect } from 'react';
export default function Result({maxQuizLen, correctNumLen}) {
  const { reward, isAnimating } = useReward('rewardId', 'confetti');

  useEffect(() =>{
    const timer =setTimeout(() => reward(),2500);
    return () => clearTimeout(timer);
  }, [reward]);

  return (
    <>
    <div className="grid place-items-center gap-2.5 text-base">
    あなたの正解数は…
    <span className="text-3xl font-semibold">{`全 ${maxQuizLen} 問中 ${correctNumLen}`}問正解</span>
    でした！
    </div>

    <span id="rewardId" />
    </>
  )
}
