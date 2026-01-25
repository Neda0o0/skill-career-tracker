"use client";

import { useSearchParams } from "next/navigation";
import {
  HelpHeader,
  QuickHelpCards,
  PopularArticles,
  ContactSupport,
  FaqSection,
} from "@/app/dashboard/help/_components";
import {
  quickHelpCards,
  popularArticles,
  contactSupport,
  faqSection,
} from "@/app/dashboard/help/data/helpData";

const Help = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  return (
    <section className="flex flex-col gap-5">
      <HelpHeader />

      <QuickHelpCards items={quickHelpCards} />

      <div className="flex flex-col lg:flex-row gap-5">
        <PopularArticles items={popularArticles} searchQuery={searchQuery} />
        <ContactSupport items={contactSupport} />
      </div>

      <FaqSection items={faqSection} searchQuery={searchQuery} />
    </section>
  );
};

export default Help;
