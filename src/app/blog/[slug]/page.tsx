import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { notFound } from 'next/navigation';

const blogPosts = {
  "dotace-na-tepelna-cerpadla-2024-2025": {
    title: "Dotace na tepelná čerpadla v roce 2024-2025: Kompletní průvodce",
    excerpt: "Získejte až 180 000 Kč na nové tepelné čerpadlo. Průvodce všemi dotačními programy včetně Nová zelená úsporám Light.",
    category: "Dotace",
    readTime: "8 min",
    date: "2024-11-01",
    content: `
# Dotace na tepelná čerpadla v roce 2024-2025: Kompletní průvodce

Pokud uvažujete o pořízení tepelného čerpadla, máte štěstí! Česká republika nabízí několik dotačních programů, které mohou pokrýt značnou část nákladů na nové ekologické vytápění. V tomto článku najdete kompletní přehled všech dostupných dotací a praktické tipy, jak si je zajistit.

## Aktuální dotační programy v roce 2024-2025

### 1. Nová zelená úsporám Light

**Komu je určena:** Domácnostem s nižšími příjmy
**Výše dotace:** Až 150 000 Kč pro tepelná čerpadla

Tento program nahradil v září 2024 populární Kotlíkové dotace a je zaměřen na rodiny s omezenými finančními možnostmi.

**Podmínky způsobilosti:**
- Příjemce musí být vlastníkem nebo spoluvlastníkem nemovitosti
- Musí mít v této nemovitosti trvalé bydliště
- Poživá starobní nebo invalidní důchod 3. stupně
- Příjem domácnosti nepřesáhne stanovené limity

**Podporované typy čerpadel:**
- Vzduch-voda tepelná čerpadla
- Země-voda (geotermální) systémy
- Pouze systémy s hydronovým rozvodem

### 2. Nová zelená úsporám (standardní program)

**Komu je určena:** Všem vlastníkům rodinných domů
**Výše dotace:** 
- Vzduch-voda tepelná čerpadla: až 140 000 Kč
- Země-voda systémy: až 180 000 Kč

**Podmínky:**
- Rodinný dům musí být starší 2 let
- Nové čerpadlo musí nahradit stávající zdroj vytápění
- Minimální účinnost SCOP 4,0 pro vzduch-voda a 4,5 pro země-voda
- Certifikované instalatér

## Jak postupovat při žádosti o dotaci

### Krok 1: Příprava dokumentace
Před podáním žádosti si připravte:
- Energetický štítek budovy
- Projektovou dokumentaci
- Cenovou nabídku od certifikovaného dodavatele
- Doklady o vlastnictví nemovitosti

### Krok 2: Podání žádosti
- Žádosti se podávají online přes portál SFŽP
- Důležité je dodržet harmonogram příjmu žádostí
- Po schválení máte 12 měsíců na realizaci

### Krok 3: Realizace a vyúčtování
- Instalaci provádí pouze certifikovaná firma
- Po dokončení nasdílejte faktury a protokol o uvedení do provozu
- Dotace je vyplacena do 60 dnů po schválení vyúčtování

## Kombinace s dalšími podporami

### Podpora z EU fondů
V některých regionech můžete čerpat dodatečné prostředky z evropských strukturálních fondů.

### Daňové úlevy
Využijte slevu na dani z příjmu ve výši 50 000 Kč ročně po dobu 3 let pro úsporné renovace.

### Zvýhodněné úvěry
Česká spořitelna a další banky nabízejí speciální úvěry na ekologické vytápění s výhodnými úrokovými sazbami.

## Nejčastější chyby při žádání o dotaci

### ❌ Pozdní podání žádosti
Dotační programy mají omezené množství prostředků. Žádost podávejte co nejdříve po vyhlášení výzvy.

### ❌ Nesprávná dokumentace
Nekompletní nebo nesprávně vyplněná dokumentace vede k zamítnutí žádosti.

### ❌ Volba nevhodného dodavatele
Vyberte si pouze certifikovaného dodavatele s referencemi a pojištěním.

### ❌ Ignorování technických požadavků
Ověřte si, že vybrané čerpadlo splňuje všechny technické parametry programu.

## Časový harmonogram na rok 2024-2025

**Prosinec 2024 - Březen 2025:** Příjem žádostí Nová zelená úsporám Light
**Duben - Červenec 2025:** První kolo standardního programu Nová zelená úsporám
**Září - Listopad 2025:** Druhé kolo dotací (podle dostupnosti prostředků)

## Kalkulace návratnosti s dotací

### Příklad: Rodinný dům 150 m²

**Náklady na tepelné čerpadlo:** 400 000 Kč
**Dotace:** 140 000 Kč  
**Skutečné náklady:** 260 000 Kč

**Roční úspory oproti plynovému kotli:** 35 000 Kč
**Doba návratnosti:** 7,4 roku

## Doporučení pro žadatele

1. **Začněte plánovat už nyní** - příprava dokumentace trvá několik týdnů
2. **Konzultujte s odborníky** - správný výběr čerpadla je klíčový
3. **Sledujte aktuální informace** - podmínky se mohou měnit
4. **Neváhejte kontaktovat SFŽP** při nejasnostech

## Závěr

Dotace na tepelná čerpadla představují jedinečnou příležitost, jak výrazně snížit náklady na moderní a ekologické vytápění. S správnou přípravou a odbornou podporou můžete ušetřit až 180 000 Kč a investovat do budoucnosti vašeho domova.

Máte otázky k dotacím nebo potřebujete pomoct s výběrem tepelného čerpadla? Kontaktujte naše odborníky pro bezplatnou konzultaci.

---

*Tento článek byl naposledy aktualizován 1. listopadu 2024. Informace o dotačních programech se mohou změnit - vždy ověřte aktuální podmínky na stránkách SFŽP.*
    `
  },
  
  "jak-vybrat-tepelne-cerpadlo": {
    title: "Jak vybrat tepelné čerpadlo pro rodinný dům v roce 2024",
    excerpt: "Vzduch-voda, země-voda nebo voda-voda? Poradíme vám, jak zvolit správný typ tepelného čerpadla pro váš domov.",
    category: "Průvodce",
    readTime: "12 min",
    date: "2024-10-28",
    content: `
# Jak vybrat tepelné čerpadlo pro rodinný dům v roce 2024

Výběr správného tepelného čerpadla je klíčové rozhodnutí, které ovlivní vaše pohodlí a náklady na vytápění na příštích 15-20 let. V tomto podrobném průvodci vás provedeme celým procesem výběru a pomůžeme vám najít optimální řešení pro váš domov.

## Základní typy tepelných čerpadel

### 1. Vzduch-voda čerpadla (nejpopulárnější volba)

**Jak fungují:** Odebírají teplo z venkovního vzduchu a předávají ho do otopné soustavy
**Investiční náklady:** 200 000 - 400 000 Kč
**COP:** 3,5 - 5,5

**✅ Výhody:**
- Nižší pořizovací náklady
- Jednodušší instalace
- Nevyžaduje povolení k zemním pracím
- Vhodné pro většinu domů

**❌ Nevýhody:**
- Nižší účinnost při velmi nízkých teplotách
- Možný hluk (moderní modely už jsou velmi tiché)
- Závislost na venkovní teplotě

### 2. Země-voda čerpadla (geotermální)

**Jak fungují:** Využívají stálou teplotu zeminy ve hloubce 1-2 metry
**Investiční náklady:** 300 000 - 600 000 Kč
**COP:** 4,0 - 6,0

**✅ Výhody:**
- Nejvyšší účinnost po celý rok
- Stabilní výkon nezávislý na počasí
- Dlouhá životnost
- Možnost chlazení v létě

**❌ Nevýhody:**
- Vyšší investiční náklady
- Potřeba většího pozemku
- Složitější instalace

### 3. Voda-voda čerpadla

**Jak fungují:** Využívají teplo spodní vody ze studny
**Investiční náklady:** 350 000 - 700 000 Kč
**COP:** 4,5 - 6,5

**✅ Výhody:**
- Nejvyšší účinnost ze všech typů
- Konstantní výkon
- Kompaktní řešení

**❌ Nevýhody:**
- Potřeba dostupnosti spodní vody
- Povolení k odběru vody
- Riziko zanesení výměníků

## Jak určit potřebný výkon?

### Výpočet tepelné ztráty

**Základní orientační výpočet:**
- Dobře zateplený dům: 40-60 W/m²
- Středně zateplený dům: 60-100 W/m²
- Nezateplený starší dům: 100-150 W/m²

**Příklad pro dům 150 m²:**
- Dobře zateplený: 6-9 kW
- Středně zateplený: 9-15 kW
- Nezateplený: 15-22 kW

### Faktory ovlivňující výkon

1. **Kvalita zateplení**
2. **Výška stropu**
3. **Počet a velikost oken**
4. **Orientace domu ke světovým stranám**
5. **Místní klimatické podmínky**

## Klíčové parametry při výběru

### SCOP (Seasonal Coefficient of Performance)
- Ukazuje průměrnou účinnost během topné sezóny
- Minimum pro dotace: 4,0 (vzduch-voda) a 4,5 (země-voda)
- Čím vyšší, tím lepší: moderní čerpadla dosahují SCOP 4,5-5,5

### Minimální provozní teplota
- Kvalitní vzduch-voda čerpadla pracují až do -25°C
- Levnější modely mají limit -15°C až -20°C
- Pro ČR doporučujeme limit minimálně -20°C

### Hlučnost
- Moderní čerpadla: 45-55 dB(A)
- Nejlepší modely: pod 45 dB(A)
- Důležité pro vztahy se sousedy

## Nejlepší značky pro rok 2024

### Premium segment
**Viessmann Vitocal 151-A**
- SCOP až 4,8
- R290 chladivo
- Provoz do -25°C
- Cena: 350 000 - 450 000 Kč

**NIBE F2120**
- SCOP > 5,0
- Výstupní teplota až 65°C při -25°C
- myUplink aplikace
- Cena: 400 000 - 500 000 Kč

### Střední segment
**Bosch Compress 7800i LW**
- Modulace 2-16 kW
- Wi-Fi připojení
- Tichý provoz
- Cena: 280 000 - 380 000 Kč

**Panasonic Aquarea J Series**
- COP až 5,33
- R32 chladivo
- T-CAP technologie
- Cena: 260 000 - 350 000 Kč

### Ekonomický segment
**IVT Greenline HE**
- Osvědčená technologie
- Výkony 6-17 kW
- Dobrý poměr cena/výkon
- Cena: 200 000 - 300 000 Kč

## Checklist pro rozhodování

### ✓ Technické aspekty
- [ ] Určil jsem tepelnou ztrátu domu
- [ ] Vybral jsem vhodný typ čerpadla
- [ ] Ověřil jsem kompatibilitu s otopnou soustavou
- [ ] Zvážil jsem možnost chlazení

### ✓ Finanční aspekty
- [ ] Naplánoval jsem rozpočet včetně instalace
- [ ] Prověřil jsem možnosti dotací
- [ ] Spočítal jsem dobu návratnosti
- [ ] Zajistil jsem financování

### ✓ Praktické aspekty
- [ ] Ověřil jsem dostupnost místa pro instalaci
- [ ] Prověřil jsem hlukové parametry
- [ ] Vybral jsem certifikovaného instalatéra
- [ ] Zajistil jsem servisní podporu

## Často kladené otázky

**Q: Lze tepelné čerpadlo kombinovat s existujícím kotlem?**
A: Ano, hybridní systémy jsou velmi populární. Čerpadlo pokrývá většinu potřeb, kotel slouží jako záloha při extrémních mrazech.

**Q: Vyplatí se tepelné čerpadlo ve starém domě?**
A: Může se vyplatit, ale často je potřeba zateplení nebo výměna radiátorů za větší. Doporučujeme energetický audit.

**Q: Jak dlouho trvá instalace?**
A: Vzduch-voda čerpadlo: 2-3 dny, země-voda čerpadlo: 5-7 dnů včetně zemních prací.

## Závěr

Výběr tepelného čerpadla není jen o ceně - jde o dlouhodobou investici do pohodlí a úspor. Věnujte čas správnému výběru a neváhejte konzultovat s odborníky. Správně zvolené a nainstalované čerpadlo vám poskytne spolehlivé vytápění na desítky let.

---

*Potřebujete pomoc s výběrem tepelného čerpadla? Naši odborníci vám rádi poradí a připraví nezávaznou nabídku na míru.*
    `
  }
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];
  
  if (!post) {
    notFound();
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
              <Link href="/blog" className="text-primary font-semibold">Blog</Link>
              <Link href="/kontakt" className="text-gray-700 hover:text-primary transition-colors">Kontakt</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="text-primary hover:underline mb-6 inline-block">
            ← Zpět na blog
          </Link>
          
          <div className="mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <Badge>{post.category}</Badge>
              <span className="text-gray-500">{post.readTime}</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">{new Date(post.date).toLocaleDateString('cs-CZ')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-gray max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-gray-900">{paragraph.slice(2)}</h1>;
                } else if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold mt-6 mb-3 text-gray-900">{paragraph.slice(3)}</h2>;
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-bold mt-5 mb-2 text-gray-900">{paragraph.slice(4)}</h3>;
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={index} className="font-bold my-2">{paragraph.slice(2, -2)}</p>;
                } else if (paragraph.startsWith('*') && paragraph.endsWith('*') && !paragraph.includes('**')) {
                  return <p key={index} className="italic my-2 text-gray-600">{paragraph.slice(1, -1)}</p>;
                } else if (paragraph.startsWith('- ')) {
                  return <li key={index} className="my-1">{paragraph.slice(2)}</li>;
                } else if (paragraph.startsWith('**✅ ')) {
                  return <h4 key={index} className="text-green-600 font-semibold mt-3 mb-2">{paragraph.slice(2)}</h4>;
                } else if (paragraph.startsWith('**❌ ')) {
                  return <h4 key={index} className="text-red-600 font-semibold mt-3 mb-2">{paragraph.slice(2)}</h4>;
                } else if (paragraph.startsWith('**Q: ')) {
                  return <h4 key={index} className="font-semibold mt-4 mb-2">{paragraph.slice(2)}</h4>;
                } else if (paragraph.startsWith('A: ')) {
                  return <p key={index} className="mb-3 text-gray-700">{paragraph.slice(3)}</p>;
                } else if (paragraph.startsWith('---')) {
                  return <hr key={index} className="my-8" />;
                } else if (paragraph.trim() === '') {
                  return <div key={index} className="my-2"></div>;
                } else {
                  return <p key={index} className="my-3">{paragraph}</p>;
                }
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Potřebujete pomoc s výběrem tepelného čerpadla?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Naši odborníci vám rádi poradí a připraví nezávaznou nabídku na míru
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt">
              <Button size="lg" className="text-lg px-8">
                Nezávazná konzultace
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Zavolat: +420 XXX XXX XXX
            </Button>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Související články</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">Srovnání</Badge>
                <CardTitle className="text-lg">Nejlepší značky tepelných čerpadel 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Detailní srovnání top značek a jejich modelů
                </CardDescription>
                <Button variant="ghost" className="mt-4 text-primary">
                  Číst článek →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">Úspory</Badge>
                <CardTitle className="text-lg">Kolik ušetříte s tepelným čerpadlem?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Kalkulace nákladů a návratnosti investice
                </CardDescription>
                <Button variant="ghost" className="mt-4 text-primary">
                  Číst článek →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">Instalace</Badge>
                <CardTitle className="text-lg">Instalace tepelného čerpadla krok za krokem</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Kompletní proces od výběru po uvedení do provozu
                </CardDescription>
                <Button variant="ghost" className="mt-4 text-primary">
                  Číst článek →
                </Button>
              </CardContent>
            </Card>
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
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}