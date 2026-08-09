import type { Metadata } from "next";
import { Feed } from "./Feed";

export const metadata: Metadata = {
  title: "Tetrameter — Social media that isn’t shitty",
  description:
    "Pictures and notes from the most important moments in your friends’ lives, four times a year.",
};

export default function Home() {
  return <Feed />;
}
