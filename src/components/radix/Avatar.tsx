import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { useCallback, useState } from "react";

const AvatarDemo = ({
  src,
  alt,
  initials,
}: {
  src: string;
  alt: string;
  initials: string;
}) => {
  const [profileImage, setProfileImage] = useState(src || "");
  const [showable, setShowable] = useState(false);

  const chooseProfileImages = useCallback(() => {
    if (!showable) {
    }

    setShowable((prev) => !prev);
  }, [showable]);

  return (
    <AvatarPrimitive.Root className="AvatarRoot inline-flex items-center justify-center overflow-hidden w-12 h-12 rounded-full bg-slate-900">
      <div className="AvartarImage-wrapper relative">
        <AvatarPrimitive.Image
          className="AvatarImage w-1000 h-100 object-cover cursor-pointer"
          src={profileImage || src}
          alt={alt}
          onClick={chooseProfileImages}
        />
        {showable && (
          <div className="absolute top-0 w-20 h-50 bg-red-300 z-50 ">ddd</div>
        )}
      </div>

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
