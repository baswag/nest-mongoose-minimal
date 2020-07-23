import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseProviders } from './database.providers';
import { ownersProviders } from './owners.providers';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders, ...ownersProviders],
})
export class AppModule {}
