import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { CriarAnimeDto } from './dto/criar-anime.dto';
import { AtualizarAnimeDto } from './dto/atualizar-anime.dto';

@Controller('Anime')
export class AnimeController {
  constructor(private readonly AnimeService: AnimeService) {}

  @Post()
  create(@Body() CriarAnimeDto: CriarAnimeDto) {
    return this.AnimeService.create(CriarAnimeDto);
  }

  @Get()
  findAll() {
    return this.AnimeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.AnimeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() AtualizarAnimeDto: AtualizarAnimeDto) {
    return this.AnimeService.update(+id, AtualizarAnimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.AnimeService.remove(+id);
  }
}
