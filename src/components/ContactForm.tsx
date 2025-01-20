import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("تم إرسال طلبك بنجاح! سنتواصل معك قريباً");
    }, 1500);
  };

  return (
    <section className="py-20 bg-accent" id="contact-form">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">اطلب خدمة النقل</h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div>
              <Input placeholder="الاسم الكامل" required className="text-right" />
            </div>
            <div>
              <Input type="tel" placeholder="رقم الهاتف" required className="text-right" />
            </div>
            <div>
              <Input placeholder="نوع السيارة" required className="text-right" />
            </div>
            <div>
              <Input placeholder="مدينة الانطلاق" required className="text-right" />
            </div>
            <div>
              <Input placeholder="مدينة الوصول" required className="text-right" />
            </div>
            <div>
              <Textarea 
                placeholder="تفاصيل إضافية (اختياري)" 
                className="h-32 text-right" 
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary text-white hover:bg-primary/90"
              disabled={loading}
            >
              {loading ? "جاري الإرسال..." : "إرسال الطلب"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};