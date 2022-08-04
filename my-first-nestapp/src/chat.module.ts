import { Module } from '@nestjs/common';
import { Feaature3 } from './feature3.module';

@Module({
  imports: [Feaature3],
  controllers: [],
  providers: [],
  exports: [],
})
export class ChatModule {
  constructor() {
    console.log('Chat Module');
  }
}
