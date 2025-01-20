import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // هنا يمكن إضافة منطق إرسال النموذج
    setTimeout(() => {
      setLoading(false);
      toast.success("تم إرسال طلبك بنجاح!");
    }, 1500);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">اطلب خدمة النقل</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div>
            <Input placeholder="الاسم الكامل" required />
          </div>
          <div>
            <Input type="tel" placeholder="رقم الهاتف" required />
          </div>
          <div>
            <Input placeholder="نوع السيارة" required />
          </div>
          <div>
            <Textarea placeholder="تفاصيل إضافية" className="h-32" />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-primary text-white"
            disabled={loading}
          >
            {loading ? "جاري الإرسال..." : "إرسال الطلب"}
          </Button>
        </form>
      </div>
    </section>
  );
};