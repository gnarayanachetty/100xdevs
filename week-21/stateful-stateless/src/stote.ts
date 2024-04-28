
interface Game{
  id: string;
  whitePlayer: string;
  blackPlayer: string;
  moves:string[];
}
export class GameManager{
  static instance: GameManager;
  games: Game[];
  public static getInstance(){
    if(!GameManager.instance){
      GameManager.instance = new GameManager();
    }
    return GameManager.instance;
  }
  private constructor(){
    this.games = [];
  }
  addMove(gameId:string, move:string){
    this.games.forEach(game => {
      if(game.id === gameId){
        game.moves.push(move);
      }
    });
  }
  addGame(gameId: string){
    const game: Game = {
      id: gameId,
      whitePlayer: 'Narayanan',
      blackPlayer: 'Chetty',
      moves: []
    };
    this.games.push(game);
  }
  getGame(id: string){
    return this.games.find(game => game.id === id);
  }
  log(){
    return console.log(this.games);
  }

}
