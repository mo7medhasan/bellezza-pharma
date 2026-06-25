"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import type { FAQ } from "@/types/product";

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  if (!faqs.length) return null;
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 justify-end">
        <h2 className="text-xl font-bold text-foreground font-arabic">الأسئلة الشائعة</h2>
        <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border-0 border-b border-border last:border-0">
              <AccordionTrigger className="px-5 py-4 text-right text-sm font-medium hover:no-underline hover:bg-muted/50 font-arabic">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4">
                <p className="text-sm text-muted-foreground leading-relaxed font-arabic text-right">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
