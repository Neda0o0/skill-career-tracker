"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white dark:bg-black flex flex-col justify-center">
          <div className="bg-white mt-3 p-8 w-full flex items-center shadow-sm hover:shadow-md transition-shadow duration-200 dark:shadow-none">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4">
                Track your skills. <br />
                Build your career.
              </h1>
              <p className="font-semibold mb-4 md:w-[50%]">
                Discover your strengths, set goals, and visualize your progress
                to unlock new opportunities.
              </p>
              <div className="flex gap-4 items-center justify-center md:justify-start">
                <Button>Click Me</Button>
                <Button variant="outline">Submit</Button>
              </div>
            </div>
            <div className="hidden md:flex w-1/2 justify-center">
              <Image
                src="/images/laptop.png"
                alt="laptop"
                width={500}
                height={300}
                className="max-w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-3 p-8 ">
            <p>
              Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.
              Arcu cursus vitae congue mauris rhoncus aenean vel elit
              scelerisque. In egestas erat imperdiet sed euismod nisi porta
              lorem mollis. Morbi tristique senectus et netus. Mattis
              pellentesque id nibh tortor id aliquet lectus proin. Sapien
              faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
              velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum
              varius duis at consectetur lorem. Nisi vitae suscipit tellus
              mauris a diam maecenas sed enim. Velit ut tortor pretium viverra
              suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non
              nisi est sit amet facilisis magna. Dignissim diam quis enim
              lobortis scelerisque fermentum. Odio ut enim blandit volutpat
              maecenas volutpat. Ornare lectus sit amet est placerat in egestas
              erat. Nisi vitae suscipit tellus mauris a diam maecenas sed.
              Placerat duis ultricies lacus sed turpis tincidunt id aliquet. sit
              amet, consectetur adipiscing elit...
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
