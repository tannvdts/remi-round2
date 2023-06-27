import { IsNotEmpty, Length } from 'class-validator';

class PostFormModel {
  @Length(10, 200)
  @IsNotEmpty()
  title: string;

  @Length(10, 50)
  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  content: string;
}

export { PostFormModel };
