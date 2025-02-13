// Desc: About component for the landing page
// Usage: Used in src/App.tsx


export function About() {

    return (
        <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
            <div className="prose prose-lg text-gray-500">
            <p>
                I'm a software developer. I have a passion for web development and love to create web applications using React and Node.js.
            </p>
            </div>
        </div>
        </section>
    );

}