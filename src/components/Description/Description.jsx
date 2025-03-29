import s from './Description.module.css';

const Description = () => {
  return (
    <>
      <h2 className={s.descrTitle}>Sip Happens Café</h2>
      <p className={s.descrText}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};

export default Description;
