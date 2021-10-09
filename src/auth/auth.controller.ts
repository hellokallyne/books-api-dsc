import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CredentialsDto } from './dtos/credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() credentialsDto: CredentialsDto) {
    return this.authService.signUp(credentialsDto);
  }

  @Post('/signin')
  async signIn(
    @Body() credentialsDto: CredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(credentialsDto);
  }
}
