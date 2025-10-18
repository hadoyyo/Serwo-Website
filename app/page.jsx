"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Home, User, Wrench, Mail, Phone, MapPin, Truck, Info, BookOpenText, HandCoins, Crown, FilePenLine, Calculator, X } from "lucide-react"
import Image from "next/image"
import emailjs from 'emailjs-com'

export default function SerwoliftWebsite() {
  const [activeSection, setActiveSection] = useState("home")
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    marketing: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  // EmailJS
  useEffect(() => {
    emailjs.init("Public Key") 
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"]
      const scrollPosition = window.scrollY + 250

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        'Service ID', // Service ID
        'Template ID', // Template ID
        {
          email: formData.email,
          message: formData.message
        }
      )

      setFormData({
        email: "",
        message: "",
        marketing: false,
      })
      
      setShowSuccessPopup(true)

      setTimeout(() => {
        setShowSuccessPopup(false)
      }, 30000)

    } catch (error) {
      console.error('Błąd podczas wysyłania wiadomości:', error)
      alert('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.')
      setShowSuccessPopup(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    scrollToSection(sectionId)
  }

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false)
  }

  const ManufacturerLogos = () => {
  const [hoveredLogo, setHoveredLogo] = useState(null)
  const [isPaused, setIsPaused] = useState(false)
  const scrollContainerRef = useRef(null)
  const scrollPositionRef = useRef(0)
  const animationRef = useRef(null)
  
  const manufacturers = [
      { name: "Manitou", logo: "/yale-logo.png" },
      { name: "JLG", logo: "/Skyjack-logo.png" },
      { name: "Genie", logo: "/Manitou-logo.png" },
      { name: "Haulotte", logo: "/linde-logo.png" },
      { name: "Skyjack", logo: "/jlg-logo.png" },
      { name: "Hangcha", logo: "/hyster-logo.png" },
      { name: "Yale", logo: "/Genie-Logo.png" },
      { name: "Hyster", logo: "/Haulotte-logo.png" },
      { name: "Linde", logo: "/Hangcha-logo.png" },
      { name: "Still", logo: "/still-logo.png" },
      { name: "Oil&Steel", logo: "/oil-steel-logo.png" },
      { name: "Fassi", logo: "/fassi-logo.png" },
      { name: "Palfinger", logo: "/Palfinger-logo.png" },
      { name: "Hiab", logo: "/hiab-logo.png" },
      { name: "Mbiały", logo: "/mb-logo.png" },
    ]

    const duplicatedManufacturers = [...manufacturers, ...manufacturers]

    useEffect(() => {
      const scrollContainer = scrollContainerRef.current
      if (!scrollContainer) return

      const scrollSpeed = 0.6

      const animateScroll = () => {
        if (!isPaused && scrollContainer) {
          scrollPositionRef.current += scrollSpeed
          
          if (scrollPositionRef.current >= scrollContainer.scrollWidth / 2) {
            scrollPositionRef.current = 0
          }
          
          scrollContainer.scrollLeft = scrollPositionRef.current
        }
        
        animationRef.current = requestAnimationFrame(animateScroll)
      }

      if (scrollContainer) {
        animationRef.current = requestAnimationFrame(animateScroll)
      }

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    }, [isPaused])

    useEffect(() => {
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    }, [])

    const handleMouseEnter = (index) => {
      setIsPaused(true)
      setHoveredLogo(index)
    }

    const handleMouseLeave = () => {
      setIsPaused(false)
      setHoveredLogo(null)
    }

    return (
      <div className="w-full bg-card pb-14 relative">
        {/* Gradient left*/}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-card to-transparent z-20 pointer-events-none"></div>
        
        {/* Gradient right*/}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-card to-transparent z-20 pointer-events-none"></div>
        
        <div className="mx-auto relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-hidden relative py-4"
            style={{ scrollBehavior: 'auto' }}
          >
            <div className="flex">
              {duplicatedManufacturers.map((manufacturer, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-6 transition-all duration-500 ease-out"
                  style={{ 
                    width: '180px',
                    filter: hoveredLogo === index ? 'none' : 'grayscale(100%) brightness(1)',
                    transform: hoveredLogo === index ? 'scale(1.15)' : 'scale(1)',
                    opacity: hoveredLogo === index ? '1' : '0.7'
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`p-2 h-28 flex items-center justify-center transition-shadow ${
                    hoveredLogo === index ? 'drop-shadow-xl' : ''
                  }`}>
                    <div className="relative w-full h-full">
                      <Image 
                        src={manufacturer.logo} 
                        alt={manufacturer.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Success Popup */}
      {showSuccessPopup && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-card rounded-lg p-6 max-w-md w-full shadow-xl border border-border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-green-600">Wiadomość wysłana!</h3>
            <button
              onClick={closeSuccessPopup}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-card-foreground mb-4">
            Wiadomość została pomyślnie wysłana. 
            Odpowiemy najszybciej jak to możliwe.
          </p>
          <Button
            onClick={closeSuccessPopup}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Zamknij
          </Button>
        </div>
      </div>
    )}

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
          <h1 className="sr-only">Serwolift - serwis ładowarek teleskopowych, podnośników nożycowych, przegubowych, warsztatowych, wózków widłowych i HDS (UTB). Wykonujemy przeglądy UDT i dokumentację techniczną.</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance">
            Specjalistyczny serwis UTB
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
            Skupiamy się na naprawach ładowarek teleskopowych, podnośników nożycowych, przegubowych, warsztatowych oraz wózków widłowych. 
            Szybko i profesjonalnie przywracamy sprawność Twojego sprzętu.
          </p>
          <Button
            size="lg"
            className="cursor-pointer bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg font-semibold"
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
                <li>• Podnośnikach nożycowych (<b>Haulotte, JLG, Genie, Skyjack, STILL</b>)</li>
                <li>• Wózkach widłowych (<b>Hangcha, Manitou, Yale, Hyster, Linde</b>)</li>
                <li>• Podnośnikach przegubowych (<b>Genie, Oil&Steel</b>)</li>
                <li>• Podnośnikach warsztatowych</li>
                <li>• Suwnicach</li>
                <li>• Hydraulicznych dźwigach samochodowych (HDS)</li>
              </ul>
              <div className="flex items-center gap-4 text-primary">
                <Info className="w-8 h-8" />
                <span className="font-semibold text-lg">Wykonujemy zarówno naprawy bieżące, jak i główne.</span>
              </div>
            </div>

            <div className="relative flex justify-center md:justify-end">
              <div className="relative">
                <div 
                  className="absolute -bottom-4 -right-4 w-24 h-24 z-0 rounded-lg shadow-lg"
                  style={{ backgroundColor: '#f59f20' }}
                ></div>
                <div className="relative z-10">
                  <img
                    src="/photo.jpeg"
                    alt="Serwolift - Serwis UTB"
                    className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ManufacturerLogos/>

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
                Specjalistyczne naprawy podnośników nożycowych marek Haulotte, JLG, Genie, Skyjack, STILL.
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
                  <span>Montaż</span>
                </li>
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

            <div className="bg-card rounded-lg p-8">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold">Suwnice</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Profesjonalne naprawy suwnic pomostowych, bramowych i podwieszanych.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Naprawy układów nośnych i jezdnych</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Serwis mechanizmów jazdy i podnoszenia</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Wymiana elementów toru jezdnego</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-8">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl font-bold">HDS-y</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Serwis hydraulicznych dźwigów samochodowych marek Fassi, Palfinger, Hiab, Mbiały i innych.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Naprawy hydrauliki wysięgnika</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Serwis układów nośnych i zabezpieczeń</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Diagnostyka układów sterowania</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Naprawy wysięgników teleskopowych</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Kalibracja systemów bezpieczeństwa</span>
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
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center mx-auto mb-4">
                    <div className="relative">
                      <item.icon className="w-12 h-12 text-primary transition-all duration-300 ease-in-out group-hover:scale-120 group-hover:rotate-10 group-hover:text-accent" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">{item.title}</h4>
                  <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-32 flex items-end justify-between px-4">
            
            <div className="relative w-70 h-40 transform -translate-x-4">
              <Image 
                src="/vehicle2.png" 
                alt="Pojazd Serwolift"
                fill
                className="object-contain left-0 hidden 2xl:block"
              />
            </div>
            
            <div className="relative w-70 h-40 transform -translate-x-4">
              <Image 
                src="/vehicle1.png" 
                alt="Pojazd Serwolift"
                fill
                className="object-contain right-0 hidden md:block"
              />
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full cursor-pointer"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                  </Button>
                </form>

                <div className="mt-16 space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-primary" />
                    <span className="text-xl">biuro@serwolift.pl</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-primary" />
                    <span className="text-xl">+48 608 209 586</span>
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