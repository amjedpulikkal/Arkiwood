import Navbar from "@/components/navbar";
import Cursor from "@/components/Cursor";
import BackToTopButton from "@/components/BackToTopButton";
import CallCpmponent from "@/components/callCpmponent";
import Footer from "@/components/footer";
import { supabase } from "@/lib/supabaseClient";

export default async function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await supabase.from("admin_dashboard").select("*");

  return (
    <>
      <Navbar />
      <Cursor />
      <BackToTopButton />
      <CallCpmponent data={data![0]} />
      {children}
      <Footer />
    </>
  );
}
