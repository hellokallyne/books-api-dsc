import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class UpdateBookDto {
  @IsNotEmpty({ message: 'O campo title não deve ser vazio.' })
  @IsString({ message: 'O campo title deve ser uma string.' })
  title: string;

  @IsNotEmpty({ message: 'O campo author não deve ser vazio.' })
  @IsString({ message: 'O campo author deve ser uma string.' })
  author: string;

  @IsNotEmpty({ message: 'O campo genres não deve ser vazio.' })
  @IsArray({ message: 'O campo genres deve ser um array.' })
  genres: string[];

  @IsNotEmpty({ message: 'O campo isbn não deve ser vazio.' })
  @IsNumber({}, { message: 'O campo isbn deve ser um número.' })
  isbn: bigint;

  @IsNotEmpty({ message: 'O campo publishing_house não deve ser vazio.' })
  @IsString({ message: 'O campo publishing_house deve ser uma string.' })
  publishing_house: string;

  status: string;
}
