import { PartialType } from '@nestjs/mapped-types';
import { AddGenerosDto } from './add-generos.dto';

export class AtualizarGeneroDto extends PartialType(AddGenerosDto) {}
