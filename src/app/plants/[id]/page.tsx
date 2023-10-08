import MainWrapper from "@/components/MainWrapper";
import PlantIdContent from "@/components/PlantIdContent/PlantIdContent";

export default function PlantsIdPage({params: {id}} : {params: {id: string}}) {
    return <MainWrapper>
        <PlantIdContent id={id} />
    </MainWrapper>
}