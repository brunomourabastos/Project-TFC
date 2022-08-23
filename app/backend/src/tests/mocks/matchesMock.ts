const matchesMock = [{
  "id": 1,
  "homeTeam": 16,
  "homeTeamGoals": 1,
  "awayTeam": 8,
  "awayTeamGoals": 1,
  "inProgress": false,
  "teamHome": {
    "teamName": "São Paulo"
  },
  "teamAway": {
    "teamName": "Grêmio"
  }
},
{
  "id": 47,
  "homeTeam": 8,
  "homeTeamGoals": 1,
  "awayTeam": 14,
  "awayTeamGoals": 2,
  "inProgress": true,
  "teamHome": {
    "teamName": "Grêmio"
  },
  "teamAway": {
    "teamName": "Santos"
  }
}];

const uniqueMatch = {
  "id": 47,
  "homeTeam": 8,
  "homeTeamGoals": 1,
  "awayTeam": 14,
  "awayTeamGoals": 2,
  "inProgress": true,
  "away_team": 14,
  "home_team": 8,
  "teamHome": {
    "teamName": "Grêmio"
  },
  "teamAway": {
    "teamName": "Santos"
  }
}

export { matchesMock, uniqueMatch}