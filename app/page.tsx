import type { Metadata } from "next";
import { Feed } from "./Feed";

export const metadata: Metadata = {
  title: "Fourfold — A quieter place for your people",
  description:
    "Four thoughtful updates a year, shared only with the people you choose.",
};

export default function Home() {
  return <Feed />;
}
