import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-primary to-blue-900 text-white">
      <div className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-bold mb-6">خدمة نقل السيارات الموثوقة</h1>
          <p className="text-xl mb-8">نقل آمن وسريع لسيارتك في جميع أنحاء المملكة</p>
          <Button 
            variant="secondary"
            size="lg"
            className="bg-secondary text-primary hover:bg-secondary/90"
          >
            اطلب خدمة النقل الآن
          </Button>
        </motion.div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-20">
        {/* يمكن إضافة صورة خلفية هنا */}
      </div>
    </div>
  );
};