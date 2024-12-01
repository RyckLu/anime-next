import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenerosService } from './generos.service';
import { AddGenerosDto } from './dto/add-generos.dto';
import { AtualizarGeneroDto } from './dto/atualizar-generos.dto';

@Controller( 'Generos')
export class GenerosController {
  constructor(private readonly GenerosService: GenerosService) {}

  
}
