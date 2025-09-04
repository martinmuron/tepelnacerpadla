import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function ContactPage() {
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
              <a href="#kontakt" className="text-primary font-semibold">Kontakt</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Kontaktujte nás
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Máte otázky k tepelným čerpadlům? Potřebujete cenovou nabídku? 
            Ozveme se vám do 24 hodin.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Nezávazná poptávka</CardTitle>
                  <CardDescription>
                    Vyplňte formulář a náš specialista vám připraví individuální nabídku
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Jméno *</Label>
                      <Input id="firstName" placeholder="Jan" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Příjmení *</Label>
                      <Input id="lastName" placeholder="Novák" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="jan@email.cz" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input id="phone" type="tel" placeholder="+420 XXX XXX XXX" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Adresa instalace</Label>
                    <Input id="address" placeholder="Město, PSČ" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="houseType">Typ budovy *</Label>
                      <select 
                        id="houseType"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Vyberte typ budovy</option>
                        <option value="rodinny-dum">Rodinný dům</option>
                        <option value="bytovy-dum">Bytový dům</option>
                        <option value="kancelare">Kanceláře</option>
                        <option value="prumysl">Průmyslová budova</option>
                        <option value="jine">Jiné</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="area">Plocha k vytápění (m²) *</Label>
                      <Input id="area" type="number" placeholder="150" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="currentHeating">Současný způsob vytápění</Label>
                    <select 
                      id="currentHeating"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Vyberte současné vytápění</option>
                      <option value="plyn">Plynový kotel</option>
                      <option value="elektro">Elektrické vytápění</option>
                      <option value="uhli">Uhelný kotel</option>
                      <option value="drevo">Dřevo/pelety</option>
                      <option value="tepelne-cerpadlo">Tepelné čerpadlo</option>
                      <option value="jine">Jiné</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="preferredBrand">Preferovaná značka</Label>
                    <select 
                      id="preferredBrand"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Bez preference</option>
                      <option value="ivt">IVT</option>
                      <option value="bosch">Bosch</option>
                      <option value="viessmann">Viessmann</option>
                      <option value="nibe">NIBE</option>
                      <option value="panasonic">Panasonic</option>
                      <option value="lg">LG</option>
                      <option value="vaillant">Vaillant</option>
                      <option value="stiebel-eltron">Stiebel Eltron</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="budget">Předpokládaný rozpočet</Label>
                    <select 
                      id="budget"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Vyberte rozpočet</option>
                      <option value="do-300k">Do 300 000 Kč</option>
                      <option value="300-500k">300 000 - 500 000 Kč</option>
                      <option value="500-800k">500 000 - 800 000 Kč</option>
                      <option value="nad-800k">Nad 800 000 Kč</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="timeline">Kdy plánujete instalaci?</Label>
                    <select 
                      id="timeline"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Vyberte termín</option>
                      <option value="co-nejdriv">Co nejdříve</option>
                      <option value="1-3-mesice">1-3 měsíce</option>
                      <option value="3-6-mesicu">3-6 měsíců</option>
                      <option value="do-roku">Do roku</option>
                      <option value="jen-informace">Jen sbírám informace</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Dodatečné informace</Label>
                    <textarea 
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Napište nám jakékoli dodatečné informace o vašem projektu..."
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input 
                      type="checkbox" 
                      id="gdpr" 
                      className="mt-1" 
                      required
                    />
                    <Label htmlFor="gdpr" className="text-sm text-gray-600">
                      Souhlasím se zpracováním osobních údajů pro účely této poptávky *
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input 
                      type="checkbox" 
                      id="newsletter" 
                      className="mt-1"
                    />
                    <Label htmlFor="newsletter" className="text-sm text-gray-600">
                      Chci dostávat novinky o tepelných čerpadlech a speciálních nabídkách
                    </Label>
                  </div>

                  <Button className="w-full text-lg py-3">
                    Odeslat poptávku
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Odesláním formuláře souhlasíte s našimi obchodními podmínkami
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Kontaktní informace</CardTitle>
                  <CardDescription>
                    Preferujete přímý kontakt? Rádi vám poradíme
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <div className="text-lg">📞</div>
                    </div>
                    <div>
                      <h3 className="font-semibold">Telefon</h3>
                      <p className="text-gray-600">+420 XXX XXX XXX</p>
                      <p className="text-sm text-gray-500">Po-Pá 8:00-17:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <div className="text-lg">✉️</div>
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">info@tepelnacerpadla.cz</p>
                      <p className="text-sm text-gray-500">Odpovídáme do 24 hodin</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <div className="text-lg">📍</div>
                    </div>
                    <div>
                      <h3 className="font-semibold">Sídlo firmy</h3>
                      <p className="text-gray-600">
                        Praha, Brno, Ostrava<br />
                        Pokrýváme celou ČR
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <div className="text-lg">🕐</div>
                    </div>
                    <div>
                      <h3 className="font-semibold">Provozní doba</h3>
                      <p className="text-gray-600">
                        Po-Pá: 8:00 - 17:00<br />
                        So: 9:00 - 12:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Proces spolupráce</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white text-sm rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-semibold">Nezávazná poptávka</h4>
                        <p className="text-sm text-gray-600">Vyplníte formulář s vašimi požadavky</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white text-sm rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-semibold">Konzultace</h4>
                        <p className="text-sm text-gray-600">Ozveme se do 24h a domluvíme si schůzku</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white text-sm rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-semibold">Obhlídka a návrh</h4>
                        <p className="text-sm text-gray-600">Navštívíme vás a připravíme detailní návrh</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white text-sm rounded-full flex items-center justify-center font-bold">4</div>
                      <div>
                        <h4 className="font-semibold">Instalace</h4>
                        <p className="text-sm text-gray-600">Profesionální montáž certifikovanými techniky</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary text-white text-sm rounded-full flex items-center justify-center font-bold">5</div>
                      <div>
                        <h4 className="font-semibold">Servis</h4>
                        <p className="text-sm text-gray-600">Celoživotní servisní podpora</p>
                      </div>
                    </div>
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