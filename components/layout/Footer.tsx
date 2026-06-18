import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pharma-600 to-pharma-800 flex items-center justify-center font-serif italic text-white text-2xl font-black leading-none select-none shadow-sm">
                B
              </div>
              <div>
                <p className="font-bold text-foreground">Bellezza Pharma</p>
                <p className="text-xs text-muted-foreground">بيلزا فارما</p>
              <p className="text-xs text-pharma-600 font-medium tracking-widest mt-0.5 italic">EST 2015 · Inspire confidence</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium pharmaceutical and cosmeceutical products crafted with
              clinical expertise and natural innovation.
            </p>
            <p className="text-sm text-muted-foreground font-arabic" dir="rtl">
              منتجات صيدلانية وتجميلية متميزة مصنوعة بخبرة سريرية وابتكار طبيعي.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">Products</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/products/treo-serum", label: "TREO Serum" },
                { href: "/products/pedro-serum-150", label: "Pedro Serum" },
                { href: "/products/norgin-sunblock", label: "Norgin Sun Block" },
                { href: "/products/bellezza-vitamin-d3", label: "Vitamin D3" },
                { href: "/products/vitapro", label: "VitaPro" },
                { href: "/products", label: "View All Products →" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-pharma-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">Categories</h3>
            <ul className="space-y-2.5">
              {[
                "Serums & Treatment",
                "Hair Care",
                "Skin Care",
                "Sun Protection",
                "Supplements",
                "Intimate Care",
              ].map((cat) => (
                <li key={cat}>
                  <span className="text-sm text-muted-foreground">{cat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-pharma-500" />
                <span>Egypt, Middle East & Europe</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 shrink-0 text-pharma-500" />
                <span>+20 xxx xxx xxxx</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 shrink-0 text-pharma-500" />
                <span>info@bellezzapharma.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2024 Bellezza Pharma. All rights reserved. بيلزا فارما جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4">
            <span>Medical Content for Educational Purposes Only</span>
            <span>•</span>
            <span>Always Consult Your Physician</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
