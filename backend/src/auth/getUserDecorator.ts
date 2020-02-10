// this decorator is used to grab the user object after verifying it from the passport strategy

import { createParamDecorator } from '@nestjs/common';

export const getUser = createParamDecorator((data, req) => {
  return req.user;
});
