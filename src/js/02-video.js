import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on(
  'timeupdate',
  _.throttle(e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
);

window.onload = function () {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
};
