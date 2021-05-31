export class FindTeachersResponseDto {
  id: string;
  name: string;
}

export class TeachersResponseDto {
  id: string;
  name: string;
  teacher: string;
}

export class updateTeacherDto {
  name: string;
  teacher: string;
}
