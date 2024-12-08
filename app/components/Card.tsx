// components/Card.tsx
import { Fuel, Settings, Users } from "lucide-react";
import img from "@/public/images/Car (2).png";
import Image, { StaticImageData } from "next/image";
import { carArray } from "./data";

export default function Card() {
  return (
    <section className="grid grid-cols-4 grid-rows-3 gap-3">
      {carArray.map((i, x) => {
        return (
          <div
            className="max-w-sm border rounded-lg shadow-md p-4 bg-white"
            key={x}
          >
            {/* Header Section */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  Nissan GT – R
                </h2>
                <p className="text-sm text-blue-600">Sport</p>
              </div>
              <button
                aria-label="Favorite"
                className="text-gray-400 hover:text-red-500"
              ></button>
            </div>

            {/* Image Section */}
            <div className="my-4 h-32 bg-gray-100 rounded-lg">
              <Image src={i} alt="a car" />
            </div>

            {/* Features Section */}
            <div className="flex justify-between items-center text-gray-600 text-sm">
              <div className="flex items-center space-x-1">
                <Fuel className="h-4 w-4" />
                <span>80L</span>
              </div>
              <div className="flex items-center space-x-1">
                <Settings className="h-4 w-4" />
                <span>Manual</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>2 People</span>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-bold text-gray-800">$80.00</p>
                  <p className="text-xs text-gray-400 line-through">$100.00</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700">
                  Rent Now
                </button>
              </div>
              <p className="text-xs text-gray-500">/ day</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
