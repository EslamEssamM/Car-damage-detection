import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AlertCircle, Calendar, Building2, ExternalLink } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";

export default function ReportingProceduresPage() {
  const handleExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cards = [
    {
      title: "تقديم بلاغ في نجم",
      description: "قم بتقديم بلاغ عن حادث مروري عبر نظام نجم",
      icon: <AlertCircle className="h-8 w-8 text-amber-200" />,
      url: "https://najm.sa/sites/ar/Pages/Login.aspx?redirect=ClaimsHistory.aspx",
      previewUrl: "https://nejm.sa/index.php/about-us/",
      buttonText: "الانتقال إلى نجم",
      color: "from-amber-400 to-orange-500",
    },
    {
      title: "حجز موعد في تقديرات",
      description: "احجز موعدًا لتقدير الأضرار في مركز تقديرات",
      icon: <Calendar className="h-8 w-8 text-emerald-200" />,
      url: "https://taqdeer.sa/حجز-موعد/",
      previewUrl: "https://taqdeer.sa",
      buttonText: "حجز موعد",
      color: "from-emerald-400 to-teal-500",
    },
    {
      title: "شركات التأمين",
      description: "استعرض قائمة شركات التأمين المعتمدة",
      icon: <Building2 className="h-8 w-8 text-sky-200" />,
      url: "/warranty",
      previewUrl: "/warranty ",
      buttonText: "عرض الشركات",
      color: "from-sky-400 to-indigo-500",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 py-12 px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 sm:text-6xl md:text-7xl mb-4">
            إجراءات البلاغ
          </h1>
          <p className="text-xl text-gray-300 sm:text-2xl md:text-3xl max-w-3xl mx-auto">
            اختر الإجراء المناسب لحالتك
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              className="relative group"
            >
              <LinkPreview url={card.previewUrl} width={300} height={200}>
                <div
                  className={`bg-gradient-to-br ${card.color} rounded-2xl shadow-xl p-8 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105`}
                >
                  <div className="flex items-center justify-center mb-6">
                    {React.cloneElement(card.icon, {
                      className: `h-12 w-12 text-white`,
                    })}
                  </div>
                  <h2 className="text-2xl font-bold text-white text-center mb-4">
                    {card.title}
                  </h2>
                  <p className="text-white text-opacity-90 text-center mb-6">
                    {card.description}
                  </p>
                  <div className="flex justify-center">
                    <Button
                      onClick={() => handleExternalLink(card.url)}
                      className="bg-white text-gray-900 hover:bg-gray-100 transition-colors duration-300"
                    >
                      {card.buttonText}
                      <ExternalLink className="mr-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </LinkPreview>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-300">
            للمساعدة والاستفسارات، يرجى الاتصال بالرقم الموحد:{" "}
            <span className="font-bold text-white">920000000</span>
          </p>
        </motion.div>

        <div className="mt-16 text-center">
          <LinkPreview
            url="https://najm.sa"
            width={400}
            height={250}
            className="inline-block"
          >
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-600 hover:from-pink-500 hover:via-fuchsia-600 hover:to-purple-700 transition-all duration-300">
              تعرف على خدمات نجم
            </span>
          </LinkPreview>
        </div>
      </div>
    </div>
  );
}
