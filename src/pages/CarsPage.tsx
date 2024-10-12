import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Car, Activity, Fuel } from "lucide-react";

interface CarData {
  id: string;
  name: string;
  model: string;
  horsepower: number;
  description: string;
  category: string;
  fuelEfficiency: number;
  vehicleNumber: string;
  condition: string;
}

export default function CarShowcasePage() {
  const [cars, setCars] = useState<CarData[]>([]);
  const [filteredCars, setFilteredCars] = useState<CarData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newCar, setNewCar] = useState<CarData>({
    id: "",
    name: "",
    model: "",
    horsepower: 0,
    description: "",
    category: "ممتازة",
    fuelEfficiency: 0,
    vehicleNumber: "",
    condition: "",
  });

  useEffect(() => {
    const storedCars = localStorage.getItem("userCars");
    if (storedCars) {
      setCars(JSON.parse(storedCars));
    }
  }, []);

  useEffect(() => {
    const filtered = cars.filter(
      (car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "" || car.category === selectedCategory)
    );
    setFilteredCars(filtered);
  }, [searchTerm, selectedCategory, cars]);

  const categories = Array.from(
    new Set(
      cars.map((car) => {
        if (car.category !== "") {
          return car.category;
        }
        return "ممتازة";
      })
    )
  );

  const handleAddCar = () => {
    const updatedCars = [...cars, { ...newCar, id: Date.now().toString() }];
    setCars(updatedCars);
    localStorage.setItem("userCars", JSON.stringify(updatedCars));
    setNewCar({
      id: "",
      name: "",
      model: "",
      horsepower: 0,
      description: "",
      category: "ممتازة",
      fuelEfficiency: 0,
      vehicleNumber: "",
      condition: "",
    });
  };

  const handleDeleteCar = (id: string) => {
    const updatedCars = cars.filter((car) => car.id !== id);
    setCars(updatedCars);
    localStorage.setItem("userCars", JSON.stringify(updatedCars));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCar({ ...newCar, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setNewCar({ ...newCar, [name]: value });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            معرض سياراتي
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            أضف وعرض سياراتك الخاصة في معرضك الشخصي
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>إضافة سيارة جديدة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">اسم السيارة</Label>
                <Input
                  id="name"
                  name="name"
                  value={newCar.name}
                  onChange={handleInputChange}
                  placeholder="أدخل اسم السيارة"
                />
              </div>
              <div>
                <Label htmlFor="model">الموديل</Label>
                <Input
                  id="model"
                  name="model"
                  value={newCar.model}
                  onChange={handleInputChange}
                  placeholder="أدخل موديل السيارة"
                />
              </div>
              <div>
                <Label htmlFor="horsepower">القوة الحصانية</Label>
                <Input
                  id="horsepower"
                  name="horsepower"
                  type="number"
                  value={newCar.horsepower}
                  onChange={handleInputChange}
                  placeholder="أدخل القوة الحصانية"
                />
              </div>
              <div>
                <Label htmlFor="category">الفئة</Label>
                <Input
                  id="category"
                  name="category"
                  value={newCar.category}
                  onChange={handleInputChange}
                  placeholder="أدخل فئة السيارة"
                />
              </div>
              <div>
                <Label htmlFor="fuelEfficiency">
                  استهلاك الوقود (لتر/100كم)
                </Label>
                <Input
                  id="fuelEfficiency"
                  name="fuelEfficiency"
                  type="number"
                  value={newCar.fuelEfficiency}
                  onChange={handleInputChange}
                  placeholder="أدخل استهلاك الوقود"
                />
              </div>
              <div>
                <Label htmlFor="vehicleNumber">رقم المركبة</Label>
                <Input
                  id="vehicleNumber"
                  name="vehicleNumber"
                  value={newCar.vehicleNumber}
                  onChange={handleInputChange}
                  placeholder="أدخل رقم المركبة"
                />
              </div>
              <div>
                <Label htmlFor="condition">حالة المركبة</Label>
                <Select
                  name="condition"
                  onValueChange={(value) =>
                    handleSelectChange("condition", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="اختر حالة المركبة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ممتازة">ممتازة</SelectItem>
                    <SelectItem value="جيدة">جيدة</SelectItem>
                    <SelectItem value="متوسطة">متوسطة</SelectItem>
                    <SelectItem value="سيئة">سيئة</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="description">الوصف</Label>
                <Input
                  id="description"
                  name="description"
                  value={newCar.description}
                  onChange={handleInputChange}
                  placeholder="أدخل وصف السيارة"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleAddCar}>إضافة السيارة</Button>
          </CardFooter>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="search">البحث</Label>
                <Input
                  id="search"
                  placeholder="ابحث عن سيارة..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="category">الفئة</Label>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="اختر الفئة" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                    <Button
                      variant="ghost"
                      onClick={() => setSelectedCategory("")}
                    >
                      كل الفئات
                    </Button>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <ScrollArea className="h-[600px] w-full rounded-md p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl font-bold">
                        {car.name}
                      </CardTitle>
                      <Badge variant="outline">{car.category}</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {car.description}
                    </p>
                    <Separator className="my-4" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Car className="mr-2 h-4 w-4 text-gray-400" />
                        <span>{car.model}</span>
                      </div>
                      <div className="flex items-center">
                        <Activity className="mr-2 h-4 w-4 text-gray-400" />
                        <span>{car.horsepower} حصان</span>
                      </div>
                      <div className="flex items-center">
                        <Fuel className="mr-2 h-4 w-4 text-gray-400" />
                        <span>{car.fuelEfficiency} لتر/100كم</span>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold">رقم المركبة:</span>{" "}
                        {car.vehicleNumber}
                      </div>
                      <div>
                        <span className="font-semibold">حالة المركبة:</span>{" "}
                        {car.condition}
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      onClick={() => handleDeleteCar(car.id)}
                      className="mt-4"
                    >
                      حذف السيارة
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
