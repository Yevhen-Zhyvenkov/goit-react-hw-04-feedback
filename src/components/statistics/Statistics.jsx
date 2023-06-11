import css from './Statistics.module.css'
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
    <div>
        <ul className={css.list}>
            <li className={css.item}>Good: {good}</li>
            <li className={css.item}>Neutral: {neutral}</li>
            <li className={css.item}>Bad: {bad}</li>
            <li className={css.item}><span className={css.span}>Total: <span className={css.red}>{total}</span></span></li>
            <li className={css.item}><span className={css.span}>Percentage: <span className={css.red}>{positivePercentage}%</span></span></li>
        </ul>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;


