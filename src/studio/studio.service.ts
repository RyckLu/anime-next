import { Injectable } from '@nestjs/common';
import { AddStudioDto } from './dto/add-studio.dto';
import { AtualizarStudioDto } from './dto/atualizar-studio.dto';

@Injectable()
export class StudioService {
  static addStudio(arg0: { name: any; }) {
    throw new Error("Method not implemented.");
  }
  create(addStudioDto: AddStudioDto) {
    return 'Adiciona um estudio';
  }

  findAll() {
    return `Mostra todos os estudios`;
  }

  findOne(id: number) {
    return `Acha um estudio #${id} `;
  }

  update(id: number, atualizarStudioDto: AtualizarStudioDto) {
    return `Atualiza um estudio #${id}`;
  }

  remove(id: number) {
    return `Apaga um estudio #${id}`;
  }
}
