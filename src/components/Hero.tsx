import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Truck } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-form');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-primary to-blue-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-bold mb-6">خدمة نقل السيارات الموثوقة</h1>
          <p className="text-xl mb-8 text-gray-200">نقل آمن وسريع لسيارتك في جميع أنحاء المملكة مع ضمان السلامة الكاملة</p>
          <div className="flex gap-4">
            <Button 
              variant="secondary"
              size="lg"
              onClick={scrollToContact}
              className="bg-secondary text-primary hover:bg-secondary/90 group"
            >
              اطلب خدمة النقل الآن
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 right-0 w-1/2 h-full"
      >
        <Truck className="w-full h-full" />
      </motion.div>
    </div>
  );
};