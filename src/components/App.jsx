import {useState} from 'react';
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Statistics from "./statistics/Statistics";
import Section from "./section/Section"
import Notification from "./notification/Notification"
import css from "./App.module.css"
import React from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const createFeedbackOptions = value => {
    switch (value) {
      case 'good': {
        setGood(good + 1);
        break;
      }
      case 'neutral': {
        setNeutral(neutral + 1);
        break;
      }
      case 'bad': {
        setBad(bad + 1);
        break;
      }
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
    
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  }

      return <div className={css.feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={["good", "neutral", "bad"]}
            onLeaveFeedback={createFeedbackOptions}></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() !== 0 ? (
            <Statistics 
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
    </div>
    }   
  




//OLD
    // export class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }
//   createFeedbackOptions = option => {
//     this.setState(state => ({
//       [option]: state[option] + 1,}));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };
    
//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return total > 0 ? Math.round((good / total) * 100) : 0;
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//       return <div className={css.feedback}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions options={Object.keys(this.state)}
//             onLeaveFeedback={this.createFeedbackOptions}></FeedbackOptions>
//         </Section>

//         <Section title="Statistics">
//           {this.countTotalFeedback() !== 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//     </div>
//     }
//   }



        

    


