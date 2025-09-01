import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const blogPosts = [
  {
    slug: "dotace-na-tepelna-cerpadla-2024-2025",
    title: "Dotace na tepelná čerpadla v roce 2024-2025: Kompletní průvodce",
    excerpt: "Získejte až 180 000 Kč na nové tepelné čerpadlo. Průvodce všemi dotačními programy včetně Nová zelená úsporám Light.",
    category: "Dotace",
    readTime: "8 min",
    date: "2024-11-01",
    image: "/images/blog/dotace-2024.jpg"
  },
  {
    slug: "jak-vybrat-tepelne-cerpadlo",
    title: "Jak vybrat tepelné čerpadlo pro rodinný dům v roce 2024",
    excerpt: "Vzduch-voda, země-voda nebo voda-voda? Poradíme vám, jak zvolit správný typ tepelného čerpadla pro váš domov.",
    category: "Průvodce",
    readTime: "12 min",
    date: "2024-10-28",
    image: "/images/blog/jak-vybrat-cerpadlo.jpg"
  },
  {
    slug: "uspory-energie-tepelne-cerpadlo",
    title: "Kolik skutečně ušetříte s tepelným čerpadlem? Kalkulace nákladů",
    excerpt: "Analýza skutečných úspor energie a nákladů na vytápění s tepelným čerpadlem oproti plynovému kotli.",
    category: "Úspory",
    readTime: "10 min",
    date: "2024-10-25",
    image: "/images/blog/uspory-naklady.jpg"
  },
  {
    slug: "instalace-tepelneho-cerpadla-postup",
    title: "Instalace tepelného čerpadla: Krok za krokem průvodce 2024",
    excerpt: "Kompletní proces instalace od výběru místa až po uvedení do provozu. Co očekávat a jak se připravit.",
    category: "Instalace",
    readTime: "15 min",
    date: "2024-10-22",
    image: "/images/blog/instalace-postup.jpg"
  },
  {
    slug: "nejlepsi-znacky-tepelnych-cerpadel",
    title: "Nejlepší značky tepelných čerpadel 2024: Srovnání a recenze",
    excerpt: "Detailní srovnání top značek jako Viessmann, NIBE, Bosch a dalších. Který výrobce nabízí nejlepší poměr cena/výkon?",
    category: "Srovnání",
    readTime: "18 min",
    date: "2024-10-19",
    image: "/images/blog/srovnani-znacek.jpg"
  },
  {
    slug: "tepelne-cerpadlo-vs-plynovy-kotel",
    title: "Tepelné čerpadlo vs plynový kotel: Která volba je lepší v 2024?",
    excerpt: "Objektivní srovnání investičních a provozních nákladů, environmentálního dopadu a komfortu použití.",
    category: "Srovnání",
    readTime: "14 min",
    date: "2024-10-16",
    image: "/images/blog/cerpadlo-vs-kotel.jpg"
  },
  {
    slug: "udrzba-tepelneho-cerpadla",
    title: "Údržba tepelného čerpadla: Kompletní průvodce pro majitele",
    excerpt: "Jak správně udržovat tepelné čerpadlo, aby vám sloužilo desítky let. Tipy pro každoroční i dlouhodobou péči.",
    category: "Údržba",
    readTime: "11 min",
    date: "2024-10-13",
    image: "/images/blog/udrzba-cerpadla.jpg"
  },
  {
    slug: "tepelne-cerpadlo-v-zime",
    title: "Funguje tepelné čerpadlo i v mrazu? Mýty a skutečnost",
    excerpt: "Rozptýlíme mýty o fungování tepelných čerpadel při nízkých teplotách a ukážeme reálná data z provozu.",
    category: "Technologie",
    readTime: "9 min",
    date: "2024-10-10",
    image: "/images/blog/cerpadlo-zima.jpg"
  },
  {
    slug: "hybridni-topeni-cerpadlo-kotel",
    title: "Hybridní topení: Tepelné čerpadlo + plynový kotel jako ideální kombinace",
    excerpt: "Jak zkombinovat tepelné čerpadlo s existujícím kotlem pro maximální efektivitu a spolehlivost systému.",
    category: "Hybridní systémy",
    readTime: "13 min",
    date: "2024-10-07",
    image: "/images/blog/hybridni-topeni.jpg"
  },
  {
    slug: "chyby-pri-instalaci-tepelneho-cerpadla",
    title: "10 nejčastějších chyb při instalaci tepelného čerpadla a jak se jim vyhnout",
    excerpt: "Praktické rady od odborníků, které vám pomohou vyhnout se drahým chybám při výběru a instalaci.",
    category: "Instalace",
    readTime: "16 min",
    date: "2024-10-04",
    image: "/images/blog/chyby-instalace.jpg"
  }
];

const categories = ["Všechny", "Dotace", "Průvodce", "Úspory", "Instalace", "Srovnání", "Údržba", "Technologie", "Hybridní systémy"];

export default function BlogPage() {
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
              <a href="#blog" className="text-primary font-semibold">Blog</a>
              <Link href="/kontakt" className="text-gray-700 hover:text-primary transition-colors">Kontakt</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Blog o tepelných čerpadlech
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Odborné články, návody a novinky ze světa tepelných čerpadel. 
            Získejte nejaktuálnější informace od expertů.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "Všechny" ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Doporučený článek</h2>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-400 text-lg">Obrázek článku</div>
                </div>
              </div>
              <div className="md:w-1/2">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge>{blogPosts[0].category}</Badge>
                    <span className="text-sm text-gray-500">{blogPosts[0].readTime}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{new Date(blogPosts[0].date).toLocaleDateString('cs-CZ')}</span>
                  </div>
                  <CardTitle className="text-2xl mb-2">{blogPosts[0].title}</CardTitle>
                  <CardDescription className="text-base">{blogPosts[0].excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/blog/${blogPosts[0].slug}`}>
                    <Button className="w-full md:w-auto">Číst článek</Button>
                  </Link>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Všechny články</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow cursor-pointer group overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-400">Obrázek článku</div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      {new Date(post.date).toLocaleDateString('cs-CZ')}
                    </span>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="text-primary hover:bg-primary hover:text-primary-foreground">
                        Číst více →
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Nezmeškejte nové články</h2>
          <p className="text-xl text-gray-600 mb-8">
            Přihlaste se k odběru a dostávejte nejnovější články o tepelných čerpadlech přímo do emailu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Váš email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg" className="px-8">
              Přihlásit se
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Zasíláme max. 1-2 emaily měsíčně. Žádný spam.
          </p>
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