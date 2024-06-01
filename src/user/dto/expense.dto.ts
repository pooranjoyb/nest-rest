import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ExpenseDto {
  @IsString()
  @IsNotEmpty()
  exp_id: string;

  @IsString()
  @IsNotEmpty()
  exp_name: string;

  @IsNumber()
  @IsNotEmpty()
  exp_amt: string;

  @IsString()
  @IsOptional()
  description: string;
}
