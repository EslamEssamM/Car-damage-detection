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
import { Car, Activity, Fuel, User, CreditCard, Calendar } from "lucide-react";

interface CarData {
  id: string;
  ownerName: string;
  ownerIdNumber: string;
  driverName: string;
  driverIdNumber: string;
  vehicleType: string;
  vehicleModel: string;
  chassisNumber: string;
  serialNumber: string;
  licensePlate: string;
  vehicleWeight: number;
  inspectionExpiryDate: string;
  licenseExpiryDate: string;
  insuranceExpiryDate: string;
  driverLicenseExpiryDate: string;
}

export default function CarShowcasePage() {
  const [cars, setCars] = useState<CarData[]>([]);
  const [filteredCars, setFilteredCars] = useState<CarData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVehicleType, setSelectedVehicleType] = useState("");
  const [newCar, setNewCar] = useState<CarData>({
    id: "",
    ownerName: "",
    ownerIdNumber: "",
    driverName: "",
    driverIdNumber: "",
    vehicleType: "",
    vehicleModel: "",
    chassisNumber: "",
    serialNumber: "",
    licensePlate: "",
    vehicleWeight: 0,
    inspectionExpiryDate: "",
    licenseExpiryDate: "",
    insuranceExpiryDate: "",
    driverLicenseExpiryDate: "",
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
        car.ownerName?.toLowerCase().includes(searchTerm?.toLowerCase()) &&
        (selectedVehicleType === "" || car.vehicleType === selectedVehicleType)
    );
    setFilteredCars(filtered);
  }, [searchTerm, selectedVehicleType, cars]);

  const vehicleTypes = Array.from(new Set(cars.map((car) => car.vehicleType)));

  const handleAddCar = () => {
    const updatedCars = [...cars, { ...newCar, id: Date.now().toString() }];
    setCars(updatedCars);
    localStorage.setItem("userCars", JSON.stringify(updatedCars));
    setNewCar({
      id: "",
      ownerName: "",
      ownerIdNumber: "",
      driverName: "",
      driverIdNumber: "",
      vehicleType: "",
      vehicleModel: "",
      chassisNumber: "",
      serialNumber: "",
      licensePlate: "",
      vehicleWeight: 0,
      inspectionExpiryDate: "",
      licenseExpiryDate: "",
      insuranceExpiryDate: "",
      driverLicenseExpiryDate: "",
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
            سجل المركبات
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            أضف وعرض معلومات المركبات في سجلك الشخصي
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>إضافة مركبة جديدة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="ownerName">اسم المالك</Label>
                <Input
                  id="ownerName"
                  name="ownerName"
                  value={newCar.ownerName}
                  onChange={handleInputChange}
                  placeholder="أدخل اسم المالك"
                />
              </div>
              <div>
                <Label htmlFor="ownerIdNumber">رقم هوية المالك</Label>
                <Input
                  id="ownerIdNumber"
                  name="ownerIdNumber"
                  value={newCar.ownerIdNumber}
                  onChange={handleInputChange}
                  placeholder="أدخل رقم هوية المالك"
                />
              </div>
              <div>
                <Label htmlFor="driverName">اسم السائق الفعلي</Label>
                <Input
                  id="driverName"
                  name="driverName"
                  value={newCar.driverName}
                  onChange={handleInputChange}
                  placeholder="أدخل اسم السائق الفعلي"
                />
              </div>
              <div>
                <Label htmlFor="driverIdNumber">رقم هوية السائق</Label>
                <Input
                  id="driverIdNumber"
                  name="driverIdNumber"
                  value={newCar.driverIdNumber}
                  onChange={handleInputChange}
                  placeholder="أدخل رقم هوية السائق"
                />
              </div>
              <div>
                <Label htmlFor="vehicleType">نوع المركبة</Label>
                <Input
                  id="vehicleType"
                  name="vehicleType"
                  value={newCar.vehicleType}
                  onChange={handleInputChange}
                  placeholder="أدخل نوع المركبة"
                />
              </div>
              <div>
                <Label htmlFor="vehicleModel">موديل المركبة</Label>
                <Input
                  id="vehicleModel"
                  name="vehicleModel"
                  value={newCar.vehicleModel}
                  onChange={handleInputChange}
                  placeholder="أدخل موديل المركبة"
                />
              </div>
              <div>
                <Label htmlFor="chassisNumber">رقم الهيكل</Label>
                <Input
                  id="chassisNumber"
                  name="chassisNumber"
                  value={newCar.chassisNumber}
                  onChange={handleInputChange}
                  placeholder="أدخل رقم الهيكل"
                />
              </div>
              <div>
                <Label htmlFor="serialNumber">الرقم التسلسلي للمركبة</Label>
                <Input
                  id="serialNumber"
                  name="serialNumber"
                  value={newCar.serialNumber}
                  onChange={handleInputChange}
                  placeholder="أدخل الرقم التسلسلي للمركبة"
                />
              </div>
              <div>
                <Label htmlFor="licensePlate">لوحة المركبة</Label>
                <Input
                  id="licensePlate"
                  name="licensePlate"
                  value={newCar.licensePlate}
                  onChange={handleInputChange}
                  placeholder="أدخل لوحة المركبة"
                />
              </div>
              <div>
                <Label htmlFor="vehicleWeight">وزن المركبة</Label>
                <Input
                  id="vehicleWeight"
                  name="vehicleWeight"
                  type="number"
                  value={newCar.vehicleWeight}
                  onChange={handleInputChange}
                  placeholder="أدخل وزن المركبة"
                />
              </div>
              <div>
                <Label htmlFor="inspectionExpiryDate">
                  تاريخ انتهاء فحص المركبة
                </Label>
                <Input
                  id="inspectionExpiryDate"
                  name="inspectionExpiryDate"
                  type="date"
                  value={newCar.inspectionExpiryDate}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="licenseExpiryDate">
                  تاريخ انتهاء رخصة السير
                </Label>
                <Input
                  id="licenseExpiryDate"
                  name="licenseExpiryDate"
                  type="date"
                  value={newCar.licenseExpiryDate}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="insuranceExpiryDate">
                  تاريخ انتهاء تأمين المركبة
                </Label>
                <Input
                  id="insuranceExpiryDate"
                  name="insuranceExpiryDate"
                  type="date"
                  value={newCar.insuranceExpiryDate}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="driverLicenseExpiryDate">
                  تاريخ انتهاء رخصة القيادة للسائق الفعلي
                </Label>
                <Input
                  id="driverLicenseExpiryDate"
                  name="driverLicenseExpiryDate"
                  type="date"
                  value={newCar.driverLicenseExpiryDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleAddCar}>إضافة المركبة</Button>
          </CardFooter>
        </Card>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="search">البحث</Label>
                <Input
                  id="search"
                  placeholder="ابحث عن مركبة..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="vehicleType">نوع المركبة</Label>
                <Select
                  value={selectedVehicleType}
                  onValueChange={setSelectedVehicleType}
                >
                  <SelectTrigger id="vehicleType">
                    <SelectValue placeholder="اختر نوع المركبة" />
                  </SelectTrigger>
                  <SelectContent>
                    {vehicleTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
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
                        {car.vehicleType} - {car.vehicleModel}
                      </CardTitle>
                      <Badge variant="outline">{car.licensePlate}</Badge>
                    </div>
                    <Separator className="my-4" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <User className="mr-2 h-4 w-4 text-gray-400" />
                        <span>المالك: {car.ownerName}</span>
                      </div>
                      <div className="flex items-center">
                        <CreditCard className="mr-2 h-4 w-4 text-gray-400" />
                        <span>هوية المالك: {car.ownerIdNumber}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="mr-2 h-4 w-4 text-gray-400" />
                        <span>السائق: {car.driverName}</span>
                      </div>
                      <div className="flex items-center">
                        <CreditCard className="mr-2 h-4 w-4 text-gray-400" />
                        <span>هوية السائق: {car.driverIdNumber}</span>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold">رقم الهيكل:</span>{" "}
                        {car.chassisNumber}
                      </div>
                      <div>
                        <span className="font-semibold">الرقم التسلسلي:</span>{" "}
                        {car.serialNumber}
                      </div>
                      <div>
                        <span className="font-semibold">الوزن:</span>{" "}
                        {car.vehicleWeight} كغ
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                        <span>انتهاء الفحص: {car.inspectionExpiryDate}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                        <span>انتهاء الرخصة: {car.licenseExpiryDate}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                        <span>انتهاء التأمين: {car.insuranceExpiryDate}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                        <span>
                          انتهاء رخصة السائق: {car.driverLicenseExpiryDate}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      onClick={() => handleDeleteCar(car.id)}
                      className="mt-4"
                    >
                      حذف المركبة
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
