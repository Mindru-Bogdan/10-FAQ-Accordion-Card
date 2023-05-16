import Img from './Img';

import ArrowIcon from '../../src/icon-arrow-down.svg';

import classes from './Card.module.css';

const Card = () => {
  return (
    <div className={classes.background}>
      <div className={classes.card}>
        <Img />
        <div className={classes.text}>
          <h1>FAQ</h1>
          <div className={classes.questions}>
            <h5>How many team members can I invite?</h5>
            <img src={ArrowIcon} className={classes.arrow} />
            <p>
              You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium
              plan.
            </p>
            <div className={classes.line}></div>
          </div>
          <div className={classes.questions}>
            <h5>What is the maximum file upload size?</h5>
            <img src={ArrowIcon} className={classes.arrow} />
            <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
            <div className={classes.line}></div>
          </div>
          <div className={classes.questions}>
            <h5>How do I reset my password?</h5>
            <img src={ArrowIcon} className={classes.arrow} />
            <p>
              Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be
              emailed to you.
            </p>
            <div className={classes.line}></div>
          </div>
          <div className={classes.questions}>
            <h5>Can I cancel my subscription?</h5>
            <img src={ArrowIcon} className={classes.arrow} />
            <p>Yes! Send us a message and we’ll process your request no questions asked.</p>
            <div className={classes.line}></div>
          </div>
          <div className={classes.questions}>
            <h5>Do you provide additional support?</h5>
            <img src={ArrowIcon} className={classes.arrow} />
            <p>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
            <div className={classes.line}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
