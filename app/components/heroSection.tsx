import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger, 
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { ArrowRightLeft } from "lucide-react";
import { carArray } from "./data";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="flex justify-center">
      <div className="w-[100vw] px-16 py-8 space-y-8 flex flex-col justify-self-center md:justify-start ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <Card className="bg-[#54A6FF] text-white border-none p-4 sm:p-8 rounded-[10px]">
            <div className="max-w-[272px] space-y-4">
              <h1 className="text-4xl font-semibold leading-tight">
                The Best Platform for Car Rental
              </h1>
              <p className="text-sm opacity-80">
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </p>
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Rental Car
              </Button>
            </div>
            <div className="mt-4">
              <Image
                src={carArray[0]}
                alt="Car"
                className="w-[25.375rem] h-[7.25rem]"
              />
            </div>
          </Card>

          <Card className="bg-[#3563E9] text-white border-none p-4 sm:p-8 rounded-[10px]">
            <div className="max-w-[272px] space-y-4">
              <h1 className="text-4xl font-semibold leading-tight">
                Easy way to rent a car at a low price
              </h1>
              <p className="text-sm opacity-80">
                Providing cheap car rental services and safe and comfortable
                facilities.
              </p>
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Rental Car
              </Button>
            </div>
            <div className="mt-4">
              <Image
                src={carArray[1]}
                alt="Car"
                className="w-[25.375rem] h-[7.25rem]"
              />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-6 rounded-[10px] shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#3563E9]" />
              <span className="text-sm font-medium">Pick - Up</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city1">City 1</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date1">Date 1</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="time1">Time 1</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="relative space-y-4">
            <Button
              size="icon"
              className="absolute -left-6 top-1/2 -translate-y-1/2 bg-[#3563E9] hover:bg-[#3563E9]/90"
            >
              <ArrowRightLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#3563E9]" />
              <span className="text-sm font-medium">Drop - Off</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city1">City 1</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date1">Date 1</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="time1">Time 1</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
