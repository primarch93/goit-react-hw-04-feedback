import React, { useState } from 'react';
import { AppWrapp } from './App.styled';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
export const App = () => {
const [feedback, setFeedback] = useState({
good: 0,
neutral: 0,
bad: 0,
});

const onLeaveFeedback = name => {
setFeedback(prevFeedback => ({
...prevFeedback,
[name]: prevFeedback[name] + 1
}));
};

const countTotalFeedback = () => {
const { good, neutral, bad } = feedback;
return good + neutral + bad;
};

const countPositiveFeedbackPercentage = () => {
const totalFeedback = countTotalFeedback();
return totalFeedback === 0 ? 0 : Math.round((feedback.good / totalFeedback) * 100);
};

return (
<AppWrapp>
<FeedbackOptions
     options={Object.keys(feedback)}
     onLeaveFeedback={onLeaveFeedback}
   />
<Statistics
     good={feedback.good}
     neutral={feedback.neutral}
     bad={feedback.bad}
     total={countTotalFeedback()}
     positivePercentage={countPositiveFeedbackPercentage()}
   />
</AppWrapp>
);
};

