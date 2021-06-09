import { Test, TestingModule } from '@nestjs/testing';
import { SpendingListService } from './spending-list.service';

describe('SpendingListService', () => {
  let service: SpendingListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpendingListService],
    }).compile();

    service = module.get<SpendingListService>(SpendingListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
