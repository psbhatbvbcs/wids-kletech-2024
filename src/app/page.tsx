import About from "@/components/About";
import Committee from "@/components/Committee";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Register from "@/components/Register";
import Speakers from "@/components/Speakers";

export default function Home() {
  return (
    <>
      <Heading />
      <Register />
      <About />
      <Speakers />
      <Committee />
      <Footer />
    </>
  );
}
