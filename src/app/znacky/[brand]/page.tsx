import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const brandData = {
  ivt: {
    name: "IVT",
    description: "Švédská značka s více než 50 lety zkušeností v oblasti tepelných čerpadel",
    products: [
      {
        model: "Greenline HE 6",
        power: "6 kW",
        efficiency: "A++",
        cop: "4.2",
        price: "Od 180 000 Kč",
        features: ["Jednosměrné napájení", "Tichý provoz", "Kompaktní design"]
      },
      {
        model: "Greenline HE 9",
        power: "9 kW",
        efficiency: "A++",
        cop: "4.1",
        price: "Od 220 000 Kč",
        features: ["Jednosměrné napájení", "Vysoká účinnost", "Snadná instalace"]
      },
      {
        model: "Greenline HE 12",
        power: "12 kW",
        efficiency: "A++",
        cop: "4.0",
        price: "Od 280 000 Kč",
        features: ["Třísměrné napájení", "Vysoký výkon", "Pokročilá regulace"]
      }
    ]
  },
  bosch: {
    name: "Bosch",
    description: "Německá kvalita a inovace s focus na energetickou účinnost a spolehlivost",
    products: [
      {
        model: "Compress 7800i LW 6",
        power: "6 kW",
        efficiency: "A+++",
        cop: "5.1",
        price: "Od 250 000 Kč",
        features: ["Modulace 2-16 kW", "Tichý provoz", "Wi-Fi připojení"]
      },
      {
        model: "Compress 7800i LW 9",
        power: "9 kW",
        efficiency: "A+++",
        cop: "4.9",
        price: "Od 320 000 Kč",
        features: ["Inteligentní regulace", "Vysoká účinnost", "50l buffer tank"]
      }
    ]
  },
  viessmann: {
    name: "Viessmann",
    description: "Německý výrobce s tradicí a moderní technologií R290",
    products: [
      {
        model: "Vitocal 151-A 6",
        power: "6 kW",
        efficiency: "A+++",
        cop: "4.8",
        price: "Od 280 000 Kč",
        features: ["R290 chladivo", "Max teplota 70°C", "Tichý provoz"]
      },
      {
        model: "Vitocal 151-A 10",
        power: "10 kW",
        efficiency: "A+++",
        cop: "4.6",
        price: "Od 350 000 Kč",
        features: ["Přírodní chladivo", "Retrofit instalace", "ViCare app"]
      }
    ]
  },
  nibe: {
    name: "NIBE",
    description: "Švédská kvalita s nejmodernější technologií a vysokou účinností",
    products: [
      {
        model: "F2050-6",
        power: "6 kW",
        efficiency: "A+++",
        cop: "4.87",
        price: "Od 290 000 Kč",
        features: ["R32 chladivo", "SCOP až 4.87", "myUplink app"]
      },
      {
        model: "F2120-16",
        power: "16 kW",
        efficiency: "A+++",
        cop: "5.0",
        price: "Od 450 000 Kč",
        features: ["SCOP > 5.0", "65°C při -25°C", "Třífázové připojení"]
      }
    ]
  },
  panasonic: {
    name: "Panasonic",
    description: "Japonská technologie s focus na spolehlivost a dlouhovou životnost",
    products: [
      {
        model: "Aquarea J Series 5",
        power: "5 kW",
        efficiency: "A+++",
        cop: "5.33",
        price: "Od 260 000 Kč",
        features: ["R32 chladivo", "COP až 5.33", "T-CAP technologie"]
      },
      {
        model: "Aquarea M Series 20",
        power: "20 kW",
        efficiency: "A+++",
        cop: "4.8",
        price: "Od 580 000 Kč",
        features: ["R290 chladivo", "75°C při -15°C", "Komerční využití"]
      }
    ]
  },
  lg: {
    name: "LG",
    description: "Korejská technologie s důrazem na moderní design a smart funkce",
    products: [
      {
        model: "Therma V R290 7",
        power: "7 kW",
        efficiency: "A+++",
        cop: "5.0",
        price: "Od 320 000 Kč",
        features: ["R290 GWP=3", "75°C při -15°C", "LG ThinQ app"]
      },
      {
        model: "Therma V R290 12",
        power: "12 kW",
        efficiency: "A+++",
        cop: "4.7",
        price: "Od 420 000 Kč",
        features: ["Monobloc design", "49 dB(A) tichý provoz", "BECON cloud"]
      }
    ]
  },
  vaillant: {
    name: "Vaillant",
    description: "Německá tradice s moderní aroTHERM technologií",
    products: [
      {
        model: "aroTHERM plus 7",
        power: "7 kW",
        efficiency: "A+++",
        cop: "5.4",
        price: "Od 310 000 Kč",
        features: ["R290 chladivo", "COP až 5.4", "75°C při -25°C"]
      },
      {
        model: "aroTHERM plus 12",
        power: "12 kW",
        efficiency: "A+++",
        cop: "5.1",
        price: "Od 380 000 Kč",
        features: ["SCOP až 5.03", "54dB(A) tichý", "Quiet Mark"]
      }
    ]
  },
  "stiebel-eltron": {
    name: "Stiebel Eltron",
    description: "Německá kvalita s focus na studené klima a vysoké teploty",
    products: [
      {
        model: "WPL 15 A2W",
        power: "6 kW",
        efficiency: "A+++",
        cop: "5.0",
        price: "Od 290 000 Kč",
        features: ["Cold Climate", "149°F při -4°F", "Monobloc design"]
      },
      {
        model: "WPL 25 A2W",
        power: "8 kW",
        efficiency: "A+++",
        cop: "4.8",
        price: "Od 350 000 Kč",
        features: ["4 ton cooling", "SmartGrid ready", "ISG web ovládání"]
      }
    ]
  }
};

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: brandSlug } = await params;
  const brand = brandData[brandSlug as keyof typeof brandData];
  
  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Značka nenalezena</h1>
          <Link href="/">
            <Button>Zpět na hlavní stránku</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <h1 className="text-2xl font-bold text-primary cursor-pointer">TeplnaCerpadla.cz</h1>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#produkty" className="text-gray-700 hover:text-primary transition-colors">Produkty</Link>
              <a href="#o-nas" className="text-gray-700 hover:text-primary transition-colors">O nás</a>
              <a href="#blog" className="text-gray-700 hover:text-primary transition-colors">Blog</a>
              <a href="#kontakt" className="text-gray-700 hover:text-primary transition-colors">Kontakt</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-primary">{brand.name}</span> Tepelná čerpadla
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {brand.description}
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Dostupné modely</h2>
              <div className="space-y-6">
                {brand.products.map((product, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl text-primary">{product.model}</CardTitle>
                          <CardDescription className="text-lg mt-1">
                            Výkon: {product.power} • COP: {product.cop}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary" className="mb-2">{product.efficiency}</Badge>
                          <div className="text-2xl font-bold text-primary">{product.price}</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Klíčové vlastnosti:</h4>
                          <ul className="space-y-2">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-gray-600">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col justify-end">
                          <Button className="w-full mb-2">
                            Nezávazná poptávka
                          </Button>
                          <Button variant="outline" className="w-full">
                            Technický list PDF
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Máte zájem?</CardTitle>
                  <CardDescription>
                    Vyplňte formulář a ozveme se vám do 24 hodin
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Jméno a příjmení</Label>
                    <Input id="name" placeholder="Jan Novák" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="jan@email.cz" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" type="tel" placeholder="+420 XXX XXX XXX" />
                  </div>
                  <div>
                    <Label htmlFor="house-type">Typ domu</Label>
                    <select 
                      id="house-type"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Vyberte typ domu</option>
                      <option value="rodinny-dum">Rodinný dům</option>
                      <option value="bytovy-dum">Bytový dům</option>
                      <option value="kancelare">Kanceláře</option>
                      <option value="prumysl">Průmyslová budova</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="area">Plocha k vytápění (m²)</Label>
                    <Input id="area" placeholder="150" />
                  </div>
                  <Button className="w-full">
                    Odeslat poptávku
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Odesláním souhlasíte se zpracováním osobních údajů
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Proč zvolit {brand.name}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🏆</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Vysoká kvalita</h3>
              <p className="text-gray-600">
                Prémiové materiály a ověřená technologie pro dlouhou životnost
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">⚡</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Vysoká účinnost</h3>
              <p className="text-gray-600">
                Nejmodernější technologie pro maximální úspory energie
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🛡️</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Spolehlivost</h3>
              <p className="text-gray-600">
                Dlouhá záruka a celoživotní servisní podpora
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
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
      </footer>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { brand: 'ivt' },
    { brand: 'bosch' },
    { brand: 'viessmann' },
    { brand: 'nibe' },
    { brand: 'panasonic' },
    { brand: 'lg' },
    { brand: 'vaillant' },
    { brand: 'stiebel-eltron' },
  ];
}