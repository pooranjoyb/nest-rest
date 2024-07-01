import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ExpenseDto {
  @IsString()
  @IsNotEmpty()
  exp_name: string;

  @IsNumber()
  @IsNotEmpty()
  exp_amt: number;

  @IsString()
  @IsOptional()
  description: string;
}
