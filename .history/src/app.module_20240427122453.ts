import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './users/user.module';
import { ConfigModule, ConfigService } from '@nestjs/confi'
import { User } from './users/user.model';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dialect: configService.get('DB_DIALECT'),
        host: configService.get('DB_HOST'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        port: Number(configService.get('DB_PORT')),
        database: configService.get('DB_NAME'),
        models: [User]
      }),
      inject: [ConfigService]
    }),
    UserModule
  ]})
export class AppModule {}