import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { RawMaterialsModule } from './raw-materials/raw-materials.module';
import { UnitsModule } from './units/units.module';
import { ColorsModule } from './colors/colors.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { BanksModule } from './banks/banks.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AuthenticationModule,
    RawMaterialsModule,
    UnitsModule,
    ColorsModule,
    SuppliersModule,
    BanksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
