import { IsNotEmpty } from "class-validator";

export class UpdateBookDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  author: string;

  // @IsNotEmpty()
  // genre: string;

  genres: string[];

  @IsNotEmpty()
  isbn: bigint;

  @IsNotEmpty()
  publishing_house: string;
}
