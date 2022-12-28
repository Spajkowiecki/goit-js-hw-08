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

let currentTime = 0;

if (localStorage.getItem('videoplayer-current-time') != null) {
  currentTime = localStorage.getItem('videoplayer-current-time');
}

player.setCurrentTime(currentTime);
