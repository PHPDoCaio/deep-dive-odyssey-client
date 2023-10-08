import Card from "./Card";

interface CardsWrapperProps {
  data: any[];
}
export default function CardsWrapper({ data }: CardsWrapperProps) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {data.map((item, index) => {
        return <Card key={index} link="/" animalOrPlantName="oi" region="oi" />;
      })}
    </div>
  );
}
