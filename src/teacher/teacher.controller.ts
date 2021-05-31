import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { FindTeachersResponseDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}
  @Get()
  getTeachers(): FindTeachersResponseDto[] {
    return this.teacherService.getTeachers();
  }

  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindTeachersResponseDto {
    return this.teacherService.getTecherById(teacherId);
  }
}
