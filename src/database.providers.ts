import { DataSource } from 'typeorm';
import { CreateCoursesTable1668650720403 } from './migrations/1668650720403-CreateCoursesTable';
import { CreateTagsTable1668651247815 } from './migrations/1668651247815-CreateTagsTable';
import { CreateCourseTagsTable1668737464790 } from './migrations/1668737464790-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1668738164184 } from './migrations/1668738164184-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1668739245541 } from './migrations/1668739245541-AddTagsIdToCoursesTagsTable';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'cursonestjs',
        entities: [
            __dirname + '/../**/*.entity.js',
        ],

        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'cursonestjs',
  entities: [
      __dirname + '/../**/*.entity.js',
  ],
  synchronize: false,
  migrations: [CreateCoursesTable1668650720403,
    CreateTagsTable1668651247815, 
    CreateCourseTagsTable1668737464790,
    AddCoursesIdToCoursesTagsTable1668738164184,
    AddTagsIdToCoursesTagsTable1668739245541
  ]
});