import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { Model } from 'mongoose';
import { Owner } from './schemas/owner.schema';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('OWNER_MODEL') private ownerModel: Model<Owner>,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    await this.ownerModel.create([{ name: 'TEST' } as any]);
    return this.appService.getHello();
  }
}
