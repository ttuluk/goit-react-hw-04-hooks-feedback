import React, {useState, useEffect} from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from '../Notification';

export default function Feedback() {
  const [good, setGoodState] = useState(0);
  const [neutral, setNeutralState] = useState(0);
  const [bad, setBadState] = useState(0);
  const [total, setTotalState] = useState(0);
  const [persantage, setPersantageState] = useState(0);

  useEffect(() => {
    const totalSum = good + neutral + bad;
    setTotalState(prevState => totalSum);
    setPersantageState(()=> Math.round((good / totalSum) * 100));
  }, [good, neutral, bad]);

useEffect(() => {
    setPersantageState(()=> Math.round((good / total) * 100));
  }, [good, total]);

  const handleClick = event => {
    const option = event.target.textContent;

    if (option==='good') {
  setGoodState(prevState => (prevState + 1));
    };
    if (option==='neutral') {
  setNeutralState(prevState => (prevState + 1));
    };
    if (option==='bad') {
  setBadState(prevState => (prevState + 1));
    };
  };

  return (<>
    <FeedbackOptions
      options={['good', 'neutral', 'bad']}
      onLeaveFeedback={handleClick}
    />
    {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            persantage={persantage}
          />
        ) : (
          <Notification message={'No feedback given'} />
        )}
  </>
  );
};


// class oldFeedback extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = e => {
//     const option = e.target.textContent;
//     this.setState(prevState => {
//       return {
//         [option]: prevState[option] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const totalSum = good + neutral + bad;
//     return totalSum;
//   };

//   countPositiveFeedbackPercentage = total => {
//     const value = this.state.good;
//     if (total > 0) {
//       return Math.round((value / total) * 100);
//     }
//     return 0;
//   };

//   render() {
//     const totalEl = this.countTotalFeedback();
//     const persantageEl = this.countPositiveFeedbackPercentage(totalEl);
//     const { good, neutral, bad } = this.state;
//     return (
//       <>
//         <FeedbackOptions
//           options={['good', 'neutral', 'bad']}
//           onLeaveFeedback={this.handleClick}
//         />
//         {totalEl > 0 ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={totalEl}
//             persantage={persantageEl}
//           />
//         ) : (
//           <Notification message={'No feedback given'} />
//         )}
//       </>
//     );
//   }
// }

export { Feedback };
