import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  Building2,
  ChevronRight,
  Factory,
  Leaf,
  Menu,
  ShieldCheck,
  Sparkles,
  Sun,
  X,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import ledBulb from "@/assets/akash-led-bulb.jpg";
import solarBulbAsset from "@/assets/akash-solar-bulb.png.asset.json";
import emergencyBulb from "@/assets/akash-emergency-bulb.jpg";

const solarBulb = solarBulbAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akash Electricals | LED & Solar Bulbs" },
      {
        name: "description",
        content:
          "Akash Electricals manufactures dependable LED, solar and emergency bulbs for homes, businesses and dealers.",
      },
      { property: "og:title", content: "Akash Electricals | LED & Solar Bulbs" },
      {
        property: "og:description",
        content: "Efficient lighting, engineered for everyday India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  {
    name: "Everyday LED",
    type: "Efficient lighting",
    copy: "Clear, consistent light with low power consumption for homes and commercial spaces.",
    image: ledBulb,
    icon: Zap,
    specs: ["Up to 90% energy saving", "Wide voltage protection"],
  },
  {
    name: "Solar Bulb",
    type: "Off-grid ready",
    copy: "Portable solar lighting designed for dependable illumination wherever the grid cannot reach.",
    image: solarBulb,
    icon: Sun,
    specs: ["Solar rechargeable", "Portable hanging loop"],
  },
  {
    name: "Emergency LED",
    type: "Power-cut backup",
    copy: "A powerful rechargeable bulb that keeps rooms illuminated when the mains supply stops.",
    image: emergencyBulb,
    icon: BatteryCharging,
    specs: ["Automatic backup", "High-lumen output"],
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const product = products[activeProduct];
  if (!product) return null;
  const ProductIcon = product.icon;

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Akash Electricals home">
            <span className="grid size-10 place-items-center rounded-lg bg-primary text-primary-foreground shadow-glow">
              <Zap className="size-5" fill="currentColor" />
            </span>
            <span>
              <span className="block font-display text-base font-bold leading-none">AKASH</span>
              <span className="mt-1 block text-[10px] font-semibold tracking-[0.22em] text-muted-foreground">
                ELECTRICALS
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex" aria-label="Main navigation">
            <a className="nav-link" href="#products">Products</a>
            <a className="nav-link" href="#why-us">Why us</a>
            <a className="nav-link" href="#dealers">Dealers</a>
          </nav>

          <div className="hidden md:block">
            <Button asChild size="lg" className="rounded-full px-6 shadow-glow">
              <a href="#contact">Get catalogue <ArrowRight /></a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="glass-panel mx-5 grid gap-1 p-3 md:hidden" aria-label="Mobile navigation">
            {[
              ["Products", "#products"],
              ["Why us", "#why-us"],
              ["Dealers", "#dealers"],
              ["Get catalogue", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-md px-4 py-3 text-sm hover:bg-accent">
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="top" className="hero-grid relative min-h-[92svh] pt-28">
        <div className="mx-auto grid min-h-[calc(92svh-7rem)] max-w-7xl items-center gap-8 px-5 pb-10 sm:px-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative z-10 max-w-3xl py-10">
            <div className="eyebrow mb-7 w-fit">
              <Sparkles className="size-3.5 text-primary" />
              Made to brighten every India
            </div>
            <h1 className="font-display text-[clamp(3.3rem,7vw,7rem)] font-bold leading-[0.9] tracking-normal">
              Lighting that
              <span className="mt-2 block text-shine">works smarter.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Reliable LED and solar lighting, manufactured for lasting performance and supplied for homes, businesses, and dealer networks.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 rounded-full px-7 shadow-glow">
                <a href="#products">Explore products <ArrowRight /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-full border-glass bg-glass px-7 backdrop-blur-md">
                <a href="#dealers">Become a dealer</a>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-border/60 pt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><BadgeCheck className="size-4 text-secondary" /> Quality checked</span>
              <span className="flex items-center gap-2"><Leaf className="size-4 text-secondary" /> Energy efficient</span>
              <span className="flex items-center gap-2"><Factory className="size-4 text-secondary" /> Direct supply</span>
            </div>
          </div>

          <div className="relative flex min-h-[520px] items-center justify-center lg:min-h-[680px]">
            <div className="orbital-ring" aria-hidden="true" />
            <div className="hero-product-card">
              <img
                src={ledBulb}
                alt="Akash Electricals warm LED bulb"
                width={1200}
                height={1408}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="glass-float left-0 top-[20%] sm:left-[4%]">
              <span className="metric-value">80%</span>
              <span className="metric-label">Energy saved</span>
            </div>
            <div className="glass-float bottom-[14%] right-0 sm:right-[2%]">
              <span className="mb-2 grid size-8 place-items-center rounded-full bg-secondary/15 text-secondary"><ShieldCheck className="size-4" /></span>
              <span className="metric-label">Built to last</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-surface/50 py-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border/60 px-5 sm:px-8 md:grid-cols-4">
          {[["LED", "Advanced efficiency"], ["SOLAR", "Clean energy"], ["B2B", "Dealer supply"], ["QC", "Tested quality"]].map(([big, small]) => (
            <div key={big} className="px-4 py-5 text-center">
              <div className="font-display text-2xl font-bold">{big}</div>
              <div className="mt-1 text-xs text-muted-foreground">{small}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Our range</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">One light for every need.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">Thoughtfully engineered products that balance brightness, power savings, and everyday durability.</p>
        </div>

        <div className="grid overflow-hidden rounded-lg border border-border bg-card lg:grid-cols-[0.38fr_0.62fr]">
          <div className="flex flex-col border-b border-border lg:border-b-0 lg:border-r">
            {products.map((item, index) => {
              const Icon = item.icon;
              const active = activeProduct === index;
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveProduct(index)}
                  className={`product-tab ${active ? "product-tab-active" : ""}`}
                  aria-pressed={active}
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground"><Icon className="size-5" /></span>
                  <span className="min-w-0 text-left">
                    <span className="block font-semibold">{item.name}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">{item.type}</span>
                  </span>
                  <ChevronRight className="ml-auto size-4 text-muted-foreground" />
                </button>
              );
            })}
          </div>

          <div className="grid min-h-[560px] bg-surface md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <span className="mb-7 grid size-12 place-items-center rounded-lg bg-primary text-primary-foreground shadow-glow"><ProductIcon className="size-5" /></span>
              <p className="section-kicker">{product.type}</p>
              <h3 className="mt-3 font-display text-4xl font-bold">{product.name}</h3>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">{product.copy}</p>
              <ul className="mt-7 space-y-3 text-sm">
                {product.specs.map((spec) => <li key={spec} className="flex items-center gap-3"><BadgeCheck className="size-4 text-secondary" />{spec}</li>)}
              </ul>
            </div>
            <div className="relative min-h-[420px] overflow-hidden">
              <img key={product.image} src={product.image} alt={`${product.name} by Akash Electricals`} loading="lazy" width={1200} height={1408} className="product-showcase h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="border-y border-border/60 bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="section-kicker">Built on consistency</p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">Good light begins with good engineering.</h2>
              <p className="mt-6 max-w-xl leading-7 text-muted-foreground">From component selection to final testing, our focus stays on dependable products dealers can recommend with confidence.</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
              {[
                [ShieldCheck, "Quality assurance", "Each product is checked for stable performance and safety."],
                [Zap, "Efficient output", "Bright illumination designed to use less electricity."],
                [Sun, "Solar innovation", "Practical lighting solutions that harness clean energy."],
                [Building2, "Dealer support", "Responsive supply and product assistance for trade partners."],
              ].map(([Icon, title, copy]) => {
                const FeatureIcon = Icon as typeof ShieldCheck;
                return <article key={title as string} className="bg-card p-7 sm:p-8"><FeatureIcon className="size-6 text-primary" /><h3 className="mt-6 font-display text-xl font-bold">{title as string}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{copy as string}</p></article>;
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="dealers" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="dealer-panel relative overflow-hidden p-8 sm:p-12 lg:p-16">
          <div className="relative z-10 max-w-2xl">
            <p className="section-kicker">Grow with Akash</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-6xl">Let’s light up more markets, together.</h2>
            <p className="mt-6 max-w-xl leading-7 text-muted-foreground">Join our dealer network for a practical product range, reliable supply, and a partnership built for the long run.</p>
            <Button asChild size="lg" className="mt-9 h-12 rounded-full px-7 shadow-glow"><a href="#contact">Start a conversation <ArrowRight /></a></Button>
          </div>
          <div className="dealer-sun" aria-hidden="true"><Sun className="size-32" strokeWidth={0.7} /></div>
        </div>
      </section>

      <section id="contact" className="border-t border-border/60 bg-surface py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="section-kicker">Enquiries</p>
            <h2 className="mt-3 font-display text-4xl font-bold">Tell us what you need.</h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground">Ask for the latest product catalogue, dealer terms, or help choosing the right lighting range.</p>
          </div>
          {submitted ? (
            <div className="glass-panel flex min-h-72 flex-col items-center justify-center p-8 text-center" role="status">
              <span className="grid size-14 place-items-center rounded-full bg-secondary/15 text-secondary"><BadgeCheck className="size-7" /></span>
              <h3 className="mt-5 font-display text-2xl font-bold">Enquiry noted</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">Thank you. The Akash Electricals team can now follow up on your requirement.</p>
              <Button variant="ghost" className="mt-4" onClick={() => setSubmitted(false)}>Send another</Button>
            </div>
          ) : (
            <form onSubmit={submitEnquiry} className="glass-panel grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
              <label className="form-field"><span>Name</span><input required name="name" placeholder="Your name" /></label>
              <label className="form-field"><span>Phone</span><input required name="phone" inputMode="tel" placeholder="Your phone number" /></label>
              <label className="form-field sm:col-span-2"><span>I am interested in</span><select name="interest" defaultValue="dealer"><option value="dealer">Becoming a dealer</option><option value="catalogue">Product catalogue</option><option value="bulk">Bulk purchase</option><option value="other">Other enquiry</option></select></label>
              <label className="form-field sm:col-span-2"><span>Message</span><textarea name="message" rows={4} placeholder="Share your city and requirement" /></label>
              <div className="sm:col-span-2"><Button type="submit" size="lg" className="h-12 w-full rounded-full sm:w-auto sm:px-8">Send enquiry <ArrowRight /></Button></div>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span className="flex items-center gap-2 font-semibold text-foreground"><Zap className="size-4 text-primary" fill="currentColor" /> AKASH ELECTRICALS</span>
          <span>LED bulbs · Solar bulbs · Dealer supply</span>
        </div>
      </footer>
    </main>
  );
}