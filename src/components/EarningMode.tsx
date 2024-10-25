import { useEffect, useState } from "react";

type ElementProps = {
  id: string;
  pathId: string;
  offsetTime: number;
  duration1: number;
  duration2: number;
  delay1?: number;
  delay2?: number;
  imagePath: string;
  size: number; // 图标大小
};

const CurveElement = ({
  id,
  pathId,
  offsetTime = 0,
  duration1,
  delay1 = 0,
  duration2,
  delay2 = 0,
  imagePath,
  size,
}: ElementProps) => {
  useEffect(() => {
    const element = document.getElementById(id);

    if (element) {
      const totalDuration =
        offsetTime + duration1 + duration2 + delay1 + delay2;

      const keyframes = [
        {
          offsetDistance: "0%",
          easing: "ease-out",
          offset: 0,
          opacity: 1,
        }, // 从 A 开始
        {
          offsetDistance: "0%",
          easing: "ease-out",
          offset: offsetTime / totalDuration,
          opacity: 1,
        }, // 先在A停留
        {
          offsetDistance: "100%",
          easing: "ease-out",
          offset: (offsetTime + duration1) / totalDuration,
          opacity: 0.5,
        }, // 到达 B 点
        {
          offsetDistance: "100%",
          easing: "ease-out",
          offset: (offsetTime + duration1 + delay1) / totalDuration,
          opacity: 1,
        }, // 在 B 点停留
        {
          offsetDistance: "0%",
          easing: "ease-out",
          offset: (offsetTime + duration1 + delay1 + duration2) / totalDuration,
          opacity: 0.5,
        }, // 返回 A 点
        { offsetDistance: "0%", easing: "ease-out", offset: 1, opacity: 1 }, // 在 A 点停留
      ];

      // 使用 CSS 的 Web Animations API 实现动画
      element.animate(keyframes, {
        duration: totalDuration * 1000, // 将总时长转换为毫秒
        iterations: Infinity, // 无限循环
      });
    }
  }, [id, pathId, duration1, delay1, duration2, delay2]);

  return (
    <div
      id={id}
      className="absolute"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: `url(${imagePath})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        offsetPath: `url(#${pathId})`,
        offsetDistance: "0%",
      }}
    />
  );
};

export default function EarningMode() {
  const [imageHeight, setImageHeight] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(100); // 默认设置为100，避免SSR时出错

  useEffect(() => {
    const img = document.getElementById("background-image") as HTMLImageElement;
    if (typeof window !== "undefined") {
      // 设置viewport的高度
      setViewportHeight(window.innerHeight);

      if (img) {
        img.onload = () => {
          setImageHeight(img.offsetHeight);
          setImageWidth(img.offsetWidth);
        };
        // 如果图片已经加载完成
        if (img.complete) {
          setImageHeight(img.offsetHeight);
          setImageWidth(img.offsetWidth);
        }
      }
    }
  }, []);

  return (
    <div className="relative h-[150vh] bg-[#0f132d] w-full overflow-hidden">
      {/* Large image exceeding h-full */}
      <img
        id="background-image"
        src="/images/earningmode.jpg"
        className="pointer-events-none absolute top-0 left-0 w-full h-auto"
        alt="Large background"
      />

      {/* SVG to define the paths for each element */}
      <svg className="absolute inset-0" preserveAspectRatio="none">
        {/* <!-- Path 1: 从左下到右上的曲线 --> */}
        <path
          id="path1"
          d="M300,-100 C200,1000 300,900 1700,1900"
          fill="transparent"
          stroke="transparent"
        />

        {/* <!-- Path 2: 类似于第一条路径，但曲线不同 --> */}
        <path
          id="path2"
          d="M500,-100 C400,1200 1000,400 1400,1900"
          fill="transparent"
          stroke="transparent"
        />

        {/* <!-- Path 3: 更复杂的曲线，向右更多 --> */}
        <path
          id="path3"
          d="M600,-100 C300,1400 100,800 1000,1900"
          fill="transparent"
          stroke="transparent"
        />

        {/* <!-- Path 4: 一个相对更直的路径 --> */}
        <path
          id="path4"
          d="M900,-100 C500,1400 600,800 800,1900"
          fill="transparent"
          stroke="transparent"
        />

        {/* <!-- Path 5: 复杂度增加，曲折更多 --> */}
        <path
          id="path5"
          d="M1100,-100 C700,700 600,1000 600,1900"
          fill="transparent"
          stroke="transparent"
        />

        {/* <!-- Path 6: 更长的曲线，往右延伸 --> */}
        <path
          id="path6"
          d="M1400,-100 C1000,500 200,800 300,1900"
          fill="transparent"
          stroke="transparent"
        />

        {/* <!-- Path 7: 最终的曲线，终点在右上 --> */}
        <path
          id="path7"
          d="M1700,-100 C200,1000 300,900 100,1900"
          fill="transparent"
          stroke="transparent"
        />
      </svg>

      {/* Animated elements following the paths */}
      <CurveElement
        id="element1"
        pathId="path1"
        offsetTime={0.4}
        duration1={3}
        delay1={2.5}
        duration2={3.5}
        delay2={1.6}
        imagePath="/images/icon_coin1.png"
        size={150}
      />
      <CurveElement
        id="element2"
        pathId="path2"
        offsetTime={0}
        duration1={3.2}
        delay1={2.1}
        duration2={4.2}
        delay2={1.5}
        imagePath="/images/icon_coin2.png"
        size={120}
      />
      <CurveElement
        id="element3"
        pathId="path3"
        offsetTime={0.6}
        duration1={2.7}
        delay1={3}
        duration2={3.2}
        delay2={1.5}
        imagePath="/images/icon_coin1.png"
        size={180}
      />
      <CurveElement
        id="element4"
        pathId="path4"
        offsetTime={0.1}
        duration1={3.6}
        delay1={2}
        duration2={3.5}
        delay2={1.8}
        imagePath="/images/icon_coin2.png"
        size={140}
      />
      <CurveElement
        id="element5"
        pathId="path5"
        offsetTime={0.7}
        duration1={3}
        delay1={2}
        duration2={3}
        delay2={2.3}
        imagePath="/images/icon_coin1.png"
        size={100}
      />
      <CurveElement
        id="element6"
        pathId="path6"
        offsetTime={0.4}
        duration1={4}
        delay1={1.4}
        duration2={4}
        delay2={1.2}
        imagePath="/images/icon_coin2.png"
        size={150}
      />
      <CurveElement
        id="element7"
        pathId="path7"
        offsetTime={0}
        duration1={3.2}
        delay1={2.4}
        duration2={3.2}
        delay2={2.2}
        imagePath="/images/icon_coin1.png"
        size={160}
      />
    </div>
  );
}
