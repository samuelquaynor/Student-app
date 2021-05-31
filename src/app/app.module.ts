import { TeacherModule } from '../teacher/teacher.module';
import { StudentModule } from '../student/student.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [TeacherModule, StudentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
