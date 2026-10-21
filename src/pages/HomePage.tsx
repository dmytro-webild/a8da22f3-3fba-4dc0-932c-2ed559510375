import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesRevealCards from '@/components/sections/features/FeaturesRevealCards';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import PricingMediaCards from '@/components/sections/pricing/PricingMediaCards';
import TestimonialRatingCards from '@/components/sections/testimonial/TestimonialRatingCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardCarousel
      tag="Your Transformation Partner"
      title="Transform Your Vision Into Stone"
      description="The DIVE Formula guides you through discovery, identification, visualization, and establishment—turning ambition into lasting achievement."
      primaryButton={{
        text: "Book a Consultation",
        href: "https://calendly.com/elounyameny/30min",
      }}
      secondaryButton={{
        text: "Get in Touch",
        href: "mailto:stoneofdevelopment@gmail.com",
      }}
      items={[
        {
          imageSrc: "https://images.pexels.com/photos/4997548/pexels-photo-4997548.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/7876663/pexels-photo-7876663.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/31459994/pexels-photo-31459994.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/38728695/pexels-photo-38728695.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/8761301/pexels-photo-8761301.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/10894942/pexels-photo-10894942.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="The DIVE Formula"
      descriptions={[
        "Discover: We uncover the core strengths and latent potential that define your unique organizational DNA. Our thorough discovery phase provides the clarity needed to build upon solid foundations.",
        "Identify: By recognizing critical blockers and opportunities, we identify the precise levers for growth and alignment that will drive your vision toward reality.",
        "Visualize: We translate abstract goals into tangible strategies. Our visualization process ensures your entire team sees the clear path to lasting achievement.",
        "Establish: Finally, we turn ambition into concrete, enduring results. We establish frameworks that sustain transformation long after our engagement concludes.",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesRevealCards
      tag="Our Framework"
      title="Built to Endure"
      description="We specialize in structured growth designed for leaders who are ready to build something that lasts."
      items={[
        {
          title: "Discover",
          description: "Uncovering your organizational DNA for maximum impact.",
          imageSrc: "https://images.pexels.com/photos/4205767/pexels-photo-4205767.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Identify",
          description: "Precise identification of growth opportunities and blockers.",
          imageSrc: "https://images.pexels.com/photos/3735708/pexels-photo-3735708.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Visualize",
          description: "Turning abstract vision into clear strategic reality.",
          imageSrc: "https://images.pexels.com/photos/13871934/pexels-photo-13871934.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Establish",
          description: "Hardening results into permanent business achievements.",
          imageSrc: "https://images.pexels.com/photos/575404/pexels-photo-575404.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsMediaCards
      tag="Our Impact"
      title="Measurable Results"
      description="Professional executive transformation backed by proven ROI."
      metrics={[
        {
          value: "100%",
          title: "Precision",
          description: "Strategic alignment scores",
          imageSrc: "https://images.pexels.com/photos/7948055/pexels-photo-7948055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          value: "240%",
          title: "ROI",
          description: "Average organizational efficiency gain",
          imageSrc: "https://images.pexels.com/photos/7054368/pexels-photo-7054368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          value: "15K+",
          title: "Leaders",
          description: "Transformation frameworks deployed",
          imageSrc: "https://images.pexels.com/photos/31650949/pexels-photo-31650949.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialRatingCards
      tag="Proven Success"
      title="What Leaders Say"
      description="Hear how our structured framework transformed their professional trajectories."
      testimonials={[
        {
          name: "Sarah Jenkins",
          role: "CEO",
          quote: "The DIVE Formula was a game changer for our expansion strategy.",
          rating: 5,
          imageSrc: "https://images.pexels.com/photos/7433924/pexels-photo-7433924.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Marcus Thorne",
          role: "VP Operations",
          quote: "Finally, a framework that actually delivers lasting change.",
          rating: 5,
          imageSrc: "https://images.pexels.com/photos/29995648/pexels-photo-29995648.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Elena Rodriguez",
          role: "Founder",
          quote: "Clear, actionable, and profoundly impactful for our leadership team.",
          rating: 5,
          imageSrc: "https://images.pexels.com/photos/7647922/pexels-photo-7647922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "David Wu",
          role: "Manager",
          quote: "I moved from stuck to scaling within three months.",
          rating: 5,
          imageSrc: "https://images.pexels.com/photos/37993622/pexels-photo-37993622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Sophia Clarke",
          role: "Director",
          quote: "This changed how we build systems for the long term.",
          rating: 5,
          imageSrc: "https://images.pexels.com/photos/8871904/pexels-photo-8871904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingMediaCards
      tag="Investment"
      title="Program Tiers"
      description="Flexible pathways for individual leaders and growing organizations."
      plans={[
        {
          tag: "Individual",
          price: "$2,500",
          period: "Fixed Fee",
          features: [
            "DIVE Strategy Session",
            "Executive Blueprint",
            "90-Day Roadmap",
          ],
          primaryButton: {
            text: "Consult Now",
            href: "https://calendly.com/elounyameny/30min",
          },
          imageSrc: "https://images.pexels.com/photos/29132438/pexels-photo-29132438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          tag: "Enterprise",
          price: "Custom",
          period: "Program",
          features: [
            "Full Organizational DIVE",
            "Leadership Workshop",
            "Scalable Frameworks",
          ],
          primaryButton: {
            text: "Inquire Now",
            href: "mailto:stoneofdevelopment@gmail.com",
          },
          imageSrc: "https://images.pexels.com/photos/6532365/pexels-photo-6532365.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Support"
      title="Questions Answered"
      description="Common questions about our transformation methodology."
      items={[
        {
          question: "What is the DIVE Formula?",
          answer: "DIVE stands for Discover, Identify, Visualize, Establish. It's our proprietary framework for sustainable transformation.",
        },
        {
          question: "Who is this program for?",
          answer: "For executives, entrepreneurs, and mid-level managers ready to transition from reactive management to enduring leadership.",
        },
        {
          question: "What kind of ROI can I expect?",
          answer: "While results vary, our clients report a 240% increase in operational efficiency within 12 months.",
        },
      ]}
      imageSrc="https://images.pexels.com/photos/38917020/pexels-photo-38917020.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to Start?"
      text="Your transformation into an enduring leader begins with a single conversation. Book your discovery session or reach out to discuss your goals today."
      primaryButton={{
        text: "Book Consultation",
        href: "https://calendly.com/elounyameny/30min",
      }}
      secondaryButton={{
        text: "Email Us",
        href: "mailto:stoneofdevelopment@gmail.com",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
