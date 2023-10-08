"use client"

import CardsWrapper from "../CardsWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import useHomeContent from "./useHomeContent";

export default function HomeContent() {

    const { animalsData } = useHomeContent()

    const baffinAnimals = animalsData.filter(animal => animal.region === "Canadá");
    const barrierReefAnimals = animalsData.filter(animal => animal.region === "Austrália")

    return (
        <div className="flex flex-col gap-6">
            <Tabs defaultValue="all-regions" className="w-full">
                <TabsList>
                    <TabsTrigger value="all-regions">TODAS AS REGIÕES</TabsTrigger>
                    <TabsTrigger value="baffin">BAÍA DE BAFFIN</TabsTrigger>
                    <TabsTrigger value="barrier-reef">
                        GRANDE BARREIRA DE CORAL
                    </TabsTrigger>
                </TabsList>
            <TabsContent value="all-regions">
                <CardsWrapper
                    data={animalsData}
                />
            </TabsContent>
            <TabsContent value="baffin">
                <CardsWrapper data={baffinAnimals} />
            </TabsContent>
            <TabsContent value="barrier-reef">
                <CardsWrapper data={barrierReefAnimals} />{" "}
            </TabsContent>
        </Tabs>
        </div>
    )
}