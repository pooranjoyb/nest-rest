import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [AuthModule, UserModule, PrismaModule, ExpensesModule],
})
export class AppModule {}
