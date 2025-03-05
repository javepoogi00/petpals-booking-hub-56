import * as React from "react"
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
} from "embla-carousel-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const SLIDE_SCROLL_SNAP = "scroll-snap-align: start !important"

type CarouselApi = UseEmblaCarouselType[0]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

interface CarouselProps {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({
    children,
    opts,
    plugins,
    orientation = "horizontal",
    setApi,
    ...props
  }, ref) => {
    const [api, setEmblaApi] = useEmblaCarousel(opts, plugins)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
      setIsMounted(true)
    }, [])

    const onInit = useCallback(
      (emblaApi: EmblaCarouselType) => {
        if (!emblaApi) return
        setEmblaApi(emblaApi)
        setApi?.(emblaApi)
      },
      [setApi, setEmblaApi]
    )

    useEffect(() => {
      if (!api) return
      onInit(api)
    }, [api, onInit])

    const containerClassName = useMemo(() => {
      const base = "relative overflow-hidden"
      return cn(base, {
        "embla-carousel-vertical": orientation === "vertical",
      })
    }, [orientation])

    const viewportClassName = useMemo(() => {
      const base =
        "embla-carousel-viewport h-full w-full touch-pan-y selection:none will-change-[transform]"
      return cn(base, {
        "embla-carousel-viewport-vertical": orientation === "vertical",
      })
    }, [orientation])

    const slidesClassName = useMemo(() => {
      const base = "flex h-full w-full"
      return cn(base, {
        "embla-carousel-slides-vertical": orientation === "vertical",
      })
    }, [orientation])

    const slideClassName = useMemo(() => {
      const base = "relative min-w-0 h-full w-full"
      return cn(base, {
        "embla-carousel-slide-vertical": orientation === "vertical",
      })
    }, [orientation])

    return (
      <div className={containerClassName} {...props} ref={ref}>
        <div className={viewportClassName}>
          <div className={slidesClassName}>
            {React.Children.map(children, (child, index) => (
              <div
                key={`slide-${index}`}
                className={cn(slideClassName, "relative", {
                  "embla-carousel-slide": isMounted,
                })}
                style={{
                  ...(orientation === "horizontal"
                    ? {
                        [SLIDE_SCROLL_SNAP]: "var(--carousel-snap-align)",
                      }
                    : {
                        [SLIDE_SCROLL_SNAP]: "var(--carousel-snap-align)",
                      }),
                }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
)
Carousel.displayName = "Carousel"

interface AutoplayOptions {
  delay?: number
  stopOnInteraction?: boolean
}

interface AutoplayProps {
  api: CarouselApi
  options?: AutoplayOptions
}

const Autoplay = ({ api, options }: AutoplayProps) => {
  const { delay = 2000, stopOnInteraction = true } = options || {}
  const [isRunning, setIsRunning] = useState(true)
  const timer = React.useRef(null)

  const autoplay = useCallback(() => {
    if (!api) return
    if (!isRunning) return

    timer.current = window.setTimeout(() => {
      api.scrollNext()
      autoplay()
    }, delay)
  }, [api, delay, isRunning])

  useEffect(() => {
    if (!api) return

    autoplay()

    api.on("destroy", () => clearTimeout(timer.current))
    api.on("settle", autoplay)

    if (stopOnInteraction) {
      api.on("pointerDown", () => setIsRunning(false))
      api.on("dragStart", () => setIsRunning(false))
      api.on("focusin", () => setIsRunning(false))

      api.on("pointerUp", () => setIsRunning(true))
      api.on("dragEnd", () => setIsRunning(true))
      api.on("focusout", () => setIsRunning(true))
    }

    return () => clearTimeout(timer.current)
  }, [api, autoplay, stopOnInteraction])

  return null
}
Autoplay.displayName = "Autoplay"

type CarouselPrevProps = React.ComponentProps<typeof Button> & {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

const CarouselPrev = ({
  variant = "default",
  size = "sm",
  className,
  ...props
}: CarouselPrevProps) => {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "absolute left-2 top-1/2 z-10 -translate-y-1/2 h-8 w-8 rounded-full",
        className
      )}
      {...props}
    />
  )
}
CarouselPrev.displayName = "CarouselPrev"

type CarouselNextProps = React.ComponentProps<typeof Button> & {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

const CarouselNext = ({
  variant = "default",
  size = "sm",
  className,
  ...props
}: CarouselNextProps) => {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "absolute right-2 top-1/2 z-10 -translate-y-1/2 h-8 w-8 rounded-full",
        className
      )}
      {...props}
    />
  )
}
CarouselNext.displayName = "CarouselNext"

const CarouselItem = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("relative flex aspect-square", className)} {...props}>
      {children}
    </div>
  )
}
CarouselItem.displayName = "CarouselItem"

export {
  Carousel,
  CarouselPrev,
  CarouselNext,
  CarouselItem,
  Autoplay,
}
