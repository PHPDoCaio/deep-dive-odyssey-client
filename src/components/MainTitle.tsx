interface MainTitleProps {
  title: string;
}
export default function MainTitle({ title }: MainTitleProps) {
  return (
    <div className="px-6 py-2 w-fit h-fit bg-brandingColor-1000 rounded-xl">
      <h1 className="text-xl uppercase">{title}</h1>
    </div>
  );
}
