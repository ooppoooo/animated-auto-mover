import { motion } from "framer-motion";
import { Shield, Clock, Award, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "خدمة آمنة",
    description: "نقل سيارتك بأمان تام مع تأمين شامل"
  },
  {
    icon: Clock,
    title: "سرعة في التنفيذ",
    description: "نلتزم بالمواعيد ونضمن وصول سيارتك في الوقت المحدد"
  },
  {
    icon: Award,
    title: "خبرة واسعة",
    description: "أكثر من 10 سنوات في مجال نقل السيارات"
  },
  {
    icon: HeartHandshake,
    title: "خدمة عملاء متميزة",
    description: "فريق متخصص لخدمتك على مدار الساعة"
  }
];

export const WhyUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">لماذا تختارنا؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-accent p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <reason.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-2 text-primary">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};