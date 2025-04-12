'use client'
import Link from 'next/link';
import Image from 'next/image';


// import styles from '@/app/styles/Footer.css';
// import styles from './Footer.css'; 

const Footer = () => {
  return (
    <>
    <footer className='bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 p-10'>
  <div className="text-white body-font">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a className="flex title-font font-bold items-center md:justify-start justify-center text-white">
          <Image className='z-50' src="/assets/icon.png" alt="Logo" width={50} height={30} layout="intrinsic"  />
          <span className="ml-3 text-3xl">SPACE AUTOMATION</span>
        </a>
        <p className="mt-2 text-sm text-gray-300">Thanks for visiting our site, please visit again.</p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">PRODUCT</h2>
          <nav className="list-none mb-10">
            <li><a className="text-gray-300 hover:text-gray-100 transition">Irrigation</a></li>
            <li><a className="text-gray-300 hover:text-gray-100 transition">Solar Energy</a></li>
            <li><a className="text-gray-300 hover:text-gray-100 transition">Power & Industrial</a></li>
            <li><a className="text-gray-300 hover:text-gray-100 transition">Development</a></li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">SERVICES</h2>
          <nav className="list-none mb-10">
            <li><a className="text-gray-300 hover:text-gray-100 transition">Home Automation</a></li>
            <li><a className="text-gray-300 hover:text-gray-100 transition">RTU</a></li>
            <li><a className="text-gray-300 hover:text-gray-100 transition">Custom Services</a></li>
            <li><a className="text-gray-300 hover:text-gray-100 transition">Support</a></li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">PRIVACY TERMS</h2>
          <nav className="list-none mb-10">
            <li><a className="text-gray-300 hover:text-gray-100 transition">Legal</a></li>
            <li><a className="text-gray-300 hover:text-gray-100 transition">Privacy Policy</a></li>
            <li><a className="text-gray-300 hover:text-gray-100 transition">Contribute</a></li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">ABOUT US</h2>
          <nav className="list-none mb-10">
            <li><a className="text-gray-300 hover:text-gray-100 transition">Contact</a></li>
            <li><a className="text-gray-300 hover:text-gray-100 transition">About Team</a></li>
            <li><a className="text-gray-300 hover:text-gray-100 transition">Company Info</a></li>
          </nav>
        </div>
      </div>
    </div>

    <div className="footer-inner flex justify-between items-center mt-10">
      <div className="copyright text-gray-100">
        <p>Copyright &copy; 2024, SPACE AUTOMATION. All rights reserved.</p>
      </div>
      <div className="social-icons flex space-x-6">
        <div className="social-icons-wrapper bg-white p-3 rounded-lg shadow-md flex space-x-4">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
            <span className="social-icon text-blue-600 hover:text-blue-800 transition">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </span>
          </Link>
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
            <span className="social-icon text-blue-400 hover:text-blue-600 transition">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <span className="social-icon text-blue-700 hover:text-blue-900 transition">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </span>
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <span className="social-icon text-pink-600 hover:text-pink-800 transition">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M7 2C3.13 2 2 3.13 2 7v10c0 3.87 1.13 5 5 5h10c3.87 0 5-1.13 5-5V7c0-3.87-1.13-5-5-5H7zm3 4h4c.55 0 1 .45 1 1v1h2c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-2v1c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1v-1H7c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h2V7c0-.55.45-1 1-1zm2 3c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    .footer-container {
      background-color: #121212;
      color: #ffffff;
      padding: 40px;
      text-align: center;
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    }

    .social-icons-wrapper {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 10px;
    }

    .social-icon {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #ffffff;
      padding: 6px;
      text-align: center;
      transition: transform 0.3s ease;
    }

    .social-icon:hover {
      transform: scale(1.2);
    }

    .footer-inner {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      font-size: 14px;
      color: #aaa;
    }
  `}</style>
</footer>

    </>
  );
};

export default Footer;

