import Link from "next/link";
import type * as React from "react";

import { siteConfig } from "@/config/site";
import { SunGraphic } from "@/components/graphics/sun";

export function Footer() {
  return (
    <footer className="text-white overflow-clip relative">
      <div className="pb-[16rem] pt-[40rem] w-[100rem] relative mx-auto z-10">
        <p className="text-center text-lg sm:text-1xl md:text-2xl lg:text-4xl pb-10">
          <Link href="mailto:hello@durhack.com">hello@durhack.com</Link>
        </p>

        <div className="flex justify-center w-full max-w-screen-lg mx-auto gap-x-6 pb-20">
          {siteConfig.socials.map(({ key, href, icon: Icon }) => (
            <Link key={key} href={href} className="w-[8%] max-w-[55px] h-auto object-cover">
              <Icon />
            </Link>
          ))}
        </div>

        <div className="text-center justify-center pb-24 w-full px-8 sm:px-16 md:px-24 lg:px-20 xl:34">
          <div className="flex flex-col w-fill">
            <p className="text-xs text-start sm:text-sm md:text-md lg:text-lg xl:text-xl">
              DurHack follows the{" "}
              <Link href="https://hackp.ac/coc" className="underline">
                MLH Code of Conduct
              </Link>
              . Photos and videos taken at events in 2019 and 2022.
              <br />
              <br />
              DurHack is an event hosted by Durham University Computing Society (
              <Link href="https://compsoc.tech" className="underline">
                compsoc.tech
              </Link>
              ), which is a student society affiliated with Durham Students&apos; Union (
              <Link href="https://durhamsu.com" className="underline">
                durhamsu.com
              </Link>
              ). Durham Students&apos; Union is registered in England as a company limited by guarantee (07689815) and a
              charity (1145400), with VAT number 119733690 and registered office Dunelm House, New Elvet, Durham DH1
              3AN.
            </p>
          </div>
        </div>
      </div>

      <div id="outer-ring" className="rounded-[50%] absolute h-[124rem] w-[124rem] bottom-[-65rem] md:bottom-[-65rem]" />

      <SunGraphic className="h-[38rem] w-[38rem] bottom-[-24rem] md:bottom-[-24rem] translate-x-[-50%] left-1/2 z-20 absolute" />
    </footer>
  );
}
