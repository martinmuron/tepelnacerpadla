import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const brands = [
  { name: "IVT", slug: "ivt", description: "Greenline HE série s výkony 6-17 kW", efficiency: "A++" },
  { name: "Bosch", slug: "bosch", description: "Compress 7800i LW s modulací 2-16 kW", efficiency: "A+++" },
  { name: "Viessmann", slug: "viessmann", description: "Vitocal 150/151-A série s R290", efficiency: "A+++" },
  { name: "NIBE", slug: "nibe", description: "F2050 s SCOP až 4,87", efficiency: "A+++" },
  { name: "Panasonic", slug: "panasonic", description: "Aquarea M Series až 30 kW", efficiency: "A+++" },
  { name: "LG", slug: "lg", description: "Therma V R290 Monobloc", efficiency: "A+++" },
  { name: "Vaillant", slug: "vaillant", description: "aroTHERM plus s COP až 5,4", efficiency: "A+++" },
  { name: "Stiebel Eltron", slug: "stiebel-eltron", description: "WPL série s COP až 5,0", efficiency: "A+++" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-primary">TeplnaCerpadla.cz</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#produkty" className="text-gray-700 hover:text-primary transition-colors">Produkty</a>
              <a href="#o-nas" className="text-gray-700 hover:text-primary transition-colors">O nás</a>
              <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors">Blog</Link>
              <Link href="/kontakt" className="text-gray-700 hover:text-primary transition-colors">Kontakt</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Na trhu...Vše za trvalé nejnižší ceny …Garantováno
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Tepelná čerpadla
            <span className="block text-primary">pro váš domov</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Objevte nejefektivnější řešení vytápění a chlazení. Špičkové značky, 
            odborná montáž a celoživotní servis v jednom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8">
              Zobrazit produkty
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Nezávazná poptávka
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8+</div>
              <div className="text-gray-600">Prémiových značek</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">A+++</div>
              <div className="text-gray-600">Energetická třída</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">75%</div>
              <div className="text-gray-600">Úspora nákladů</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="produkty" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Naše značky</h2>
            <p className="text-xl text-gray-600">
              Nabízíme tepelná čerpadla od nejrespektovanějších výrobců
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <Link key={brand.name} href={`/znacky/${brand.slug}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-primary group-hover:scale-105 transition-transform">
                      {brand.name}
                    </CardTitle>
                    <Badge variant="secondary" className="w-fit mx-auto">
                      {brand.efficiency}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {brand.description}
                    </CardDescription>
                    <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Zobrazit produkty
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Proč si vybrat nás</h2>
            <p className="text-xl text-gray-600">
              Komplexní služby od konzultace po instalaci a servis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🏠</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bezplatná konzultace</h3>
              <p className="text-gray-600">
                Navštívíme váš domov a navrhneme optimální řešení pro vaše potřeby
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">⚡</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rychlá instalace</h3>
              <p className="text-gray-600">
                Profesionální montáž certifikovanými techniky s garancí kvality
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🔧</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Celoživotní servis</h3>
              <p className="text-gray-600">
                Pravidelná údržba a 24/7 servisní podpora po celou životnost
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Připraveni začít šetřit energii?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Získejte nezávaznou konzultaci a cenovou nabídku do 24 hodin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Nezávazná poptávka
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Zavolat: +420 XXX XXX XXX
            </Button>
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
