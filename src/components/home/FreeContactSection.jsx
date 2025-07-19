"use client";
import HeaderSection from "@/ui/HeaderSection";
import { useState } from "react";

const FreeContactSection = ({ dict, locale }) => {
  const [formData, setFormData] = useState({
    activity: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { activity, email, phone, requirements } = formData;

  
    if (!activity || !email || !phone || !requirements) {
      alert("من فضلك املأ جميع الحقول قبل الإرسال.");
      return;
    }

    const message = `
      📩 طلب جديد من النموذج:

      🔸 النشاط: ${activity}
      📧 الإيميل: ${email}
      📞 الهاتف: ${phone}
      📝 المتطلبات: ${requirements}
        `;

    const phoneNumber = "201234567890";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");

    setFormData({
      activity: "",
      email: "",
      phone: "",
      requirements: "",
    });
  };

  // Determine direction based on language
  const isRTL = locale === "ar";
  const directionClass = isRTL ? "rtl" : "ltr";
  const textAlignClass = isRTL ? "text-right" : "text-left";
  const iconPositionClass = isRTL ? "right-0 pr-4" : "left-0 pl-4";

  return (
    <section className="py-14 px-5 relative overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute -top-0 -right-0 w-30 h-30 bg-pink-800 rounded-full blur-3xl" />
      <div className="absolute -bottom-0 -left-0 w-30 h-30 bg-red-500 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto relative">
        <HeaderSection
          title={dict.freeContact.title}
          description={dict.freeContact.description}
        />

        <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-80 border border-gray-100">
          <form
            onSubmit={handleSubmit}
            className={`space-y-6 ${directionClass}`}
            dir={directionClass}
          >
            <div className="relative group">
              <select
                name="activity"
                value={formData.activity}
                onChange={handleChange}
                className={`w-full px-6 py-4 border-2 border-gray-200 rounded-xl bg-white appearance-none ${
                  isRTL ? "pr-10 pl-4" : "pl-10 pr-4"
                } transition-all focus:border-pink-800 focus:outline-none group-hover:border-pink-800 ${textAlignClass}`}
              >
                <option value="" disabled>
                  {dict.freeContact.form.activityPlaceholder}
                </option>
                {dict.freeContact.form.activities.map((activity, index) => (
                  <option key={index} value={activity}>
                    {activity}
                  </option>
                ))}
              </select>
              <div
                className={`absolute inset-y-0 ${iconPositionClass} flex items-center pointer-events-none`}
              >
                <svg
                  className={`w-5 h-5 text-gray-400 group-hover:text-pink-800 transition-colors `}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={dict.freeContact.form.emailPlaceholder}
                  className={`w-full px-6 py-4 border-2 border-gray-200 rounded-xl transition-all focus:border-pink-800 focus:outline-none group-hover:border-pink-800 ${textAlignClass} ${
                    isRTL ? "pr-10 pl-4" : "pl-10 pr-4"
                  }`}
                />
                <div
                  className={`absolute inset-y-0 ${iconPositionClass} flex items-center pointer-events-none`}
                >
                  <svg
                    className={`w-5 h-5 text-gray-400 group-hover:text-pink-800 transition-colors ${
                      isRTL ? "transform scale-x-[-1]" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={dict.freeContact.form.phonePlaceholder}
                  className={`w-full px-6 py-4 border-2 border-gray-200 rounded-xl transition-all focus:border-pink-800 focus:outline-none group-hover:border-pink-800 ${textAlignClass} ${
                    isRTL ? "pr-10 pl-4" : "pl-10 pr-4"
                  }`}
                />
                <div
                  className={`absolute inset-y-0 ${iconPositionClass} flex items-center pointer-events-none`}
                >
                  <svg
                    className={`w-5 h-5 text-gray-400 group-hover:text-pink-800 transition-colors ${
                      isRTL ? "transform scale-x-[-1]" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative group">
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                placeholder={dict.freeContact.form.requirementsPlaceholder}
                rows="4"
                className={`w-full px-6 py-4 border-2 border-gray-200 rounded-xl transition-all focus:border-pink-800 focus:outline-none group-hover:border-pink-800 ${textAlignClass} ${
                  isRTL ? "pr-10 pl-4" : "pl-10 pr-4"
                }`}
              />
              <div
                className={`absolute top-4 ${iconPositionClass} flex items-start pointer-events-none`}
              >
                <svg
                  className={`w-5 h-5 text-gray-400 group-hover:text-pink-800 transition-colors ${
                    isRTL ? "transform scale-x-[-1]" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#cb9ea7] to-pink-800 hover:from-pink-800 hover:to-[#cb9ea7] text-white py-4 px-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-800 focus:ring-offset-2 shadow-lg transition-colors duration-300"
            >
              {dict.freeContact.form.submitButton}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FreeContactSection;
