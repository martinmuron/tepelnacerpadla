'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import Image from 'next/image';

const brands = [
  { name: 'IVT', slug: 'ivt', description: 'Evropský lídr s nejefektivnějšími tepelnými čerpadly pro náročné podmínky', efficiency: 'A++', image: '/images/IVT.jpg' },
  { name: 'Bosch', slug: 'bosch', description: '50 let inovací v technologii tepelných čerpadel s prémiovou kvalitou', efficiency: 'A+++', image: '/images/BOSTCH.webp' },
  { name: 'Viessmann', slug: 'viessmann', description: 'Německá kvalita a precizní inženýrství od roku 1917', efficiency: 'A+++', image: '/images/VIESSMANN.avif' },
  { name: 'NIBE', slug: 'nibe', description: 'Švédská značka s 70 lety zkušeností a chytrými technologiemi', efficiency: 'A+++', image: '/images/NIBE.jpg' },
  { name: 'Panasonic', slug: 'panasonic', description: 'Japonská inovace s T-CAP technologií pro maximální účinnost', efficiency: 'A+++', image: '/images/PANASONIC.jpg' },
  { name: 'LG', slug: 'lg', description: 'Oceněné tepelné čerpadlo roku 2022 s R290 pro udržitelnost', efficiency: 'A+++', image: '/images/LG.webp' },
  { name: 'Vaillant', slug: 'vaillant', description: '140 let tradice německého inženýrství s ekologickým R290', efficiency: 'A+++', image: '/images/VAILLANT.png' },
  { name: 'Stiebel Eltron', slug: 'stiebel-eltron', description: 'Německá špička s 50 lety výroby tepelných čerpadel', efficiency: 'A+++', image: '/images/STIEBEL_ELETRON.png' },
];

const stats = [
  { value: '8+', label: 'Prémiových značek' },
  { value: 'A+++', label: 'Energetická třída' },
  { value: '75%', label: 'Úspora nákladů' },
];

const advantages = [
  {
    emoji: '🏠',
    title: 'Bezplatná konzultace',
    description: 'Navštívíme váš domov a navrhneme optimální řešení pro vaše potřeby',
  },
  {
    emoji: '⚡',
    title: 'Rychlá instalace',
    description: 'Profesionální montáž certifikovanými techniky s garancí kvality',
  },
  {
    emoji: '🔧',
    title: 'Celoživotní servis',
    description: 'Pravidelná údržba a 24/7 servisní podpora po celou životnost',
  },
];

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.7,
      ease: easing,
    },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const sectionViewport = { once: true, amount: 0.3 };

export default function Home() {
  return (
    <div className="min-h-screen">
      <motion.nav
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: easing } }}
        className="absolute top-0 left-0 right-0 border-b border-white/10 bg-white/10 backdrop-blur-md z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              variants={fadeInUp}
              custom={0}
              initial="hidden"
              animate="visible"
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-primary/80 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 shadow-lg shadow-primary/20">
                <span className="text-white font-bold text-xl">TC</span>
              </div>
              <h1 className="text-2xl font-bold text-white drop-shadow-lg">TeplnaCerpadla.cz</h1>
            </motion.div>
            <div className="hidden md:flex items-center space-x-1">
              <div className="relative group">
                <button className="px-4 py-2 rounded-lg text-white hover:text-primary hover:bg-white/10 transition-all flex items-center gap-2 font-medium">
                  Značky
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link href="/znacky/ivt" className="block px-4 py-2.5 text-white hover:bg-white/10 hover:text-primary transition-colors font-medium">
                      <span className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        IVT
                      </span>
                    </Link>
                    <Link href="/znacky/bosch" className="block px-4 py-2.5 text-white hover:bg-white/10 hover:text-primary transition-colors font-medium">
                      <span className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Bosch
                      </span>
                    </Link>
                    <Link href="/znacky/viessmann" className="block px-4 py-2.5 text-white hover:bg-white/10 hover:text-primary transition-colors font-medium">
                      <span className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Viessmann
                      </span>
                    </Link>
                    <Link href="/znacky/nibe" className="block px-4 py-2.5 text-white hover:bg-white/10 hover:text-primary transition-colors font-medium">
                      <span className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        NIBE
                      </span>
                    </Link>
                    <Link href="/znacky/panasonic" className="block px-4 py-2.5 text-white hover:bg-white/10 hover:text-primary transition-colors font-medium">
                      <span className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Panasonic
                      </span>
                    </Link>
                    <Link href="/znacky/lg" className="block px-4 py-2.5 text-white hover:bg-white/10 hover:text-primary transition-colors font-medium">
                      <span className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        LG
                      </span>
                    </Link>
                    <Link href="/znacky/vaillant" className="block px-4 py-2.5 text-white hover:bg-white/10 hover:text-primary transition-colors font-medium">
                      <span className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Vaillant
                      </span>
                    </Link>
                    <Link href="/znacky/stiebel-eltron" className="block px-4 py-2.5 text-white hover:bg-white/10 hover:text-primary transition-colors font-medium">
                      <span className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Stiebel Eltron
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <a href="#o-nas" className="px-4 py-2 rounded-lg text-white hover:text-primary hover:bg-white/10 transition-all font-medium">O nás</a>
              <Link href="/blog" className="px-4 py-2 rounded-lg text-white hover:text-primary hover:bg-white/10 transition-all font-medium">Blog</Link>
              <Link href="/kontakt">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="ml-2 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white font-medium hover:bg-white/20 transition-all"
                >
                  Kontakt
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center overflow-hidden"
      >
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/video/tepelna_cerpadla_hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/40 blur-3xl opacity-70 animate-spotlight" />
          <div className="absolute bottom-[-6rem] left-[15%] h-64 w-64 rounded-full bg-primary/20 blur-3xl opacity-80 animate-float-slow" />
          <div className="absolute top-1/3 right-[12%] h-48 w-48 rounded-full bg-white/10 blur-3xl animate-pulse-slow" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div variants={fadeInUp} custom={0}>
            <Badge variant="outline" className="mb-4 text-primary border-primary/70 bg-white/5 backdrop-blur">
              Na trhu...Vše za trvalé nejnižší ceny …Garantováno
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            custom={1}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-2xl"
          >
            Tepelná čerpadla
            <span className="block text-primary">pro váš domov</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Objevte nejefektivnější řešení vytápění a chlazení. Špičkové značky,
            odborná montáž a celoživotní servis v jednom.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.96 }}>
              <Button size="lg" className="text-lg px-8 shadow-lg shadow-primary/30">
                Zobrazit produkty
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.96 }}>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
              >
                Nezávazná poptávka
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            custom={4}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                custom={index}
                variants={fadeInUp}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="produkty"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100"
        initial="hidden"
        whileInView="visible"
        variants={stagger}
        viewport={sectionViewport}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-12 left-1/3 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 right-[10%] h-56 w-56 rounded-full bg-primary/10 blur-3xl animate-spotlight" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={fadeInUp} custom={0} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Naše značky</h2>
            <p className="text-xl text-gray-600">
              Nabízíme tepelná čerpadla od nejrespektovanějších výrobců
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                variants={fadeInUp}
                custom={index + 1}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.4, ease: easing }}
                className="h-full"
              >
                <Link href={`/znacky/${brand.slug}`} className="block h-full">
                  <Card className="group h-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm transition-all">
                    <CardHeader className="text-center">
                      <div className="relative w-full h-72 mb-4 flex items-center justify-center bg-white/40 backdrop-blur-sm rounded-lg overflow-hidden border border-white/60">
                        <Image src={brand.image} alt={`${brand.name} heat pump`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <CardTitle className="text-primary transition-transform duration-300 group-hover:scale-105">
                        {brand.name}
                      </CardTitle>
                      <Badge variant="secondary" className="w-fit mx-auto">
                        {brand.efficiency}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center mb-6">
                        {brand.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 justify-center mb-6">
                        <Badge variant="outline" className="text-xs">
                          Profesionální instalace
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Záruka kvality
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Servis 24/7
                        </Badge>
                      </div>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Zobrazit produkty
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="o-nas"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/proc_si_vybrat_nas.jpeg')" }}
        initial="hidden"
        whileInView="visible"
        variants={stagger}
        viewport={sectionViewport}
      >
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={fadeInUp} custom={0} className="text-center mb-16 text-white">
            <h2 className="text-4xl font-bold mb-4">Proč si vybrat nás</h2>
            <p className="text-xl text-white/80">
              Komplexní služby od konzultace po instalaci a servis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                custom={index + 1}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                className="text-center bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 shadow-lg shadow-black/10"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {item.emoji}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-white/90">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        variants={stagger}
        viewport={sectionViewport}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 variants={fadeInUp} custom={0} className="text-4xl font-bold mb-4">
            Připraveni začít šetřit energii?
          </motion.h2>
          <motion.p variants={fadeInUp} custom={1} className="text-xl text-gray-600 mb-8">
            Získejte nezávaznou konzultaci a cenovou nabídku do 24 hodin
          </motion.p>
          <motion.div variants={fadeInUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.96 }}>
              <Button size="lg" className="text-lg px-8">
                Nezávazná poptávka
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.96 }}>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Zavolat: +420 XXX XXX XXX
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.footer
        className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: easing } }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">TeplnaCerpadla.cz</h3>
              <p className="text-gray-400">
                Váš spolehlivý partner pro tepelná čerpadla
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produkty</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Vzduch-voda čerpadla</li>
                <li>Země-voda čerpadla</li>
                <li>Voda-voda čerpadla</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Služby</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Konzultace</li>
                <li>Instalace</li>
                <li>Servis</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@tepelnacerpadla.cz</li>
                <li>Tel: +420 XXX XXX XXX</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 TeplnaCerpadla.cz. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
