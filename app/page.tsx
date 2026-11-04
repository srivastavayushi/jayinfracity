import { ArrowRight, Building2, CalendarDays, Check, Compass, ExternalLink, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';

const listingUrl = 'https://www.justdial.com/Ayodhya/Jay-Infracity-Pvt-Ltd-Near-Saket-Press-Khawaspura-Acharya-Narendra-Dev-Nagar/9999PX527-X527-191004124048-G9X4_BZDET';
const propertySlots = [
  { no: '01', label: 'Property name', meta: 'Location · Plot size · Status' },
  { no: '02', label: 'Property name', meta: 'Location · Plot size · Status' },
  { no: '03', label: 'Property name', meta: 'Location · Plot size · Status' },
];

function WhatsAppButton({ label = 'Enquire on WhatsApp', compact = false }: { label?: string; compact?: boolean }) {
  return <a className={`wa-button${compact ? ' wa-button--compact' : ''}`} href="#contact" aria-label={`${label}. WhatsApp number is required before activation`}><MessageCircle size={compact ? 17 : 20} /> {label} <ArrowRight size={17} /></a>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Jay Infracity home"><span className="brand-mark"><Building2 size={21} /></span><span>JAY INFRACITY<small>PVT. LTD.</small></span></a>
        <nav aria-label="Main navigation"><a href="#about">About</a><a href="#properties">Properties</a><a href="#contact">Contact</a></nav>
        <a className="wa-button wa-button--header" href="#contact"><MessageCircle size={17} /> WhatsApp enquiry</a>
      </header>

      <section className="hero" id="home">
        <div className="hero-photo" role="img" aria-label="Aerial view of Ayodhya riverfront" /><div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><MapPin size={15} /> Ayodhya, Uttar Pradesh</p>
          <h1>Find your place<br />in a city <em>rising.</em></h1>
          <p className="hero-copy">Local real estate guidance for people exploring plots and property opportunities in and around Ayodhya.</p>
          <div className="hero-actions"><WhatsAppButton /><a className="text-link" href="#properties">Explore properties</a></div>
          <p className="setup-note">WhatsApp number required · button opens the setup section for now</p>
        </div>
        <a className="listing-card" href={listingUrl} target="_blank" rel="noreferrer"><span className="listing-kicker">Business listing reference</span><strong>Jay Infracity Pvt. Ltd.</strong><span>Acharya Narendra Dev Nagar, Ayodhya</span><span className="listing-link">View on Justdial <ArrowRight size={15} /></span></a>
      </section>

      <section className="intro section" id="about">
        <div className="section-label"><span>01</span> About</div>
        <div className="intro-grid">
          <div><p className="eyebrow dark">A local point of contact</p><h2>Property decisions,<br /><em>made personal.</em></h2></div>
          <div className="intro-copy"><p>Jay Infracity Pvt. Ltd. is listed in Ayodhya as a real estate agent serving people looking for residential plots and other property guidance.</p><p>This website is designed to make the first conversation simple: review the available information, then move directly to WhatsApp for a personal response.</p><WhatsAppButton label="Start a conversation" /></div>
        </div>
        <div className="service-row">
          <article><Compass /><span>Explore</span><strong>Share what kind of property you are looking for.</strong></article>
          <article><CalendarDays /><span>Plan</span><strong>Coordinate a conversation or site visit directly.</strong></article>
          <article><MessageCircle /><span>Connect</span><strong>Continue the enquiry on WhatsApp without a long form.</strong></article>
        </div>
      </section>

      <section className="properties section" id="properties">
        <div className="section-label light"><span>02</span> Properties</div>
        <div className="section-heading-row"><div><p className="eyebrow">Current opportunities</p><h2>Properties, when<br /><em>you’re ready.</em></h2></div><p>Inventory has intentionally not been invented. Replace these clearly marked cards with verified project details, photography, availability, and pricing.</p></div>
        <div className="property-grid">
          {propertySlots.map((item) => <article className="property-card" key={item.no}><div className="property-visual"><span>CONTENT PLACEHOLDER</span><strong>{item.no}</strong></div><div className="property-body"><span className="placeholder-tag">To be supplied</span><h3>{item.label}</h3><p>{item.meta}</p><WhatsAppButton label="Ask about this property" compact /></div></article>)}
        </div>
        <div className="inventory-note"><ShieldCheck /><div><strong>No unverified listings</strong><p>Only approved property information should be published here. Send the project names, locations, images, sizes, status, and prices you want displayed.</p></div></div>
      </section>

      <section className="contact section" id="contact">
        <div className="section-label"><span>03</span> Contact</div>
        <div className="contact-grid">
          <div><p className="eyebrow dark">Let’s speak directly</p><h2>Your next step<br />starts with a <em>message.</em></h2><p className="contact-copy">Once the father’s WhatsApp number is added, every green button on this website will open a pre-filled WhatsApp enquiry.</p></div>
          <div className="setup-card"><span className="placeholder-tag">Action required</span><MessageCircle size={42} /><h3>Add the father’s WhatsApp number</h3><p>Send the full number with country code (for example, India uses +91). It will not be displayed as invented content; it will only be wired in after you provide it.</p><div className="number-placeholder"><Phone size={18} /><span>+91 ••••• •••••</span><small>PLACEHOLDER — NOT ACTIVE</small></div><a className="wa-button is-disabled" href="#contact" aria-disabled="true"><MessageCircle size={19} /> WhatsApp link awaiting number</a></div>
        </div>
        <div className="location-strip">
          <MapPin /><div><span>Office address from supplied listing</span><strong>Office No. 4/6/109, Near Saket Press Khawaspura, Rampath Marg, Acharya Narendra Dev Nagar, Ayodhya – 224001, Uttar Pradesh</strong></div><a href={listingUrl} target="_blank" rel="noreferrer">Verify on Justdial <ExternalLink size={15} /></a>
        </div>
      </section>

      <section className="launch-section">
        <div><p className="eyebrow">Ready for the final details</p><h2>Supply. Verify.<br /><em>Launch.</em></h2></div>
        <ol><li><span>1</span><p><strong>WhatsApp</strong>Send the full number with country code.</p></li><li><span>2</span><p><strong>Properties</strong>Share approved listings and photos.</p></li><li><span>3</span><p><strong>Publish</strong>Use a hosted Sites link or connect a custom domain.</p></li></ol>
      </section>

      <footer><a className="brand footer-brand" href="#home"><span className="brand-mark"><Building2 size={20} /></span><span>JAY INFRACITY<small>PVT. LTD.</small></span></a><p>Real estate enquiries in Ayodhya.</p><div><a href={listingUrl} target="_blank" rel="noreferrer">Justdial listing</a><a href="https://nowayodhya.com/the-history-of-ayodhya-tracing-the-roots-of-a-holy-city/" target="_blank" rel="noreferrer">Hero image source</a><a href="#home">Back to top ↑</a></div></footer>
      <a className="floating-wa" href="#contact" aria-label="WhatsApp enquiry setup"><MessageCircle size={24} /><span>WhatsApp</span></a>
    </main>
  );
}
