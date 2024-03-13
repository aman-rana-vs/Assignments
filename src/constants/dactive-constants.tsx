import {cardStyles} from '../components/d-active-card/DActiveCard-styles';

export const imageTypes = {
  outer: require(`../assets/images/outer.png`),
  focus: require(`../assets/images/focus.png`),
  follow: require(`../assets/images/follow.png`),
  scan: require(`../assets/images/scan.png`),
  square: require(`../assets/images/square.png`),
};

export const titleColors = {
  outer: cardStyles.outerText,
  focus: cardStyles.focusText,
  follow: cardStyles.followText,
  scan: cardStyles.scanText,
  square: cardStyles.squareText,
};

export const D_ACTIVE_API_URL = 'http://10.0.2.2:3000/exercises';
