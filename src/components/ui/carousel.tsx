import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div className={cn("relative", className)} {...props} ref={ref} />
  )
})
Carousel.displayName = "Carousel"

interface CarouselContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  loop?: boolean
}

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  CarouselContentProps
>(({ className, orientation = "horizontal", loop = false, ...props }, ref) => {
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const scrollAreaRef = React.useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (!scrollAreaRef.current) return
    setCanScrollPrev(scrollAreaRef.current.scrollLeft > 0)
    setCanScrollNext(
      scrollAreaRef.current.scrollLeft + scrollAreaRef.current.offsetWidth <
        scrollAreaRef.current.scrollWidth
    )
  }

  React.useEffect(() => {
    handleScroll()
    scrollAreaRef.current?.addEventListener("scroll", handleScroll)
    return () => {
      scrollAreaRef.current?.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollNext = () => {
    if (!scrollAreaRef.current) return
    scrollAreaRef.current.scrollLeft += scrollAreaRef.current.offsetWidth
  }

  const scrollPrev = () => {
    if (!scrollAreaRef.current) return
    scrollAreaRef.current.scrollLeft -= scrollAreaRef.current.offsetWidth
  }

  return (
    <div className="relative">
      {canScrollPrev && (
        <CarouselPrevious
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2"
          onClick={scrollPrev}
        />
      )}
      <ScrollAreaPrimitive.Root
        className="overflow-hidden"
        type="scroll"
        orientation={orientation}
        loop={loop}
        ref={scrollAreaRef}
        onScroll={handleScroll}
      >
        <ScrollAreaPrimitive.Viewport
          className={cn("h-full w-full", className)}
        >
          <div className="flex gap-4 py-2">{props.children}</div>
        </ScrollAreaPrimitive.Viewport>
        <ScrollAreaPrimitive.Scrollbar
          className="hidden data-[orientation=vertical]:flex"
          orientation="vertical"
        />
        <ScrollAreaPrimitive.Scrollbar
          className="hidden data-[orientation=horizontal]:flex"
          orientation="horizontal"
        />
      </ScrollAreaPrimitive.Root>
      {canScrollNext && (
        <CarouselNext
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2"
          onClick={scrollNext}
        />
      )}
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      className={cn("flex-[0_0_auto] w-1/3", className)}
      {...props}
      ref={ref}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

interface CarouselArrowProps extends React.HTMLAttributes<HTMLButtonElement> {}

const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselArrowProps>(
  ({ className, ...props }, ref) => {
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    return (
      <Button
        variant="outline"
        size="sm"
        className={cn("h-8 w-8 p-0", className)}
        disabled={!canScrollNext}
        onClick={() => {
          const viewport = document.querySelector(
            ".carousel-viewport"
          ) as HTMLElement
          if (!viewport) return
          viewport.scrollLeft += viewport.offsetWidth
          setCanScrollNext(
            viewport.scrollLeft + viewport.offsetWidth < viewport.scrollWidth
          )
        }}
        {...props}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next</span>
      </Button>
    )
  }
)
CarouselNext.displayName = "CarouselNext"

const CarouselPrevious = React.forwardRef<HTMLButtonElement, CarouselArrowProps>(
  ({ className, ...props }, ref) => {
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)

    return (
      <Button
        variant="outline"
        size="sm"
        className={cn("h-8 w-8 p-0", className)}
        disabled={!canScrollPrev}
        onClick={() => {
          const viewport = document.querySelector(
            ".carousel-viewport"
          ) as HTMLElement
          if (!viewport) return
          viewport.scrollLeft -= viewport.offsetWidth
          setCanScrollPrev(viewport.scrollLeft > 0)
        }}
        {...props}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous</span>
      </Button>
    )
  }
)
CarouselPrevious.displayName = "CarouselPrevious"

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
}
