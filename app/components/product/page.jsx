'use client'
import Image from "next/image";
// import { useState } from 'react';
import Link from "next/link";

const products1 = [
    { id: 1, category: "CATEGORY", name: "sprincals System", price: "₹16.00", image: "/product/sprincal.jpeg" },
    { id: 2, category: "CATEGORY", name: "Drip Irrigation Pipes", price: "₹21.15", image: "/product/dripp.webp" },
    { id: 3, category: "CATEGORY", name: "Drip Accessories", price: "₹12.00", image: "/product/dripa.jpg" },
    { id: 4, category: "CATEGORY", name: "HDPE Pipes", price: "₹18.40", image: "/product/HDPE.jpg" },
    { id: 5, category: "CATEGORY", name: "PVC Pipes", price: "₹16.00", image: "/product/pvc.jpg" },
    { id: 6, category: "CATEGORY", name: "Irrigation Valve", price: "₹21.15", image: "/product/valve.jpg" },
    { id: 7, category: "CATEGORY", name: "Irrigation Tool", price: "₹12.00", image: "/product/tool.jpg" },
    { id: 8, category: "CATEGORY", name: "Laser Spray Pipe", price: "₹18.40", image: "/product/laser.jpg" },
    { id: 9, category: "CATEGORY", name: "Motors", price: "₹18.90", image: "/product/moters.jpg" },
];
const products2 = [
    { id: 1, category: "CATEGORY", name: "Small tools", price: "₹16.00", image: "/product/Smalltools.webp" },
    { id: 2, category: "CATEGORY", name: "Tractor tools", price: "₹21.15", image: "/product/Tractortools.jpg" },
    { id: 3, category: "CATEGORY", name: "Tractor accessories", price: "₹12.00", image: "/product/accessories.jpg" },
    { id: 4, category: "CATEGORY", name: "Pesticides", price: "₹18.40", image: "/product/Pesticides.jpg" },
    { id: 5, category: "CATEGORY", name: "fertilisers", price: "₹16.00", image: "/product/fertilisers.jpg" },
    { id: 6, category: "CATEGORY", name: "Seeds", price: "₹21.15", image: "/product/Seeds.webp" },
];
const products3 = [
    { id: 1, category: "CATEGORY", name: "Arduino Boards", price: "₹16.00", image: "/product/Arduino.jpg" },
    { id: 2, category: "CATEGORY", name: "Controllers", price: "₹21.15", image: "/product/Controllers.jpg" },
    { id: 3, category: "CATEGORY", name: "Gateways", price: "₹12.00", image: "/product/Gateways.jpg" },
    { id: 4, category: "CATEGORY", name: "Limit Switch", price: "₹18.40", image: "/product/LimitSwitch.jpeg" },
    { id: 5, category: "CATEGORY", name: "Relay Boards", price: "₹16.00", image: "/product/RelayBoards.jpg" },
];
// const products4 = [
//     { id: 1, category: "CATEGORY", name: "", price: "₹16.00", image: "https://dummyimage.com/420x260" },
//     { id: 2, category: "CATEGORY", name: "Shooting Stars", price: "₹21.15", image: "https://dummyimage.com/421x261" },
//     { id: 3, category: "CATEGORY", name: "Neptune", price: "₹12.00", image: "https://dummyimage.com/422x262" },
//     { id: 4, category: "CATEGORY", name: "The 400 Blows", price: "₹18.40", image: "https://dummyimage.com/423x263" },
//     { id: 5, category: "CATEGORY", name: "The Catalyzer", price: "₹16.00", image: "https://dummyimage.com/424x264" },
//     { id: 6, category: "CATEGORY", name: "Shooting Stars", price: "₹21.15", image: "https://dummyimage.com/425x265" },
//     { id: 7, category: "CATEGORY", name: "Neptune", price: "₹12.00", image: "https://dummyimage.com/427x267" },
//     { id: 8, category: "CATEGORY", name: "The 400 Blows", price: "₹18.40", image: "https://dummyimage.com/428x268" },
// ];


export default function ProductCard() {
    // const [selectedSize, setSelectedSize] = useState('SM');

    // const handleSizeChange = (event) => {
    //     setSelectedSize(event.target.value);
    // };
    return (
        <>
            <div className='h-24'></div>

            <h2 className="text-4xl text-center font-extrabold text-gray-900 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text py-2 rounded-md shadow-md">IRRIGATION</h2>
            <section className="text-gray-600 body-font bg-gray-50 py-16">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {products1.map((product) => (
                            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <Link href={`/components/product/${product.id}`} legacyBehavior>
                                    <div>
                                        <a className="block relative h-64 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300">
                                            <Image
                                                alt={product.name}
                                                className="object-cover object-center w-full h-full  hover:scale-105"
                                                src={product.image}
                                                fill
                                            />
                                        </a>
                                        <div className="mt-4 text-center">
                                            <h3 className="text-blue-500 text-xs tracking-wide uppercase mb-1">
                                                {product.category}
                                            </h3>
                                            <h2 className="text-gray-900 title-font text-lg font-semibold mb-2">
                                                {product.name}
                                            </h2>
                                            <p className="mt-1 text-lg text-gray-700 font-bold">{product.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <h2 className="text-4xl text-center font-extrabold text-gray-900 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text py-2 rounded-md shadow-md">FARMING</h2>
            <section className="text-gray-600 body-font bg-gray-50 py-16">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {products2.map((product) => (
                            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <Link href={`/components/product/${product.id}`} legacyBehavior>
                                    <a className="block relative h-64 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300">
                                        <Image
                                            alt={product.name}
                                            className="object-cover object-center w-full h-full  hover:scale-105"
                                            src={product.image}
                                            fill
                                        />
                                    </a>
                                </Link>
                                <div className="mt-4 text-center">
                                    <h3 className="text-blue-500 text-xs tracking-wide uppercase mb-1">
                                        {product.category}
                                    </h3>
                                    <h2 className="text-gray-900 title-font text-lg font-semibold mb-2">
                                        {product.name}
                                    </h2>
                                    <p className="mt-1 text-lg text-gray-700 font-bold">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <h2 className="text-4xl text-center font-extrabold text-gray-900 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text py-2 rounded-md shadow-md">IOT</h2>
            <section className="text-gray-600 body-font bg-gray-50 py-16">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {products3.map((product) => (
                            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <Link href={`/components/product/${product.id}`} legacyBehavior>
                                    <a className="block relative h-64 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300">
                                        <Image
                                            alt={product.name}
                                            className="object-cover object-center w-full h-full  hover:scale-105"
                                            src={product.image}
                                            fill
                                        />
                                    </a>
                                </Link>
                                <div className="mt-4 text-center">
                                    <h3 className="text-blue-500 text-xs tracking-wide uppercase mb-1">
                                        {product.category}
                                    </h3>
                                    <h2 className="text-gray-900 title-font text-lg font-semibold mb-2">
                                        {product.name}
                                    </h2>
                                    <p className="mt-1 text-lg text-gray-700 font-bold">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <h2 className="text-4xl text-center font-extrabold text-gray-900 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text py-2 rounded-md shadow-md">SOLAR</h2>
            <section className="text-gray-600 body-font bg-gray-50 py-16">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {products4.map((product) => (
                            <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <Link href={`/components/product/${product.id}`} legacyBehavior>
                                    <a className="block relative h-64 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300">
                                        <Image
                                            alt={product.name}
                                            className="object-cover object-center w-full h-full  hover:scale-105"
                                            src={product.image}
                                            fill
                                        />
                                    </a>
                                </Link>
                                <div className="mt-4 text-center">
                                    <h3 className="text-blue-500 text-xs tracking-wide uppercase mb-1">
                                        {product.category}
                                    </h3>
                                    <h2 className="text-gray-900 title-font text-lg font-semibold mb-2">
                                        {product.name}
                                    </h2>
                                    <p className="mt-1 text-lg text-gray-700 font-bold">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

        </>
    );
}
