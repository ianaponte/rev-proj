export interface Player {
  id: number;
  name: string;
  nickname: string;
  age: number;
  position: string;
  description: string;
  club: string;
  games: number;
  goals: number;
  assists: number;
  match_average: number;
}

export const players = [
  {
    id: 1,
    name: 'Hirving Lozano',
    nickname: 'Chucky',
    age: 34,
    position: 'Winger',
    description: 'The greatest player to touch the football pitch.',
    club: 'S.S.C Napoli',
    games: 841,
    goals: 692,
    
  },
  {
    id: 2,
    name: 'Raul Jimenez',
    age: 37,
    position: 'Striker',
    description: 'The greatest player to touch the football pitch.',
    club: 'Wolverhampton Wanderers FC',
    games: 841,
    goals: 692,
  },
  {
    id: 3,
    name: 'Jesus Corona',
    nickname: 'Tecatito',
    age: 23,
    position: 'Winger',
    description: 'The best young talent in the world looking to leave his mark on the footballing world.',
    club: 'Sevilla FC',
    games: 286,
    goals: 198,
  },
  {
    id: 4,
    name: 'Edson Alvarez',
    nickname: 'El Machin',
    age: 23,
    position: 'Defensive Midfielder',
    description: 'The best player in the best league in the world, helping lead Liverpool FC to a possible quadruple for the first in Englsh history.',
    games: 499,
    goals: 232,
  },
  {
    id: 5,
    name: 'Hector Herrera',
    nickname: 'El Zorillo',
    age: 23,
    position: 'Box-to-Box Midfielder',
    description: 'The most inform player in the world at the moment.',
    club: 'Atletico de Madrid',
    games: 769,
    goals: 402,
  },
  {
    id: 6,
    name: 'Andres Guardado',
    nickname: 'El Principito',
    age: 23,
    position: 'Box-to-Box Midfielder',
    description: 'The most inform player in the world at the moment.',
    club: 'Real Betis Balompié',
    games: 769,
    goals: 402,
  },
  
];
