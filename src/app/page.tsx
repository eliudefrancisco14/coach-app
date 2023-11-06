import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-3">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-center">
          Gere a motivação que precisa para vencer o dia
        </h1>
        <p className="text-xl text-gray-400/95 text-center">
          {" "}
          a sua fonte confiável de mensagens motivacionais, projetado para
          ajudá-lo a vencer o dia com determinação e positividade.
        </p>
        <Button>Gerar frase</Button>
      </main>
      <Footer />
    </>
  );
}
