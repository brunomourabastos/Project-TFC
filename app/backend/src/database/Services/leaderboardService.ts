// import { IMatch } from '../interfaces/IMatch';
import matchModel from '../models/Matches';
import Team from '../models/Teams';
import CalcStats from '../helpers/leaderBoardHelpers';

export default class leaderboardService {
  static async createLeaderBoard() {
    const teams = await Team.findAll();
    const allTeams = await Promise.all(teams.map(async (element: any) => {
      const allMatches = await matchModel
        .findAll({ where: { inProgress: 'false', homeTeam: element.id },
          include: [
            { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
            { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
          ],
          attributes: { exclude: ['away_team', 'home_team'] },
        });
      return { teamName: element.teamName, allMatches };
    }));
    return allTeams;
  }

  static async fullLeaderBoard() {
    const allTeams = await this.createLeaderBoard();
    const leaderboardData = allTeams
      .map(({ teamName, allMatches }) => ({
        name: teamName,
        totalPoints: CalcStats.points(allMatches),
        totalGames: allMatches.length,
        totalVictories: CalcStats.countVictory(allMatches),
        totalDraws: CalcStats.countDraw(allMatches),
        totalLosses: CalcStats.countLoss(allMatches),
        goalsFavor: CalcStats.countFavorGoal(allMatches),
        goalsOwn: CalcStats.countOwnGoal(allMatches),
        goalsBalance: CalcStats.countFavorGoal(allMatches) - CalcStats.countOwnGoal(allMatches),
        efficiency: CalcStats.efficiency(allMatches).toFixed(2),
      }));

    return leaderboardData;
  }

  static async orderLeaderBoard() {
    const leaderBoardData = await this.fullLeaderBoard();
    const result = leaderBoardData.sort((a: any, b: any) => {
      if (a.totalPoints > b.totalPoints) return -1;
      if (a.totalPoints < b.totalPoints) return 1;

      if (a.totalVictories > b.totalVictories) return -1;
      if (a.totalVictories < b.totalVictories) return 1;

      if (a.goalsBalance > b.goalsBalance) return -1;
      if (a.goalsBalance < b.goalsBalance) return 1;

      if (a.goalsFavor > b.goalsFavor) return -1;
      if (a.goalsFavor < b.goalsFavor) return 1;

      if (a.goalsOwn > b.goalsOwn) return -1;
      if (a.goalsOwn < b.goalsOwn) return 1;

      return 0;
    });
    return { status: 200, data: result };
  }
}
