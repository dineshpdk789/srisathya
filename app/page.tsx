"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import doctorwithchild from "@/assets/doctorwithchild.jpg"
import { 
  FaPhone, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaChevronUp, 
  FaHeart, 
  FaClock, 
  FaSyringe, 
  FaStethoscope, 
  FaBaby, 
  FaShieldAlt, 
  FaBolt, 
  FaChartLine, 
  FaDollarSign, 
  FaUsers, 
  FaCalendarCheck, 
  FaChevronRight, 
  FaStar, 
  FaInstagram, 
  FaFacebook, 
  FaTwitter, 
  FaPlay,
  FaThermometerHalf
} from "react-icons/fa"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 1500)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const services = [
    { title: "Newborn Care", icon: <FaBaby className="w-8 h-8" />, description: "Specialized care for newborns and premature babies with neonatal intensive care facilities." },
    { title: "General Pediatrics", icon: <FaStethoscope className="w-8 h-8" />, description: "Comprehensive health checkups, diagnosis, and treatment for children of all ages." },
    { title: "Vaccination & Immunization", icon: <FaSyringe className="w-8 h-8" />, description: "Complete vaccination schedule from birth to 15 years following WHO guidelines." },
    { title: "Growth & Development", icon: <FaChartLine className="w-8 h-8" />, description: "Regular monitoring of your child's physical and mental growth milestones." },
    { title: "Nutrition Counseling", icon: <FaHeart className="w-8 h-8" />, description: "Expert guidance on child nutrition, healthy eating habits, and diet plans." },
    { title: "Fever Management", icon: <FaThermometerHalf className="w-8 h-8" />, description: "Proper diagnosis and treatment of fever and infections in children." },
    { title: "Asthma & Allergy Care", icon: <FaShieldAlt className="w-8 h-8" />, description: "Specialized care for respiratory conditions, allergies, and asthma management." },
    { title: "Child Infections", icon: <FaBolt className="w-8 h-8" />, description: "Treatment for common and complex childhood infections and diseases." },
    { title: "Pediatric Emergency", icon: <FaPhone className="w-8 h-8" />, description: "24/7 emergency care services for critical pediatric cases." },
    { title: "Neonatal Care", icon: <FaBaby className="w-8 h-8" />, description: "Advanced neonatal care for premature and high-risk newborns." },
    { title: "Infant Checkups", icon: <FaUsers className="w-8 h-8" />, description: "Regular health checkups for infants to ensure healthy development." },
    { title: "Adolescent Health", icon: <FaUsers className="w-8 h-8" />, description: "Specialized healthcare for teenagers and young adults." },
  ]

  const whyChooseUs = [
    { title: "Experienced Pediatricians", icon: <FaStethoscope />, description: "15+ years of specialized experience in child care" },
    { title: "Newborn Care", icon: <FaBaby />, description: "State-of-the-art neonatal intensive care unit" },
    { title: "Vaccination Centre", icon: <FaSyringe />, description: "Complete immunization as per WHO schedule" },
    { title: "Child Emergency Care", icon: <FaBolt />, description: "24/7 emergency services available" },
    { title: "Growth Monitoring", icon: <FaChartLine />, description: "Regular developmental assessment" },
    { title: "Affordable Consultation", icon: <FaDollarSign />, description: "Quality care at reasonable prices" },
    { title: "Family Friendly", icon: <FaHeart />, description: "Warm and welcoming environment" },
  ]

  const testimonials = [
    { name: "Mrs. Priya Kumar", child: "Aarav, 3 years", text: "Excellent pediatric care! Doctor is very patient and knowledgeable. My son feels comfortable here.", rating: 5 },
    { name: "Mr. Rajesh Reddy", child: "Ananya, 5 years", text: "Best child hospital in Dharmavaram. Very clean and professional staff.", rating: 5 },
    { name: "Mrs. Lakshmi Prasad", child: "Vikram, 1 year", text: "Great vaccination services. The doctor explains everything clearly.", rating: 5 },
  ]

  const stats = [
    { number: 10000, label: "Happy Children", suffix: "+" },
    { number: 15, label: "Years Experience", suffix: "+" },
    { number: 24, label: "Emergency Support", suffix: "/7" },
    { number: 98, label: "Parent Satisfaction", suffix: "%" },
  ]

  const faqs = [
    { question: "When should I vaccinate my baby?", answer: "Vaccination starts at birth. Follow the recommended immunization schedule provided by WHO and our pediatricians for the best protection." },
    { question: "What to do if my child has fever?", answer: "Keep your child hydrated, use paracetamol as prescribed, and consult our doctors immediately if fever persists or is accompanied by other symptoms." },
    { question: "Emergency timings?", answer: "We provide 24/7 emergency pediatric care services. Call our emergency number immediately for any critical situation." },
    { question: "Appointment process?", answer: "You can book an appointment through our website form, call us directly, or walk in during consultation hours." },
    { question: "Consultation fees?", answer: "Our consultation fees are affordable and transparent. Please contact us for detailed information about consultation and service charges." },
  ]

  const gallery = [
    { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800", title: "Reception" },
    { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800", title: "Consultation Room" },
    { src: "https://images.unsplash.com/photo-1548690329-c3c4b1e9b702?auto=format&fit=crop&q=80&w=800", title: "Child Care Area" },
    { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800", title: "Vaccination Room" },
    { src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800", title: "Hospital Exterior" },
    { src: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&q=80&w=800", title: "Waiting Area" },
  ]

  const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
      let start = 0
      const duration = 2000
      const step = target / (duration / 16)
      
      const timer = setInterval(() => {
        start += step
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      
      return () => clearInterval(timer)
    }, [target])

    return (
      <span className="text-4xl md:text-5xl font-bold text-primary">
        {count.toLocaleString()}{suffix}
      </span>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence>
        {showLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary"
            >
              <FaHeart className="w-16 h-16" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <FaHeart className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Sri Sathya</h1>
                <p className="text-xs text-muted-foreground">Children's Hospital</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {["Home", "About", "Services", "Doctors", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  {item}
                </a>
              ))}
              <Button className="bg-primary hover:bg-primary/90">Book Appointment</Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight">
                Expert Pediatric Care with <span className="text-primary">Compassion</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Trusted Child Specialist Hospital in Dharmavaram for Newborns, Infants, Children, and Adolescents.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <FaCalendarCheck className="mr-2" />
                  Book Appointment
                </Button>
                <Button size="lg" variant="secondary">
                  <FaPhone className="mr-2" />
                  Emergency Contact
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={doctorwithchild}
                  alt="Doctor with Child"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Hospital</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Providing exceptional pediatric care to the children of Dharmavaram since 2009
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Our Mission", text: "To provide compassionate, high-quality healthcare to every child, ensuring their healthy growth and development." },
              { title: "Our Vision", text: "To be the most trusted pediatric healthcare provider in the region, setting benchmarks in child care." },
              { title: "Why Parents Trust Us", text: "Experienced doctors, modern facilities, and a child-friendly environment make us the preferred choice." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-primary">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="whychooseus" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What makes us the best pediatric hospital in Dharmavaram
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.12,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Card className="h-full text-center overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <motion.div 
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360, 
                        backgroundColor: "rgba(59, 130, 246, 0.2)",
                        transition: { duration: 0.5 }
                      }}
                    >
                      <div className="text-primary text-2xl">{item.icon}</div>
                    </motion.div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive pediatric care services for your child's health
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.1, 
                  type: "spring", 
                  stiffness: 120 
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02, 
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-2xl transition-all">
                  <CardHeader>
                    <motion.div 
                      className="text-primary mb-2"
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: 10,
                        transition: { type: "spring" }
                      }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                  <CardFooter>
                    <motion.div whileHover={{ x: 5 }}>
                      <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                        Learn More <FaChevronRight className="ml-2 w-4 h-4" />
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Doctor</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced pediatric specialist dedicated to your child's health
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src="https://coresg-normal.trae.ai/api/v1/text-to-image?prompt=professional%20indian%20pediatrician%20doctor%20portrait%20friendly%20smile&size=square"
                      alt="Doctor"
                      className="w-full h-64 md:h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <CardTitle className="text-2xl mb-2">Dr. Sri Sathya</CardTitle>
                    <CardDescription className="text-primary font-semibold mb-4">MBBS, MD (Pediatrics)</CardDescription>
                    <div className="space-y-3 text-muted-foreground">
                      <p><span className="font-medium text-foreground">Experience:</span> 15+ Years</p>
                      <p><span className="font-medium text-foreground">Specialization:</span> Neonatology & General Pediatrics</p>
                      <p><span className="font-medium text-foreground">Consultation Timings:</span> 9:00 AM - 1:00 PM & 5:00 PM - 8:00 PM</p>
                    </div>
                    <Button className="mt-6 bg-primary hover:bg-primary/90">
                      Book Appointment
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="vaccination" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vaccination Schedule</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete immunization schedule for your child from birth to 15 years
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { age: "Birth", vaccines: "BCG, OPV 0, Hepatitis B 1" },
                { age: "6 Weeks", vaccines: "DTP 1, OPV 1, Hepatitis B 2, Hib 1, PCV 1, Rotavirus 1" },
                { age: "10 Weeks", vaccines: "DTP 2, OPV 2, Hib 2, PCV 2, Rotavirus 2" },
                { age: "14 Weeks", vaccines: "DTP 3, OPV 3, Hib 3, PCV 3, Rotavirus 3" },
                { age: "6 Months", vaccines: "Hepatitis B 3, Influenza 1" },
                { age: "9 Months", vaccines: "Measles, Mumps, Rubella (MMR) 1" },
                { age: "12 Months", vaccines: "Hepatitis A 1, Varicella 1" },
                { age: "15 Months", vaccines: "MMR 2, PCV Booster, Varicella 2" },
                { age: "18 Months", vaccines: "DTP Booster 1, OPV Booster 1, Hib Booster" },
                { age: "5 Years", vaccines: "DTP Booster 2, OPV Booster 2, MMR 3" },
                { age: "10-12 Years", vaccines: "Tdap, HPV (2 doses)" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-32 shrink-0">
                    <span className="inline-block bg-primary text-white px-4 py-2 rounded-full font-semibold">
                      {item.age}
                    </span>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="font-medium text-foreground">{item.vaccines}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Parent Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What our patients' parents say about us
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, rotate: i % 2 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.2, 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-2xl bg-white/90 backdrop-blur">
                  <CardHeader>
                    <motion.div 
                      className="flex gap-1 mb-4"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.1, type: "spring" }}
                    >
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <motion.div 
                          key={j}
                          initial={{ scale: 0, rotate: 180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.2 + 0.15 + j * 0.05, type: "spring" }}
                        >
                          <FaStar className="text-yellow-400" />
                        </motion.div>
                      ))}
                    </motion.div>
                    <CardContent className="p-0">
                      <motion.p 
                        className="text-muted-foreground italic mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 + 0.3 }}
                      >
                        "{testimonial.text}"
                      </motion.p>
                    </CardContent>
                    <CardFooter className="p-0 flex flex-col items-start">
                      <motion.p 
                        className="font-semibold"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 + 0.4 }}
                      >
                        {testimonial.name}
                      </motion.p>
                      <motion.p 
                        className="text-sm text-muted-foreground"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 + 0.45 }}
                      >
                        {testimonial.child}
                      </motion.p>
                    </CardFooter>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="stats" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Counter target={stat.number} suffix={stat.suffix} />
                <p className="mt-2 text-white/90 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="appointment" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Appointment</h2>
              <p className="text-muted-foreground">
                Schedule your child's consultation today
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Parent Name</label>
                      <Input placeholder="Enter your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Child Name</label>
                      <Input placeholder="Enter child's name" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Age</label>
                      <Input placeholder="Child's age" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input placeholder="+91 XXXXXXXXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Date</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea placeholder="Describe your concerns..." rows={4} />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Submit Appointment Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common questions parents ask us
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a look at our child-friendly hospital facilities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((item, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0, 
                  y: 50, 
                  rotate: i % 2 === 0 ? -5 : 5,
                  scale: 0.8
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  rotate: 0,
                  scale: 1
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  zIndex: 10,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <motion.img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ 
                    scale: 1.2,
                    transition: { duration: 0.5 }
                  }}
                  loading="lazy"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-6"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
                >
                  <motion.p 
                    className="text-white font-bold text-lg"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
                  >
                    {item.title}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get in touch with us for any queries
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card>
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <FaMapMarkerAlt className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        Sri Sathya Children's Hospital<br />
                        ICICI Bank Building,<br />
                        Old R.S. Road,<br />
                        Near Babu Jagjeevan Ram Statue,<br />
                        JJR Nagar, Dharmavaram,<br />
                        Andhra Pradesh - 515671
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <FaPhone className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91 XXXXXXXXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <FaEnvelope className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@srisathyachildrenshospital.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="rounded-xl overflow-hidden h-80 md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.123456789!2d77.7123456!3d14.4123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDharmavaram!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <FaHeart className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sri Sathya</h3>
                  <p className="text-xs text-gray-400">Children's Hospital</p>
                </div>
              </div>
              <p className="text-gray-400">
                Providing compassionate pediatric care to the children of Dharmavaram.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">General Pediatrics</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Vaccination</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Newborn Care</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Emergency</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <FaFacebook />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sri Sathya Children's Hospital. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <motion.a 
        href="https://wa.me/919999999999" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.15, rotate: 10 }}
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaWhatsapp className="text-white text-2xl" />
        </motion.div>
      </motion.a>

      <motion.a 
        href="tel:+919999999999" 
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.15 }}
        animate={{ 
          scale: [1, 1.08, 1],
        }}
        transition={{ 
          scale: {
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }
        }}
      >
        <motion.div
          animate={{ 
            rotate: [0, -10, 10, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <FaPhone className="text-white text-xl" />
        </motion.div>
      </motion.a>

      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-colors"
          >
            <FaChevronUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
