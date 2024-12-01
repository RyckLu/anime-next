import { Injectable } from '@nestjs/common';
import { CriarAnimeDto } from './dto/criar-anime.dto';
import { AtualizarAnimeDto } from './dto/atualizar-anime.dto';

@Injectable()
export class AnimeService {
  static addAnime(arg0: { name: any; }) {
    throw new Error("Method not implemented.");
  }
  create(criarAnimeDto: CriarAnimeDto) {
    return 'Adiciona mais animes';
  }

  findAll() {
    return `Mostra todos os animes`;
  }

  findOne(id: number) {
    return `procurar por anime #${id} `;
  }

  update(id: number, atualizarAnimeDto: AtualizarAnimeDto) {
    return `Atualizar anime #${id} `;
  }

  remove(id: number) {
    return `Remove o anime #${id} `;
  }
}
