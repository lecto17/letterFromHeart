import Avatar from "@rd/Avatar";
import Link from "next/link";
import Button from "@ui/Button";
import {
  RiImage2Line,
  RiFileGifLine,
  RiChatPollLine,
  RiEmotionLine,
  RiMapPin2Line,
} from "react-icons/ri";

import { cva } from "class-variance-authority";
import { useState, useRef } from "react";
import { UploadTweetItem } from "src/types/tweet";
import dayjs from "dayjs";
import { getProfileAnimal } from "src/utils/utils";

const TweetFormStyles = cva("flex flex-1 gap-x-2", {
  variants: {
    width: {
      default: "p-4 border-b border-slate-200",
      full: "",
    },
  },
  defaultVariants: {
    width: "default",
  },
});

function TweetForm({ width }: { width: "default" | "full" }) {
  const [input, setInput] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [pwdConfirm, setPwdConfirm] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string>(
    "/images/profile/lion.png"
  );
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleTweet = async (e) => {
    e.preventDefault();

    if (pwd !== pwdConfirm || !pwd) {
      alert("비밀번호를 확인해주세요 : (");
      pwdRef.current?.focus();
      return;
    }

    const tweet: UploadTweetItem = {
      userName: `${dayjs().format("HH")}시의 ${getProfileAnimal(profileImage)}`,
      password: pwd,
      content: input,
      date: dayjs().format("YYYYMMDD"),
    };

    console.log("tweet: ", tweet);

    await fetch("/api/upload-tweet", {
      method: "POST",
      body: JSON.stringify({ text: input }),
    });
    alert("업로드 완료 : )");
    setInput("");

    inputRef.current && inputRef.current.focus();
  };

  const handleChange = (value: string, type: string) => {
    if (type === "pwd") {
      setPwd(value);
      return;
    }
    setPwdConfirm(value);
  };

  const clickSubMenu = (type: string) => {
    console.log("type: ", type);

    switch (type) {
      case "image":
      case "image":
        fileRef.current?.click();
        console.log("asdf: ", fileRef);

        break;

      default:
        break;
    }
  };

  const uploadFile = (target) => {
    console.log("value: ", target.value);

    console.log(fileRef.current);
  };

  return (
    <div className={TweetFormStyles({ width })}>
      <Avatar
        src={profileImage}
        alt="profile image"
        initials="RQ"
        profileImage={profileImage}
        setProfileImage={setProfileImage}
      />
      <form className="flex flex-col flex-1 gap-y-4" ref={formRef}>
        <div className="flex flex-1">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="오늘 어떤 일들이 있었나요?"
            className="w-full px-4 py-3 text-xl border-transparent placeholder:text-slate-600 outline-0 focus:outline-none appearance-none focus:ring-0 focus:border-transparent"
            ref={inputRef}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-4 px-4">
            <li onClick={() => clickSubMenu("image")}>
              <RiImage2Line className="w-5 h-5" />
              <span className="sr-only">Image</span>
              <input
                type="file"
                className="hidden"
                ref={fileRef}
                onChange={(e) => uploadFile(e.target)}
                accept=".png"
              />
            </li>
            <Link href="/">
              <RiFileGifLine className="w-5 h-5" />
              <span className="sr-only">Gif</span>
            </Link>
            <Link href="/">
              <RiChatPollLine className="w-5 h-5" />
              <span className="sr-only">Poll</span>
            </Link>
            <Link href="/">
              <RiEmotionLine className="w-5 h-5" />
              <span className="sr-only">Emoji</span>
            </Link>
            <Link href="/">
              <RiMapPin2Line className="w-5 h-5" />
              <span className="sr-only">Tag location</span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="input-wrapper flex mr-3">
              {/* 추후 공통 input 컴포넌트로 빼기 */}
              <input
                className="w-24 h-6 rounded-md border-slate-200 mr-3 text-xs focus:ring-0 focus:border-transparent focus:border-slate-500"
                type="password"
                name="password"
                value={pwd}
                onChange={(e) => handleChange(e.target.value, "pwd")}
                placeholder="비밀번호 입력"
                ref={pwdRef}
              />
              <input
                className="w-24 h-6 rounded-md border-slate-200 text-xs focus:ring-0 focus:border-transparent focus:border-slate-500"
                type="password"
                name="passwordConfirm"
                value={pwdConfirm}
                onChange={(e) => handleChange(e.target.value, "confirm")}
                placeholder="비밀번호 확인"
              />
            </div>
            <button
              onClick={(e) => handleTweet(e)}
              disabled={!input}
              className="inline-flex items-center font-bold rounded-full border px-4 py-2 text-sm bg-slate-900 text-white border-transparent disabled:opacity-50 transition-opacity duration-200"
            >
              Tweet
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TweetForm;
