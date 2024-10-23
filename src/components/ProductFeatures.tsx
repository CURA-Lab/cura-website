import React from "react";

export default function ProductFeatures() {
  return (
    <div className="py-16 bg-[#0f132d] h-[400vh] pointer-events-none">
      <div className="w-full mb-8">
        <img
          src="/images/prod_feature.jpg" // 这里放标题的图片路径
          alt="Product Features Title"
          className="w-full"
          width={1920}
          height={400} // 根据需要调整高度
        />
      </div>

      {/* Card container */}
      <div className="container mx-auto px-4 flex flex-col space-y-4">
        {/* 第一行：两个card */}
        <div className="grid grid-cols-2 gap-4">
          <CardContainer>
            <CardContent
              productImage="/images/pf_1.png"
              textImage="/images/pf_txt_1.png"
              transformOrigin="top left"
            />
          </CardContainer>
          <CardContainer>
            <CardContent
              productImage="/images/pf_2.png"
              textImage="/images/pf_txt_2.png"
              bottom="2"
              right="2"
              translateX="-5"
              translateY="0"
            />
          </CardContainer>
        </div>

        {/* 第二三行：三个card */}
        <div className="w-full flex">
          <div className="w-[62%]">
            <CardContainer>
              <CardContent
                productImage="/images/pf_3.png"
                textImage="/images/pf_txt_3.png"
                aspectRatio="3/2"
                translateX="-9"
                translateY="0"
                bottom="0"
                right="0"
              />
            </CardContainer>
          </div>
          <div className="ml-4 w-[40%] grid grid-rows-2 gap-4">
            <CardContainer>
              <CardContent
                productImage="/images/pf_4.png"
                textImage="/images/pf_txt_4.png"
                bottom="5"
                aspectRatio="2/1"
                translateX="24"
                translateY="0"
              />
            </CardContainer>
            <CardContainer>
              <CardContent
                productImage="/images/pf_5.png"
                textImage="/images/pf_txt_5.png"
                aspectRatio="2/1"
                right="4"
                bottom="-2"
                translateX="0"
                translateY="2"
              />
            </CardContainer>
          </div>
        </div>

        {/* 第四行：一个宽的card */}
        <div>
          <CardContainer className="col-span-2">
            <CardContent
              productImage="/images/pf_6.png"
              textImage="/images/pf_txt_6.png"
              aspectRatio="3/1"
              right="24"
              bottom="4"
              translateX="62"
              translateY="18"
            />
          </CardContainer>
        </div>
      </div>
    </div>
  );
}

function CardContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-opacity-10 rounded-2xl overflow-hidden ${className}`}
      style={{ position: "relative" }}
    >
      {children}
    </div>
  );
}

function CardContent({
  productImage,
  textImage,
  aspectRatio = "5/3", // 默认 aspect ratio
  transformOrigin = "", // 默认锚点位置
  translateX = "5", // 产品文字图默认的 X 轴位移
  translateY = "5", // 产品文字图默认的 Y 轴位移
  bottom = "", // 产品图默认底部距离
  right = "", // 产品图默认右侧距离
}: {
  productImage: string;
  textImage: string;
  aspectRatio?: string; // 可选参数
  transformOrigin?: string; // 可选参数
  translateX?: string; // 可选参数
  translateY?: string; // 可选参数
  bottom?: string;
  right?: string;
}) {
  return (
    <div className={`relative w-full aspect-[${aspectRatio}]`}>
      <div className="absolute w-full h-full bg-gray-500 opacity-10"></div>

      {/* 产品图片 */}
      <div
        className={`absolute pointer-events-auto`}
        style={{
          bottom: `${bottom}rem`, // 设置 bottom 值带有单位
          right: `${right}rem`, // 设置 right 值带有单位
        }}
      >
        <img
          src={productImage}
          alt="Product Feature"
          className="object-cover"
          style={{
            transition: "transform 0.5s ease-in-out",
            transformOrigin: transformOrigin, // 使用外部传入的锚点
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform =
              "scale(1.2)";
            (e.currentTarget as HTMLImageElement).style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLImageElement).style.opacity = "1";
          }}
        />
      </div>

      {/* 标题和描述图片 */}
      <div
        className="absolute"
        style={{
          transform: `scale(0.62) translate(${translateX}rem, ${translateY}rem)`, // 使用外部传入的位移量
        }}
      >
        <img
          src={textImage}
          alt="Feature Description"
          className="object-cover"
        />
      </div>
    </div>
  );
}
