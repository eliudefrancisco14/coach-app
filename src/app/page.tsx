import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Gere a motivação que precisa para ganhar o dia
        </h1>
        <p className="text-xl text-gray-400/95 text-center">
          {" "}
          a sua fonte confiável de mensagens motivacionais, projetado para
          ajudá-lo a vencer o dia com determinação e positividade.
        </p>
      </main>
    </>
  );
}
