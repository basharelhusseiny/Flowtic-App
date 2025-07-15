import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaPhoneAlt } from "react-icons/fa";

const FixedButtons = () => {
  return (
    <div className="fixed bottom-5 left-5 flex flex-col gap-2 z-50">
      {/* زر واتساب */}
      <Link
        href="https://api.whatsapp.com/send?phone=966547393967"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={25} />
      </Link>

      {/* زر فيسبوك */}
      <Link
        href="https://www.facebook.com/profile.php?id=61576341404327​"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        aria-label="Facebook"
      >
        <FaFacebookF size={25} />
      </Link>

      {/* زر الاتصال */}
      <Link
        href="tel:201040747475"
        className="bg-sky-600 text-white p-3 rounded-full shadow-lg hover:bg-sky-700 transition"
        aria-label="Call"
      >
        <FaPhoneAlt size={25} />
      </Link>
    </div>
  );
};

export default FixedButtons;
