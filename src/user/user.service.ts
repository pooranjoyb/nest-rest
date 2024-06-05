import { Injectable, NotFoundException } from '@nestjs/common';
import { Req } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getMe(@Req() req: Request) {
    return req.user;
  }

  async updateMe(dto: UserDto) {
    try {
      return await this.prisma.user.update({
        where: { email: dto.email },
        data: {
          ...dto,
        },
        select: {
          id: true,
          email: true,
          createdAt: true,
          updatedAt: true,
          firstName: true,
          lastName: true,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('User Not Found');
        }
      }
      throw new NotFoundException('User Not Found');
    }
  }
}
