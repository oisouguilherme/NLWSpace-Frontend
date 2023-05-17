import { User } from "lucide-react";
import nlwLogo from '../assets/logo-spacetime.svg'
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">

        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full"></div>
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes ">
        </div>

        <a href="#" className="flex items-center gap-3 text-left transition-colors hover:text-gray-50">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500"/>
          </div>
          <p className="text-sm leading-snug max-w-[140px]">Crie sua conta <span className="underline">e salve suas memórias</span></p>
        </a>

        <div className=" space-y-5">
          <Image src={nlwLogo} alt="nlwLogo" />
          <div className="max-w-[420px] space-y-1">
            <h1 className="mt-5 text-4xl font-bold text-gray-50 leading-tight">Sua cápsula do tempo</h1>
            <p className="text-lg leading-relaxed">Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
          </div>
          <a className="inline-block rounded-full bg-green-500 hover:bg-green-600 py-3 px-5 text-sm leading-none text-black font-medium" href="#">CADASTRAR LEMBRANÇA</a>
        </div>

        <div className="text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da <a className="underline hover:text-gray-100" target="_blank" href="#">Rocketseat</a> 
        </div>
      </div>

      <div className="flex flx-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda não registrou nenhuma lembrança, comece a{" "}
            <a className="underline hover:text-gray-50" href="#">
              criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  );
}
