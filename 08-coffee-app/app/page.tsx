import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Banner from "@/components/Banner/Banner";
import Download from "@/components/DownloadSection/Download";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Download />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Home;
