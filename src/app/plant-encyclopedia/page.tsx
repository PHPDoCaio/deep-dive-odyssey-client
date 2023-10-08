import MainTitle from "@/components/MainTitle";
import MainWrapper from "@/components/MainWrapper";
import PlantEncyclopediaContent from "@/components/PlantEncyclopediaContent/PlantEncyclopediaContent";

export default function PlantEncyclopediaPage() {
  return (
    <MainWrapper>
      <MainTitle title="Enciclopédia Vegetal" />
      <PlantEncyclopediaContent />
    </MainWrapper>
  );
}
