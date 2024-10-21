import { ReactNode, useEffect, useState } from "react";

type SliderProps = {
  images: (string | ReactNode)[];
  interval?: number;
  transitionType?: "fade" | "slide"; // 支持淡入淡出或滑动过渡
  direction?: "up" | "down" | "left" | "right"; // 滑动的方向
};

const defaultProps = {
  interval: 5000,
  transitionType: "fade",
  direction: "up",
};

export default function Slider({
  images,
  interval = 5000,
  transitionType = "slide",
  direction = "up",
}: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIsAnimating(true);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 2000); // 2秒后重置动画状态

      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  const getTransitionClasses = (index: number) => {
    if (transitionType === "fade") {
      return `absolute inset-0 w-full h-full transition-opacity duration-2000 ${
        index === currentSlide ? "opacity-100" : "opacity-0"
      }`;
    }

    if (transitionType === "slide") {
      // 如果当前幻灯片是正在展示的，保持在中间位置
      if (index === currentSlide) {
        return "absolute inset-0 w-full h-full object-cover transition-transform duration-2000 ease-out bg-black transform translate-y-0";
      }

      // 如果幻灯片已经滑出，并且动画结束了，将其放到屏幕下方准备下次滑入
      if (
        index < currentSlide ||
        (currentSlide === 0 && index === images.length - 1)
      ) {
        return isAnimating
          ? "absolute inset-0 w-full h-full object-cover transition-transform duration-2000 ease-out bg-black transform -translate-y-full"
          : "absolute inset-0 w-full h-full object-cover bg-black  transform translate-y-full"; // 动画结束后重置位置到下方
      }

      // 所有其他幻灯片在非动画期间都保持在屏幕下方，等待滑入
      return "absolute inset-0 w-full h-full object-cover bg-black transform translate-y-full";
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`pointer-events-none ${getTransitionClasses(index)}`}
        >
          {typeof src === "string" ? (
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          ) : (
            src
          )}
        </div>
      ))}
    </section>
  );
}
