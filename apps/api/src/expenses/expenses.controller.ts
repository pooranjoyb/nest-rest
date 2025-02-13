import { Controller, Get, Post, Body, Request, Patch } from '@nestjs/common';
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
  addExpense(@Request() req: any, @Body() dto: ExpenseDto) {
    const userId = req.user.id;
    return this.expensesService.addExpense(userId, dto);
  }

  @UseGuards(JwtGuard)
  @Patch('update-expense')
  updateExpense(@Body() dto: ExpenseDto) {
    return this.expensesService.updateExpense(dto);
  }

  @UseGuards(JwtGuard)
  @Post('delete-expense')
  deleteExpense(@Body('exp_name') exp_name: string) {
    return this.expensesService.deleteExpense(exp_name);
  }
}
