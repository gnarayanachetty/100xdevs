import {GameManager} from './stote'

export function startLogger(){
  setInterval(() =>
    {
      console.log(GameManager.getInstance().log());
    }, 1000);
  }