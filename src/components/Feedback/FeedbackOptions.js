import React from 'react';
import shortid from 'shortid';
import styles from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(elem => {
        return (
          <button
            key={elem}
            id={shortid.generate()}
            className={styles.btn}
            type="button"
            onClick={onLeaveFeedback}
          >
            {elem}
          </button>
        );
      })}
    </>
  );
};

export default FeedbackOptions;
