import Image from 'next/image';
import { use } from 'react';

export default function Posts({ posts }: { posts: Promise<any> }) {
  console.log("🚀 ~ Posts ~ posts:", posts)
	const postsData = use(posts);

  return (
    <>
      {postsData?.map((p: any) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <Image width={300} height={300} src={p.image} alt={p.title} />
        </div>
      ))}
    </>
  );
}
