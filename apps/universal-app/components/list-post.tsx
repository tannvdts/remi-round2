"use client";

import { useEffect, useState } from "react";
import { PostEntity } from "../types/entities/post.entity";

const ListPost = () => {
  const [list, setList] = useState<PostEntity[]>([]);

  useEffect(() => {
    const exec = async () => {
      const response = await fetch('http://localhost:3000/posts');
      const result = await response.json();
      setList(result || []);
    }
    exec();
  }, []);
  return (
    <ul>
      {list.map((item) => {
        return (
          <li role="listitem" key={item.id}>{JSON.stringify(item)}</li>
        )
      })}
    </ul>
  )
}

export default ListPost;
