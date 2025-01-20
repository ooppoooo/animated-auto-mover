import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Hero />
      <Services />
      <ContactForm />
    </div>
  );
};

export default Index;