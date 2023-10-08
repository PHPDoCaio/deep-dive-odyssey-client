interface CardProps {}
export default function Card(props: CardProps) {
  return (
    <div className="flex items-center gap-6 p-4 rounded-2xl h-full bg-brandingColor-800">
      <div className="h-20 w-20 bg-brandingColor-700 rounded-lg flex justify-center items-center">
        {/* <Image  /> */}oi
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="uppercase text-gray-200">FOCA BARBUDA</h2>
        <div className="flex gap-2 items-center">
          {/* <Image /> */}
          <h3 className="text-sm text-gray-400">Canadá</h3>
        </div>
      </div>
    </div>
  );
}
