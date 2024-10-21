import Head from "next/head";
import Image from "next/image";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Modern Tailwind Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="relative h-screen bg-black">
        {/* Header with logo and icons */}

        <section id="device">
          <header className="w-full flex justify-between items-center p-1">
            <div className="ml-16">
              <Image
                src="/images/logo_cura.png"
                alt="Cura"
                width={210}
                height={70}
                className="cursor-pointer"
              />
            </div>
            <div className="flex space-x-12 mr-16">
              <Image
                src="/images/icon_twitter.png"
                alt="Twitter"
                width={30}
                height={30}
                className="hover:opacity-50 cursor-pointer"
              />
              <Image
                src="/images/icon_telegram.png"
                alt="Telegram"
                width={30}
                height={30}
                className="hover:opacity-50 cursor-pointer"
              />
              <Image
                src="/images/icon_gitbook.png"
                alt="GitBook"
                width={30}
                height={30}
                className="hover:opacity-50 cursor-pointer"
              />
              <Image
                src="/images/icon_instagram.png"
                alt="Instagram"
                width={30}
                height={30}
                className="hover:opacity-50 cursor-pointer"
              />
            </div>
          </header>
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            className="w-full object-cover"
            playsInline
          >
            <source src="/video/home.mp4" type="video/mp4" />
          </video>
          {/* Centered Text */}
          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white bg-black">
            <h1 className="text-6xl md:text-6xl font-bold mb-4">
              Beta coming soon...
            </h1>
          </div>
        </section>
        <section id="adpage">
          <Slider
            images={["/images/adpage1.jpg", "/images/adpage2.jpg"]}
            transitionType="fade"
          />
        </section>
        <section id="dappdes">
          <Slider
            images={[
              <Slider
                images={["/images/dappdes1_1.jpg", "/images/dappdes1_2.jpg"]}
                transitionType="fade"
                interval={2000}
              />,
              <Slider
                images={["/images/dappdes2_1.jpg"]}
                transitionType="fade"
                interval={2000}
              />,
            ]}
            transitionType="slide"
            direction="up"
            interval={3000}
          />
        </section>
      </div>
    </>
  );
}
