import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Cat extends Document {
  @Prop()
  name: string;

  @Prop({ default: Date.now })
  dateAdopted: Date;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
