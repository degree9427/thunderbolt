import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar'
import { useIsMobile } from '@/hooks/use-mobile'
import { Menu } from 'lucide-react'

/**
 * Reusable page header component with sidebar trigger and bottom border
 */
export const Header = () => {
  const { open } = useSidebar()
  const isMobile = useIsMobile()

  return (
    <header className="flex h-12 w-full items-center px-2 flex-shrink-0 border-b border-border">
      {isMobile ? (
        <SidebarTrigger className="cursor-pointer">
          <Menu className="h-5 w-5" />
        </SidebarTrigger>
      ) : (
        !open && <SidebarTrigger className="cursor-pointer" />
      )}
    </header>
  )
}
