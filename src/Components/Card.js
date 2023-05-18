import Img from './Img.js';
import FAQ from './FAQ.js';

import classes from './Card.module.css';

const Card = () => {
  return (
    <div className={classes.background}>
      <div className={classes.card}>
        <Img />
        <FAQ />
      </div>
    </div>
  );
};

export default Card;
