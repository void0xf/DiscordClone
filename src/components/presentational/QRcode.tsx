import React from "react";
import DiscordLoginQR from "@/src/assets/banners/LoginQRCode.svg";
import DiscordLogoLoginQR from "@/src/assets/banners/DiscordQRCodeLogo.png";
import Image from "next/image";

const QRcode = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-fit max-h-fit mb-5 border-white border-8 rounded-md">
        <Image
          src={DiscordLoginQR}
          alt="QR code"
          className="rounded-sm w-[180px] h-[180px] mx-auto"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <Image
            src={DiscordLogoLoginQR}
            alt="DiscordLogoQR"
            className="w-12 h-12"
          />
        </div>
      </div>
      <h2 className="text-whiteMain text-2xl mx-auto font-semibold pb-2">
        Zaloguj się kodem QR
      </h2>
      <span className="text-darkWhite mx-10 text-center">
        Zeskanuj to
        <strong> aplikacją mobilną Discorda</strong>, by natychmiast się
        zalogować.{" "}
      </span>
    </div>
  );
};

export default QRcode;
