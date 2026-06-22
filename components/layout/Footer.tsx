import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pharma-600 to-pharma-800 flex items-center justify-center font-serif italic text-white text-2xl font-black leading-none shadow-sm">
                B
              </div>
              <div>
                <p className="font-bold text-foreground font-arabic">بيلزا فارما</p>
                <p className="text-xs text-pharma-600 font-medium tracking-wide italic mt-0.5">EST 2015 · Inspire confidence</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-arabic">
              منتجات صيدلانية وتجميلية متميزة مصنوعة بخبرة سريرية وابتكار طبيعي. نُلهم الثقة في كل منتج.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm font-arabic">روابط سريعة</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/products/treo-serum", label: "تريو سيروم" },
                { href: "/products/pedro-serum-150", label: "بيدرو سيروم" },
                { href: "/products/norgin-sunblock", label: "نورجين واقي الشمس" },
                { href: "/products/bellezza-vitamin-d3", label: "فيتامين D3" },
                { href: "/products/vitapro", label: "فيتاقرو" },
                { href: "/products", label: "عرض جميع المنتجات ←" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-pharma-600 transition-colors font-arabic">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm font-arabic">الفئات</h3>
            <ul className="space-y-2.5">
              {["سيروم وعلاجات", "عناية بالشعر", "عناية بالبشرة", "واقي الشمس", "مكملات غذائية", "عناية حميمة"].map((cat) => (
                <li key={cat}><span className="text-sm text-muted-foreground font-arabic">{cat}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm font-arabic">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-pharma-500" />
                <span className="font-arabic">مصر، الشرق الأوسط وأوروبا</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 shrink-0 text-pharma-500" />
                <span dir="ltr">+20 xxx xxx xxxx</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 shrink-0 text-pharma-500" />
                <span dir="ltr">info@bellezzapharma.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="font-arabic">© 2024 بيلزا فارما. جميع الحقوق محفوظة.</p>
          <p className="font-arabic">المعلومات الطبية لأغراض تعليمية فقط — استشر طبيبك دائماً</p>
        </div>
      </div>
    </footer>
  );
}
