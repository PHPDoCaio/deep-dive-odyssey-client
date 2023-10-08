"use client";

import Card from "@/components/Card";
import CardsWrapper from "@/components/CardsWrapper";
import MainTitle from "@/components/MainTitle";
import MainWrapper from "@/components/MainWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <MainWrapper>
      <MainTitle title="Enciclopédia Animal" />
      <Tabs defaultValue="all-regions" className="w-full gap-4">
        <TabsList>
          <TabsTrigger value="all-regions">TODAS AS REGIÕES</TabsTrigger>
          <TabsTrigger value="baffin">BAÍA DE BAFFIN</TabsTrigger>
          <TabsTrigger value="puerto-rico">FOSSA DE PORTO RICO</TabsTrigger>
          <TabsTrigger value="barrier-reef">
            GRANDE BARREIRA DE CORAL
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all-regions">
          <CardsWrapper
            data={[
              {
                link: "/",
                animalOrPlantName: "oi",
                region: "oi",
              },
            ]}
          />
        </TabsContent>
        <TabsContent value="baffin">
          <CardsWrapper data={[]} />
        </TabsContent>
        <TabsContent value="puerto-rico">
          <CardsWrapper data={[]} />{" "}
        </TabsContent>
        <TabsContent value="barrier-reef">
          <CardsWrapper data={[]} />{" "}
        </TabsContent>
      </Tabs>
    </MainWrapper>
  );
}
