import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}

  getExpense() {
    return { expenses: 'User expenses' };
  }
}
