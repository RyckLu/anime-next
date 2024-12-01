import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudioService } from './studio.service';
import { AddStudioDto } from './dto/add-studio.dto';
import { AtualizarStudioDto } from './dto/atualizar-studio.dto';

@Controller('studio')
export class StudioController {
  constructor(private readonly studioService: StudioService) {}

  @Post()
  create(@Body() addStudioDto: AddStudioDto) {
    return this.studioService.create(addStudioDto);
  }

  @Get()
  findAll() {
    return this.studioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() atualizarStudioDto: AtualizarStudioDto) {
    return this.studioService.update(+id, atualizarStudioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studioService.remove(+id);
  }
}
