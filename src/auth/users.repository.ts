import { CredentialsDto } from './dtos/credentials.dto';
import { User } from './user.entity';
import { Repository, EntityRepository } from 'typeorm';
import { ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(credentialsDto: CredentialsDto) {
    const { username, password } = credentialsDto;
    
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({ username, password: hashedPassword });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Usuário já existente.');
      } else {
        throw error;
      }
    }
  }
}
