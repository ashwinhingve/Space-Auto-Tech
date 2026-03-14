import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const products = [
  { id: 1, category: "Irrigation", name: "Sprinkler System", price: "₹16.00", image: "/product/sprincal.jpeg" },
  { id: 2, category: "Irrigation", name: "Drip Irrigation Pipes", price: "₹21.15", image: "/product/dripp.webp" },
  { id: 3, category: "Irrigation", name: "Drip Accessories", price: "₹12.00", image: "/product/dripa.jpg" },
  { id: 4, category: "Irrigation", name: "HDPE Pipes", price: "₹18.40", image: "/product/HDPE.jpg" },
  { id: 5, category: "Irrigation", name: "PVC Pipes", price: "₹16.00", image: "/product/pvc.jpg" },
  { id: 6, category: "Irrigation", name: "Irrigation Valve", price: "₹21.15", image: "/product/valve.jpg" },
  { id: 7, category: "Irrigation", name: "Irrigation Tool", price: "₹12.00", image: "/product/tool.jpg" },
  { id: 8, category: "Irrigation", name: "Laser Spray Pipe", price: "₹18.40", image: "/product/laser.jpg" },
  { id: 9, category: "Irrigation", name: "Motors", price: "₹18.90", image: "/product/moters.jpg" },
  { id: 101, category: "Farming", name: "Small Tools", price: "₹16.00", image: "/product/Smalltools.webp" },
  { id: 102, category: "Farming", name: "Tractor Tools", price: "₹21.15", image: "/product/Tractortools.jpg" },
  { id: 103, category: "Farming", name: "Tractor Accessories", price: "₹12.00", image: "/product/accessories.jpg" },
  { id: 104, category: "Farming", name: "Pesticides", price: "₹18.40", image: "/product/Pesticides.jpg" },
  { id: 105, category: "Farming", name: "Fertilisers", price: "₹16.00", image: "/product/fertilisers.jpg" },
  { id: 106, category: "Farming", name: "Seeds", price: "₹21.15", image: "/product/Seeds.webp" },
  { id: 201, category: "IoT Hardware", name: "Arduino Boards", price: "₹16.00", image: "/product/Arduino.jpg" },
  { id: 202, category: "IoT Hardware", name: "Controllers", price: "₹21.15", image: "/product/Controllers.jpg" },
  { id: 203, category: "IoT Hardware", name: "Gateways", price: "₹12.00", image: "/product/Gateways.jpg" },
  { id: 204, category: "IoT Hardware", name: "Limit Switch", price: "₹18.40", image: "/product/LimitSwitch.jpeg" },
  { id: 205, category: "IoT Hardware", name: "Relay Boards", price: "₹16.00", image: "/product/RelayBoards.jpg" },
];

export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id.toString() }));
}

export default function ProductDetail({ params }) {
  const product = products.find((item) => item.id.toString() === params.id);
  if (!product) return notFound();

  return (
    <div className="pt-16 bg-cloud min-h-screen">
      <section className="section">
        <div className="container-xl">
          <div className="mb-6">
            <Link href="/components/product" className="btn-ghost">← Back to Products</Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="modern-panel rounded-3xl overflow-hidden ring-1 ring-slate-300/45 shadow-card-hover relative h-[360px] sm:h-[460px]">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
            </div>

            <div className="card h-fit">
              <p className="text-xs font-mono tracking-widest uppercase text-steel/75 mb-2">{product.category}</p>
              <h1 className="section-heading-modern text-3xl mb-4">{product.name}</h1>
              <p className="text-2xl font-semibold text-cerulean mb-5">{product.price}</p>
              <p className="section-copy-muted mb-5">
                This product is part of our curated catalog for automation-focused deployments. Contact us for compatibility guidance,
                bulk quantity pricing, and installation support.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm"><span className="text-ink/55">Availability</span><span className="font-medium text-ink">In Stock</span></div>
                <div className="flex justify-between text-sm"><span className="text-ink/55">Warranty</span><span className="font-medium text-ink">As Per OEM</span></div>
                <div className="flex justify-between text-sm"><span className="text-ink/55">Support</span><span className="font-medium text-ink">Installation Assistance</span></div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/components/inquiry" className="btn-primary">Request Quote</Link>
                <Link href="/components/contect" className="btn-secondary">Talk to Sales</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}