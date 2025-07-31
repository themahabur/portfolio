import { FaFacebook, FaFileDownload, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail, MdFileDownload } from "react-icons/md";

const contactMethods = [
  {
    icon: <FaFacebook size={24} className="text-gray-600" />,
    label: "Facebook",
    value: "Mahabur Rahman",
    link: "https://www.facebook.com/mahabur.rahman21",
  },
  {
    icon: <MdAlternateEmail size={24} className="text-gray-600" />,
    label: "Email",
    value: "themahabur@gmail.com",
    link: "themahabur@gmail.com",
  },
  {
    icon: <FaLinkedin size={24} className="text-gray-600" />,
    label: "LinkedIn",
    value: "linkedin.com/in/themahabur",
    link: "https://www.linkedin.com/in/themahabur/",
  },
  {
    icon: <FaWhatsapp size={24} className="text-gray-600" />,
    label: "WhatsApp",
    value: "wa.me/01905909111",
    link: "https://wa.me/01905909111",
  },
  {
    icon: <FaGithub size={24} className="text-gray-600" />,
    label: "GitHub",
    value: "github.com/themahabur",
    link: "https://github.com/themahabur",
  },
  {
    icon: <MdFileDownload  size={24} className="text-gray-600" />,
    label: "Download CV",
    value: "Download CV",
    link: "https://drive.google.com/file/d/1vh44pAQR9p61zZgvCtRaoZIiNKkhIbpP/view?usp=drive_link",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-indigo-700 mb-2">Let's Work Together</h2>
        <p className="text-gray-600">
          I'd love to hear from you! Connect with me on any of the platforms below.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition p-5 flex items-center gap-4"
          >
            <div>{method.icon}</div>
            <div className="text-left">
              <p className="text-sm text-gray-500">{method.label}</p>
              <p className="text-gray-700 font-medium break-words">{method.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
