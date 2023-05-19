import Image from "next/image";
import nlwLogo from "../assets/logo-spacetime.svg";

export function Hero() {
  return (
    <div className=" space-y-5">
      <Image src={nlwLogo} alt="nlwLogo" />
      <div className="max-w-[420px] space-y-1">
        <h1 className="mt-5 text-4xl font-bold text-gray-50 leading-tight font-alt">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <a
        className="inline-block rounded-full bg-green-500 hover:bg-green-600 py-3 px-5 text-sm leading-none text-black font-alt font-medium"
        href="#"
      >
        CADASTRAR LEMBRANÇA
      </a>
    </div>
  );
}
