import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "تغطية شاملة لجميع مناطق المملكة",
  "أسطول حديث من شاحنات النقل",
  "تأمين شامل على السيارة أثناء النقل",
  "خدمة عملاء على مدار 24 ساعة",
  "أسعار تنافسية ومناسبة",
  "إمكانية تتبع السيارة أثناء النقل"
];

export const Features = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">مميزات خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 bg-white p-4 rounded-lg shadow"
            >
              <CheckCircle2 className="text-secondary flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};