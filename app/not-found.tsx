import Link from "next/link";
import { FlaskConical, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container max-w-2xl mx-auto px-4 py-24 flex flex-col items-center text-center gap-8">
      <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-pharma-500 to-pharma-700 flex items-center justify-center shadow-xl">
        <FlaskConical className="w-12 h-12 text-white" />
      </div>
      <div>
        <h1 className="text-6xl font-black text-pharma-600 mb-2">404</h1>
        <h2 className="text-2xl font-bold text-foreground mb-3">Page Not Found</h2>
        <p className="text-muted-foreground">
          The product or page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <div className="flex gap-3">
        <Button variant="pharma" asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
    </div>
  );
}
