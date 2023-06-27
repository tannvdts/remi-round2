"use client";

import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { PostFormModel } from '../types/form-models/post.form';
import { useForm } from 'react-hook-form';

const resolver = classValidatorResolver(PostFormModel);

const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormModel>({ resolver });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input type="text" {...register('title')} />
      {errors.title && <span>{errors.title.message}</span>}
      <input type="text" {...register('author')} />
      {errors.author && <span>{errors.author.message}</span>}
      <textarea {...register('content')} />
      {errors.content && <span>{errors.content.message}</span>}
      <input type="submit" value="Submit" />
    </form>
  )
}

export default PostForm;