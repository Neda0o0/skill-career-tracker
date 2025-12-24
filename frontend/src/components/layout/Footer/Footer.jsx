import Link from "next/link";
import footerData from "@/components/layout/Footer/footer.data";
import FooterList from "@/components/layout/Footer/FooterList";

const Footer = () => {
  const { footerLinks, socialLinks, pageLinks } = footerData;

  return (
    <footer className="w-full bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-gray-200 font-semibold text-lg mb-6">SkillTrack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FooterList title="Explore">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </FooterList>
          <FooterList title="Connect">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </FooterList>
          <FooterList title="Account">
            {pageLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterList>
        </div>

        <div className="mt-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} SkillTrack. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
