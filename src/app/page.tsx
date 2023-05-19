import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from "next/font/google";
import { Copyright } from "@/components/Copyright";
import { Hero } from "@/components/Hero";
import { SignIn } from "@/components/SignIn";
import { EmptyMemories } from "@/components/EmptyMemories";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

const baiJamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bai-jamjuree",
});

export default function Home() {
  return (
    <main
      className={`${roboto.variable} ${baiJamjuree.variable} font-sans grid grid-cols-2 min-h-screen`}
    >
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">

        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full"></div>
        
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes "></div>

        <SignIn />

        <Hero />

        <Copyright />
      </div>

      <div className="flex flx-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <EmptyMemories />
      </div>
    </main>
  );
}
