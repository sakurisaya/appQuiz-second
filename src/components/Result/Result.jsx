import { useReward } from 'react-rewards';
import styles from "./Result.module.css";
import { useEffect } from 'react';
export default function Result({maxQuizLen, correctNumLen}) {
  const { reward, isAnimating } = useReward('rewardId', 'confetti');

  useEffect(() =>{
    const timer =setTimeout(() => reward(),2500);
    return () => clearTimeout(timer);
  }, [reward]);

  return (
    <>
    <div className={styles.result}>
    あなたの正解数は…
    <span className={styles.resultHighlight}>{`全${maxQuizLen} 問中 ${correctNumLen}`}問正解</span>
    でした！
    </div>

    <span id="rewardId" />
    </>
  )
}
