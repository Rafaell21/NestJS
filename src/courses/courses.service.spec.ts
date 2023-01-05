import { NotFoundException } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';


describe('CoursesService', () => {
  let service: CoursesService;
  let id;
  let date;

  beforeEach(async () => {
    service = new CoursesService();
    id = '8acfd0ee-92ee-40c8-80d6-6aacbc341c4c';
    date= new Date();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be created a course',async () => {

    const expectOutputTags = [
      {
        id,
        name: 'nestJS',
        created_at: date,
      },
    ];

    const expectedOutputCourse = {
      id,
      name:'Curso NestJS test',
      description: 'Curso introdutório de NestJS test',
      created_at: date,
      tags: expectOutputTags,
    };

    const mockCourseRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse))
    };

    const mockTagRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputTags)),
      findOne: jest.fn(),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] =  mockCourseRepository
     //@ts-expect-error defined part of methods
    service['tagRepository'] =  mockTagRepository

    const createCourseDto: CreateCourseDto = {
      name: 'Curso NestJS test',
      description: 'Curso introdutório de NestJS test',
      tags: ['nestJS'],
    };

    const newCourse = await service.create(createCourseDto)

    expect(mockCourseRepository.save).toHaveBeenCalled();
    expect(expectedOutputCourse).toStrictEqual(newCourse)
  });
  
  it('should list courses',async () => {

    const expectOutputTags = [
      {
        id,
        name: 'nestJS',
        created_at: date,
      },
    ];

    const expectedOutputCourse = [{
      id,
      name:'Curso NestJS test',
      description: 'Curso introdutório de NestJS test',
      created_at: date,
      tags: expectOutputTags,
    }];

    const mockCourseRepository = {
      findAll: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
      find: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse))
    };
    //@ts-expect-error defined part of methods
    service['courseRepository'] =  mockCourseRepository

    const courses = await service.findAll()

    expect(mockCourseRepository.find).toHaveBeenCalled();
    expect(expectedOutputCourse).toStrictEqual(courses)
  });

  it('should gets a course',async () => {

    const expectOutputTags = [
      {
        id,
        name: 'nestJS',
        created_at: date,
      },
    ];

    const expectedOutputCourse = [{
      id,
      name:'Curso NestJS test',
      description: 'Curso introdutório de NestJS test',
      created_at: date,
      tags: expectOutputTags,
    }];

    const mockCourseRepository = {
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
     };
    //@ts-expect-error defined part of methods
    service['courseRepository'] =  mockCourseRepository

    const course = await service.findOne(id)

    expect(mockCourseRepository.findOne).toHaveBeenCalled();
    expect(expectedOutputCourse).toStrictEqual(course)
  });

  it('should gets a course notfound',async () => {

    const mockCourseRepository = {
      findOne: jest.fn().mockReturnValue(Promise.resolve(undefined)),
     };
    //@ts-expect-error defined part of methods
    service['courseRepository'] =  mockCourseRepository

   try{
       await service.findOne(undefined)
    }catch(error){
      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.message).toEqual(`Course ID ${undefined} not found`)
    }
       
  });

  it('should be update a course',async () => {

    const expectOutputTags = [
      {
        id,
        name: 'nestJS',
        created_at: date,
      },
    ];

    const expectedOutputCourse = [{
      id,
      name:'Curso NestJS test',
      description: 'Curso introdutório de NestJS test',
      created_at: date,
      tags: expectOutputTags,
    }];

    const mockCourseRepository = {
      update: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
      preload: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse))
    };

    const mockTagRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputTags)),
      findOne: jest.fn(),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] =  mockCourseRepository
   //@ts-expect-error defined part of methods
    service['tagRepository'] =  mockTagRepository

    const updateCourseDto: UpdateCourseDto = {
      name: 'Curso NestJS test',
      description: 'Curso introdutório de NestJS test',
      tags: ['nestJS'],
    };

    const course = await service.update(id, updateCourseDto )

    expect(mockCourseRepository.save).toHaveBeenCalled();
    expect(expectedOutputCourse).toStrictEqual(course)
  });

  it('should be update a course NotFound',async () => {

    const mockCourseRepository = {
      update: jest.fn().mockReturnValue(Promise.resolve(undefined)),
      preload: jest.fn().mockReturnValue(Promise.resolve(undefined)),
      save: jest.fn().mockReturnValue(Promise.resolve(undefined))
    };
    
    const mockTagRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(undefined)),
      findOne: jest.fn(),
    };

     //@ts-expect-error defined part of methods
    service['courseRepository'] =  mockCourseRepository
     //@ts-expect-error defined part of methods
     service['tagRepository'] =  mockTagRepository
  
    const updateCourseDto: UpdateCourseDto = {
      name: 'Curso NestJS test',
      description: 'Curso introdutório de NestJS test',
      tags: ['nestJS'],
    };

    try{
     await service.update(undefined, updateCourseDto )
    }catch(error){
      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.message).toEqual(`Course ID ${undefined} not found`)

    }

  });

  it('should remove a course',async () => {

    const expectOutputTags = [
      {
        id,
        name: 'nestJS',
        created_at: date,
      },
    ];

    const expectedOutputCourse = [{
      id,
      name:'Curso NestJS test',
      description: 'Curso introdutório de NestJS test',
      created_at: date,
      tags: expectOutputTags,
    }];

    const mockCourseRepository = {
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
      remove: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
     };
    //@ts-expect-error defined part of methods
    service['courseRepository'] =  mockCourseRepository

    const course = await service.remove(id)

    expect(mockCourseRepository.remove).toHaveBeenCalled();
    expect(expectedOutputCourse).toStrictEqual(course)
  });

});