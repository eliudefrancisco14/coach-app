"use client";

import React, { useState, MouseEvent } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import frasesData from '@/content/frases.json';


export default function Home() {
  const [fraseIndex, setFraseIndex] = useState<number>(-1);

  const frases: string[] = frasesData.frases;
  const frasePadrao: string = "";

  const changeFrase = (index: number) => {
    setFraseIndex(index);
  }


  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24 gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-extrabold tracking-tight text-center sm:w-[90%] md:w-[80%] lg:w-[90%]">
          Gere a motivação que precisas para vencer o dia
        </h1>
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-400/95 text-center sm:w-[90%] md:w-[80%] lg:w-[590px]">
          {fraseIndex === -1 ? frasePadrao : frases[fraseIndex]}
        </p>
        <Button onClick={(e: MouseEvent<HTMLButtonElement>) => changeFrase((fraseIndex + 1) % frases.length)}>
          Gerar frase
        </Button>
      </main>
      <Footer />
    </>
  );
}
