"use client"
import Carousel from './components/home/page';
import './styles/Footer.css';

export default function Home() {

  return (
    <>

      <div>
        <main className="container mx-auto p-4">
          <div className='h-20'></div>

          <h1 className="relative text-5xl font-extrabold text-center pt-12 pb-8">
            {/* Main Text with Dynamic Gradient */}
            <span
              className="
          dynamic-header text-transparent bg-clip-text 
          bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-600 
          font-serif tracking-wide"
            >
              Welcome to <span className="text-gradient">Space Auto Tech</span>
            </span>
          </h1>

          <Carousel />
          <div className="separation"></div>
        </main>
      </div>

    </>
  );
}

// useEffect(() => {
//   const timeline = gsap.timeline();

//   timeline
//     .from(".dynamic-header", {
//       y: 50,
//       opacity: 0,
//       duration: 1.5,
//       ease: "power4.out",
//     })
//     .to(".dynamic-header", {
//       textShadow: "0px 0px 20px rgba(0, 255, 255, 0.8)",
//       repeat: -1,
//       yoyo: true,
//       duration: 1.5,
//       ease: "power1.inOut",
//     });
// }, []);
// useEffect(() => {
//   // Step 1: Grab the h1 text content
//   const h1text = "Welcome To SPACE AUTOMATION";

//   // Step 2: Split the text into individual letters and wrap them in <span> tags
//   const splittedText = h1text.split("");
//   const clutter = splittedText.map((el, index) => (
//     <span key={index} className="inline-block">{el}</span>
//   ));

//   // Step 3: Render dynamically wrapped text using state or ref
//   const h1Element = document.querySelector('.dynamic-header');
//   if (h1Element) {
//     // h1Element.innerHTML = ""; // Clear existing content
//     // clutter.forEach((node) => h1Element.appendChild(node));
//     splittedText.forEach((el) => {
//       const span = document.createElement("span");
//       span.textContent = el; // Add the text content to each span
//       span.classList.add("inline-block"); // Add any required class
//       h1Element.appendChild(span); // Append to the container
//     });
//   }

//   // Step 4: Use GSAP to animate each letter with a stagger effect
//   gsap.from(".dynamic-header span", {
//     opacity: 0,
//     y: 50,
//     stagger: 0.05,
//     duration: 0.6,
//     ease: "power4.out",
//     delay: 0.5,
//   });
// }, []);
// useEffect(() => {
//   // Step 1: Grab the h1 text content
//   const h1text = "Welcome To SPACE AUTOMATION";

//   // Step 2: Split the text into individual letters and wrap them in <span> tags
//   const splittedText = h1text.split("");
//   let clutter = "";

//   splittedText.forEach((el) => {
//     clutter += `<span>${el}</span>`;
//   });

//   // Step 3: Set the HTML content of the h1 tag
//   const h1Element = document.querySelector('h1');
//   if (h1Element) {
//     h1Element.innerHTML = clutter;
//   }

//   // Step 4: Use GSAP to animate each letter with a stagger effect
//   gsap.from("h1 span", {
//     opacity: 0,
//     y: 50,
//     stagger: 0.05,
//     duration: 0.6,
//     ease: "power4.out",
//     delay: 0.5,
//   });
//   gsap.from(".text-gradient", {
//     opacity: 0,
//     duration: 2,
//     x: -100,
//     ease: "power3.out",
//   });

//   gsap.from(".underline", {
//     width: 0,
//     duration: 1,
//     delay: 1.5,
//     ease: "power2.out",
//   });

//   gsap.from(".decorative-border", {
//     scaleX: 0,
//     duration: 1,
//     delay: 2,
//     ease: "elastic.out(1, 0.75)",
//   });
// }, []);

// useEffect(() => {

// }, []);