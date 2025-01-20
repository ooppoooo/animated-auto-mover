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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          خدماتنا
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <service.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};