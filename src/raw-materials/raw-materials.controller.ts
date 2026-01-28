import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateRawMaterialDto } from './dto/create-raw-material.dto';
import { UpdateRawMaterialDto } from './dto/update-raw-material.dto';
import { RawMaterialsService } from './raw-materials.service';

@Controller('raw-materials')
export class RawMaterialsController {
  constructor(private readonly rawMaterialsService: RawMaterialsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(
    @Body() createRawMaterialDto: CreateRawMaterialDto,
    @UploadedFile()
    file?: Express.Multer.File,
  ) {
    if (file) {
      createRawMaterialDto.image = file.filename;
    }

    return this.rawMaterialsService.create(createRawMaterialDto);
  }
  @Get()
  findAll() {
    return this.rawMaterialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) code: number) {
    return this.rawMaterialsService.findOne(code);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) code: number,
    @Body() updateRawMaterialDto: UpdateRawMaterialDto,
  ) {
    return this.rawMaterialsService.update(code, updateRawMaterialDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) code: number) {
    return this.rawMaterialsService.remove(code);
  }
}
