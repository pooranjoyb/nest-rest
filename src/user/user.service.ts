import { ForbiddenException, Injectable } from '@nestjs/common';
import { Req } from '@nestjs/common';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getMe(@Req() req: Request) {
    return req.user;
  }

  async updateMe(dto: UserDto) {
    try {
      return this.prisma.user.update({
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
      if (error instanceof PrismaClientKnownRequestError) {
        throw new ForbiddenException('User Not Found');
      }
    }
  }
}
