import { PartialType } from '@nestjs/mapped-types';
import { AddStudioDto } from './add-studio.dto';

export class AtualizarStudioDto extends PartialType(AddStudioDto) {}
