// src/components/Hero.tsx
const Hero = () => {
    return (
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Hi, I'm <span className="text-blue-600 ">Abdul Najir Ansari</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
              I'm a software developer. I have a passion for web development and love to create web applications using React and Node 
            </p>
          </div>
        </div>
      </section>
    );
  };
export {Hero};