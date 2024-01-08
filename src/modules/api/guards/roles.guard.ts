import { GqlExecutionContext } from '@nestjs/graphql';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@api/enums';
import { ROLES_KEY } from '@api/decorators';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const { signature } =
      GqlExecutionContext.create(context).getContext() || {};
    if (!signature) {
      return false;
    }

    const { roles = [] } = signature;
    return requiredRoles.some((role) => (roles || []).includes(role));
  }
}
