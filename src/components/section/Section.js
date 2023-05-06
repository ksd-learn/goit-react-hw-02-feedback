import { FeedbackOptions } from "./feedback/FeedbackOptions";
import { Statistics } from "./statistics/Statistics";
import { Notification } from "./notification/Notification";

export const Section = ({title, states:{good, neutral, bad}}) => {

    const countTotalFeedback = () => good + neutral + bad;
    const countPositiveFeedbackPercentage = () => Math.round(good / countTotalFeedback() * 100);
    let total = countTotalFeedback();

    return (
        <>
            <h2>{title}</h2>
            <FeedbackOptions /> 
            <h3>Statistics</h3>
            {total > 0 ?
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={countPositiveFeedbackPercentage()}
                /> :
                <Notification message="There is no feedback" />
            }
        </>
)}