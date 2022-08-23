import { DataTypes, Model } from 'sequelize';
import db from '.';
import Team from './Teams';
// import OtherModel from './OtherModel';

export default class Match extends Model {
  public id!: number;
  public homeTeam!: number;
  public homeTeamGoals!: number;
  public awayTeam!: number;
  public awayTeamGoals!: number;
  public inProgress!: boolean;
}

Match.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: {
    type: DataTypes.INTEGER,
    field: 'home_team',
    allowNull: false,

  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    field: 'home_team_goals',
    allowNull: false,
  },
  awayTeam: {
    type: DataTypes.INTEGER,
    field: 'away_team',
    allowNull: false,
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    field: 'away_team_goals',
    allowNull: false,
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    field: 'in_progress',
    allowNull: false,
  },

}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Match.belongsTo(Team, { foreignKey: 'away_team', as: 'teamAway' });
Match.belongsTo(Team, { foreignKey: 'home_team', as: 'teamHome' });

Team.hasMany(Match, { foreignKey: 'away_team', as: 'away_team' });
Team.hasMany(Match, { foreignKey: 'home_team', as: 'home_team' });
