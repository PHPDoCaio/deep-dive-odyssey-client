"use client"

import CardsPlantsWrappers from "../CardsPlantsWrapper";
import CardsWrapper from "../CardsWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import usePlantEncyclopedia from "./usePlantEncyclopedia";

export default function PlantEncyclopediaContent() {
    
    const { plantsData } = usePlantEncyclopedia()

    return (
        <div className="flex flex-col gap-6">
            <Tabs defaultValue="all-regions" className="w-full">
                <TabsList>
                    <TabsTrigger value="all-regions">TODAS AS REGIÕES</TabsTrigger>
                </TabsList>
            <TabsContent value="all-regions">
                <CardsPlantsWrappers
                    data={plantsData}
                />
            </TabsContent>
        </Tabs>
        </div>
    )
}