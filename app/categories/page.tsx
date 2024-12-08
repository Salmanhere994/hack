import { Navbar } from "../components/navbar"
import { SidebarFilters } from "../components/sidebar-filters"
import { Card } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F6F7F9]">
      <Navbar />
      <div className="flex">
        <SidebarFilters />
        <main className="flex-1 p-6">
          <Card />
        </main>
      </div>
    </div>
  )
}
