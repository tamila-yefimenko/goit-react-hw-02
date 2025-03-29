import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [feedbackData, setFeedbackData] = useState(() => {
    const savedData = window.localStorage.getItem('feedback-clicks');
    if (savedData !== null) {
      return JSON.parse(savedData);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem(
      'feedback-clicks',
      JSON.stringify(feedbackData)
    );
  }, [feedbackData]);

  const totalFeedback =
    feedbackData.good + feedbackData.neutral + feedbackData.bad;
  const positiveFeedback = Math.round(
    (feedbackData.good / totalFeedback) * 100
  );

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      setFeedbackData({ good: 0, neutral: 0, bad: 0 });
    } else {
      setFeedbackData({
        ...feedbackData,
        [feedbackType]: feedbackData[feedbackType] + 1,
      });
    }
  };

  return (
    <>
      <Description />
      <Options handleClick={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackType={feedbackData}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
