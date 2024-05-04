import { createClient, RedisClientType } from "redis";

export class PubSubManager {
  private static instance: PubSubManager;
  private constructor() { 

  }
  public static getInstance() {
    if (!PubSubManager.instance) {
      PubSubManager.instance = new PubSubManager();
    }
    return PubSubManager.instance;
  }
  addUserToStock(userId: string,stockTicker:string){

  }
  removeUserFromStock(userId: string,stockTicker:string){
  }
  forwardMessageToStock(userId: string,stockTicker:string){
    // this.addUserToStock(userId,stockTicker);
    // this.removeUserFromStock(userId,stockTicker);
    // this.forwardMessageToStock(userId,stockTicker);
  }

}
