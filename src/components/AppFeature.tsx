export default function AppFeature() {
  return (
    <div className="relative h-screen bg-gray-900 text-white">
      {/* 标题 */}
      <img
        id="background-image"
        src="/images/app_feature.jpg"
        className="pointer-events-none w-full h-auto"
        alt="Large background"
      />

      {/* 容器 */}
      <div className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          {/* 第一张图片，居中显示 */}
          <div className="image-container img-1">
            <img
              src="/images/ui_list1.jpg"
              alt="App Feature Screenshot 1"
              className="animated-image"
            />
          </div>

          {/* 第二张图片，位于第1张图片上方 */}
          <div className="image-container img-2">
            <img
              src="/images/ui_list2.jpg"
              alt="App Feature Screenshot 2"
              className="animated-image"
            />
          </div>

          {/* 第三张图片，位于第1张图片下方 */}
          <div className="image-container img-3">
            <img
              src="/images/ui_list3.jpg"
              alt="App Feature Screenshot 3"
              className="animated-image"
            />
          </div>

          {/* 第四张图片，位于第2张图片上方 */}
          <div className="image-container img-4">
            <img
              src="/images/ui_list4.jpg"
              alt="App Feature Screenshot 4"
              className="animated-image"
            />
          </div>

          {/* 第五张图片，位于第3张图片下方 */}
          <div className="image-container img-5">
            <img
              src="/images/ui_list5.jpg"
              alt="App Feature Screenshot 5"
              className="animated-image"
            />
          </div>
        </div>
      </div>

      {/* 样式 */}
      <style jsx>{`
        .image-container {
          position: absolute;
          transform-origin: center;
        }

        .animated-image {
          object-fit: cover;
          width: auto;
          height: auto;
          transform-origin: center;
          animation: slide 8s ease-out infinite;
        }

        /* 定义每张图片的位置 */
        .img-1 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .img-2 {
          top: 50%;
          left: 50%;
          transform: translate(-200%, -50%) rotate(45deg);
        }

        .img-3 {
          top: 50%;
          left: 50%;
          transform: translate(100%, -50%) rotate(45deg);
        }

        .img-4 {
          top: 50%;
          left: 50%;
          transform: translate(-350%, -50%) rotate(45deg);
        }

        .img-5 {
          top: 50%;
          left: 50%;
          transform: translate(250%, -50%) rotate(45deg);
        }

        /* 为不同图片定义不同的动画方向 */
        .img-1 .animated-image {
          animation: slide-1 8s ease-out infinite;
        }

        .img-2 .animated-image {
          animation: slide-2 8s ease-out infinite;
        }

        .img-3 .animated-image {
          animation: slide-2 8s ease-out infinite;
        }

        .img-4 .animated-image {
          animation: slide-1 8s ease-out infinite;
        }

        .img-5 .animated-image {
          animation: slide-1 8s ease-out infinite;
        }

        @keyframes slide-1 {
          0% {
            transform: translate(0, 250px) rotate(0deg);
          }
          50% {
            transform: translate(0px, -250px) rotate(0deg);
          }
          100% {
            transform: translate(0, 250px) rotate(0deg);
          }
        }

        @keyframes slide-2 {
          0% {
            transform: translate(0, -250px) rotate(0deg);
          }
          50% {
            transform: translate(0px, 250px) rotate(0deg);
          }
          100% {
            transform: translate(0, -250px) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
