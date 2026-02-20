import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { RawMaterialsModule } from './raw-materials/raw-materials.module';
import { UnitsModule } from './units/units.module';
import { ColorsModule } from './colors/colors.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { BanksModule } from './banks/banks.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './authentication/guard/auth.guard';
import { LocationModule } from './location/location.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'uploads'),
      serveRoot: '/uploads',
      serveStaticOptions: {
        index: false,
      },
    }),
    DatabaseModule,
    UsersModule,
    AuthenticationModule,
    RawMaterialsModule,
    UnitsModule,
    ColorsModule,
    SuppliersModule,
    BanksModule,
    LocationModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
