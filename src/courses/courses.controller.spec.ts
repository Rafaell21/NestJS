import { Test, TestingModule } from '@nestjs/testing';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';

describe('CoursesController', () => {
  let controller: CoursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursesController],
    }).compile();

    controller = module.get<CoursesController>(CoursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
// import { Test, TestingModule } from '@nestjs/testing';
// import { CoursesController } from './courses.controller';

// describe('CoursesController', () => {
//   let controller: CoursesController;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [CoursesController],
//     }).compile();

//     controller = module.get<CoursesController>(CoursesController);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });
// });
