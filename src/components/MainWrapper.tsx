interface MainWrapperProps {
  children: React.ReactNode;
}
export default function MainWrapper({ children }: MainWrapperProps) {
  return (
    <main className=" pt-20 w-full px-4 flex flex-col gap-10 items-center justify-center">
      {children}
    </main>
  );
}
