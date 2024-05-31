import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        firstName: dto.firstName,
        lastName: dto.lastName,
        hash,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { hash: _, ...userWithoutHash } = user;
    return userWithoutHash;
  }

  signin() {
    return { msg: 'Signin' };
  }
}
