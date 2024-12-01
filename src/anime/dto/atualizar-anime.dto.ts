import { PartialType } from '@nestjs/mapped-types';
import { CriarAnimeDto } from './criar-anime.dto';

export class AtualizarAnimeDto extends PartialType(CriarAnimeDto) {}
