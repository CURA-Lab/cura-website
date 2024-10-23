import React from "react";
import Image from "next/image";

export default function Milestone() {
  const milestones = [
    {
      title: "Q4 2024",
      content: [
        "Device Ready",
        "Mobile APP 1st",
        "Version Ready",
        "Server Setup",
        "Social Media Opens",
      ],
      color: "#6ac9fa",
    },
    {
      title: "Q1 2024",
      content: [
        "Device Testing & Manufactured",
        "Device Presale",
        "Mobile APP Testing",
        "Server Testing",
        "Community Opens",
        "Airdrops & Warm-Up",
      ],
      color: "#4a75f6",
    },
    {
      title: "Q2 2025",
      content: ["Beta Testing", "IDO", "Product Public Sale"],
      color: "#763ef6",
    },
    {
      title: "Q3 2025",
      content: [
        "Maintenance & Upgrading",
        "Development of other smart pet product",
        "Launch Cura branded pet foot and essentials",
      ],
      color: "#be47f6",
    },
    {
      title: "More to go",
      content: [
        "Building Cura’s ecosystem",
        "Online Vet Services and Other peripheral services Development",
      ],
      color: "#eb4eb3",
    },
  ];

  return (
    <div className=" bg-[#0f132d] h-[160vh] pointer-events-none">
      {/* 标题图片 */}
      <div className="w-full mb-8">
        <img
          src="/images/milestone.jpg" // 图片路径
          alt="Milestones Title"
          className="w-full"
        />
      </div>

      {/* Milestone Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {milestones.map((milestone, index) => (
          <MilestoneCard
            key={index}
            title={milestone.title}
            content={milestone.content}
            color={milestone.color}
          />
        ))}
      </div>
    </div>
  );
}

function MilestoneCard({
  title,
  content,
  color,
}: {
  title: string;
  content: string[];
  color: string;
}) {
  return (
    <div
      className="opacity-70 rounded-xl p-6 transition-all duration-300 ease-in-out transform hover:opacity-100 pointer-events-auto"
      //  hover:scale-105
      style={{
        boxShadow: "none", // 初始没有阴影
      }}
      // onMouseEnter={(e) => {
      //   (
      //     e.currentTarget as HTMLDivElement
      //   ).style.boxShadow = `0 0 15px ${color}`; // hover 时显示阴影
      // }}
      // onMouseLeave={(e) => {
      //   (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; // 离开时移除阴影
      // }}
    >
      {/* 标题部分 */}
      <div className="flex items-center mb-4">
        {/* 同心圆图标 */}
        <div className="relative w-10 h-10 mr-4">
          {/* 外圆 */}
          <div
            className="absolute inset-0 rounded-full opacity-15"
            style={{ backgroundColor: color }}
          ></div>
          {/* 内圆 */}
          <div
            className="absolute inset-3 rounded-full"
            style={{ backgroundColor: color }}
          ></div>
        </div>

        {/* 标题 */}
        <h3 className="text-3xl w-[70%] font-bold text-white transition-transform duration-300 hover:scale-110">
          {title}
        </h3>
      </div>

      {/* 内容部分 */}
      <ul className="text-gray-400 space-y-6 text-xl">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
