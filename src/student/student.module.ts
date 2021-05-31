import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { NestModule } from '@nestjs/common';
import { ValidStudentMiddleware } from 'src/common/middleware/validstudent.middleware';

@Module({
  imports: [],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidStudentMiddleware)
      .forRoutes({ path: 'students/:studentId', method: RequestMethod.GET });
    consumer
      .apply(ValidStudentMiddleware)
      .forRoutes({ path: 'students/:studentId', method: RequestMethod.PUT });
  }
}
