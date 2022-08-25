import { IMatch } from '../interfaces/IMatch';

export default class CalcStats {
  static countVictory = (match: any) => {
    const victories = match.reduce((acc: number, element: IMatch) => {
      if (element.homeTeamGoals > element.awayTeamGoals) return acc + 1;
      return acc;
    }, 0);
    return victories;
  };

  static countDraw = (match: any) => {
    const draws = match.reduce((acc: number, element: IMatch) => {
      if (element.awayTeamGoals === element.homeTeamGoals) return acc + 1;
      return acc;
    }, 0);
    return draws;
  };

  static countLoss = (match: any) => {
    const loss = match.reduce((acc:number, element: IMatch) => {
      if (element.homeTeamGoals < element.awayTeamGoals) return acc + 1;
      return acc;
    }, 0);
    return loss;
  };

  static countFavorGoal = (match: any) => {
    const goals = match.reduce((acc: number, element: IMatch) => acc + element.homeTeamGoals, 0);
    return goals;
  };

  static countOwnGoal = (match: any) => {
    const goals = match.reduce((acc: number, element:IMatch) => acc + element.awayTeamGoals, 0);
    return goals;
  };

  static points = (match: any) => (+this.countVictory(match) * 3) + (+this.countDraw(match));

  static efficiency(match:any) {
    return ((this.points(match)) / (match.length * 3)) * 100;
  }
}
