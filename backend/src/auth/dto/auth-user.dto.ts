// this data object model is responsible for how the data will passed on
// the class validator is to check if the value send passes the validation
// it is chosen as a class and not an interface because classes don't get neglected on bundled/compiled code while interfaces are ignorned

import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(30)
  password: string;
}
