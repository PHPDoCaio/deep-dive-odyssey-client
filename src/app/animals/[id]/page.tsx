import AnimalIdContent from "@/components/AnimalIdContent/AnimalIdContent";
import MainWrapper from "@/components/MainWrapper";

interface AnimalIdPage {
     params: { id: string } 
}

export default function AnimalIdPage({ params: {id} }: AnimalIdPage) {

    return (
        <MainWrapper>
            <AnimalIdContent id={id} />
        </MainWrapper>
    )
}