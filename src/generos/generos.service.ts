import { Injectable } from '@nestjs/common';
import { AddGenerosDto } from './dto/add-generos.dto';
import { AtualizarGeneroDto } from './dto/atualizar-generos.dto';

@Injectable()
export class GenerosService {
  static addGenero(arg0: { name: any; }) {
    throw new Error("Method not implemented.");
  }
  create(addGenerosDto: AddGenerosDto) {
    return 'Adiciona genero';
  }

  findAll() {
    return `Veja todos os generos`;
  }

  findOne(id: number) {
    return `Procure por genero #${id} `;
  }

  update(id: number, atualizarGeneroDto: AtualizarGeneroDto) {
    return `Atualiza  #${id} `;
  }

  remove(id: number) {
    return `Remove genero #${id} `;
  }
}
