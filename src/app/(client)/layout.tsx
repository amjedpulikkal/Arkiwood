import Navbar from "@/components/navbar";
import Cursor from "@/components/Cursor";
import BackToTopButton from "@/components/BackToTopButton";
import CallCpmponent from "@/components/callCpmponent";
import Footer from "@/components/footer";
import { createClient } from "@/lib/supabaseServar";

export default async function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabaseServar =await createClient()
  const { data } = await supabaseServar.from("admin_dashboard").select("*");
 
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
