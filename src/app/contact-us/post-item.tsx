import Image from 'next/image';

export default function PostItem({ post }: { post: any }) {
	return (
		<div>
			<h3>{post.title}</h3>
			<p>{post.description}</p>
			<Image width={300} height={300} src={post.image} alt={post.title} />
		</div>
	);
}