
import css from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
      <ul className={css.statList}>
        <li className={css.statItem}>Good: {good}</li>
        <li className={css.statItem}>Neutral: {neutral}</li>
        <li className={css.statItem}>Bad: {bad}</li>
        <li className={css.statItem}>Total: {total}</li>
        <li className={css.statItem}>Positive feedback: {positivePercentage}%</li>

      </ul>
    );
  };
  