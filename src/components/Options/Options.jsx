import s from './Options.module.css';

const Options = props => {
  return (
    <>
      <button
        className={s.optionButton}
        onClick={() => {
          props.handleClick('good');
        }}
      >
        good
      </button>
      <button
        className={s.optionButton}
        onClick={() => {
          props.handleClick('neutral');
        }}
      >
        neutral
      </button>
      <button
        className={s.optionButton}
        onClick={() => {
          props.handleClick('bad');
        }}
      >
        bad
      </button>
      {props.totalFeedback > 0 && (
        <button
          className={s.optionButton}
          onClick={() => {
            props.handleClick('reset');
          }}
        >
          reset
        </button>
      )}
    </>
  );
};

export default Options;
