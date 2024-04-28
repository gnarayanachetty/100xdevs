import {GameManager} from './stote';
import { startLogger } from './logger';
startLogger();

setInterval(() => {
  GameManager.getInstance().addGame(Math.random().toString())
},5000)
