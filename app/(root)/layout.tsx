import Navbar from "@/components/shared/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-main bg-cover bg-no-repeat flex h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
