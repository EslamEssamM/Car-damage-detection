"use client";

import React, { useState } from "react";
import axios from "axios";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  UploadCloud,
  AlertTriangle,
  Car,
  Camera,
  FileImage,
  Truck as Hood,
  Truck,
  DoorClosed,
  Wrench,
  Lightbulb,
  Glasses,
} from "lucide-react";

export function DetectionPage() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [predictions, setPredictions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [overallSeverity, setOverallSeverity] = useState<string>("منخفضة");
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setPredictions([]);
      setError("");
    }
  };

  const handleSubmit = async () => {
    if (!image) return;

    setLoading(true);
    setError("");
    setPredictions([]);

    try {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = async () => {
        const base64Image = reader.result?.toString().split(",")[1];

        const response = await axios({
          method: "POST",
          url: "https://detect.roboflow.com/car-damage-detection-t0g92/3",
          params: {
            api_key: "ql52VbdZHWH97UDcgrnA",
          },
          data: base64Image,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        const predictions = response.data.predictions;
        setPredictions(predictions);
        updateOverallSeverity(predictions);
      };
    } catch (error) {
      console.error("خطأ في تحميل الصورة", error);
      setError("حدث خطأ أثناء معالجة الصورة. يرجى المحاولة مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  const updateOverallSeverity = (predictions: any[]) => {
    const maxConfidence = Math.max(...predictions.map((p) => p.confidence));
    if (maxConfidence > 0.8) {
      setOverallSeverity("عالية");
    } else if (maxConfidence > 0.5) {
      setOverallSeverity("متوسطة");
    } else {
      setOverallSeverity("منخفضة");
    }
  };

  const carParts = [
    { name: "Bonnet", icon: Hood, translation: "غطاء المحرك" },
    { name: "Bumper", icon: Truck, translation: "المصد" },
    { name: "Dickey", icon: Truck, translation: "صندوق السيارة" },
    { name: "Door", icon: DoorClosed, translation: "الباب" },
    { name: "Fender", icon: Wrench, translation: "الرفرف" },
    { name: "Light", icon: Lightbulb, translation: "المصباح" },
    { name: "Windshield", icon: Glasses, translation: "الزجاج الأمامي" },
  ];

  const carPartTranslations = Object.fromEntries(
    carParts.map((part) => [part.name, part.translation])
  );

  const insights = {
    Bonnet: "تم اكتشاف ضرر في غطاء المحرك. قد يتطلب إصلاح أو استبدال.",
    Bumper: "تم اكتشاف ضرر في المصد. يجب فحص سلامة المصد.",
    Dickey: "تم اكتشاف ضرر في صندوق السيارة. تحقق من آلية الفتح والإغلاق.",
    Door: "تم اكتشاف ضرر في الباب. تحقق من آلية فتح وإغلاق الباب.",
    Fender: "تم اكتشاف ضرر في الرفرف. قد يتطلب إصلاح أو استبدال.",
    Light: "تم اكتشاف ضرر في المصباح. يجب التأكد من عمل الإضاءة بشكل صحيح.",
    Windshield: "تم اكتشاف ضرر في الزجاج الأمامي. يجب معالجة أي تشققات فوراً.",
  } as { [key: string]: string };

  const severityColor: { [key: string]: string } = {
    منخفضة: "bg-green-100 text-green-800",
    متوسطة: "bg-yellow-100 text-yellow-800",
    عالية: "bg-red-100 text-red-800",
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            كشف أضرار السيارات
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            قم بتحميل صورة لسيارتك للكشف عن الأضرار باستخدام تقنية الذكاء
            الاصطناعي المتقدمة.
          </p>
        </div>

        <div className="mt-10">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  تحميل الصورة
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  اختر صورة واضحة للمنطقة المتضررة للحصول على أفضل النتائج.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <Card>
                <CardContent className="pt-5">
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="car-image"
                        className="block text-sm font-medium text-gray-700"
                      >
                        صورة السيارة
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="car-image"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span>تحميل ملف</span>
                              <Input
                                id="car-image"
                                name="car-image"
                                type="file"
                                accept="image/*"
                                className="sr-only"
                                onChange={handleImageChange}
                              />
                            </label>
                            <p className="pr-1">أو اسحب وأفلت</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG، JPG، GIF حتى 10 ميجابايت
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        onClick={handleSubmit}
                        disabled={!image || loading}
                      >
                        {loading ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            جاري التحليل...
                          </>
                        ) : (
                          <>
                            <Camera className="ml-2 h-4 w-4" />
                            كشف الأضرار
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {error && (
          <Alert variant="destructive" className="mt-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>خطأ</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="mt-8">
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="preview">
                <FileImage className="ml-2 h-4 w-4" />
                معاينة الصورة
              </TabsTrigger>
              <TabsTrigger value="parts">
                <Car className="ml-2 h-4 w-4" />
                أجزاء السيارة
              </TabsTrigger>
              <TabsTrigger value="results">
                <AlertTriangle className="ml-2 h-4 w-4" />
                نتائج الكشف
              </TabsTrigger>
            </TabsList>
            <TabsContent value="preview">
              <Card>
                <CardContent className="pt-6">
                  {preview ? (
                    <img
                      src={preview}
                      alt="معاينة السيارة"
                      className="w-full h-auto rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
                      <p className="text-gray-500">لم يتم تحميل صورة</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="parts">
              <Card>
                <CardHeader>
                  <CardTitle>أجزاء السيارة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {carParts.map((part) => (
                      <Button
                        key={part.name}
                        variant={
                          selectedPart === part.name ? "default" : "outline"
                        }
                        className="h-24 flex flex-col items-center justify-center text-center"
                        onClick={() => setSelectedPart(part.name)}
                      >
                        <part.icon className="h-8 w-8 mb-2" />
                        <span className="text-sm">{part.translation}</span>
                      </Button>
                    ))}
                  </div>
                  {selectedPart && (
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {carPartTranslations[selectedPart]}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {insights[selectedPart]}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="results">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>نتائج الكشف</span>
                    {predictions.length > 0 && (
                      <Badge
                        variant="outline"
                        className={severityColor[overallSeverity]}
                      >
                        شدة {overallSeverity}
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                    {predictions.length > 0 ? (
                      <div className="space-y-6">
                        {predictions.map((prediction, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">
                                {carPartTranslations[prediction.class] ||
                                  prediction.class}
                              </span>
                              <span className="text-sm font-medium">
                                {(prediction.confidence * 100).toFixed(2)}%
                              </span>
                            </div>
                            <Progress
                              value={prediction.confidence * 100}
                              className="h-2"
                            />
                            <p className="text-sm text-gray-600">
                              {insights[prediction.class]}
                            </p>
                            <div className="text-sm text-gray-500">
                              الموقع: X: {prediction.x}, Y: {prediction.y}
                              <br />
                              الأبعاد: العرض: {prediction.width}, الارتفاع:{" "}
                              {prediction.height}
                            </div>
                            <Separator className="my-2" />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500">
                          لا توجد نتائج بعد. قم بتحميل صورة وتشغيل الكشف.
                        </p>
                      </div>
                    )}
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
