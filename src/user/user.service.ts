import { Injectable } from '@nestjs/common';
import { Req } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getMe(@Req() req: Request) {
    return req.user;
  }

  async updateMe(dto: UserDto) {
    return this.prisma.user.update({
      where: { email: dto.email },
      data: {
        ...dto,
      },
    });
  }
}
