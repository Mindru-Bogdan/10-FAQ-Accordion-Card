import { useState } from 'react';

import ArrowIcon from '../../src/icon-arrow-down.svg';

import classes from './FAQ.module.css';

const Text = () => {
  const [answer1, setAnswer1] = useState(false);
  const [answer2, setAnswer2] = useState(false);
  const [answer3, setAnswer3] = useState(false);
  const [answer4, setAnswer4] = useState(false);
  const [answer5, setAnswer5] = useState(false);

  const answerHide = () => {
    setAnswer1(false);
    setAnswer2(false);
    setAnswer3(false);
    setAnswer4(false);
    setAnswer5(false);
  };

  const answerVisible1 = () => {
    setAnswer1(true);
    setAnswer2(false);
    setAnswer3(false);
    setAnswer4(false);
    setAnswer5(false);
  };

  const answerVisible2 = () => {
    setAnswer1(false);
    setAnswer2(true);
    setAnswer3(false);
    setAnswer4(false);
    setAnswer5(false);
  };

  const answerVisible3 = () => {
    setAnswer1(false);
    setAnswer2(false);
    setAnswer3(true);
    setAnswer4(false);
    setAnswer5(false);
  };

  const answerVisible4 = () => {
    setAnswer1(false);
    setAnswer2(false);
    setAnswer3(false);
    setAnswer4(true);
    setAnswer5(false);
  };

  const answerVisible5 = () => {
    setAnswer1(false);
    setAnswer2(false);
    setAnswer3(false);
    setAnswer4(false);
    setAnswer5(true);
  };

  return (
    <div className={classes.text}>
      <h1>FAQ</h1>
      <div className={classes.questions}>
        <h5 onClick={answer1 ? answerHide : answerVisible1} style={{ fontWeight: answer1 ? 700 : 500 }}>
          How many team members can I invite?
        </h5>
        <img
          src={ArrowIcon}
          onClick={answer1 ? answerHide : answerVisible1}
          className={answer1 ? classes.arrowUp : classes.arrow}
        />
        <p className={answer1 ? classes.visible : classes.hide}>
          You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.
        </p>
        <div className={classes.line}></div>
      </div>
      <div className={classes.questions}>
        <h5 onClick={answer2 ? answerHide : answerVisible2} style={{ fontWeight: answer2 ? 700 : 500 }}>
          What is the maximum file upload size?
        </h5>
        <img
          src={ArrowIcon}
          onClick={answer2 ? answerHide : answerVisible2}
          className={answer2 ? classes.arrowUp : classes.arrow}
        />
        <p className={answer2 ? classes.visible : classes.hide}>
          No more than 2GB. All files in your account must fit your allotted storage space.
        </p>
        <div className={classes.line}></div>
      </div>
      <div className={classes.questions}>
        <h5 onClick={answer3 ? answerHide : answerVisible3} style={{ fontWeight: answer3 ? 700 : 500 }}>
          How do I reset my password?
        </h5>
        <img
          src={ArrowIcon}
          onClick={answer3 ? answerHide : answerVisible3}
          className={answer3 ? classes.arrowUp : classes.arrow}
        />
        <p className={answer3 ? classes.visible : classes.hide}>
          Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be
          emailed to you.
        </p>
        <div className={classes.line}></div>
      </div>
      <div className={classes.questions}>
        <h5 onClick={answer4 ? answerHide : answerVisible4} style={{ fontWeight: answer4 ? 700 : 500 }}>
          Can I cancel my subscription?
        </h5>
        <img
          src={ArrowIcon}
          onClick={answer4 ? answerHide : answerVisible4}
          className={answer4 ? classes.arrowUp : classes.arrow}
        />
        <p className={answer4 ? classes.visible : classes.hide}>
          Yes! Send us a message and we’ll process your request no questions asked.
        </p>
        <div className={classes.line}></div>
      </div>
      <div className={classes.questions}>
        <h5 onClick={answer5 ? answerHide : answerVisible5} style={{ fontWeight: answer5 ? 700 : 500 }}>
          Do you provide additional support?
        </h5>
        <img
          src={ArrowIcon}
          onClick={answer5 ? answerHide : answerVisible5}
          className={answer5 ? classes.arrowUp : classes.arrow}
        />
        <p className={answer5 ? classes.visible : classes.hide}>
          Chat and email support is available 24/7. Phone lines are open during normal business hours.
        </p>
        <div className={classes.line}></div>
      </div>
    </div>
  );
};

export default Text;
