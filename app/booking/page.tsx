import { Star } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export default function BookingForm() {
  return ( 
    <div className="flex gap-6 p-6 bg-white rounded-lg">
      <div className="flex-grow space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-1">Billing Info</h2>
          <p className="text-sm text-muted-foreground mb-4">Please enter your billing info</p>
          <p className="text-sm text-muted-foreground mb-4 text-right">Step 1 of 4</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input id="name" placeholder="Your name" className="mt-1" />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
              <Input id="phone" placeholder="Phone number" className="mt-1" />
            </div>
            <div>
              <label htmlFor="address" className="text-sm font-medium">Address</label>
              <Input id="address" placeholder="Address" className="mt-1" />
            </div>
            <div>
              <label htmlFor="town" className="text-sm font-medium">Town / City</label>
              <Input id="town" placeholder="Town or city" className="mt-1" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-1">Rental Info</h2>
          <p className="text-sm text-muted-foreground mb-4">Please select your rental date</p>
          <p className="text-sm text-muted-foreground mb-4 text-right">Step 2 of 4</p>
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-sm font-medium">Pick - Up</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="pickup-location" className="text-sm font-medium">Locations</label>
                  <Select>
                    <SelectTrigger id="pickup-location" className="mt-1">
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="city1">City 1</SelectItem>
                      <SelectItem value="city2">City 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="pickup-date" className="text-sm font-medium">Date</label>
                  <Select>
                    <SelectTrigger id="pickup-date" className="mt-1">
                      <SelectValue placeholder="Select your date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date1">Date 1</SelectItem>
                      <SelectItem value="date2">Date 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="pickup-time" className="text-sm font-medium">Time</label>
                <Select>
                  <SelectTrigger id="pickup-time" className="mt-1">
                    <SelectValue placeholder="Select your time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="time1">Time 1</SelectItem>
                    <SelectItem value="time2">Time 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-sm font-medium">Drop - Off</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="dropoff-location" className="text-sm font-medium">Locations</label>
                  <Select>
                    <SelectTrigger id="dropoff-location" className="mt-1">
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="city1">City 1</SelectItem>
                      <SelectItem value="city2">City 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="dropoff-date" className="text-sm font-medium">Date</label>
                  <Select>
                    <SelectTrigger id="dropoff-date" className="mt-1">
                      <SelectValue placeholder="Select your date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date1">Date 1</SelectItem>
                      <SelectItem value="date2">Date 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Card className="w-[300px]">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Rental Summary</h2>
          <p className="text-sm text-muted-foreground mb-4">Prices may change depending on the length of the rental and the price of your rental car.</p>
          <div className="flex items-start gap-4 mb-6">
            <img src="/placeholder.svg?height=80&width=120" alt="Nissan GT-R" className="w-[120px] h-[80px] object-cover rounded-lg" />
            <div>
              <h3 className="font-semibold">Nissan GT - R</h3>
              <div className="flex items-center">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-muted-foreground ml-1">440+ Reviewer</span>
              </div>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>$80.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax</span>
              <span>$0</span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm text-muted-foreground">Apply promo code</span>
            <span className="text-sm text-blue-600 cursor-pointer">Apply now</span>
          </div>
          <div className="flex justify-between items-center font-semibold">
            <span>Total Rental Price</span>
            <span className="text-2xl">$80.00</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Overall price and includes rental discount</p>
        </CardContent>
      </Card>
    </div>
  )
}

