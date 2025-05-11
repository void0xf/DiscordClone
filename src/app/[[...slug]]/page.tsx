import Home from "../../components/features/Home/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Discord is the easiest way to talk over voice, video, and text. Talk, chat, hang out, and stay close with your friends and communities.",
};

export default function Page() {
  return <Home />;
}
