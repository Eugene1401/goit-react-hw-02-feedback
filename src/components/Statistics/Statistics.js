import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total > 0 && (
        <ul>
          <li>Good {good}</li>
          <li>Neautral {neutral}</li>
          <li>Bad {bad}</li>
          <li>Total {total}</li>
          <li>Positive Percentage {positivePercentage} %</li>
        </ul>
      )}
      {total === 0 && <Notification message="No feedback given" />}
    </>
  );
};

export default Statistics;
