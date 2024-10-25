import React from "react";

export default function ProductFeatures() {
  return (
    <div className="py-16 bg-[#0f132d] h-[270vh] pointer-events-none">
      <div className="w-full mb-8">
        <img
          src="/images/prod_feature.jpg" // 这里放标题的图片路径
          alt="Product Features Title"
          className="w-full"
        />
      </div>

      {/* 第一行：两个card */}
      <div className="container mx-auto px-4 flex flex-col space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* 第一张产品图片和文字 */}
          <div className="bg-opacity-10 rounded-2xl overflow-hidden relative w-full aspect-[5/3]">
            <div className="absolute w-full h-full bg-gray-500 opacity-10"></div>
            <div className="absolute pointer-events-auto">
              <img
                src="/images/pf_1.png"
                alt="Product Feature"
                className="object-cover"
                style={{
                  transition: "transform 0.5s ease-in-out",
                  transformOrigin: "top left",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1.2)";
                  (e.currentTarget as HTMLImageElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1)";
                  (e.currentTarget as HTMLImageElement).style.opacity = "1";
                }}
              />
            </div>
            <div
              className="absolute"
              style={{
                transform: `scale(0.62) translate(5rem, 5rem)`,
              }}
            >
              <img
                src="/images/pf_txt_1.png"
                alt="Feature Description"
                className="object-cover"
              />
            </div>
          </div>

          {/* 第二张产品图片和文字 */}
          <div className="bg-opacity-10 rounded-2xl overflow-hidden relative w-full aspect-[5/3]">
            <div className="absolute w-full h-full bg-gray-500 opacity-10"></div>
            <div
              className="absolute pointer-events-auto"
              style={{
                bottom: "3rem",
                right: "3rem",
              }}
            >
              <img
                src="/images/pf_2.png"
                alt="Product Feature"
                className="object-cover"
                style={{
                  transition: "transform 0.5s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1.2)";
                  (e.currentTarget as HTMLImageElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1)";
                  (e.currentTarget as HTMLImageElement).style.opacity = "1";
                }}
              />
            </div>
            <div
              className="absolute"
              style={{
                transform: `scale(0.62) translate(-5rem, 0rem)`,
              }}
            >
              <img
                src="/images/pf_txt_2.png"
                alt="Feature Description"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* 第二三行：三个card */}
        <div className="w-full flex">
          {/* 第三张产品图片和文字 */}
          <div className="w-[62%] bg-opacity-10 rounded-2xl overflow-hidden relative aspect-[3/2]">
            <div className="absolute w-full h-full bg-gray-500 opacity-10"></div>
            <div
              className="absolute pointer-events-auto"
              style={{
                bottom: "0rem",
                right: "0rem",
              }}
            >
              <img
                src="/images/pf_3.png"
                alt="Product Feature"
                className="object-cover"
                style={{
                  transition: "transform 0.5s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1.2)";
                  (e.currentTarget as HTMLImageElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1)";
                  (e.currentTarget as HTMLImageElement).style.opacity = "1";
                }}
              />
            </div>
            <div
              className="absolute"
              style={{
                transform: `scale(0.62) translate(-9rem, 0rem)`,
              }}
            >
              <img
                src="/images/pf_txt_3.png"
                alt="Feature Description"
                className="object-cover"
              />
            </div>
          </div>

          {/* 第四和第五张产品图片和文字 */}
          <div className="ml-4 w-[40%] grid grid-rows-2 gap-4">
            <div className="bg-opacity-10 rounded-2xl overflow-hidden relative aspect-[2/1]">
              <div className="absolute w-full h-full bg-gray-500 opacity-10"></div>
              <div
                className="absolute pointer-events-auto"
                style={{
                  bottom: "5rem",
                }}
              >
                <img
                  src="/images/pf_4.png"
                  alt="Product Feature"
                  className="object-cover"
                  style={{
                    transition: "transform 0.5s ease-in-out",
                    transformOrigin: "top left",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1.2)";
                    (e.currentTarget as HTMLImageElement).style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1)";
                    (e.currentTarget as HTMLImageElement).style.opacity = "1";
                  }}
                />
              </div>
              <div
                className="absolute"
                style={{
                  transform: `scale(0.62) translate(24rem, 0rem)`,
                }}
              >
                <img
                  src="/images/pf_txt_4.png"
                  alt="Feature Description"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="bg-opacity-10 rounded-2xl overflow-hidden relative aspect-[2/1]">
              <div className="absolute w-full h-full bg-gray-500 opacity-10"></div>
              <div
                className="absolute pointer-events-auto"
                style={{
                  bottom: "-2rem",
                  right: "4rem",
                }}
              >
                <img
                  src="/images/pf_5.png"
                  alt="Product Feature"
                  className="object-cover"
                  style={{
                    transition: "transform 0.5s ease-in-out",
                    transformOrigin: "top left",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1.2)";
                    (e.currentTarget as HTMLImageElement).style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1)";
                    (e.currentTarget as HTMLImageElement).style.opacity = "1";
                  }}
                />
              </div>
              <div
                className="absolute"
                style={{
                  transform: `scale(0.62) translate(0rem, 2rem)`,
                }}
              >
                <img
                  src="/images/pf_txt_5.png"
                  alt="Feature Description"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 第四行：一个宽的card */}
        <div className="w-full bg-opacity-10 rounded-2xl overflow-hidden relative aspect-[3/1]">
          <div className="absolute w-full h-full bg-gray-500 opacity-10"></div>
          <div
            className="absolute pointer-events-auto"
            style={{
              bottom: "4rem",
              right: "24rem",
            }}
          >
            <img
              src="/images/pf_6.png"
              alt="Product Feature"
              className="object-cover"
              style={{
                transition: "transform 0.5s ease-in-out",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLImageElement).style.transform =
                  "scale(1.2)";
                (e.currentTarget as HTMLImageElement).style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLImageElement).style.transform =
                  "scale(1)";
                (e.currentTarget as HTMLImageElement).style.opacity = "1";
              }}
            />
          </div>
          <div
            className="absolute"
            style={{
              transform: `scale(0.62) translate(62rem, 18rem)`,
            }}
          >
            <img
              src="/images/pf_txt_6.png"
              alt="Feature Description"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
