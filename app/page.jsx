"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Home, User, Wrench, Mail, Phone, MapPin, Truck, Info, BookOpenText, HandCoins, Crown, FilePenLine, Calculator } from "lucide-react"
import Image from "next/image"

export default function SerwoliftWebsite() {
  const [activeSection, setActiveSection] = useState("home")
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    marketing: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    scrollToSection(sectionId)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
          style={{
            backgroundImage: `url('/background.png')`
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-card via-card/80 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-10 backdrop-blur-md z-15"></div>

        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-2 sm:px-6 pb-20 sm:pb-0">
          <div className="flex justify-center mb-4 sm:mb-6">
            <Image 
              src="/logo.png" 
              alt="Serwolift Logo" 
              width={341} 
              height={192}
              priority
            />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance">
            Specjalistyczny serwis UTB
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
            Skupiamy się na naprawach ładowarek teleskopowych, podnośników nożycowych, przegubowych, warsztatowych oraz wózków widłowych. 
            Szybko i profesjonalnie przywracamy sprawność Twojego sprzętu.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg font-semibold"
            onClick={() => scrollToSection("contact")}
          >
            Napisz do nas
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6 text-card-foreground">O nas</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed text-card-foreground mb-6">
                <strong>Serwolift</strong> to wyspecjalizowany serwis zajmujący się wyłącznie naprawą UTB. Nasza działalność koncentruje się na:
              </p>
              <ul className="text-lg leading-relaxed text-card-foreground mb-6 space-y-3">
                <li>• Ładowarkach teleskopowych wszystkich marek</li>
                <li>• Podnośnikach nożycowych (<b>Haulotte, JLG, Genie, Skyjack</b>)</li>
                <li>• Wózkach widłowych (<b>Hangcha, Manitou, Yale, Hyster, Linde</b>)</li>
                <li>• Podnośnikach przegubowych</li>
                <li>• Podnośnikach warsztatowych</li>
              </ul>
              <div className="flex items-center gap-4 text-primary">
                <Info className="w-8 h-8" />
                <span className="font-semibold text-lg">Wykonujemy zarówno naprawy bieżące, jak i główne.</span>
              </div>
            </div>

            <div className="relative border-custom">
              <img
                src="/photo.png"
                alt="Zespół Serwolift przy naprawie ładowarki teleskopowej"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
<section id="services" className="py-20 bg-background">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-black mb-6">Usługi</h2>
      <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mb-12">

      <div className="bg-card rounded-lg p-8 relative">
        <div className="absolute top-6 right-6">
          <Image 
            src="/udt-logo.png" 
            alt="Logo UDT" 
            width={42} 
            height={42}
            className="object-contain"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-bold">Przeglądy</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Dogłębne sprawdzenie urządzeń transportu bliskiego pod kątem bezpieczeństwa i sprawności technicznej.
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Przeglądy okresowe w obecności konserwatora (UDT)</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Przeglądy konserwacyjne</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Przeglądy UDT i legalizacje</span>
          </li>
        </ul>
      </div>

      <div className="bg-card rounded-lg p-8">
        <div className="flex items-center gap-4 mb-4">
          <h3 className="text-2xl font-bold">Ładowarki teleskopowe</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Kompleksowy serwis wszystkich marek ładowarek teleskopowych.
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Naprawy hydrauliki siłowej</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Układy kierownicze i podwoziowe</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Diagnostyka komputerowa</span>
          </li>
        </ul>
      </div>

      <div className="bg-card rounded-lg p-8">
        <div className="flex items-center gap-4 mb-4">
          <h3 className="text-2xl font-bold">Podnośniki nożycowe</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Specjalistyczne naprawy podnośników nożycowych marek Haulotte, JLG, Genie, Skyjack.
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Serwis systemów nośnych</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Naprawy układów bezpieczeństwa</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Wymiana sterowników i czujników</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Diagnostyka elektryczna</span>
          </li>
        </ul>
      </div>

      <div className="bg-card rounded-lg p-8">
        <div className="flex items-center gap-4 mb-4">
          <h3 className="text-2xl font-bold">Wózki widłowe</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Profesjonalny serwis wózków widłowych Hangcha, Manitou, Yale, Hyster, Linde i innych.
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Naprawy układów napędowych</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Serwis hydrauliki podnoszenia</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Układy elektryczne i bezpieczeństwa</span>
          </li>
        </ul>
      </div>

      <div className="bg-card rounded-lg p-8">
        <div className="flex items-center gap-4 mb-4">
          <h3 className="text-2xl font-bold">Podnośniki przegubowe</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Specjalistyczne naprawy podnośników przegubowych z pełną diagnostyką.
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Naprawy układów wysięgników</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Serwis systemów stabilizacji</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Kalibracja systemów bezpieczeństwa</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>Naprawy układów jezdnych</span>
          </li>
        </ul>
      </div>

      <div className="bg-card rounded-lg p-8">
        <div className="flex items-center gap-4 mb-4">
          <h3 className="text-2xl font-bold">Podnośniki warsztatowe</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Kompleksowy serwis podnośników warsztatowych i maszyn specjalistycznych.
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Naprawy hydrauliki podnoszenia</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Serwis układów bezpieczeństwa</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Wymiana elementów nośnych</span>
          </li>
        </ul>
      </div>

      <div className="bg-card rounded-lg p-8 relative">
  <FilePenLine className="w-8 h-8 text-primary absolute right-8 top-8" />
  <h3 className="text-2xl font-bold pr-12">Przygotowanie dokumentacji technicznej</h3>
</div>

<div className="bg-card rounded-lg p-8 relative">
  <Calculator className="w-8 h-8 text-primary absolute right-8 top-8" />
  <h3 className="text-2xl font-bold pr-12">Obliczanie stopnia wykorzystania resursu</h3>
</div>

    </div>

    <div className="bg-card rounded-lg p-8">
      <h3 className="text-2xl font-bold mb-6 text-center">Dlaczego warto wybrać nasze usługi?</h3>
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { icon: Truck, title: "Mobilność", desc: "Dojeżdżamy do klienta" },
          { icon: Crown, title: "Specjalizacja", desc: "UTB to nasza domena" },
          { icon: BookOpenText, title: "Doświadczenie", desc: "Wiele lat w branży" },
          { icon: HandCoins, title: "Konkurencyjna cena", desc: "Jakość w przystępnej cenie" },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <item.icon className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">{item.title}</h4>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6 text-card-foreground">Kontakt</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Skontaktuj się z nami</h3>
              <form onSubmit={handleSubmit} className="space-y-6 form-border p-6 bg-background">
                <div>
                  <label className="block text-sm font-medium mb-2">Adres E-mail</label>
                  <Input
                    className="input-border"
                    type="email"
                    placeholder="Wpisz swój adres E-mail"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Treść wiadomości</label>
                  <Textarea
                    className="input-border h-38"
                    placeholder="Opisz problem z maszyną (marka, model, rodzaj usterki)..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Wyślij wiadomość
                </Button>
              </form>

              <div className="mt-16 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="text-xl">biuro@serwolift.pl</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-primary" />
                  <span className="text-xl">+48 508 209 586</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="text-xl">Kąkolewnica, woj. lubelskie</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Tu nas znajdziesz</h3>
              <div className="bg-muted rounded-lg h-96 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.448099999999!2d22.715500000000002!3d51.9475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4721a5f5f5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sPo%C5%82udniowa%206%2C%2021-302%20K%C4%85kolewnica!5e0!3m2!1spl!2spl!4v1620000000000!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja Serwolift w Kąkolewnicy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 pb-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-2">Serwolift - Paweł Jóźwik</h3>
          <p className="mb-4 pb-10">2025 Serwolift. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>

      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="navigation">
          <ul>
            <li className={activeSection === "home" ? "active" : ""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("home")
                }}
              >
                <span className="icon">
                  <Home size={24} />
                </span>
                <span className="text">Start</span>
              </a>
            </li>
            <li className={activeSection === "about" ? "active" : ""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("about")
                }}
              >
                <span className="icon">
                  <User size={24} />
                </span>
                <span className="text">O nas</span>
              </a>
            </li>
            <li className={activeSection === "services" ? "active" : ""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("services")
                }}
              >
                <span className="icon">
                  <Wrench size={24} />
                </span>
                <span className="text">Usługi</span>
              </a>
            </li>
            <li className={activeSection === "contact" ? "active" : ""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("contact")
                }}
              >
                <span className="icon">
                  <Mail size={24} />
                </span>
                <span className="text">Kontakt</span>
              </a>
            </li>
            <div className="indicator"></div>
          </ul>
        </div>
      </nav>
    </div>
  )
}