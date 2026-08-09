import type { Metadata } from "next";
import { Feed } from "./Feed";

export const metadata: Metadata = {
  title: "Tetrameter — Social media that isn’t shitty",
  description:
    "Four posts a year from the most important people in your life.",
};

export default function Home() {
  return <Feed />;
}
