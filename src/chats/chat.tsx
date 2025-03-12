import ChatUI from '@/components/chat/chat-ui'
import { aiFetchStreamingResponse } from '@/lib/ai'
import { useChat } from '@ai-sdk/react'
import { LanguageModelResponseMetadata, Message } from 'ai'

interface ChatProps {
  apiKey: string
  initialMessages: Message[] | undefined
  maxSteps?: number
  onFinish?: (response: LanguageModelResponseMetadata & { readonly messages: Message[] }) => void
}

export default function Chat({ apiKey, initialMessages, maxSteps = 5, onFinish }: ChatProps) {
  const chatHelpers = useChat({
    initialMessages,
    fetch: (_requestInfoOrUrl: RequestInfo | URL, init?: RequestInit) => {
      if (!apiKey) {
        throw new Error('No API key found')
      }

      if (!init) {
        throw new Error('No init found')
      }

      return aiFetchStreamingResponse({
        apiKey,
        init,
        onFinish: (response) => {
          onFinish?.(response)
        },
      })
    },
    maxSteps,
  })

  return <ChatUI chatHelpers={chatHelpers} />
}
