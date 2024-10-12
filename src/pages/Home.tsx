import React from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Car, FileText, ChevronRight } from "lucide-react";

const tools = [
  {
    title: "اكتشاف الأضرار",
    description:
      "قم بتحميل صورة لسيارتك واكتشف الأضرار باستخدام الذكاء الاصطناعي",
    icon: <Car className="h-12 w-12" />,
    link: "/detection",
    color: "from-blue-500 to-blue-700",
    hoverColor: "from-blue-600 to-blue-800",
  },
  {
    title: "الإبلاغ",
    description: "قم بتقديم بلاغ عن حادث أو حجز موعد للتقدير",
    icon: <FileText className="h-12 w-12" />,
    link: "/report",
    color: "from-green-500 to-green-700",
    hoverColor: "from-green-600 to-green-800",
  },
  {
    title: "السيارات",
    description: "استعرض وأضف سياراتك الخاصة",
    icon: <Car className="h-12 w-12" />,
    link: "/cars",
    color: "from-yellow-500 to-yellow-700",
    hoverColor: "from-yellow-600 to-yellow-800",
  },
  
];

export default function IndexPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800"
      dir="rtl"
    >
      {/* <Navbar /> */}
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 sm:text-6xl md:text-7xl mb-4">
            مرحبًا بك في كاشف أضرار السيارات
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 sm:text-2xl md:text-3xl max-w-3xl mx-auto">
            اكتشف وأبلغ عن أضرار سيارتك بسهولة باستخدام أدواتنا المتطورة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
            >
              <Link to={tool.link} className="block h-full">
                <Card
                  className={`group bg-gradient-to-br ${tool.color} hover:${tool.hoverColor} text-white h-full rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 transform`}
                >
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-white bg-opacity-20 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-30">
                        {React.cloneElement(tool.icon, {
                          className:
                            "h-16 w-16 transition-all duration-300 group-hover:rotate-12",
                        })}
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">
                      {tool.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-100 text-center">
                      {tool.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="group-hover:bg-white group-hover:text-gray-900 transition-all duration-300"
                    >
                      استكشف الأداة
                      <ChevronRight className="mr-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-600 dark:text-gray-300">
            هل تحتاج إلى مساعدة؟ اتصل بنا على الرقم الموحد:{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              920000000
            </span>
          </p>
        </motion.div> */}
      </main>
    </div>
  );
}
