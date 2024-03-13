import {ASDActiveCardStyles} from '../components/d-active-card/ASDActiveCard-styles';

export const imageTypes = {
  outer: require(`../assets/images/outer.png`),
  focus: require(`../assets/images/focus.png`),
  follow: require(`../assets/images/follow.png`),
  scan: require(`../assets/images/scan.png`),
  square: require(`../assets/images/square.png`),
};

export const titleColors = {
  outer: ASDActiveCardStyles.outerText,
  focus: ASDActiveCardStyles.focusText,
  follow: ASDActiveCardStyles.followText,
  scan: ASDActiveCardStyles.scanText,
  square: ASDActiveCardStyles.squareText,
};

export const D_ACTIVE_API_URL = 'http://10.0.2.2:3000/exercises';
