const { Hero, Button, Card, SectionHead, Panel, NotePanel, PrinciplesList, StatusRow } = window.HarithKavishDesignSystem_ec4107;
const data = window.HKSiteData;

function heroActions(pairs, go) {
  return pairs.map(([variant, label, page]) => (
    <Button key={label} variant={variant} onClick={() => go(page)}>{label}</Button>
  ));
}

function ProductGrid({ go }) {
  return (
    <div className="card-grid">
      {data.products.map((p) => (
        <Card key={p.slug} status={p.status} route={`/${p.slug}.html`} title={p.name} meta={p.purpose} body={p.summary}
              details={p.details} link={{ href: '#', label: 'Open product page' }} />
      ))}
    </div>
  );
}

function EcosystemGrid() {
  return (
    <div className="card-grid card-grid--four">
      {data.ecosystem.map((e) => (
        <Card key={e.slug} interactive status={e.status} route={`${e.slug}.harithkavish.com`} title={e.name} body={e.summary}
              link={{ href: '#', label: `Visit ${e.slug}.harithkavish.com` }} />
      ))}
    </div>
  );
}

function UpdateStack() {
  return (
    <div className="stack stack--wide">
      {data.updates.map((u) => (
        <Card key={u.title} status={u.type} route={u.date} title={u.title} body={u.summary} />
      ))}
    </div>
  );
}

function HomeScreen({ go }) {
  return (
    <>
      <Hero eyebrow="Independent software business" title="Specialized software services." lead={`Designed independently. Built thoughtfully. Continuously improved. Harith Kavish is the public identity of an independent software business focused on calm, reliable online services that can evolve for years without losing their shape.`}
            actions={heroActions([['primary', 'Explore Products', 'Products'], ['secondary', 'Learn About the Approach', 'About Us']], go)} />
      <section className="section">
        <SectionHead eyebrow="Products" title="The product catalog comes first." lead="Each product card is data-driven so new services can be added without redesigning the site." />
        <ProductGrid go={go} />
      </section>
      <section className="section">
        <SectionHead eyebrow="Ecosystem" title="A growing set of subdomains, each with one job." lead="Every subdomain is a focused, single-purpose service that shares the same design language and account layer." />
        <EcosystemGrid />
      </section>
      <section className="section">
        <SectionHead eyebrow="Why this business exists" title="The work is built for long-term software stewardship." lead="The business is shaped around durable products, not one-off campaigns." />
        <div className="split-grid">
          <div className="split-grid__primary"><PrinciplesList items={data.principles} /></div>
          <NotePanel>
            <p>Software should get more useful over time. That means fewer forks, fewer distractions, and more attention on the parts that customers actually rely on.</p>
            <p>The site and the products are built to share one design language so future subdomains can fit naturally into the same ecosystem.</p>
          </NotePanel>
        </div>
      </section>
      <section className="section">
        <SectionHead eyebrow="Latest updates" title="Recent work, not a blog." lead="A short feed of releases, improvements, and important announcements keeps the ecosystem visibly alive." />
        <UpdateStack />
      </section>
    </>
  );
}

function ProductsScreen({ go }) {
  return (
    <>
      <Hero eyebrow="Product-first architecture" title="Products." lead="The product catalog is the centre of the website. Each service gets a concise page, a current status, and a path that can later map cleanly to future subdomains."
            actions={heroActions([['primary', 'Contact the business', 'Contact'], ['secondary', 'View status', 'Status']], go)} />
      <section className="section">
        <SectionHead title="Current products" lead="Additions should be straightforward: extend the data, create a page, and the shared layout stays intact." />
        <ProductGrid go={go} />
      </section>
      <section className="section">
        <SectionHead title="Future-ready by design" lead="The site already assumes there may be more products, more documentation, and more customer surfaces later." />
        <div className="panel-grid">
          <Panel title="Add another product" body="Add one object to the product data, create a matching page, and the navigation, card styling, and metadata patterns stay consistent." />
          <Panel title="Keep the same language" body="Future services should feel like they belong to the same ecosystem even when they serve different audiences or live on different subdomains." />
        </div>
      </section>
    </>
  );
}

function UpdatesScreen({ go }) {
  return (
    <>
      <Hero eyebrow="Recent changes" title="Updates." lead="A short release feed is more useful than a traditional blog for a small software business. It keeps the public record focused on progress, maintenance, and important announcements."
            actions={heroActions([['primary', 'Browse products', 'Products'], ['secondary', 'View status', 'Status']], go)} />
      <section className="section">
        <SectionHead title="Latest changes" lead="These updates are intentionally concise and product-oriented." />
        <UpdateStack />
      </section>
    </>
  );
}

function AboutScreen({ go }) {
  return (
    <>
      <Hero eyebrow="Business identity" title="About Us." lead="Harith Kavish is an independent software business focused on building specialized online services with a long-term view. The goal is reliability, clarity, and steady improvement rather than marketing theater."
            actions={heroActions([['primary', 'Explore products', 'Products'], ['secondary', 'Contact', 'Contact']], go)} />
      <section className="section">
        <SectionHead title="Approach" lead="The business is designed around software stewardship, not one-off delivery." />
        <div className="panel-grid">
          <Panel title="Long-term vision" body="Products are expected to evolve over years. The architecture should make that easier instead of creating friction every time something changes." />
          <Panel title="No custom forks" body="Shared improvements are preferred over fragmented code paths. That keeps maintenance predictable and user experience consistent." />
          <Panel title="Engineering over noise" body="The site should read as a careful software operation, not a startup pitch deck or a freelancer profile." />
        </div>
      </section>
      <section className="section">
        <SectionHead title="Ecosystem" lead="The public site, account layer, dashboard, and every subdomain should all feel like one system." />
        <EcosystemGrid />
      </section>
    </>
  );
}

function ContactScreen({ go }) {
  return (
    <>
      <Hero eyebrow="Reach out" title="Contact." lead="Use the smallest possible path for the conversation you need. The contact section is separated by intent so questions reach the right place without unnecessary back-and-forth."
            actions={heroActions([['primary', 'Browse products', 'Products'], ['secondary', 'Status', 'Status']], go)} />
      <section className="section">
        <SectionHead title="Contact routes" lead="The categories are intentionally narrow and professional." />
        <div className="card-grid card-grid--four">
          {data.contactChannels.map((c) => (
            <Card key={c.label} title={c.label} body={c.detail} link={{ href: c.href, label: c.href.replace('mailto:', '') }} />
          ))}
        </div>
      </section>
    </>
  );
}

function StatusScreen({ go }) {
  return (
    <>
      <Hero eyebrow="Operational view" title="Status." lead="A simple operational view is better than a complex dashboard for a small software business. The goal is to show what is live now and where the ecosystem is heading next."
            actions={heroActions([['primary', 'Latest updates', 'Updates'], ['secondary', 'Contact', 'Contact']], go)} />
      <section className="section">
        <SectionHead title="Current state" lead="The site and its product surfaces are structured for gradual expansion." />
        <div className="status-list">
          {data.statusItems.map((s) => <StatusRow key={s.label} label={s.label} state={s.state} detail={s.detail} />)}
        </div>
      </section>
      <section className="section">
        <SectionHead title="Notes" lead="The site is now prepared for future subdomains without redesigning the visual language." />
        <div className="panel-grid">
          <Panel title="Shared design language" body="The same spacing, typography, and card system can be reused across account, dashboard, documentation, pricing, and support surfaces." />
          <Panel title="Minimal surface area" body="Only the pages that are useful today are present. The site can grow without carrying the old portfolio or chatbot structure forward." />
        </div>
      </section>
    </>
  );
}

function SignInScreen({ go }) {
  return (
    <>
      <Hero eyebrow="Reserved for account access" title="Sign In." lead="Account access is reserved for the future customer layer. The design is already prepared for account.harithkavish.com and the related dashboard surface, but the public site keeps this page simple for now."
            actions={heroActions([['primary', 'Contact support', 'Contact'], ['secondary', 'Browse products', 'Products']], go)} />
      <section className="section">
        <SectionHead title="What comes next" lead="The account surface will stay aligned with the same design language as the public site." />
        <div className="panel-grid">
          <Panel title="Customer identity" body="A single account layer will eventually connect the customer-facing services and keep the experience consistent across subdomains." />
          <Panel title="Dashboard access" body="The dashboard can later carry service status, usage summaries, and customer actions without changing the public design language." />
        </div>
      </section>
    </>
  );
}

function LegalScreen({ go }) {
  return (
    <>
      <Hero eyebrow="Privacy and terms" title="Legal." lead="This page keeps the legal position concise. There is no advertising tracker, no analytics integration, and no hidden profile collection on the public site."
            actions={heroActions([['primary', 'Contact', 'Contact'], ['secondary', 'Status', 'Status']], go)} />
      <section className="section">
        <SectionHead title="Privacy" lead="The public site is intentionally light on data collection." />
        <div className="panel-grid">
          <Panel wide>
            <p className="panel__body">The site does not use analytics scripts, tracking pixels, or advertising integrations. If you contact Harith Kavish by email, the information you send will be used only to respond, manage the conversation, and maintain business records as needed.</p>
            <p className="panel__body">Future product pages may collect information necessary to operate those services, but any such collection should be described in the product itself and kept as small as practical.</p>
          </Panel>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { HomeScreen, ProductsScreen, UpdatesScreen, AboutScreen, ContactScreen, StatusScreen, SignInScreen, LegalScreen });
