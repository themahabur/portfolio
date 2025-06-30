import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

// components/Contact.jsx
const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold text-indigo-600">Contact Me</h2>
        <p className="text-gray-700">I'd love to hear from you! You can reach me through the following:</p>
        <div className="space-y-2 text-lg">
          <p className="text-gray-600 bg-white p-2 rounded border-2 border-gray-200 ">
            <strong>
              <MdAlternateEmail className="inline-block mr-1" />
              Email:
            </strong>{" "}
            <a href="mailto:themahabur@gmail.com" className="text-indigo-600 hover:underline  px-2">themahabur@gmail.com</a>
          </p>    
          <p className="text-gray-600 bg-white p-2 rounded border-2 border-gray-200 ">
            <strong>
              <FaLinkedin className="inline-block mr-2" />
              LinkedIn:
            </strong>{" "}
            <a
              href="https://www.linkedin.com/in/mahabur-rahman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline px-2"
            >
              linkedin.com/in/mahabur-rahman
            </a>
          </p>
          <p className="text-gray-600 bg-white p-2 rounded border-2 border-gray-200 ">
            <strong>
              <FaWhatsapp className="inline-block mr-1" />
              WhatsApp:
            </strong>{" "}
            <a
              href="https://wa.me/01905909111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline  px-2"
            >
              wa.me/01905909111
            </a>
          </p>
          <p className="text-gray-600 bg-white p-2 rounded border-2 border-gray-200 ">
            <strong>
              <FaGithub className="inline-block mr-1" />
              GitHub:
            </strong>{" "}
            <a
              href="https://github.com/themahabur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline  px-2"
            >
              github.com/themahabur
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;