import { Generos } from 'src/generos/generos.entity';
import { Studios } from 'src/studios/studios.entity';

export class Anime {
  id: number;
  title: string;
  studios: Studios;
  genres: Generos;
}
