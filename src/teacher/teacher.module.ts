import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { Module } from '@nestjs/common';
import { StudentTeacherController } from './student.controller';
import { StudentService } from '../student/student.service';

@Module({
  imports: [],
  controllers: [TeacherController, StudentTeacherController],
  providers: [TeacherService, StudentService],
})
export class TeacherModule {}
