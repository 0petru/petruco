import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import ColourfulText from "@/components/ui/colourful-text";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { Globe } from "@/components/ui/globe";

const avatars = [
  {
    imageUrl: "/assets/users_pfp/1.jpg",
  },
  {
    imageUrl: "/assets/users_pfp/2.jpg",
  },
  {
    imageUrl: "/assets/users_pfp/3.jpg",
  },
  {
    imageUrl: "/assets/users_pfp/4.jpg",
  },
  {
    imageUrl: "/assets/users_pfp/5.jpg",
  },
  {
    imageUrl: "/assets/users_pfp/6.jpg",
  },
];

const heroWordIntervals = {
  "care printeaza bani": 9000,
};

const heroWordAnimationDurations = {
  "care printeaza bani": 2200,
};

const heroWordClassNames = {
  "care printeaza bani": "underline",
};

const heroWordTextClassNames = {
  "care printeaza bani": "text-emerald-600 dark:text-emerald-400",
};

export default function Header() {
  return (
    <div className="w-full pb-5">
      <div className="container">
        <div className="flex w-full justify-between lg:flex-row flex-col gap-8 lg:gap-12">
          <div className="lg:w-full lg:w-auto">
            <div className="max-w-[900px] flex-col">
              <h1 className="sm:text-[55px] text-[25px] items-start font-extrabold leading-tight tracking-tighter">
                <span className="block">Transformă-ți ideea într-un</span>
                <span className="block whitespace-nowrap">
                  business digital{" "}
                  <ContainerTextFlip
                    words={[
                      "în timp record",
                      "scalabil",
                      "care printeaza bani",
                    ]}
                    interval={3200}
                    animationDuration={900}
                    wordIntervals={heroWordIntervals}
                    wordAnimationDurations={heroWordAnimationDurations}
                    wordClassNames={heroWordClassNames}
                    wordTextClassNames={heroWordTextClassNames}
                  />
                </span>
              </h1>
              <p className="max-w-[600px] text-lg sm:text-xl lg:text-2xl text-muted-foreground mt-4 sm:mt-5">
                Plazio is a full-service software agency. We design, build,
                launch, and maintain digital products from the ground up.
              </p>
            </div>

            <div className="flex gap-3 sm:gap-4 mt-5 sm:mt-6 flex-col sm:flex-row">
              <Button className="bg-black hover:bg-[#141414] dark:bg-white dark:text-black text-white flex justify-center group/modal-btn rounded-full w-full sm:w-auto order-2 sm:order-1">
                <span className="text-center transition duration-200 p-3 text-sm sm:text-base">
                  🚀 Start now
                </span>
              </Button>

              <div className="flex items-center justify-start gap-2 order-1 sm:order-2">
                <AvatarCircles numPeople={99} avatarUrls={avatars} />
                <p className="text-[#333333] text-sm">Join 100+ Clients</p>
              </div>
            </div>

            <div className="flex items-center gap-10 mt-5">
              <Link href={siteConfig.links.trustpilot} target="_blank">
                <Image
                  src="/assets/logos/trustpilot-4-stars.jpg"
                  alt="Trustpilot 4 stars"
                  width={150}
                  height={75}
                  className="h-[75px]"
                />
              </Link>
              <Image
                src="/assets/logos/facebook-reviews.png"
                alt="Facebook Reviews"
                width={150}
                height={75}
                className="h-[75px] mt-2"
              />
            </div>
          </div>

          <div className="lg:hidden flex flex-col justify-between items-center  sm:mt-8 gap-4 sm:gap-0 sm:flex-row">
            <div className="bg-white-100/60 dark:bg-gray-800/60 w-full sm:w-[48%] rounded-2xl shadow-lg backdrop-blur-md p-4 sm:p-6 flex flex-col items-center border">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                2-3 Days
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-center">
                Average Delivery
              </p>
            </div>
            <div className="bg-white-100/60 dark:bg-gray-800/60 w-full sm:w-[48%] rounded-2xl shadow-lg backdrop-blur-md p-4 sm:p-6 flex flex-col items-center border">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                2M+
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-center">
                Lines of Code
              </p>
            </div>
          </div>

          <ul className="hidden lg:flex w-[50%] h-[470px]">
            <div className="relative flex flex-col w-full h-full justify-start items-end">
              {/* First card: top right */}
              <div className="border-2 bg-white-100/60 dark:bg-gray-800/60 rounded-2xl shadow-lg backdrop-blur-md p-4 lg:p-6 flex flex-col items-center border z-20 relative w-[220px] lg:w-[260px] mt-0 mr-0">
                <h1 className="text-3xl lg:text-4xl font-bold">2-3 Days</h1>
                <p className="text-base lg:text-lg text-muted-foreground text-center">
                  Average Delivery
                </p>
              </div>
              {/* Spacer to push the second card lower */}
              <div className="flex-1" />
              {/* Second card: bottom left */}
              <div className="border-2 bg-white-100/60 dark:bg-gray-800/60 rounded-2xl shadow-lg backdrop-blur-md p-4 lg:p-6 flex flex-col items-center border z-20 relative w-[220px] lg:w-[260px] ml-0 mb-0 self-start">
                <h1 className="text-3xl lg:text-4xl font-bold">98.5%</h1>
                <p className="text-base lg:text-lg text-muted-foreground text-center">
                  Satisfaction
                </p>
              </div>
              {/* Third card: bottom right */}
              <div className="border-2 bg-white-100/60 dark:bg-gray-800/60 rounded-2xl shadow-lg backdrop-blur-md p-4 lg:p-6 flex flex-col items-center border z-20 relative w-[220px] lg:w-[260px] ml-auto mb-0 self-end mt-6">
                <h1 className="text-3xl lg:text-4xl font-bold">2M+</h1>
                <p className="text-base lg:text-lg text-muted-foreground text-center">
                  Lines of Code
                </p>
              </div>
              {/* Globe and overlay */}
              <Globe className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="pointer-events-none absolute inset-0 h-full" />
            </div>
          </ul>
        </div>

        <div
          className="w-full rounded-lg mt-[60px] sm:mt-[80px] text-white text-center p-4 sm:p-6 lg:p-4 pt-[40px] sm:pt-[50px] lg:pt-[30px] pb-[40px] sm:pb-[50px] lg:pb-[30px] flex justify-center items-center"
          style={{
            backgroundImage: "url('/assets/background1.svg')",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col justify-center items-center w-full px-2 sm:px-4 lg:px-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-[95%] sm:max-w-[90%] lg:max-w-[80%] text-center leading-tight sm:leading-tight lg:leading-normal">
              We build, host, and maintain fast, affordable{" "}
              <br className="hidden sm:inline" />
              digital products for your business
            </h1>

            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-2 sm:gap-3 lg:gap-3 mt-5 sm:mt-6 lg:mt-7 font-semibold max-w-full">
              <div className="bg-white p-2 px-3 sm:px-4 lg:px-4 text-black rounded-3xl text-sm sm:text-base lg:text-base whitespace-nowrap">
                Websites
              </div>
              <div className="bg-white p-2 px-3 sm:px-4 lg:px-4 text-black rounded-3xl text-sm sm:text-base lg:text-base whitespace-nowrap">
                SaaS Platforms
              </div>
              <div className="bg-white p-2 px-3 sm:px-4 lg:px-4 text-black rounded-3xl text-sm sm:text-base lg:text-base whitespace-nowrap">
                Apps
              </div>
              <div className="bg-white p-2 px-3 sm:px-4 lg:px-4 text-black rounded-3xl text-sm sm:text-base lg:text-base whitespace-nowrap">
                Software Systems
              </div>
              <div className="bg-white p-2 px-3 sm:px-4 lg:px-4 text-black rounded-3xl text-sm sm:text-base lg:text-base whitespace-nowrap">
                AI & Automation Tools
              </div>
              <div className="bg-white p-2 px-3 sm:px-4 lg:px-4 text-black rounded-3xl text-sm sm:text-base lg:text-base whitespace-nowrap">
                and more..
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
