import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthenticationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
