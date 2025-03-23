import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="home w-full h-screen absolute top-0">
      <Image src='/logo.png' alt='logo' width={412} height={412} className="opacity-30 rotate-[-15deg] fixed -right-4 top-1/5 z-0" priority={true} />
      {children}
    </div>
  );
}
