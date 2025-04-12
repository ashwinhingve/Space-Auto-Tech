

import Image from "next/image";
import { notFound } from "next/navigation";

// Mock Data (you can replace it with an API call)
const products = [
    { id: 1, category: "CATEGORY", name: "sprincals System", price: "₹16.00", image: "/product/sprincal.jpeg" },
    { id: 2, category: "CATEGORY", name: "Drip Irrigation Pipes", price: "₹21.15", image: "/product/dripp.webp" },
    { id: 3, category: "CATEGORY", name: "Drip Accessories", price: "₹12.00", image: "/product/dripa.jpg" },
    { id: 4, category: "CATEGORY", name: "HDPE Pipes", price: "₹18.40", image: "/product/hdpe.jpg" },
    { id: 5, category: "CATEGORY", name: "PVC Pipes", price: "₹16.00", image: "/product/pvc.jpg" },
    { id: 6, category: "CATEGORY", name: "Irrigation Valve", price: "₹21.15", image: "/product/valve.jpg" },
    { id: 7, category: "CATEGORY", name: "Irrigation Tool", price: "₹12.00", image: "/product/tool.jpg" },
    { id: 8, category: "CATEGORY", name: "Laser Spray Pipe", price: "₹18.40", image: "/product/laser.jpg" },
    { id: 9, category: "CATEGORY", name: "Motors", price: "₹18.90", image: "/product/moters.jpg" },
    // Add more products here...
];

// This function generates static params for dynamic routes
export async function generateStaticParams() {
    // Generate paths dynamically based on products
    return products.map((product) => ({
        id: product.id.toString(), // Make sure this corresponds to your dynamic [id]
    }));
}

// The page component that gets rendered for each product
const ProductDetail = ({ params }) => {
    const { id } = params;
    const product = products.find((item) => item.id.toString() === id);

    if (!product) {
        return notFound(); // 404 if product is not found
    }

    return (
        <>
            <div className='h-20'></div>
            {/* <div className="p-8 max-w-4xl mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <Image
                            alt="Product Image"
                            src={product.image}
                            width={500}
                            height={500}
                            className="rounded"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-10">
                        <h1 className="text-2xl font-bold">{product.name}</h1>
                        <p className="text-gray-500 mb-4">{product.category}</p>
                        <p className="text-xl font-semibold mb-4">{product.price}</p>
                        <p className="text-gray-700 mb-6">
                            This is a detailed description of the product. Add more fields here if needed.
                        </p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div> */}
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <Image
                            alt="ecommerce"
                            className="lg:w-1/2 w-full lg:h-2/3 h-64 object-cover object-center rounded lg:p-10"
                            src={product.image}
                            width={500}
                            height={500}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                BRAND NAME
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {product.name}
                            </h1>
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                {product.category}
                            </h2>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    {[...Array(4)].map((_, index) => (
                                        <svg
                                            key={index}
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-4 h-4 text-indigo-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                    ))}
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-indigo-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                {/* <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                                    {["facebook", "twitter", "message"].map((social, index) => (
                                        <a key={index} className="text-gray-500">
                                            <svg
                                                fill="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                    ))}
                                </span> */}
                            </div>
                            <div className="flex mb-4">
                                <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
                                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
                            </div>
                            <p className="leading-relaxed mb-6">
                                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                                seitan poutine tumeric. Gastropub blue bottle austin listicle
                                pour-over, neutra jean shorts keytar banjo tattooed umami
                                cardigan.
                            </p>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Color</span>
                                <span className="ml-auto text-gray-900">Blue</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Size</span>
                                <span className="ml-auto text-gray-900">Medium</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span className="text-gray-500">Quantity</span>
                                <span className="ml-auto text-gray-900">4</span>
                            </div>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-3">Color</span>
                                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                            {["SM", "M", "L", "XL"].map((size) => (
                                                <option key={size}>{size}</option>
                                            ))}
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="w-4 h-4"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="title-font font-medium text-2xl text-gray-900">
                                    {product.price}
                                </span>
                                <div className="flex space-x-4">
                                    <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                        Add to Cart
                                    </button>
                                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetail;
