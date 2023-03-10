import React from 'react';
import PropTypes from 'prop-types';
import {
ButonsWrapp,
ButtonForFeedback,
} from '../Statistics/FeedbackWidget.styled';
import { Section } from 'components/Section/Section';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
return (
<Section title="Please leave feedback">
<ButonsWrapp className="feedbackButtons">
{options.map(key => (
<ButtonForFeedback
key={key}
type="button"
className={key}
onClick={() => {
onLeaveFeedback(key);
}}
>
{key.slice(0, 1).toUpperCase().concat(key.slice(1))}
</ButtonForFeedback>
))}
</ButonsWrapp>
</Section>
);
};

FeedbackOptions.propTypes = {
options: PropTypes.arrayOf(PropTypes.string),
onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;