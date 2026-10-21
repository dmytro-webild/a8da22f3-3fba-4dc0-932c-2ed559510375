import FooterSimpleCard from '@/components/sections/footer/FooterSimpleCard';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "DIVE Formula",
    "href": "#features"
  },
  {
    "name": "Our Impact",
    "href": "#metrics"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Consultation",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Pricing",
    "href": "#pricing"
  }
];

  return (
    <StyleProvider buttonVariant="bubble" siteBackground="noise" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="Stone of Development"
      logoImageSrc="https://picsum.photos/seed/logoimagesrc/800/600"
      ctaButton={{
        text: "Book Now",
        href: "https://calendly.com/elounyameny/30min",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleCard
      brand="Stone of Development"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "The DIVE Formula",
              href: "#features",
            },
          ],
        },
        {
          title: "Programs",
          items: [
            {
              label: "Consultation",
              href: "https://calendly.com/elounyameny/30min",
            },
            {
              label: "Contact",
              href: "mailto:stoneofdevelopment@gmail.com",
            },
          ],
        },
      ]}
      copyright="© 2024 Stone of Development. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
