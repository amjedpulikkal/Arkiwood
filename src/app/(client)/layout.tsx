import Navbar from "@/components/navbar";
import Cursor from "@/components/Cursor";
import BackToTopButton from "@/components/BackToTopButton";
import CallCpmponent from "@/components/callCpmponent";
import Footer from "@/components/footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Cursor />
      <BackToTopButton />
      <CallCpmponent />
      {children}
      <Footer />
    </>
  );
}
