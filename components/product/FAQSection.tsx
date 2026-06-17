"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import type { FAQ } from "@/types/product";

interface FAQSectionProps {
  faqs: FAQ[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  if (!faqs.length) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-xl font-bold text-foreground">Frequently Asked Questions</h2>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden divide-y divide-border">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border-0">
              <AccordionTrigger className="px-5 py-4 text-left text-sm font-medium hover:no-underline hover:bg-muted/50">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                  {faq.answerAr && (
                    <div className="border-t border-border pt-3">
                      <p className="text-xs text-muted-foreground mb-1">بالعربية:</p>
                      <p
                        className="text-sm text-muted-foreground leading-relaxed font-arabic"
                        dir="rtl"
                      >
                        {faq.answerAr}
                      </p>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
