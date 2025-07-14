import { SidebarProvider } from '@/components/ui/sidebar'
import SidebarComponent from '@/layout/sidebar'
import { useState } from 'react'
import { Outlet } from 'react-router'
import './index.css'

export default function Layout() {
  const [open, setOpen] = useState(true)

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <main className="flex flex-row h-[100dvh] w-full overflow-hidden">
        <SidebarComponent />
        <div className="flex-1 overflow-hidden">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  )
}
