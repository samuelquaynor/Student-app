import { Injectable } from '@nestjs/common';
import { teachers } from 'src/db';
import { FindTeachersResponseDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
  private teachers = teachers;

  getTeachers(): FindTeachersResponseDto[] {
    return this.teachers;
  }

  getTecherById(teacherId: string): FindTeachersResponseDto {
    return this.teachers.find((teacher) => {
      return teacher.id == teacherId;
    });
  }
}
