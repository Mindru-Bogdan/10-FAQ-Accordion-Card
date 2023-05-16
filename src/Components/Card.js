import classes from './Card.module.css';

const Card = () => {
  return (
    <div>
      <h1>FAQ</h1>
      <div className={classes.questions}>
        <h5>How many team members can I invite?</h5>
        <p>
          You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.
        </p>
      </div>
      <div className={classes.questions}>
        <h5>What is the maximum file upload size?</h5>
        <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
      </div>
      <div className={classes.questions}>
        <h5>How do I reset my password?</h5>
        <p>
          Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be
          emailed to you.
        </p>
      </div>
      <div className={classes.questions}>
        <h5>Can I cancel my subscription?</h5>
        <p>Yes! Send us a message and we’ll process your request no questions asked.</p>
      </div>
      <div className={classes.questions}>
        <h5>Do you provide additional support?</h5>
        <p>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
      </div>
    </div>
  );
};

export default Card;
