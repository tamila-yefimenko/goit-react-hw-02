import s from './Feedback.module.css';

const Feedback = ({
  feedbackType: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <ul className={s.feedbackList}>
      <li className={s.feedbackItem}>good: {good}</li>
      <li className={s.feedbackItem}>neutral: {neutral}</li>
      <li className={s.feedbackItem}>bad: {bad}</li>
      <li className={s.feedbackItem}>total: {totalFeedback}</li>
      <li className={s.feedbackItem}>positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
