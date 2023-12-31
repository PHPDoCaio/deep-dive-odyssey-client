import Card from "./Card";

interface CardsWrapperProps {
  data: any[];
}
export default function CardsWrapper({ data }: CardsWrapperProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item, index) => {
        return (
          <Card 
            key={index} 
            link={`/animals/${item.id}`} 
            animalOrPlantName={item.name}
            region={item.region} 
            pixelArtContent={item.pixelArtContent}
          />  
        );
      })}
    </div>
  );
}
