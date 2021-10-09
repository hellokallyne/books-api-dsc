import { CredentialsDto } from './dtos/credentials.dto';
import { UsersRepository } from './users.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(credentialsDto: CredentialsDto) {
    return this.usersRepository.createUser(credentialsDto);
  }

  async signIn(
    credentialsDto: CredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { username, password } = credentialsDto;
    const user = await this.usersRepository.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { username };
      const accessToken: string = this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Não autorizado...');
    }
  }
}
