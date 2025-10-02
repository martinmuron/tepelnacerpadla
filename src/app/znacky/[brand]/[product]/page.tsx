import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";

type ProductDetails = {
  model: string;
  brand: string;
  power: string;
  efficiency: string;
  cop: string;
  price: string;
  features: string[];
  description: string;
  technicalSpecs: Record<string, string>;
};

type ProductCatalog = Record<string, Record<string, ProductDetails>>;

const productData: ProductCatalog = {
  ivt: {
    "greenline-he-6": {
      model: "Greenline HE 6",
      brand: "IVT",
      power: "6 kW",
      efficiency: "A++",
      cop: "4.2",
      price: "Od 180 000 Kč",
      features: ["Jednosměrné napájení", "Tichý provoz", "Kompaktní design"],
      description: "Efektivní tepelné čerpadlo pro menší rodinné domy s výkonem 6 kW. Díky vysokému COP a energetické třídě A++ zajišťuje nízké provozní náklady.",
      technicalSpecs: {
        "Jmenovitý výkon": "6 kW",
        "COP při A7/W35": "4.2",
        "Maximální teplota výstupu": "65°C",
        "Provozní rozsah": "-20°C až +35°C",
        "Hladina hluku": "45 dB(A)",
        "Chladivo": "R410A",
        "Napájení": "1x230V",
        "Hmotnost": "85 kg"
      }
    },
    "greenline-he-9": {
      model: "Greenline HE 9",
      brand: "IVT",
      power: "9 kW",
      efficiency: "A++",
      cop: "4.1",
      price: "Od 220 000 Kč",
      features: ["Jednosměrné napájení", "Vysoká účinnost", "Snadná instalace"],
      description: "Výkonné tepelné čerpadlo s kapacitou 9 kW ideální pro střední rodinné domy. Kombinuje vysokou účinnost s jednoduchým provozem.",
      technicalSpecs: {
        "Jmenovitý výkon": "9 kW",
        "COP při A7/W35": "4.1",
        "Maximální teplota výstupu": "65°C",
        "Provozní rozsah": "-20°C až +35°C",
        "Hladina hluku": "48 dB(A)",
        "Chladivo": "R410A",
        "Napájení": "1x230V",
        "Hmotnost": "92 kg"
      }
    },
    "greenline-he-12": {
      model: "Greenline HE 12",
      brand: "IVT",
      power: "12 kW",
      efficiency: "A++",
      cop: "4.0",
      price: "Od 280 000 Kč",
      features: ["Třísměrné napájení", "Vysoký výkon", "Pokročilá regulace"],
      description: "Výkonné čerpadlo pro větší objekty s pokročilou regulací a třífázovým napájením pro maximální výkon.",
      technicalSpecs: {
        "Jmenovitý výkon": "12 kW",
        "COP při A7/W35": "4.0",
        "Maximální teplota výstupu": "65°C",
        "Provozní rozsah": "-20°C až +35°C",
        "Hladina hluku": "52 dB(A)",
        "Chladivo": "R410A",
        "Napájení": "3x400V",
        "Hmotnost": "110 kg"
      }
    }
  },
  bosch: {
    "compress-7800i-lw-6": {
      model: "Compress 7800i LW 6",
      brand: "Bosch",
      power: "6 kW",
      efficiency: "A+++",
      cop: "5.1",
      price: "Od 250 000 Kč",
      features: ["Modulace 2-16 kW", "Tichý provoz", "Wi-Fi připojení"],
      description: "Prémiové tepelné čerpadlo s vynikajícím COP 5.1 a inteligentní modulací výkonu pro optimální provoz.",
      technicalSpecs: {
        "Jmenovitý výkon": "6 kW",
        "COP při A7/W35": "5.1",
        "Maximální teplota výstupu": "70°C",
        "Provozní rozsah": "-25°C až +35°C",
        "Hladina hluku": "42 dB(A)",
        "Chladivo": "R32",
        "Napájení": "1x230V",
        "Hmotnost": "95 kg"
      }
    },
    "compress-7800i-lw-9": {
      model: "Compress 7800i LW 9",
      brand: "Bosch",
      power: "9 kW",
      efficiency: "A+++",
      cop: "4.9",
      price: "Od 320 000 Kč",
      features: ["Inteligentní regulace", "Vysoká účinnost", "50l buffer tank"],
      description: "Vysoce efektivní systém s integrovaným zásobníkem a chytrou regulací pro maximální komfort.",
      technicalSpecs: {
        "Jmenovitý výkon": "9 kW",
        "COP při A7/W35": "4.9",
        "Maximální teplota výstupu": "70°C",
        "Provozní rozsah": "-25°C až +35°C",
        "Hladina hluku": "44 dB(A)",
        "Chladivo": "R32",
        "Napájení": "1x230V",
        "Hmotnost": "125 kg"
      }
    }
  },
  viessmann: {
    "vitocal-151-a-6": {
      model: "Vitocal 151-A 6",
      brand: "Viessmann",
      power: "6 kW",
      efficiency: "A+++",
      cop: "4.8",
      price: "Od 280 000 Kč",
      features: ["R290 chladivo", "Max teplota 70°C", "Tichý provoz"],
      description: "Ekologické tepelné čerpadlo s přírodním chladivem R290 a vysokou účinností.",
      technicalSpecs: {
        "Jmenovitý výkon": "6 kW",
        "COP při A7/W35": "4.8",
        "Maximální teplota výstupu": "70°C",
        "Provozní rozsah": "-25°C až +35°C",
        "Hladina hluku": "43 dB(A)",
        "Chladivo": "R290",
        "Napájení": "1x230V",
        "Hmotnost": "88 kg"
      }
    },
    "vitocal-151-a-10": {
      model: "Vitocal 151-A 10",
      brand: "Viessmann",
      power: "10 kW",
      efficiency: "A+++",
      cop: "4.6",
      price: "Od 350 000 Kč",
      features: ["Přírodní chladivo", "Retrofit instalace", "ViCare app"],
      description: "Výkonné čerpadlo ideální pro modernizaci starších systémů s chytrou aplikací ViCare.",
      technicalSpecs: {
        "Jmenovitý výkon": "10 kW",
        "COP při A7/W35": "4.6",
        "Maximální teplota výstupu": "70°C",
        "Provozní rozsah": "-25°C až +35°C",
        "Hladina hluku": "46 dB(A)",
        "Chladivo": "R290",
        "Napájení": "1x230V",
        "Hmotnost": "98 kg"
      }
    }
  },
  nibe: {
    "f2050-6": {
      model: "F2050-6",
      brand: "NIBE",
      power: "6 kW",
      efficiency: "A+++",
      cop: "4.87",
      price: "Od 290 000 Kč",
      features: ["R32 chladivo", "SCOP až 4.87", "myUplink app"],
      description: "Špičkové tepelné čerpadlo s nejvyšším SCOP na trhu a chytrou aplikací myUplink.",
      technicalSpecs: {
        "Jmenovitý výkon": "6 kW",
        "COP při A7/W35": "4.87",
        "Maximální teplota výstupu": "65°C",
        "Provozní rozsah": "-25°C až +35°C",
        "Hladina hluku": "44 dB(A)",
        "Chladivo": "R32",
        "Napájení": "1x230V",
        "Hmotnost": "90 kg"
      }
    },
    "f2120-16": {
      model: "F2120-16",
      brand: "NIBE",
      power: "16 kW",
      efficiency: "A+++",
      cop: "5.0",
      price: "Od 450 000 Kč",
      features: ["SCOP > 5.0", "65°C při -25°C", "Třífázové připojení"],
      description: "Výkonné čerpadlo pro velké objekty s vynikajícím výkonem i při extrémně nízkých teplotách.",
      technicalSpecs: {
        "Jmenovitý výkon": "16 kW",
        "COP při A7/W35": "5.0",
        "Maximální teplota výstupu": "65°C",
        "Provozní rozsah": "-25°C až +35°C",
        "Hladina hluku": "54 dB(A)",
        "Chladivo": "R32",
        "Napájení": "3x400V",
        "Hmotnost": "135 kg"
      }
    }
  },
  panasonic: {
    "aquarea-j-series-5": {
      model: "Aquarea J Series 5",
      brand: "Panasonic",
      power: "5 kW",
      efficiency: "A+++",
      cop: "5.33",
      price: "Od 260 000 Kč",
      features: ["R32 chladivo", "COP až 5.33", "T-CAP technologie"],
      description: "Vysoce efektivní čerpadlo s rekordním COP 5.33 a pokročilou T-CAP technologií.",
      technicalSpecs: {
        "Jmenovitý výkon": "5 kW",
        "COP při A7/W35": "5.33",
        "Maximální teplota výstupu": "65°C",
        "Provozní rozsah": "-20°C až +35°C",
        "Hladina hluku": "42 dB(A)",
        "Chladivo": "R32",
        "Napájení": "1x230V",
        "Hmotnost": "82 kg"
      }
    },
    "aquarea-m-series-20": {
      model: "Aquarea M Series 20",
      brand: "Panasonic",
      power: "20 kW",
      efficiency: "A+++",
      cop: "4.8",
      price: "Od 580 000 Kč",
      features: ["R290 chladivo", "75°C při -15°C", "Komerční využití"],
      description: "Výkonné komerční čerpadlo s ekologickým R290 a schopností vysokých teplot.",
      technicalSpecs: {
        "Jmenovitý výkon": "20 kW",
        "COP při A7/W35": "4.8",
        "Maximální teplota výstupu": "75°C",
        "Provozní rozsah": "-20°C až +35°C",
        "Hladina hluku": "58 dB(A)",
        "Chladivo": "R290",
        "Napájení": "3x400V",
        "Hmotnost": "165 kg"
      }
    }
  },
  lg: {
    "therma-v-r290-7": {
      model: "Therma V R290 7",
      brand: "LG",
      power: "7 kW",
      efficiency: "A+++",
      cop: "5.0",
      price: "Od 320 000 Kč",
      features: ["R290 GWP=3", "75°C při -15°C", "LG ThinQ app"],
      description: "Ekologické čerpadlo s nejnižším GWP a chytrou aplikací LG ThinQ.",
      technicalSpecs: {
        "Jmenovitý výkon": "7 kW",
        "COP při A7/W35": "5.0",
        "Maximální teplota výstupu": "75°C",
        "Provozní rozsah": "-28°C až +35°C",
        "Hladina hluku": "49 dB(A)",
        "Chladivo": "R290",
        "Napájení": "1x230V",
        "Hmotnost": "95 kg"
      }
    },
    "therma-v-r290-12": {
      model: "Therma V R290 12",
      brand: "LG",
      power: "12 kW",
      efficiency: "A+++",
      cop: "4.7",
      price: "Od 420 000 Kč",
      features: ["Monobloc design", "49 dB(A) tichý provoz", "BECON cloud"],
      description: "Kompaktní monobloc s extrémně tichým provozem a cloudovým ovládáním.",
      technicalSpecs: {
        "Jmenovitý výkon": "12 kW",
        "COP při A7/W35": "4.7",
        "Maximální teplota výstupu": "75°C",
        "Provozní rozsah": "-28°C až +35°C",
        "Hladina hluku": "49 dB(A)",
        "Chladivo": "R290",
        "Napájení": "1x230V",
        "Hmotnost": "115 kg"
      }
    }
  },
  vaillant: {
    "arotherm-plus-7": {
      model: "aroTHERM plus 7",
      brand: "Vaillant",
      power: "7 kW",
      efficiency: "A+++",
      cop: "5.4",
      price: "Od 310 000 Kč",
      features: ["R290 chladivo", "COP až 5.4", "75°C při -25°C"],
      description: "Prémiové čerpadlo s rekordním COP 5.4 a vynikajícím výkonem i při extrémních mrazech.",
      technicalSpecs: {
        "Jmenovitý výkon": "7 kW",
        "COP při A7/W35": "5.4",
        "Maximální teplota výstupu": "75°C",
        "Provozní rozsah": "-25°C až +35°C",
        "Hladina hluku": "50 dB(A)",
        "Chladivo": "R290",
        "Napájení": "1x230V",
        "Hmotnost": "92 kg"
      }
    },
    "arotherm-plus-12": {
      model: "aroTHERM plus 12",
      brand: "Vaillant",
      power: "12 kW",
      efficiency: "A+++",
      cop: "5.1",
      price: "Od 380 000 Kč",
      features: ["SCOP až 5.03", "54dB(A) tichý", "Quiet Mark"],
      description: "Oceněné tichým provozem s Quiet Mark certifikací a vysokou účinností.",
      technicalSpecs: {
        "Jmenovitý výkon": "12 kW",
        "COP při A7/W35": "5.1",
        "Maximální teplota výstupu": "75°C",
        "Provozní rozsah": "-25°C až +35°C",
        "Hladina hluku": "54 dB(A)",
        "Chladivo": "R290",
        "Napájení": "1x230V",
        "Hmotnost": "108 kg"
      }
    }
  },
  "stiebel-eltron": {
    "wpl-15-a2w": {
      model: "WPL 15 A2W",
      brand: "Stiebel Eltron",
      power: "6 kW",
      efficiency: "A+++",
      cop: "5.0",
      price: "Od 290 000 Kč",
      features: ["Cold Climate", "149°F při -4°F", "Monobloc design"],
      description: "Specializované čerpadlo pro studené klima s výkonem i při extrémních mrazech.",
      technicalSpecs: {
        "Jmenovitý výkon": "6 kW",
        "COP při A7/W35": "5.0",
        "Maximální teplota výstupu": "65°C",
        "Provozní rozsah": "-20°C až +35°C",
        "Hladina hluku": "46 dB(A)",
        "Chladivo": "R32",
        "Napájení": "1x230V",
        "Hmotnost": "88 kg"
      }
    },
    "wpl-25-a2w": {
      model: "WPL 25 A2W",
      brand: "Stiebel Eltron",
      power: "8 kW",
      efficiency: "A+++",
      cop: "4.8",
      price: "Od 350 000 Kč",
      features: ["4 ton cooling", "SmartGrid ready", "ISG web ovládání"],
      description: "Inteligentní systém s webovým ovládáním a připraveností pro SmartGrid.",
      technicalSpecs: {
        "Jmenovitý výkon": "8 kW",
        "COP při A7/W35": "4.8",
        "Maximální teplota výstupu": "65°C",
        "Provozní rozsah": "-20°C až +35°C",
        "Hladina hluku": "48 dB(A)",
        "Chladivo": "R32",
        "Napájení": "1x230V",
        "Hmotnost": "95 kg"
      }
    }
  }
};

export default function ProductPage({
  params
}: {
  params: { brand: string; product: string };
}) {
  const { brand: brandSlug, product: productSlug } = params;
  const product = productData[brandSlug]?.[productSlug];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produkt nenalezen</h1>
          <Link href={`/znacky/${brandSlug}`}>
            <Button>Zpět na značku</Button>
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
                <h1 className="text-2xl font-bold text-black cursor-pointer">TeplnaCerpadla.cz</h1>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#produkty" className="text-gray-700 hover:text-primary transition-colors">Produkty</Link>
              <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors">Blog</Link>
              <Link href="/kontakt" className="text-gray-700 hover:text-primary transition-colors">Kontakt</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        <Image
          src="/images/header_homepage.jpeg"
          alt="Product background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 border-white text-white">
              {product.brand}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              {product.model}
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto mb-6">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {product.efficiency}
              </Badge>
              <span className="text-white text-2xl font-bold">{product.price}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Product Images */}
              <Card>
                <CardHeader>
                  <CardTitle>Galerie produktu</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src="/images/header_homepage.jpeg"
                        alt={`${product.model} - hlavní obrázek`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src="/images/proc_si_vybrat_nas.jpeg"
                        alt={`${product.model} - detail`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technical Specifications */}
              <Card>
                <CardHeader>
                  <CardTitle>Technické specifikace</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.technicalSpecs).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b">
                        <span className="font-medium text-gray-700">{key}:</span>
                        <span className="text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Klíčové vlastnosti</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Performance Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Výkon a účinnost</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">COP (Coefficient of Performance)</h4>
                    <p className="text-gray-600">
                      COP {product.cop} znamená, že na každou 1 kWh spotřebované elektřiny vytvoří
                      čerpadlo {product.cop} kWh tepelné energie. To představuje účinnost {Math.round(parseFloat(product.cop) * 100 - 100)}% oproti
                      přímému elektrickému vytápění.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Energetická třída</h4>
                    <p className="text-gray-600">
                      Energetická třída {product.efficiency} zaručuje nejnižší provozní náklady a minimální
                      dopad na životní prostředí.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Nezávazná poptávka</CardTitle>
                  <CardDescription>
                    Máte zájem o {product.model}? Vyplňte formulář a ozveme se vám do 24 hodin.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Jméno a příjmení *</Label>
                    <Input id="name" placeholder="Jan Novák" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="jan@email.cz" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefon *</Label>
                    <Input id="phone" type="tel" placeholder="+420 XXX XXX XXX" required />
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
                    <Input id="area" type="number" placeholder="150" />
                  </div>
                  <div>
                    <Label htmlFor="message">Zpráva</Label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Další informace, dotazy..."
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Odeslat poptávku
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Odesláním souhlasíte se zpracováním osobních údajů
                  </p>

                  <Separator className="my-4" />

                  <div className="space-y-2">
                    <Link href={`/znacky/${brandSlug}`}>
                      <Button variant="outline" className="w-full">
                        Zpět na {product.brand}
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full">
                      Stáhnout technický list PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
  const params = [];
  for (const brand in productData) {
    for (const product in productData[brand]) {
      params.push({ brand, product });
    }
  }
  return params;
}
