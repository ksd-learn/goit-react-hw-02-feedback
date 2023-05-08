import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ updateState }) => {

    return (
        <>
            <button className={css.btn} onClick={() => {updateState("good")}}>Good</button>
            <button className={css.btn} onClick={() => { updateState("neutral") }}>Neutral</button>
            <button className={css.btn} onClick={() => { updateState("bad") }}>Bad</button>
        </>
    )
}

FeedbackOptions.propTypes = {
    updateState: PropTypes.func.isRequired
};
