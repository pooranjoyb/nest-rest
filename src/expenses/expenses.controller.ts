import { Controller, Get } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { JwtGuard } from 'src/auth/guard';
import { UseGuards } from '@nestjs/common';

@Controller('expenses')
export class ExpensesController {
  constructor(private expensesService: ExpensesService) {}

  @UseGuards(JwtGuard)
  @Get('get-all-expenses')
  getAllExpenses() {
    return this.expensesService.getAllExpenses();
  }
}
