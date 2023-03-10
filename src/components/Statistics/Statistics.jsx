import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import { Section } from 'components/Section/Section';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
return (
<Section title="Statistics">
{total > 0 ? (
<div className="Statistics">
<p>Good: {good}</p>
<p>Neutral: {neutral}</p>
<p>Bad: {bad}</p>
<p>Total: {total}</p>
<p>Positive feedbacks: {positivePercentage}%</p>
</div>
) : (
<Notification message="There is no feedback" />
)}
</Section>
);
};

Statistics.propTypes = {
good: PropTypes.number.isRequired,
neutral: PropTypes.number.isRequired,
bad: PropTypes.number.isRequired,
total: PropTypes.number.isRequired,
positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;