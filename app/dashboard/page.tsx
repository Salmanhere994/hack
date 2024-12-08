'use client'

import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { ChartContainer } from "@/components/ui/chart"
import { MoreHorizontal } from 'lucide-react'

const rentalData = [
  { name: "Sport Car", value: 17439, color: "#0D3559" },
  { name: "SUV", value: 9478, color: "#175CD3" },
  { name: "Coupe", value: 18197, color: "#2E90FA" },
  { name: "Hatchback", value: 12510, color: "#53B1FD" },
  { name: "MPV", value: 14406, color: "#84CAFF" },
]

export function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#F6F7F9]">
      {/* Sidebar */}
      <aside className="w-64 p-6 space-y-6">
        <h1 className="text-[#3563E9] text-2xl font-bold">MORENT</h1>
        <nav className="space-y-2">
          <button className="w-full px-4 py-2 text-white bg-[#3563E9] rounded-lg flex items-center gap-2">
            Dashboard
          </button>
          <button className="w-full px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg flex items-center gap-2">
            Car Rent
          </button>
          {/* Add other nav items */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Details Rental */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Details Rental</h2>
            </div>
            <div className="bg-gray-100 h-48 rounded-lg mb-4">
              {/* Map placeholder */}
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg?height=64&width=96"
                  alt="Nissan GT-R"
                  className="w-24 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold">Nissan GT - R</h3>
                  <p className="text-sm text-muted-foreground">Sport Car</p>
                </div>
                <span className="ml-auto text-sm text-muted-foreground">#9761</span>
              </div>
              
              {/* Pick-Up Section */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-sm font-medium">Pick - Up</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="location1">Location 1</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date1">Date 1</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="time1">Time 1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Drop-Off Section */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-sm font-medium">Drop - Off</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="location1">Location 1</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date1">Date 1</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="time1">Time 1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <div>
                  <p className="text-sm text-muted-foreground">Total Rental Price</p>
                  <p className="text-xs text-muted-foreground">Overall price and includes rental discount</p>
                </div>
                <span className="text-xl font-semibold">$80.00</span>
              </div>
            </div>
          </Card>

          {/* Top 5 Car Rental */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Top 5 Car Rental</h2>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
            <div className="flex gap-8">
              <ChartContainer className="w-[240px] h-[240px]">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={rentalData}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {rentalData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-semibold">72,030</p>
                    <p className="text-sm text-muted-foreground">Rental Car</p>
                  </div>
                </div>
              </ChartContainer>
              <div className="flex flex-col justify-center gap-3">
                {rentalData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm">{item.name}</span>
                    </div>
                    <span className="text-sm font-medium">{item.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Recent Transaction</h2>
            <button className="text-sm text-blue-600">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { name: "Nissan GT - R", type: "Sport Car", price: "$80.00" },
              { name: "Koenigsegg", type: "Sport Car", price: "$99.00" },
              { name: "Rolls - Royce", type: "Sport Car", price: "$96.00" },
              { name: "CR - V", type: "SUV", price: "$80.00" },
            ].map((car, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg?height=64&width=96"
                    alt={car.name}
                    className="w-24 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{car.name}</h3>
                    <p className="text-sm text-muted-foreground">{car.type}</p>
                  </div>
                </div>
                <span className="font-semibold">{car.price}</span>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  )
}

