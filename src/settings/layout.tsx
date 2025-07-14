import { Header } from '@/components/ui/header'
import { SidebarInset } from '@/components/ui/sidebar'
import { Outlet } from 'react-router'

export default function SettingsLayout() {
  return (
    <>
      <SidebarInset className="h-full overflow-hidden flex flex-col">
        <div className="flex flex-col h-full">
          <Header />
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
        </div>
      </SidebarInset>
    </>
  )
}
