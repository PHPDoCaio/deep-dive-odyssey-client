"use client";

import HomeContent from "@/components/HomeContent/HomeContent";
import MainTitle from "@/components/MainTitle";
import MainWrapper from "@/components/MainWrapper";

export default function Home() {
  return (
    <MainWrapper>
      <MainTitle title="Enciclopédia Animal" />
      <HomeContent />
    </MainWrapper>
  );
}
