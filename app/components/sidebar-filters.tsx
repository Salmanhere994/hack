import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const typeFilters = [
  { id: "sport", label: "Sport", count: 10 },
  { id: "suv", label: "SUV", count: 12 },
  { id: "mpv", label: "MPV", count: 16 },
  { id: "sedan", label: "Sedan", count: 20 },
  { id: "coupe", label: "Coupe", count: 14 },
  { id: "hatchback", label: "Hatchback", count: 14 },
]

const capacityFilters = [
  { id: "2person", label: "2 Person", count: 10 },
  { id: "4person", label: "4 Person", count: 14 },
  { id: "6person", label: "6 Person", count: 12 },
  { id: "8ormore", label: "8 or More", count: 16 }, 
]

export function SidebarFilters() {
  return (
    <aside className="w-64 p-6 space-y-8">
      {/* Type Section */}
      <section>
        <h3 className="text-xs font-medium text-muted-foreground mb-4">TYPE</h3>
        <div className="space-y-4">
          {typeFilters.map((filter) => (
            <div key={filter.id} className="flex items-center space-x-2">
              <Checkbox 
                id={filter.id}
                className="rounded-[4px] border-gray-300 "
                checked={filter.id === "sport" || filter.id === "suv"}
              />
              <Label 
                htmlFor={filter.id}
                className="flex-1 text-sm font-normal cursor-pointer flex justify-between "
              >
                {filter.label}
                <span className="text-muted-foreground">({filter.count})</span>
              </Label>
            </div>
          ))}
        </div>
      </section>

      {/* Capacity Section */}
      <section>
        <h3 className="text-xs font-medium text-muted-foreground mb-4">CAPACITY</h3>
        <div className="space-y-4">
          {capacityFilters.map((filter) => (
            <div key={filter.id} className="flex items-center space-x-2">
              <Checkbox 
                id={filter.id}
                className="rounded-[4px] border-gray-300"
                checked={filter.id === "2person"}
              />
              <Label 
                htmlFor={filter.id}
                className="flex-1 text-sm font-normal cursor-pointer flex justify-between"
              >
                {filter.label}
                <span className="text-muted-foreground">({filter.count})</span>
              </Label>
            </div>
          ))}
        </div>
      </section>

      {/* Price Section */}
      <section>
        <h3 className="text-xs font-medium text-muted-foreground mb-4">PRICE</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Max. $100.00</span>
          </div>
          <Slider
            defaultValue={[100]}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
      </section>
    </aside>
  )
}

