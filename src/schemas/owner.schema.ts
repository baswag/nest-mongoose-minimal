import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Cat } from './cat.schema';

@Schema()
export class Owner extends Document {
  @Prop()
  name: string;

  @Prop(Cat)
  cats: Cat;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
