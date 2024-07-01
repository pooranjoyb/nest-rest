import { Controller, Get, Post, Body, Request } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { JwtGuard } from 'src/auth/guard';
import { UseGuards } from '@nestjs/common';
import { ExpenseDto } from './dto';

@Controller('expenses')
export class ExpensesController {
  constructor(private expensesService: ExpensesService) {}

  @UseGuards(JwtGuard)
  @Get('all-expenses')
  getAllExpenses(@Request() req: any) {
    const userId = req.user.id;
    return this.expensesService.getAllExpenses(userId);
  }

  @UseGuards(JwtGuard)
  @Post('add-expense')
  addExpense(@Body() dto: ExpenseDto) {
    return this.expensesService.addExpense(dto);
  }
}
