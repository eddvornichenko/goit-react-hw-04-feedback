import styles from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        options.map(option => (
      <button
        type="button"
        className={styles.button}
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    )));
  }