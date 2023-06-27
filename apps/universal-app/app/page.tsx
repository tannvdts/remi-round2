'use client';

import ListPost from "../components/list-post";
import { PostEntity } from "../types/entities/post.entity";

const getData = async () => {
  const response = await fetch('http://localhost:3000/posts');
  const result = await response.json();
  return (result || []) as PostEntity[];
}

export default async function Home() {
  const listPost = await getData();
  return (
    <div>
      <header className="bg-white shadow">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Home</h1>
        </div>
      </header>
      <main>
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          Hello
          <div>
            <ListPost />
          </div>
        </div>
      </main>
    </div>
  );
}
