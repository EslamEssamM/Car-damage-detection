import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Phone, Globe, ExternalLink } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";

const insuranceCompanies = [
  {
    name: "شركة التعاونية للتأمين",
    logo: "/tawuniya.png",
    website: "https://www.tawuniya.com",
    phone: "+966 11 252 5800",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "شركة المتوسط والخليج للتأمين وإعادة التأمين التعاوني (ميدغلف)",
    logo: "/medgulf.svg",
    website: "https://www.medgulf.com.sa",
    phone: "800 441 4442",
    color: "from-yellow-500 to-yellow-700",
  },
  {
    name: "شركة الدرع العربي للتأمين التعاوني",
    logo: "/der3.webp",
    website: "https://www.der3.com/",
    phone: "8001 247 247",
    color: "from-green-500 to-green-700",
  },
  {
    name: "شركة الراجحي للتأمين التعاوني (تكافل الراجحي)",
    logo: "/raghy.svg",
    website: "https://www.alrajhitakaful.com",
    phone: "920004414",
    color: "from-purple-500 to-purple-700",
  },
];

export default function CarInsuranceCompaniesPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-white sm:text-6xl md:text-7xl mb-4">
            شركات تأمين السيارات
          </h1>
          <p className="text-xl text-gray-300 sm:text-2xl md:text-3xl max-w-3xl mx-auto">
            استعرض قائمة شركات تأمين السيارات المعتمدة في المملكة العربية
            السعودية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insuranceCompanies.map((company, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
            >
              <LinkPreview url={company.website} width={300} height={200}>
                <Card
                  className={`bg-gradient-to-br ${company.color} rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105`}
                >
                  <CardHeader className="pb-2">
                    <div className="w-full h-24 flex items-center justify-center bg-white rounded-t-xl p-4">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="text-white">
                    <CardTitle className="text-2xl font-bold text-center mb-4">
                      {company.name}
                    </CardTitle>
                    <CardDescription className="text-gray-100 text-center mb-4">
                      شركة تأمين سيارات معتمدة في المملكة العربية السعودية
                    </CardDescription>
                    <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() =>
                          window.open(
                            company.website,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                      >
                        <Globe className="ml-2 h-4 w-4" />
                        الموقع الإلكتروني
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => window.open(`tel:${company.phone}`)}
                      >
                        <Phone className="ml-2 h-4 w-4" />
                        {company.phone}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
            للمزيد من المعلومات حول تأمين السيارات في المملكة العربية السعودية،
            يرجى زيارة موقع:
          </p>
          <LinkPreview
            url="https://www.sama.gov.sa/ar-sa/Pages/default.aspx"
            width={400}
            height={250}
            className="inline-block mt-4"
          >
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
              onClick={() =>
                window.open(
                  "https://www.sama.gov.sa/ar-sa/Pages/default.aspx",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              البنك المركزي السعودي (ساما)
              <ExternalLink className="mr-2 h-4 w-4" />
            </Button>
          </LinkPreview>
        </motion.div>
      </div>
    </div>
  );
}
