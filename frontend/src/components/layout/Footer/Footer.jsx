// import Link from "next/link";
// import footerData from "@/components/layout/Footer/footer.data";
// import FooterList from "@/components/layout/Footer/FooterList";

// const Footer = () => {
//   const { footerLinks, socialLinks, pageLinks } = footerData;

//   return (
//     <footer className="w-full bg-gray-800">
//       <div className="max-w-7xl mx-auto px-6 py-10">
//         <h2 className="text-gray-200 font-semibold text-2xl mb-6 text-center md:text-left">
//           SkillTrack
//         </h2>
//         <div className="flex flex-row justify-between gap-10 text-center md:text-left">
//           <FooterList title="Explore">
//             {footerLinks.map((item) => (
//               <li key={item.href}>
//                 <a
//                   href={item.href}
//                   className="hover:text-white transition-colors"
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//           </FooterList>
//           <FooterList title="Connect">
//             {socialLinks.map((item) => (
//               <li key={item.label}>
//                 <a
//                   href={item.href}
//                   target={item.href.startsWith("http") ? "_blank" : undefined}
//                   rel={
//                     item.href.startsWith("http")
//                       ? "noopener noreferrer"
//                       : undefined
//                   }
//                   className="hover:text-white transition-colors"
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//           </FooterList>
//           <FooterList title="Account">
//             {pageLinks.map((item) => (
//               <li key={item.href}>
//                 <Link
//                   href={item.href}
//                   className="hover:text-white transition-colors"
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </FooterList>
//         </div>

//         <div className="mt-10 text-center text-xs text-gray-500">
//           © {new Date().getFullYear()} SkillTrack. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import Link from "next/link";
import footerData from "@/components/layout/Footer/footer.data";
import FooterList from "@/components/layout/Footer/FooterList";

const Footer = () => {
  const { footerLinks, socialLinks, pageLinks } = footerData;

  return (
    <footer className="w-full glass mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-10">
        <h2 className="text-accent/80 font-semibold italic text-3xl mb-6 text-center md:text-left">
          SkillTrack
        </h2>

        <div className="flex flex-col md:flex-row justify-evenly gap-10 text-center md:text-left w-full">
          <FooterList title="Explore">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-accent/80 transition-colors"
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
                  className="hover:text-accent/80 transition-colors"
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
                  className="hover:text-accent/80 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterList>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-foreground/60 w-full">
        © {new Date().getFullYear()} SkillTrack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
