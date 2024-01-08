import _ = require('lodash');
import { Module } from '@nestjs/common';

import { BaseModule } from '@base/base.module';
import * as resolvers from '@api/resolvers';
import * as services from '@api/services';

@Module({
  imports: [BaseModule],
  providers: [..._.values(services), ..._.values(resolvers)],
})
export class ApiModule {}
