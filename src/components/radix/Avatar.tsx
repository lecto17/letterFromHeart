import * as AvatarPrimitive from "@radix-ui/react-avatar";
import Image from "next/image";
import { Dispatch, SetStateAction, useCallback, useState } from "react";

const AvatarDemo = ({
  src,
  alt,
  initials,
  profileImage,
  setProfileImage,
}: {
  src: string;
  alt: string;
  initials: string;
  profileImage: string;
  setProfileImage: Dispatch<SetStateAction<string>>;
}) => {
  const [showable, setShowable] = useState(false);

  const mockProfileImage = [
    {
      id: "1",
      src: "/images/profile/lion.png",
      alt: "lion icon",
    },
    {
      id: "2",
      src: "/images/profile/bear.png",
      alt: "bear icon",
    },
    {
      id: "3",
      src: "/images/profile/chicken.png",
      alt: "chicken icon",
    },
    {
      id: "4",
      src: "/images/profile/dog.png",
      alt: "dog icon",
    },
    {
      id: "5",
      src: "/images/profile/elephant.png",
      alt: "elephant icon",
    },
    {
      id: "6",
      src: "/images/profile/penguin.png",
      alt: "penguin icon",
    },
    {
      id: "7",
      src: "/images/profile/squirrel.png",
      alt: "squirrel icon",
    },
    {
      id: "8",
      src: "/images/profile/whale.png",
      alt: "whale icon",
    },
    {
      id: "9",
      src: "/images/profile/default.png",
      alt: "default icon",
    },
    {
      id: "10",
      src: "/images/profile/default.png",
      alt: "default icon",
    },
  ];

  const showProfileImages = (isShow: boolean) => {
    setShowable(isShow);
  };

  const chooseProfileImages = (src: string) => {
    setShowable(false);
    setProfileImage(src);
    console.log("dd");
  };

  return (
    <AvatarPrimitive.Root className="AvatarRoot inline-flex items-center justify-center overflow-hidden w-12 h-12 rounded-full bg-slate-900">
      <AvatarPrimitive.Image
        className="AvatarImage w-1000 h-100 object-cover cursor-pointer"
        src={profileImage || src}
        alt={alt}
        onClick={() => showProfileImages(true)}
      />
      {showable && (
        <section
          className="background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center bg-red-300 z-50 bg-black opacity-70"
          onClick={() => showProfileImages(false)}
        >
          <main className="profile-list-wrapper w-[512px] h-32 bg-white rounded-md">
            <ul className="profile-list p-2 grid grid-rows-2 grid-cols-5 gap-4 justify-center items-center">
              {mockProfileImage.map((profile) => {
                const { id, src, alt } = profile;
                return (
                  <li
                    className="profile rounded-full overflow-hidden border-box w-10 h-10 cursor-pointer"
                    onClick={() => chooseProfileImages(src)}
                  >
                    <Image
                      className="hover:scale-110 transition-all"
                      key={id}
                      width={100}
                      height={100}
                      src={src}
                      alt={alt}
                    />
                  </li>
                );
              })}
            </ul>
          </main>
        </section>
      )}

      <AvatarPrimitive.Fallback
        className="AvatarFallback w-100 h-100 flex items-center justify-center text-base text-white leading-none font-semibold"
        delayMs={600}
      >
        {initials}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};

export default AvatarDemo;
