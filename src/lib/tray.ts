import { Menu } from '@tauri-apps/api/menu'
import { TrayIcon } from '@tauri-apps/api/tray'
import { onCleanup, onMount } from 'solid-js'

export const createTray = () => {
  let tray: TrayIcon | undefined

  onMount(async () => {
    const menu = await Menu.new({
      items: [
        {
          id: 'quit',
          text: 'Quit',
        },
      ],
    })

    tray = await TrayIcon.new({
      title: 'Assist',
      tooltip: 'Assist',
      menu,
    })
  })

  onCleanup(() => {
    tray?.close()
  })
}
