import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
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
      return {
        message: 'Expense Created Successfully',
        userExpense,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        // error code for duplicate
        if (error.code === 'P2002') {
          throw new ForbiddenException('Expense with this name already Exists');
        }
      }
      throw error;
    }
  }

  async updateExpense(dto: ExpenseDto) {
    try {
      const data = await this.prisma.expense.update({
        where: { exp_name: dto.exp_name },
        data: {
          ...dto,
          updatedAt: new Date(),
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

      return {
        message: 'Expense Updated Successfully',
        data,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('Expense Not Found');
        }
      }
      throw new NotFoundException('Expense Not Found');
    }
  }

  async deleteExpense(exp_name: string) {
    try {
      const data = await this.prisma.expense.delete({
        where: { exp_name: exp_name },
      });

      return {
        message: 'Expense Deleted Successfully',
        data,
      };
    } catch (error) {
      console.error('Error deleting expense:', error);
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('Expense Not Found');
        }
      }
      throw new NotFoundException('Expense Not Found');
    }
  }
}
