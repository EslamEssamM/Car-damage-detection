import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Upload } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { CheckCircle } from "lucide-react";

interface AccidentReport {
  id: string;
  rightImage: string;
  leftImage: string;
  frontImage: string;
  backImage: string;
  description: string;
  timestamp: number;
}

export function DirectReportPage() {
  const [report, setReport] = useState<AccidentReport>({
    id: "",
    rightImage: "",
    leftImage: "",
    frontImage: "",
    backImage: "",
    description: "",
    timestamp: 0,
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    side: keyof AccidentReport
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setReport((prev) => ({ ...prev, [side]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReport((prev) => ({ ...prev, description: e.target.value }));
  };

  const handleSubmit = () => {
    const newReport = {
      ...report,
      id: Date.now().toString(),
      timestamp: Date.now(),
    };
    const existingReports = JSON.parse(
      localStorage.getItem("accidentReports") || "[]"
    );
    localStorage.setItem(
      "accidentReports",
      JSON.stringify([...existingReports, newReport])
    );
    setShowAlert(true);
    // Reset the form
    setReport({
      id: "",
      rightImage: "",
      leftImage: "",
      frontImage: "",
      backImage: "",
      description: "",
      timestamp: 0,
    });
    // Hide the alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      {showAlert && (
        <Alert className="mt-8 fixed top-0 left-0 right-0 mx-auto ">
          <CheckCircle className="h-8 w-8" />
          <AlertTitle className="text-green-800 dark:text-green-200 text-xl">
            تم الإرسال بنجاح
          </AlertTitle>
          <AlertDescription className="text-green-600 dark:text-green-300  text-lg">
            تم حفظ البلاغ بنجاح. شكراً لك على الإبلاغ عن الحادث.
          </AlertDescription>
        </Alert>
      )}
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            إضافة بلاغ مباشر
          </h1>
          <p className="mt-3 text-xl text-gray-500 sm:mt-5 sm:text-2xl max-w-xl mx-auto">
            قم بإضافة صور الحادث والوصف لتقديم بلاغ مباشر
          </p>
        </motion.div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>تفاصيل الحادث</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              {[
                { side: "rightImage", label: "صورة الحادث من اليمين" },
                { side: "leftImage", label: "صورة الحادث من اليسار" },
                { side: "frontImage", label: "صورة الحادث من الأمام" },
                { side: "backImage", label: "صورة الحادث من الخلف" },
              ].map((item) => (
                <div key={item.side}>
                  <Label htmlFor={item.side}>{item.label}</Label>
                  <div className="mt-1 flex items-center">
                    <Input
                      id={item.side}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) =>
                        handleImageUpload(e, item.side as keyof AccidentReport)
                      }
                    />
                    <Label
                      htmlFor={item.side}
                      className="cursor-pointer flex items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {report[item.side as keyof AccidentReport] ? (
                        <img
                          // @ts-ignore
                          src={report[item.side as keyof AccidentReport]}
                          alt={item.label}
                          className="w-full h-full object-cover rounded-md"
                        />
                      ) : (
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <span>رفع صورة</span>
                          </div>
                        </div>
                      )}
                    </Label>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Label htmlFor="description">شرح الحادث</Label>
              <Textarea
                id="description"
                rows={4}
                placeholder="اكتب وصفاً تفصيلياً للحادث هنا..."
                value={report.description}
                onChange={handleDescriptionChange}
                className="mt-1"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit} className="w-full">
              <Camera className="mr-2 h-4 w-4" />
              إرسال البلاغ
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
