import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <footer className="w-full py-4 bg-[#0f132d] text-gray-400">
      {/* 分割线 */}
      <div className="flex items-center justify-center mb-32">
        <div className="border-t w-[80%] border-gray-600 opacity-50"></div>
      </div>

      <div className="flex justify-between items-center px-16">
        <div className="flex items-center space-x-4">
          <Image
            src="/images/logo_cura.png" // 替换成你的 logo 图片路径
            alt="Cura Labs Logo"
            width={210}
            height={70}
            className="cursor-pointer"
          />
        </div>

        {/* 中间 Contact Us 和落款 */}
        <div className="text-center">
          <p className="text-lg font-semibold text-white">
            Contact Us:{" "}
            <span
              style={{
                display: "inline-block",
                color: isHovered ? "#e5e7eb" : "#9ca3af", // hover 时颜色变为灰色 (tailwind 的 gray-200)
                transform: isHovered ? "scale(1.1)" : "scale(1)", // hover 时放大
                transition: "transform 0.3s ease, color 0.3s ease", // 平滑的过渡效果
                transformOrigin: "left", // 使用外部传入的锚点
                cursor: "pointer",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              contact@curalabs.xyz
            </span>
          </p>
          <p className="text-sm">
            © Cura Labs. All rights reserved. Los Angeles, California, United
            States
          </p>
        </div>

        {/* 右侧社交媒体图标 */}
        <div className="flex space-x-6">
          <Image
            src="/images/icon_twitter.png" // 替换成你的图标路径
            alt="Twitter"
            width={30}
            height={30}
            className="hover:opacity-50 cursor-pointer"
            onClick={() => {
              window.open("https://x.com/curacollar", "_blank");
            }}
          />
          <Image
            src="/images/icon_telegram.png"
            alt="Telegram"
            width={30}
            height={30}
            className="hover:opacity-50 cursor-pointer"
            onClick={() => {
              window.open("https://t.me/CURAOFFICAL", "_blank");
            }}
          />
          <Image
            src="/images/icon_gitbook.png"
            alt="GitBook"
            width={30}
            height={30}
            className="hover:opacity-50 cursor-pointer"
            onClick={() => {
              window.open(
                "https://cura-lab.gitbook.io/cura-lab-docs/",
                "_blank"
              );
            }}
          />
          <Image
            src="/images/icon_instagram.png"
            alt="Instagram"
            width={30}
            height={30}
            className="hover:opacity-50 cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
}
