import { Controller, Get, Req, UseGuards, Body, Patch } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from 'src/auth/guard';
import { UserService } from './user.service';
import { UserDto } from './dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@Req() req: Request) {
    return this.userService.getMe(req);
  }

  @UseGuards(JwtGuard)
  @Patch('me/update')
  updateMe(@Req() req: any, @Body() dto: UserDto) {
    const userId = req.user.id;
    return this.userService.updateMe(userId, dto);
  }
}
