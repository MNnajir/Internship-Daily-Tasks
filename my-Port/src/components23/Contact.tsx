
import { Github, Linkedin, Mail } from 'lucide-react';
export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/MNnajir" className="text-gray-600 hover:text-gray-900">
                <Github size={24} />
          
              </a>
              <a href="https://www.linkedin.com/in/abdul-najir-ansari-9b21a9271/" className="text-gray-600 hover:text-gray-900">
                <Linkedin size={24} />
                
              </a>
              <a href="mailto:your@email.com" className="text-gray-600 hover:text-gray-900">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>
  )
}