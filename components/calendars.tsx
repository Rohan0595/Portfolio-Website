import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface CalendarsProps {
  calendars: {
    name: string
    items: string[]
  }[]
}

export function Calendars({ calendars }: CalendarsProps) {
  return (
    <div className="space-y-4 py-2">
      {calendars.map((calendar) => (
        <Collapsible key={calendar.name} defaultOpen>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="flex w-full items-center justify-between p-2 text-muted-foreground">
              <span className="text-sm font-medium">{calendar.name}</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="ml-4 space-y-1 py-1">
              {calendar.items.map((item) => (
                <Button key={item} variant="ghost" className="w-full justify-start pl-6 text-sm font-normal">
                  {item}
                </Button>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}
