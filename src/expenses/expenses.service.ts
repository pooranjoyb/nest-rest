import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) {}

  getAllExpenses() {
    return 'All expenses of logged-in user';
  }

  addExpense() {}
  updateExpense() {}
  deleteExpense() {}
}
