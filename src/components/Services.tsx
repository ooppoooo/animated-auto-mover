import { motion } from "framer-motion";
import { Truck, ShieldCheck, Clock, MapPin } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "نقل سريع",
    description: "خدمة نقل سريعة وفعالة لسيارتك من وإلى أي مكان في المملكة"
  },
  {
    icon: ShieldCheck,
    title: "نقل آمن",
    description: "ضمان سلامة سيارتك أثناء النقل مع تأمين شامل"
  },
  {
    icon: Clock,
    title: "24/7 خدمة",
    description: "خدمة متوفرة على مدار الساعة لتلبية احتياجاتك"
  },
  {
    icon: MapPin,
    title: "تغطية شاملة",
    description: "نغطي جميع مناطق المملكة بخدمة نقل احترافية"
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};