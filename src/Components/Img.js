import PatternDesktop from '../../src/bg-pattern-desktop.svg';
import PatternMobile from '../../src/bg-pattern-mobile.svg';
import IllustrationWomanDesktop from '../../src/illustration-woman-online-desktop.svg';
import IllustrationWomanMobile from '../../src/illustration-woman-online-mobile.svg';
import IllustrationBox from '../../src/illustration-box-desktop.svg';

import classes from './Img.module.css';

const Img = () => {
  return (
    <div>
      <img className={classes.patternDesktop} src={PatternDesktop} />
      <img className={classes.patternMobile} src={PatternMobile} />
      <img className={classes.womanDesktop} src={IllustrationWomanDesktop} />
      <img className={classes.womanMobile} src={IllustrationWomanMobile} />
      <img className={classes.box} src={IllustrationBox} />
    </div>
  );
};

export default Img;
