import { Test, TestingModule } from '@nestjs/testing';
import { SpendingListController } from './spending-list.controller';

describe('SpendingListController', () => {
  let controller: SpendingListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpendingListController],
    }).compile();

    controller = module.get<SpendingListController>(SpendingListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
