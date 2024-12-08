import { Bell, Heart, Search, Settings } from 'lucide-react'
import { Input } from "@/components/ui/input"

export function Navbar() {
  return (
    <nav className="w-full px-16 py-4 flex items-center justify-between bg-white">
      <div className="flex items-center gap-16">
        <a href="/" className="text-[#3563E9] text-2xl font-bold">
          MORENT
        </a>
        <div className="relative w-[492px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search something here"
            className="pl-9 bg-background border-none shadow-none ring-1 ring-input"
          />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <button className="p-2 hover:bg-muted rounded-full">
          <Heart className="h-6 w-6" />
        </button>
        <button className="p-2 hover:bg-muted rounded-full">
          <Bell className="h-6 w-6" />
        </button>
        <button className="p-2 hover:bg-muted rounded-full">
          <Settings className="h-6 w-6" />
        </button>
        <button className="w-10 h-10 rounded-full bg-muted">
          <img
            src="/placeholder.svg?height=40&width=40"
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </button>
      </div>
    </nav>
  )
}

