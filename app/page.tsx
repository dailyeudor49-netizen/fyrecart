"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const hotDeals = [
    { name: "Wireless Earbuds Pro", discount: "35%", original: "€89", now: "€57.85", badge: "HOT" },
    { name: "Power Bank 20000mAh", discount: "28%", original: "€45", now: "€32.40", badge: "FIRE" },
    { name: "Smart Watch Series X", discount: "40%", original: "€120", now: "€72", badge: "BLAZING" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hotDeals.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [hotDeals.length]);

  return (
    <div className="bg-white">
      {/* Hero - Fire Theme */}
      <section className="bg-gradient-to-br from-orange-600 via-red-600 to-yellow-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTRWMjhIMjR2MmgxMnptLTgtMTBoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
              <span className="text-xl">🔥</span>
              Hot Deals Every Week
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              IGNITE YOUR<br />INVENTORY
            </h1>
            <p className="text-orange-100 text-lg mb-8">
              Wholesale tech at burning hot prices. New deals drop weekly.
              European shipping from Amsterdam in 24-48 hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 shadow-lg">
                🔥 Shop Hot Deals
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-orange-700/50 backdrop-blur text-white font-bold rounded-lg hover:bg-orange-700/70">
                Get Trade Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Deals Carousel */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-2xl">🔥</span> This Week&apos;s Hot Deals
            </h2>
            <div className="flex gap-2">
              {hotDeals.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === i ? "bg-orange-500" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {hotDeals.map((deal, i) => (
                <div key={i} className="w-full flex-shrink-0 bg-gradient-to-r from-orange-500 to-red-500 p-8 rounded-2xl">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <span className="inline-block px-3 py-1 bg-yellow-400 text-yellow-900 font-bold text-sm rounded-full mb-3">
                        {deal.badge} SALE
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{deal.name}</h3>
                      <div className="flex items-center gap-4">
                        <span className="text-white/60 line-through text-lg">{deal.original}</span>
                        <span className="text-3xl font-black text-white">{deal.now}</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-white font-bold">-{deal.discount}</span>
                      </div>
                    </div>
                    <Link href="/products" className="px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 shadow-lg whitespace-nowrap">
                      Grab Deal →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-8 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "2,900+", label: "Hot Products" },
            { value: "500+", label: "Active Buyers" },
            { value: "40%", label: "Avg. Savings" },
            { value: "24h", label: "EU Shipping" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-2xl md:text-3xl font-black text-orange-900">{stat.value}</div>
              <div className="text-sm text-orange-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "🔥", name: "On Fire", desc: "Trending now" },
              { icon: "❄️", name: "Cool Tech", desc: "New arrivals" },
              { icon: "⚡", name: "Flash Deals", desc: "24h only" },
              { icon: "💎", name: "Premium", desc: "Top quality" },
              { icon: "📦", name: "Bulk Packs", desc: "Best value" },
              { icon: "🎯", name: "Clearance", desc: "Last chance" },
            ].map((cat, i) => (
              <Link
                key={i}
                href={`/products#${cat.name.toLowerCase().replace(' ', '-')}`}
                className="p-5 bg-gray-50 rounded-xl text-center hover:bg-orange-50 hover:ring-2 hover:ring-orange-200 transition-all group"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <div className="font-bold text-gray-900">{cat.name}</div>
                <div className="text-xs text-gray-500">{cat.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">The Fyrecart Heat</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🗓️", title: "Weekly Fire Sales", desc: "New hot deals every Monday" },
              { icon: "⏰", title: "Early Bird Access", desc: "Members get 24h head start" },
              { icon: "📊", title: "Price Alerts", desc: "Get notified when prices drop" },
              { icon: "🚚", title: "Fast EU Delivery", desc: "Amsterdam warehouse, 24-48h" },
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">🔥 Ready to Ignite Your Business?</h2>
          <p className="text-orange-100 mb-8">
            Join 500+ retailers who save big with Fyrecart. No minimum order for new accounts.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 shadow-lg">
            Get Started Today
          </Link>
          <p className="text-orange-200 text-sm mt-4">info@fyrecart.nl | Free shipping on €200+ orders</p>
        </div>
      </section>
    </div>
  );
}
