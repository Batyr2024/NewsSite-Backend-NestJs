import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TodoModule } from './users/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
        models: [Task]
      }),
      inject: [ConfigService]
    }),
    TodoModule
  ]})
export class AppModule {}