
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import planeImage from '@/public/plane.jpg';
import Posts from './posts';
import { Suspense } from 'react';

const getData = async () => {
	try {
		const response = await fetch('https://fakestoreapi.com/products');
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		// sample struct
		// {
		// 	"id": 1,
		// 	"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
		// 	"price": 109.95,
		// 	"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
		// 	"category": "men's clothing",
		// 	"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
		// 	"rating": {
		// 		"rate": 3.9,
		// 		"count": 120
		// 	}
		// },
		return new Promise(r => setTimeout(() => {
			r(response.json());
		}, 3000));
	} catch (error) {
		console.error("Failed to fetch blog data:", error);
		// Handle the error appropriately, e.g., set a default value or show an error message
	}
}

export default async function ContactUs() {
	console.log('Contact us page');
	const blog = getData();

	const onClick = () => {
		console.log('Click me');
		notFound();
	}

	return (
		<div>
			<h1>Contact Us</h1>

			<Image width={300} height={300} src={planeImage} alt="Plane" />
			<Image width={300} height={300} src='https://upload.wikimedia.org/wikipedia/commons/f/ff/Pizigani_1367_Chart_10MB.jpg' alt="Plane" />

			<div> Check here to trigger not found page</div>
			<button className='border border-blue-600 cursor-pointer hover:bg-blue-600'>Click me</button>

			<Suspense fallback={<div>Loading...</div>}>
				<Posts posts={blog} />
			</Suspense>

			<Link href="/dashboard" className='text-blue-600 hover:underline'>Dashboard</Link>
		</div>
	);
}