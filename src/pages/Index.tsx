import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";
import { Features } from "@/components/Features";
import { WhyUs } from "@/components/WhyUs";

const Index = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Hero />
      <WhyUs />
      <Services />
      <Features />
      <ContactForm />
    </div>
  );
};

export default Index;