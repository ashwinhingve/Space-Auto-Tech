"use client";
import ImagePlaceholder from "@/app/component/ImagePlaceholder";
import Link from "next/link";

const productGroups = [
  {
    title: "Irrigation",
    items: [
      { id: 1, name: "Sprinkler System", price: "₹16.00", image: "/product/sprincal.jpeg" },
      { id: 2, name: "Drip Irrigation Pipes", price: "₹21.15", image: "/product/dripp.webp" },
      { id: 3, name: "Drip Accessories", price: "₹12.00", image: "/product/dripa.jpg" },
      { id: 4, name: "HDPE Pipes", price: "₹18.40", image: "/product/HDPE.jpg" },
      { id: 5, name: "PVC Pipes", price: "₹16.00", image: "/product/pvc.jpg" },
      { id: 6, name: "Irrigation Valve", price: "₹21.15", image: "/product/valve.jpg" },
      { id: 7, name: "Irrigation Tool", price: "₹12.00", image: "/product/tool.jpg" },
      { id: 8, name: "Laser Spray Pipe", price: "₹18.40", image: "/product/laser.jpg" },
      { id: 9, name: "Motors", price: "₹18.90", image: "/product/moters.jpg" },
    ],
  },
  {
    title: "Farming",
    items: [
      { id: 101, name: "Small Tools", price: "₹16.00", image: "/product/Smalltools.webp" },
      { id: 102, name: "Tractor Tools", price: "₹21.15", image: "/product/Tractortools.jpg" },
      { id: 103, name: "Tractor Accessories", price: "₹12.00", image: "/product/accessories.jpg" },
      { id: 104, name: "Pesticides", price: "₹18.40", image: "/product/Pesticides.jpg" },
      { id: 105, name: "Fertilisers", price: "₹16.00", image: "/product/fertilisers.jpg" },
      { id: 106, name: "Seeds", price: "₹21.15", image: "/product/Seeds.webp" },
    ],
  },
  {
    title: "IoT Hardware",
    items: [
      { id: 201, name: "Arduino Boards", price: "₹16.00", image: "/product/Arduino.jpg" },
      { id: 202, name: "Controllers", price: "₹21.15", image: "/product/Controllers.jpg" },
      { id: 203, name: "Gateways", price: "₹12.00", image: "/product/Gateways.jpg" },
      { id: 204, name: "Limit Switch", price: "₹18.40", image: "/product/LimitSwitch.jpeg" },
      { id: 205, name: "Relay Boards", price: "₹16.00", image: "/product/RelayBoards.jpg" },
    ],
  },
];

export default function ProductPage() {
  return (
    <div className="pt-16 bg-cloud min-h-screen">
      <section className="relative overflow-hidden bg-white border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="container-xl relative py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="section-label mb-5">Product Catalog</div>
            <h1 className="section-heading-modern mb-5">Explore Our Automation Product Range</h1>
            <p className="section-copy-muted">Curated products for irrigation, farming, and IoT systems with ready-to-deploy options.</p>
          </div>
        </div>
      </section>

      {productGroups.map((group) => (
        <section key={group.title} className="section bg-white even:bg-cloud">
          <div className="container-xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-3xl font-semibold text-ink tracking-[-0.01em]">{group.title}</h2>
              <span className="badge-indigo">{group.items.length} Items</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {group.items.map((product) => (
                <Link
                  key={product.id}
                  href={`/components/product/${product.id}`}
                  className="modern-panel card-hover-lift group bg-white rounded-2xl border border-slate-200/80 shadow-card overflow-hidden hover:shadow-card-hover"
                >
                  <div className="relative h-52">
                    <ImagePlaceholder src={product.image} variant="neutral" className="w-full h-full" alt={product.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] font-mono tracking-widest uppercase text-steel/75 mb-1">Category</p>
                    <h3 className="text-base font-semibold text-ink group-hover:text-cerulean transition-colors">{product.name}</h3>
                    <p className="mt-2 text-sm font-semibold text-cerulean">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}