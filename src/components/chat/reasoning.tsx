import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { useState } from 'react'
import { Check } from 'lucide-react'

interface ReasoningProps {
  text: string
}

export function Reasoning({ text }: ReasoningProps) {
  const [open, setOpen] = useState(true)

  return (
    <Accordion type="single" collapsible value={open ? 'item-1' : ''} className="bg-white rounded-lg shadow-sm">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger onClick={() => setOpen(!open)} className="hover:bg-gray-50 px-4 py-2 rounded-t-lg">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Reasoning</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-3">
          <div className="text-gray-600 leading-relaxed text-sm">{text}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
