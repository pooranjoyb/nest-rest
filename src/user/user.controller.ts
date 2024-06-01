import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from 'src/auth/guard';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@Req() req: Request) {
    return req.user;
  }

  @UseGuards(JwtGuard)
  @Get('expense')
  getExpense() {
    return this.userService.getExpense();
  }
}
