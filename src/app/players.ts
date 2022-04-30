export interface Player {
  id: number;
  name: string;
  age: number;
  description: string;
}

export const players = [
  {
    id: 1,
    name: 'Lionel Messi',
    age: 34,
    description: 'The greatest player to touch the football pitch.'
  },
  {
    id: 2,
    name: 'Cristiano Ronaldo',
    age: 37,
    description: 'One of the greatest goalscorers of all time who excels at every aspect of putting the ball in the back of the net.'
  },
  {
    id: 3,
    name: 'Kylian Mbappe',
    age: 23,
    description: 'The best young talent in the world looking to leave his mark on the footballing world.'
  },
  {
    id: 4,
    name: 'Mohamed Salah',
    age: 29,
    description: 'The best player in the best league in the world, helping lead Liverpool FC to a possible quadruple for the first in Englsh history.'
  },
];
