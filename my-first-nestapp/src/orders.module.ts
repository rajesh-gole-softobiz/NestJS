import { Module } from '@nestjs/common';
import { Feaature1 } from './feature1.module';
import { Feaature2 } from './feature2.module';

@Module({
  imports: [Feaature1, Feaature2],
  controllers: [],
  providers: [],
  exports: [],
})
export class OrdersModule {
  constructor() {
    console.log('Orders Module');
  }
}
