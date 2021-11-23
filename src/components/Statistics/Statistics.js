import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  persantage,
  onCountFeedback,
}) => {
  return (
    <div className={styles.statistic}>
      <h2 className={styles.statistic_title}>Statistics</h2>
      <ul className={styles.statistic_list}>
        <li key={'st-1'} className={styles.statistic_item}>
          Good: <span className="Counter__Value">{good}</span>
        </li>
        <li key={'st-2'} className={styles.statistic_item}>
          Neutral: <span className="Counter__Value">{neutral}</span>
        </li>
        <li key={'st-3'} className={styles.statistic_item}>
          Bad: <span className="Counter__Value">{bad}</span>
        </li>
        <li key={'st-4'} className={styles.statistic_item}>
          Total: <span className="Counter__Value">{total}</span>
        </li>
        <li key={'st-5'} className={styles.statistic_item}>
          Positive feedback:{' '}
          <span className="Counter__Value">{persantage}%</span>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
