import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CredentialsDto {
  @IsString()
  @MinLength(3)
  @MaxLength(15)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(25)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password muito fraca',
  })
  password: string;
}
