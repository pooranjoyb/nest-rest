import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExpenseDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) {}

  async getAllExpenses(userId: number) {
    try {
      const expenses = await this.prisma.expense.findMany({
        where: {
          userId: userId,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          exp_name: true,
          exp_amt: true,
          description: true,
        },
      });

      return expenses;
    } catch (error) {
      throw new ForbiddenException('Could not fetch expenses');
    }
  }

  async addExpense(userId: number, dto: ExpenseDto) {
    try {
      const userExpense = await this.prisma.expense.create({
        data: {
          exp_name: dto.exp_name,
          exp_amt: dto.exp_amt,
          description: dto.description,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
      return userExpense;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        // error code for duplicate
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  updateExpense() {}
  deleteExpense() {}
}
