"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight, CheckCircle, MessageSquare, BarChart3, Zap, Mail, Shield, FileCheck, Award } from "lucide-react"
import { saveMessage } from "./actions"

export default function Home() {
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [showSuccess])

  async function handleSubmit(formData: FormData) {
    await saveMessage(formData)
    setShowSuccess(true)
  }

  return (
    <div className="flex min-h-[100dvh] flex-col">
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-in fade-in-0 duration-300">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-4 animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 animate-in zoom-in-50 duration-700 delay-200">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="animate-in slide-in-from-left-4 duration-500 delay-300">
                <h3 className="font-semibold text-lg">Message Sent!</h3>
                <p className="text-sm text-muted-foreground">We'll get back to you soon.</p>
              </div>
            </div>
            <Button
              onClick={() => setShowSuccess(false)}
              className="w-full animate-in slide-in-from-bottom-4 duration-500 delay-500 hover:scale-105 transition-transform"
            >
              Close
            </Button>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl ml-[25px]">
            <Image
              src="/images/cb-logo.png"
              width={40}
              height={40}
              alt="C&B Management Group LLP Logo"
              className="object-contain hover:scale-110 transition-transform duration-300"
            />
            <span className="text-primary hover:scale-105 transition-transform duration-200">C&B</span>
            <span className="hover:scale-105 transition-transform duration-200">Management Group LLP</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 hover:-translate-y-1"
            >
              Features
            </Link>
            <Link
              href="#compliance"
              className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 hover:-translate-y-1"
            >
              FDA Compliance
            </Link>
            <Link
              href="#products"
              className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 hover:-translate-y-1"
            >
              Products
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 hover:-translate-y-1"
            >
              Testimonials
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 hover:-translate-y-1"
            >
              About
            </Link>
            <Link
              href="#leadership"
              className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 hover:-translate-y-1"
            >
              Leadership
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-110 hover:-translate-y-1"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <AnimatedSection animation="slide-right" delay={300}>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Advanced medical solutions for healthcare professionals
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Transform your medical practice with our innovative products and services. Streamline operations,
                      improve patient care, and drive growth.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button
                      size="lg"
                      href="#features"
                      className="hover:scale-105 hover:shadow-lg transition-all duration-300 group"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-left" delay={500}>
                <Image
                  src="/images/two.png?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Hero Image"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last hover:scale-105 transition-transform duration-500"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="justify-center w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <AnimatedSection animation="fade-in">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Features
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Everything you need to succeed
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our platform provides all the tools healthcare professionals need to streamline their workflow,
                    boost productivity, and deliver exceptional patient care.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <AnimatedSection animation="slide-up" delay={200}>
                <div className="flex flex-col justify-center space-y-4 hover:scale-105 transition-transform duration-300 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Streamlined Inventory</h3>
                    <p className="text-muted-foreground">
                      Automate medical supply ordering and inventory management with our intuitive platform.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <div className="flex flex-col justify-center space-y-4 hover:scale-105 transition-transform duration-300 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Healthcare Collaboration</h3>
                    <p className="text-muted-foreground">
                      Collaborate seamlessly with healthcare providers and staff in real-time, improving patient
                      outcomes.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={600}>
                <div className="flex flex-col justify-center space-y-4 hover:scale-105 transition-transform duration-300 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Medical Analytics</h3>
                    <p className="text-muted-foreground">
                      Gain valuable insights with our advanced healthcare analytics and reporting features.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FDA Compliance Section */}
        <section id="compliance" className="justify-center w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection animation="fade-in">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    FDA Compliance
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    FDA-Regulated Sales & Development
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We specialize in the development and marketing of FDA-approved medical products, ensuring the
                    highest standards of safety and efficacy for healthcare providers and patients.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <AnimatedSection animation="slide-up" delay={200}>
                <div className="flex flex-col items-center text-center space-y-4 hover:scale-105 transition-all duration-300 group">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300 group-hover:scale-110">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">FDA Compliance</h3>
                    <p className="text-muted-foreground">
                      All our products meet or exceed FDA regulatory requirements, ensuring safety and reliability for
                      healthcare providers and patients.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <div className="flex flex-col items-center text-center space-y-4 hover:scale-105 transition-all duration-300 group">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300 group-hover:scale-110">
                    <FileCheck className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Quality Assurance</h3>
                    <p className="text-muted-foreground">
                      Our rigorous quality control processes ensure that every product we offer meets the highest
                      standards of performance and reliability.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={600}>
                <div className="flex flex-col items-center text-center space-y-4 hover:scale-105 transition-all duration-300 group">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300 group-hover:scale-110">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Certified Expertise</h3>
                    <p className="text-muted-foreground">
                      Our team includes regulatory experts who ensure that all products and services comply with current
                      FDA guidelines and requirements.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="slide-up" delay={800}>
              <div className="mx-auto max-w-3xl mt-8 border border-muted rounded-lg p-6 bg-muted/50 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4 text-center">Our FDA Compliance Commitment</h3>
                <div className="space-y-4">
                  {[
                    "Product Development: We follow strict FDA guidelines throughout the entire product development lifecycle.",
                    "Marketing Compliance: All marketing materials and claims adhere to FDA regulations for medical devices and products.",
                    "Continuous Monitoring: We maintain vigilant oversight of regulatory changes to ensure ongoing compliance.",
                    "Documentation & Traceability: Complete documentation for all products, ensuring full traceability and regulatory compliance.",
                  ].map((text, index) => (
                    <AnimatedSection key={index} animation="slide-right" delay={index * 100}>
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                          <CheckCircle className="h-3 w-3 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-sm">
                            <span className="font-medium">{text.split(":")[0]}:</span> {text.split(":")[1]}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="justify-center w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <AnimatedSection animation="fade-in">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Our Products
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Premium FDA-approved medical equipment and supplies
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We provide high-quality, FDA-approved medical products from leading manufacturers to support
                    healthcare professionals in delivering exceptional patient care.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              {[
                {
                  color: "blue",
                  title: "Diagnostic Equipment",
                  description:
                    "Advanced diagnostic tools including ultrasound machines, ECG monitors, and digital X-ray systems for accurate patient assessment.",
                  items: ["Ultrasound Systems", "ECG Monitors", "Digital X-Ray Equipment"],
                  subject: "Diagnostic Equipment",
                  iconPath:
                    "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                },
                {
                  color: "green",
                  title: "Patient Monitoring",
                  description:
                    "Comprehensive patient monitoring solutions including vital signs monitors, pulse oximeters, and telemetry systems.",
                  items: ["Vital Signs Monitors", "Pulse Oximeters", "Telemetry Systems"],
                  subject: "Patient Monitoring",
                  iconPath:
                    "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                },
                {
                  color: "purple",
                  title: "Laboratory Equipment",
                  description:
                    "State-of-the-art laboratory instruments including analyzers, microscopes, and centrifuges for precise testing and analysis.",
                  items: ["Blood Analyzers", "Digital Microscopes", "Centrifuge Systems"],
                  subject: "Laboratory Equipment",
                  iconPath:
                    "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                },
                {
                  color: "red",
                  title: "Surgical Instruments",
                  description:
                    "Premium surgical instruments and equipment including electrosurgical units, surgical lights, and precision instruments.",
                  items: ["Electrosurgical Units", "LED Surgical Lights", "Precision Instruments"],
                  subject: "Surgical Instruments",
                  iconPath:
                    "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4",
                },
                {
                  color: "orange",
                  title: "Safety & PPE",
                  description:
                    "Comprehensive personal protective equipment and safety solutions to ensure healthcare worker and patient safety.",
                  items: ["Medical Masks & Respirators", "Protective Gowns", "Safety Equipment"],
                  subject: "Safety & PPE",
                  iconPath:
                    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                },
                {
                  color: "teal",
                  title: "Medical Supplies",
                  description:
                    "Essential medical supplies and consumables including syringes, bandages, and pharmaceutical storage solutions.",
                  items: ["Disposable Supplies", "Wound Care Products", "Storage Solutions"],
                  subject: "Medical Supplies",
                  iconPath:
                    "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                },
              ].map((product, index) => (
                <div key={index} className="group relative h-full">
                  <AnimatedSection animation="slide-up" delay={index * 100} className="h-full">
                    <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2 h-full flex flex-col">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${product.color}-100 text-${product.color}-600 mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={product.iconPath} />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{product.description}</p>
                      <div className="space-y-2 text-sm">
                        {product.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-auto pt-4">
                        <Button
                          className="w-full hover:scale-105 transition-all duration-300 group-hover:shadow-lg"
                          variant="outline"
                        >
                          <a href={`mailto:info@cb-management-group.com?subject=Learn More: ${product.subject}`}>
                            Learn More
                          </a>
                        </Button>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              ))}
            </div>

            <AnimatedSection animation="slide-up" delay={800}>
              <div className="flex justify-center mt-8">
                <Button size="lg" className="hover:scale-105 hover:shadow-lg transition-all duration-300 group">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="justify-center w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection animation="fade-in">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Testimonials
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What our customers say</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Don't just take our word for it. Here's what our customers have to say about our platform.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="h-full">
                <AnimatedSection animation="slide-right" delay={200} className="h-full">
                  <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        "This platform has completely transformed our business operations. We've seen a 30% increase in
                        productivity since implementing it."
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 pt-4 mt-auto">
                      <div className="rounded-full bg-muted h-10 w-10" />
                      <div>
                        <p className="text-sm font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">CEO, TechCorp</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              <div className="h-full">
                <AnimatedSection animation="slide-left" delay={400} className="h-full">
                  <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        "The analytics features have provided us with invaluable insights that have helped us make
                        better business decisions."
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 pt-4 mt-auto">
                      <div className="rounded-full bg-muted h-10 w-10" />
                      <div>
                        <p className="text-sm font-medium">Michael Chen</p>
                        <p className="text-sm text-muted-foreground">CTO, DataDrive</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="justify-center w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <AnimatedSection animation="slide-right" delay={300}>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                      About Us
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our mission and values</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      We're on a mission to empower healthcare providers with the tools and medical supplies they need
                      to deliver exceptional patient care.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                      <Zap className="h-4 w-4 text-primary" />
                      <p className="font-medium">Innovation at our core</p>
                    </div>
                    <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                      <Zap className="h-4 w-4 text-primary" />
                      <p className="font-medium">Customer-centric approach</p>
                    </div>
                    <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                      <Zap className="h-4 w-4 text-primary" />
                      <p className="font-medium">Continuous improvement</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-left" delay={500}>
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/image.png?height=400&width=600"
                    width={600}
                    height={400}
                    alt="About Us Image"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="justify-center w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection animation="fade-in">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Leadership Team
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Meet our leadership</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our experienced leadership team is dedicated to providing exceptional service and innovative medical
                    solutions.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="mx-auto grid max-w-4xl gap-8 py-12 lg:grid-cols-1 lg:gap-12">
              <AnimatedSection animation="zoom-in" delay={400}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center hover:scale-105 transition-transform duration-300 group">
                  <div className="relative">
                    <Image
                      src="/images/gregory-barnez.jpg"
                      width={200}
                      height={200}
                      alt="Gregory C Barnez II"
                      className="rounded-full object-cover border-4 border-primary/10 group-hover:border-primary/30 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Gregory C Barnez II</h3>
                    <p className="text-lg text-primary font-semibold">Sr Sales Director for North America</p>
                    <p className="max-w-[600px] text-muted-foreground">
                      Gregory leads our North American sales operations with extensive experience in medical device
                      sales and healthcare solutions. His expertise in building relationships with healthcare providers
                      has been instrumental in expanding our market presence across the region.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:scale-105 transition-all duration-300 group"
                    >
                      <a href="mailto:info@cb-management-group.com?subject=Attention: Gregory C Barnez II">
                        <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                        Contact Gregory
                      </a>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="justify-center w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AnimatedSection animation="fade-in">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Contact Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in touch with us</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Have questions or want to learn more? Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <AnimatedSection animation="slide-right" delay={200}>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                    <Mail className="h-5 w-5 text-primary" />
                    <p>info@cb-management-group.com</p>
                  </div>
                  <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <p>346-702-9688</p>
                  </div>
                  <div className="rounded-lg border p-4 mt-4 hover:shadow-lg transition-shadow duration-300">
                    <p className="font-medium">Office Hours</p>
                    <p className="text-sm text-muted-foreground">Monday - Friday: 9am - 5pm</p>
                    <p className="text-sm text-muted-foreground">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-left" delay={400}>
                <div className="flex flex-col space-y-4">
                  <div className="grid gap-4">
                    <form action={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="first-name">First name</label>
                          <Input
                            id="first-name"
                            name="first_name"
                            placeholder="John"
                            required
                            className="hover:scale-105 focus:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="last-name">Last name</label>
                          <Input
                            id="last-name"
                            name="last_name"
                            placeholder="Doe"
                            required
                            className="hover:scale-105 focus:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email">Email</label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                          className="hover:scale-105 focus:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message">Message</label>
                        <Textarea
                          id="message"
                          name="message"
                          className="min-h-[150px] hover:scale-105 focus:scale-105 transition-transform duration-300"
                          placeholder="Your message here..."
                          required
                        />
                      </div>
                      <Button
                        size="lg"
                        className="w-full hover:scale-105 hover:shadow-lg transition-all duration-300"
                        type="submit"
                      >
                        Send Message
                      </Button>
                    </form>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <AnimatedSection animation="slide-up">
        <footer className="w-full border-t py-6 md:py-0 flex justify-evenly">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} C&B Management Group LLP. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
      </AnimatedSection>
    </div>
  )
}
