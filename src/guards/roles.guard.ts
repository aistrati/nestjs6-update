import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class RolesGuard implements CanActivate {

  async canActivate(context: ExecutionContext): Promise<boolean> {
    return false;
  }
}
