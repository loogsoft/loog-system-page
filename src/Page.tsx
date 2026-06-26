import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import "./Page.css";
import banner1 from "./assets/banner/img1.png";
import banner2 from "./assets/banner/img2.png";
import banner3 from "./assets/banner/img3.png";
import banner4 from "./assets/banner/img4.png";
import banner5 from "./assets/banner/img5.png";
import banner6 from "./assets/banner/img6.png";
import banner7 from "./assets/banner/img7.png";
import banner8 from "./assets/banner/img8.png";
import banner9 from "./assets/banner/img9.png";
import { cssColorVariables } from "./colors";

type IconName =
  | "alert"
  | "arrow"
  | "bar"
  | "box"
  | "calendar"
  | "check"
  | "chevron"
  | "clock"
  | "credit"
  | "graph"
  | "megaphone"
  | "message"
  | "package"
  | "shield"
  | "star"
  | "tag"
  | "users"
  | "whatsapp"
  | "x";

type Feature = {
  icon: IconName;
  title: string;
  text: string;
};

const problems: Feature[] = [
  {
    icon: "alert",
    title: "Perda de Estoque",
    text: "Produtos somem ou são registrados errado no sistema.",
  },
  {
    icon: "x",
    title: "Falta de Cadastro",
    text: "Vendas manuais sem controle organizado e confiável.",
  },
  {
    icon: "megaphone",
    title: "Precificação Ruim",
    text: "Dificuldade para acompanhar o preço certo e margem.",
  },
  {
    icon: "clock",
    title: "Sem Relatórios",
    text: 'Tomada de decisão baseada no "achismo".',
  },
  {
    icon: "package",
    title: "Controle Manual",
    text: "Pilhas de caderno e planilhas atrasadas.",
  },
];

const features: Feature[] = [
  {
    icon: "box",
    title: "Controle de Estoque",
    text: "Entrada e saída automatizadas, alerta de estoque baixo e inventário simplificado.",
  },
  {
    icon: "tag",
    title: "Cadastro de Produtos",
    text: "Organize por categorias, tamanhos e cores com fotos e código de barras.",
  },
  {
    icon: "credit",
    title: "Gestão de Vendas",
    text: "PDV ágil, fechamento de caixa e integração total com o controle financeiro.",
  },
  {
    icon: "calendar",
    title: "Crediário Próprio",
    text: 'Controle no "pendurado" com segurança, parcelas e lembretes de cobrança.',
  },
  {
    icon: "bar",
    title: "Relatórios Premium",
    text: "Visualize faturamento, lucratividade e curva ABC de produtos em segundos.",
  },
  {
    icon: "users",
    title: "Controle de Usuários",
    text: "Defina permissões diferentes para vendedores, gerentes e administradores.",
  },
];

const steps = [
  {
    number: "01",
    title: "Configuração",
    text: "Defina seus dados padrão e faça o primeiro acesso.",
  },
  {
    number: "02",
    title: "Acesso Rápido",
    text: "Receba seu painel de login instantaneamente.",
  },
  {
    number: "03",
    title: "Cadastro",
    text: "Cadastre seus produtos em minutos no sistema.",
  },
  {
    number: "04",
    title: "Controle Total",
    text: "Pronto. Sua loja agora está organizada e no digital.",
  },
];

const testimonials = [
  {
    text: "O sistema mudou minha rotina. Antes eu não sabia quanto vendia no fim do mês. Agora tenho tudo na palma da mão.",
    name: "Mariana Silva",
    role: "Boutique Bella",
  },
  {
    text: "Vendedores mais rápidos, maior controle no crediário e cada vez menos erro. O controle da loja agora é impecável.",
    name: "Renato Santos",
    role: "Moda do Centro",
  },
  {
    text: "É simples e leve. No começo eu achava que seria difícil. Hoje controlo o financeiro, fornecedores e meus produtos.",
    name: "Juliana Martins",
    role: "Essencial Boutique",
  },
];

const faqs = [
  "O sistema precisa ser instalado no computador?",
  "Meus dados estão seguros?",
  "O suporte é incluso na mensalidade?",
];

const systemSlides = [
  {
    image: banner1,
    title: "Acesso rápido e seguro",
    text: "Tela de login limpa para sua equipe entrar no sistema sem complicação.",
    alt: "Tela de login do Loog System.",
  },
  {
    image: banner2,
    title: "Dashboard executivo",
    text: "Indicadores de vendas, faturamento e estoque para enxergar o negócio em segundos.",
    alt: "Dashboard executivo com cards de vendas, faturamento e estoque.",
  },
  {
    image: banner3,
    title: "Produtos organizados",
    text: "Catálogo visual com busca, filtros, valores, status e dados importantes de cada item.",
    alt: "Tela de produtos do Loog System com cards e filtros.",
  },
  {
    image: banner4,
    title: "Baixa de estoque em lote",
    text: "Fluxo rápido para selecionar produtos, conferir quantidades e registrar baixas.",
    alt: "Tela de baixa de estoque em lote com produtos selecionados.",
  },
  {
    image: banner5,
    title: "Alertas inteligentes",
    text: "Avisos claros para produtos esgotados, reposição e ações importantes da loja.",
    alt: "Tela de produto sem estoque com alertas do sistema.",
  },
  {
    image: banner6,
    title: "Crediários organizados",
    text: "Acompanhe clientes, parcelas, status e valores em aberto com leitura rápida.",
    alt: "Tela de crediários com clientes e parcelas.",
  },
  {
    image: banner7,
    title: "Fornecedores centralizados",
    text: "Dados comerciais reunidos para facilitar compras, reposições e acompanhamento.",
    alt: "Tela de fornecedores do Loog System.",
  },
  {
    image: banner8,
    title: "Equipe sob controle",
    text: "Gerencie colaboradores, acessos e responsabilidades dentro da operação.",
    alt: "Tela de colaboradores do Loog System.",
  },
  {
    image: banner9,
    title: "Configurações da loja",
    text: "Ajustes essenciais para manter o sistema alinhado com o funcionamento da empresa.",
    alt: "Tela de configurações do Loog System.",
  },
] as const;

function Page() {
  return (
    <main className="landing-page" style={cssColorVariables as CSSProperties}>
      <Header />
      <Hero />
      <ProblemSection />
      <FeatureSection />
      <PricingSection />
      <SystemPreviewSection />
      <ProductSection />
      <StepsSection />
      <TransformationSection />
      <TestimonialsSection />
      <MainCallToAction />
      <FaqSection />
      <FinalCallToAction />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top" aria-label="Loog System">
          <span className="brand__mark" aria-hidden="true">
            <LogoMark />
          </span>
          <span>Loog System</span>
        </a>

        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#recursos">Recursos</a>
          <a href="#solucoes">Soluções</a>
          <a href="#planos">Planos</a>
          <a href="#sistema">Sistema</a>
          <a href="#suporte">Suporte</a>
        </nav>

        <div className="header-actions">
          <a className="header-login" href="#login">
            Login
          </a>
          <a className="header-cta" href="#teste">
            Teste Gratuito
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-section__inner">
        <div className="hero-copy">
          <span className="eyebrow">O Controle que sua Loja Merece</span>
          <h1>
            Controle sua loja com mais organização, mais vendas e{" "}
            <span>menos trabalho.</span>
          </h1>
          <p>
            O Loog System centraliza estoque, vendas, caixa e produtos no
            histórico em uma única plataforma simples e poderosa.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#teste">
              Teste Grátis <Icon name="arrow" />
            </a>
            <a className="button button--secondary" href="#whatsapp">
              <Icon name="whatsapp" /> Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <HeroLaptop />
          <div className="floating-card floating-card--revenue">
            <span className="floating-card__icon floating-card__icon--success">
              <Icon name="graph" />
            </span>
            <div>
              <small>Faturamento</small>
              <strong>R$ 4.290</strong>
            </div>
          </div>
          <div className="floating-card floating-card--task">
            <span className="floating-card__icon">
              <Icon name="box" />
            </span>
            <div>
              <small>Novos Produtos</small>
              <strong>12 itens ativos</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="section section--white" id="solucoes">
      <SectionTitle>
        Sua loja enfrenta algum <span>destes</span> problemas?
      </SectionTitle>
      <div className="problem-grid">
        {problems.map((item) => (
          <article className="problem-card" key={item.title}>
            <span className="problem-card__icon">
              <Icon name={item.icon} />
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
    <section className="section section--soft" id="recursos">
      <div className="section-heading">
        <h2>Tudo o que sua boutique precisa</h2>
        <p>Ferramentas pensadas para simplificar o seu dia a dia.</p>
      </div>

      <div className="feature-grid">
        {features.map((item) => (
          <article className="feature-card" key={item.title}>
            <span className="feature-card__icon">
              <Icon name={item.icon} />
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="section section--white pricing-section" id="planos">
      <div className="section-heading">
        <span className="eyebrow">Planos e Mensalidade</span>
        <h2>Comece sem risco e continue com valor fixo.</h2>
        <p>
          Teste o Loog System na rotina da sua loja e mantenha tudo organizado
          por uma mensalidade simples, transparente e fácil de planejar.
        </p>
      </div>

      <div className="pricing-grid">
        <article className="pricing-card pricing-card--trial">
          <div className="pricing-card__header">
            <span className="pricing-card__icon">
              <Icon name="star" />
            </span>
            <span className="pricing-card__badge">Primeiro acesso</span>
          </div>
          <h3>Teste gratuito</h3>
          <div className="pricing-card__price">
            <strong>7 dias</strong>
            <span>para conhecer tudo</span>
          </div>
          <p>
            Ative sua conta, cadastre produtos e veja como o controle da loja
            fica mais rápido antes de contratar.
          </p>
          <Checklist
            items={[
              "Sem cobrança nos primeiros dias",
              "Acesso ao painel completo",
              "Ideal para validar com a equipe",
            ]}
          />
          <a className="button button--primary" href="#teste">
            Começar Teste
          </a>
        </article>

        <article className="pricing-card pricing-card--monthly">
          <div className="pricing-card__header">
            <span className="pricing-card__icon">
              <Icon name="shield" />
            </span>
            <span className="pricing-card__badge">Mais estratégico</span>
          </div>
          <h3>Mensalidade</h3>
          <div className="pricing-card__price">
            <strong>R$ 100</strong>
            <span>por mês</span>
          </div>
          <p>
            Um plano direto para manter estoque, vendas, crediário e relatórios
            centralizados em uma única operação.
          </p>
          <Checklist
            items={[
              "Valor fixo mensal",
              "Controle completo da loja",
              "Suporte para começar com segurança",
            ]}
          />
          <a className="button button--light" href="#whatsapp">
            Falar sobre o plano
          </a>
        </article>
      </div>
    </section>
  );
}

function SystemPreviewSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = systemSlides[activeSlide];
  const progress = ((activeSlide + 1) / systemSlides.length) * 100;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % systemSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  function goToPreviousSlide() {
    setActiveSlide((currentSlide) =>
      currentSlide === 0 ? systemSlides.length - 1 : currentSlide - 1,
    );
  }

  function goToNextSlide() {
    setActiveSlide((currentSlide) => (currentSlide + 1) % systemSlides.length);
  }

  return (
    <section className="section system-preview" id="sistema">
      <div className="system-preview__inner">
        <div className="system-preview__copy">
          <span className="eyebrow">Conheça o Sistema</span>
          <h2>Veja por dentro como sua loja fica organizada.</h2>
          <p>
            Uma prévia real das principais telas do Loog System: acesso,
            dashboard, produtos, estoque, crediário e gestão da equipe.
          </p>

          <div className="system-preview__highlights">
            <span>9 telas reais</span>
            <span>Fluxo completo</span>
            <span>Interface intuitiva</span>
          </div>
        </div>

        <div className="system-carousel" aria-label="Apresentação das telas do sistema">
          <div className="system-carousel__toolbar">
            <div>
              <span>{String(activeSlide + 1).padStart(2, "0")}</span>
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
            </div>

            <div className="system-carousel__controls">
              <button
                className="carousel-control carousel-control--previous"
                type="button"
                onClick={goToPreviousSlide}
                aria-label="Tela anterior"
              >
                <Icon name="chevron" />
              </button>
              <button
                className="carousel-control carousel-control--next"
                type="button"
                onClick={goToNextSlide}
                aria-label="Próxima tela"
              >
                <Icon name="chevron" />
              </button>
            </div>
          </div>

          <div className="system-carousel__stage">
            <img src={slide.image} alt={slide.alt} />
          </div>

          <div className="system-carousel__progress" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </div>

          <div className="system-carousel__thumbs" aria-label="Selecionar tela do sistema">
            {systemSlides.map((item, index) => (
              <button
                className={`carousel-thumb${index === activeSlide ? " carousel-thumb--active" : ""}`}
                type="button"
                key={item.title}
                onClick={() => setActiveSlide(index)}
                aria-label={`Ver ${item.title}`}
                aria-current={index === activeSlide ? "true" : undefined}
              >
                <img src={item.image} alt="" />
                <span>{index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section className="product-section" id="sobre">
      <div className="product-section__inner">
        <div className="product-heading">
          <h2>Experiência Visual de Alta Performance</h2>
          <p>
            Interfaces profissionais, rápidas e intuitivas criadas para que sua
            equipe acompanhe tudo sem perder a agilidade do dia a dia.
          </p>
        </div>

        <div className="product-feature product-feature--first">
          <div className="product-copy">
            <span className="product-copy__icon">
              <Icon name="bar" />
            </span>
            <h3>Visão Geral Completa</h3>
            <p>
              Acompanhe entradas, saídas em tempo real através de dashboards
              claros que transformam dados em decisões inteligentes.
            </p>
            <Checklist
              items={[
                "Estoque mensal e vendas",
                "Conversão mais assertiva",
                "Fluxo de produtos",
              ]}
            />
          </div>
          <DashboardMock variant="analytics" />
        </div>

        <div className="product-feature product-feature--second">
          <DashboardMock variant="inventory" />
          <div className="product-copy">
            <span className="product-copy__icon">
              <Icon name="box" />
            </span>
            <h3>Gestão de Inventário Ágil</h3>
            <p>
              Gerencie milhões de SKUs com facilidade. Filtre, ordene e edite
              produtos em massa de forma inteligente.
            </p>
            <Checklist
              items={[
                "Painel de lote inteligente",
                "Cadastro de estoque por SKU",
                "Reposição inteligente",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  return (
    <section className="section section--white">
      <div className="section-heading">
        <h2>Passo a passo para sua nova gestão</h2>
        <p>Comece a usar em menos de 10 minutos.</p>
      </div>

      <div className="steps">
        {steps.map((step, index) => (
          <article
            className={`step-card${index === steps.length - 1 ? " step-card--active" : ""}`}
            key={step.number}
          >
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TransformationSection() {
  return (
    <section className="section section--soft">
      <div className="section-heading section-heading--compact">
        <h2>A Transformação do seu Negócio</h2>
      </div>

      <div className="compare-grid">
        <article className="compare-card compare-card--before">
          <h3>
            <Icon name="x" /> Sem o Loog System
          </h3>
          <ul>
            <li>Perde produtos sem anotações em papel e planilhas confusas.</li>
            <li>Não controla estoque e clientes com precisão.</li>
            <li>Gasta tempo conferindo contas em processos manuais.</li>
          </ul>
        </article>
        <article className="compare-card compare-card--after">
          <h3>
            <Icon name="check" /> Com o Loog System
          </h3>
          <ul>
            <li>Gestão alinhada de estoque, financeiro e equipe em um só lugar.</li>
            <li>Estoque 100% auditável com automação fácil.</li>
            <li>Controle de clientes, vencimentos e histórico de vendas.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section section--softest">
      <div className="section-heading">
        <h2>O que dizem os Lojistas</h2>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <article className="testimonial-card" key={testimonial.name}>
            <div className="stars" aria-label="5 estrelas">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Icon key={starIndex} name="star" />
              ))}
            </div>
            <p>{testimonial.text}</p>
            <div className="testimonial-author">
              <span>{testimonial.name.charAt(0)}</span>
              <div>
                <strong>{testimonial.name}</strong>
                <small>{testimonial.role}</small>
              </div>
            </div>
            <span className={`avatar-ring avatar-ring--${index + 1}`} />
          </article>
        ))}
      </div>
    </section>
  );
}

function MainCallToAction() {
  return (
    <section className="section section--softest section--cta">
      <div className="cta-card" id="teste">
        <h2>Experimente o Loog System gratuitamente.</h2>
        <p>
          Sua conta de controle, bem organizada. Reduza seus custos com estoque
          parado em até 38% nos primeiros meses.
        </p>
        <div className="cta-card__actions">
          <a className="button button--light" href="#comecar">
            Começar Agora
          </a>
          <a className="button button--outline" href="#demo">
            Agendar Demonstração
          </a>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="section section--softest" id="suporte">
      <div className="section-heading">
        <h2>Perguntas Frequentes</h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq) => (
          <button className="faq-item" type="button" key={faq}>
            <span>{faq}</span>
            <Icon name="chevron" />
          </button>
        ))}
      </div>
    </section>
  );
}

function FinalCallToAction() {
  return (
    <section className="final-cta">
      <h2>Pronto para levar sua loja para outro nível?</h2>
      <p>
        Junte-se a centenas de lojistas que já transformaram suas operações com
        o Loog System.
      </p>
      <a className="button button--primary" href="#comecar">
        Começar Agora
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span className="footer__accent" />
      <div className="footer__inner">
        <div className="footer__brand">
          <a className="brand" href="#top" aria-label="Loog System">
            <span className="brand__mark" aria-hidden="true">
              <LogoMark />
            </span>
            <span>Loog System</span>
          </a>
          <p>
            Simplifique o complexo. O parceiro tecnológico que sua empresa
            precisa para crescer de forma inteligente e organizada.
          </p>
          <div className="social-list" aria-label="Redes sociais">
            <a href="#instagram">i</a>
            <a href="#facebook">f</a>
            <a href="#linkedin">in</a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Links Rápidos</h3>
          <a href="#recursos">Funcionalidades</a>
          <a href="#planos">Planos e Mensalidades</a>
          <a href="#sistema">Conheça o Sistema</a>
          <a href="#sobre">Sobre</a>
          <a href="#suporte">Suporte</a>
        </div>

        <div className="footer-contact">
          <h3>Contato</h3>
          <a href="tel:+550000000000">+55 64 99966-3524</a>
          <a href="mailto:contato@loogsystem.com">loogsoftware@gmail.com</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Loog System. Todos os direitos reservados.</span>
        <span>Termos de Uso · Privacidade</span>
      </div>
    </footer>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="section-heading">
      <h2>{children}</h2>
    </div>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="checklist">
      {items.map((item) => (
        <li key={item}>
          <Icon name="check" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function HeroLaptop() {
  return (
    <div className="hero-laptop">
      <div className="hero-laptop__screen">
        <div className="mock-sidebar">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="mock-content">
          <div className="mock-topbar">
            <span />
            <span />
          </div>
          <div className="hero-chart">
            <div className="hero-chart__area" />
            <span className="hero-chart__point hero-chart__point--one" />
            <span className="hero-chart__point hero-chart__point--two" />
          </div>
          <div className="mock-table">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className="hero-laptop__base" />
    </div>
  );
}

function DashboardMock({ variant }: { variant: "analytics" | "inventory" }) {
  const isAnalytics = variant === "analytics";

  return (
    <div className={`dashboard-mock dashboard-mock--${variant}`} aria-hidden="true">
      <div className="dashboard-window">
        <div className="dashboard-window__sidebar">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="dashboard-window__content">
          <div className="dashboard-window__bar">
            <span />
            <span />
          </div>
          {isAnalytics ? (
            <>
              <div className="metric-row">
                <span />
                <span />
                <span />
              </div>
              <div className="chart-row">
                <div className="bar-chart">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="donut-chart" />
              </div>
            </>
          ) : (
            <>
              <div className="inventory-search" />
              <div className="inventory-table">
                <span />
                <span />
                <span />
                <span />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function LogoMark() {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label="Loog">
      <path d="M12 2.8 4.7 7v8.3L12 21l7.3-5.7V7L12 2.8Z" />
      <path d="M8.6 9.3 12 7.4l3.4 1.9v4.4L12 16.1l-3.4-2.4V9.3Z" />
    </svg>
  );
}

function Icon({ name }: { name: IconName }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {renderIcon(name)}
    </svg>
  );
}

function renderIcon(name: IconName) {
  switch (name) {
    case "alert":
      return (
        <>
          <path d="M12 4 3.8 18.2h16.4L12 4Z" />
          <path d="M12 9v4" />
          <path d="M12 16.4h.01" />
        </>
      );
    case "arrow":
      return (
        <>
          <path d="M5 12h13" />
          <path d="m13 6 6 6-6 6" />
        </>
      );
    case "bar":
      return (
        <>
          <path d="M5 19V9" />
          <path d="M12 19V5" />
          <path d="M19 19v-7" />
        </>
      );
    case "box":
      return (
        <>
          <path d="m4.5 7.5 7.5-4 7.5 4-7.5 4-7.5-4Z" />
          <path d="M4.5 7.5v9l7.5 4 7.5-4v-9" />
          <path d="M12 11.5v9" />
        </>
      );
    case "calendar":
      return (
        <>
          <path d="M7 3.5v3" />
          <path d="M17 3.5v3" />
          <path d="M4.5 8.5h15" />
          <path d="M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
        </>
      );
    case "check":
      return <path d="m5 12.5 4.2 4.1L19 7" />;
    case "chevron":
      return <path d="m7 10 5 5 5-5" />;
    case "clock":
      return (
        <>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4.3l3 1.7" />
        </>
      );
    case "credit":
      return (
        <>
          <path d="M4 7h16v10H4V7Z" />
          <path d="M4 10h16" />
          <path d="M7 14h4" />
        </>
      );
    case "graph":
      return (
        <>
          <path d="M4 18h16" />
          <path d="M7 15v-4" />
          <path d="M12 15V7" />
          <path d="M17 15v-6" />
        </>
      );
    case "megaphone":
      return (
        <>
          <path d="M4 13V9h4l8-4v12l-8-4H4Z" />
          <path d="M8 13v5" />
          <path d="M18 10.5h2.5" />
        </>
      );
    case "message":
      return (
        <>
          <path d="M5 5h14v10H8l-3 3V5Z" />
          <path d="M8 9h8" />
          <path d="M8 12h5" />
        </>
      );
    case "package":
      return (
        <>
          <path d="M5 7.5 12 4l7 3.5v9L12 20l-7-3.5v-9Z" />
          <path d="m5 7.5 7 3.5 7-3.5" />
        </>
      );
    case "shield":
      return (
        <>
          <path d="M12 3.5 19 6v5.3c0 4.3-2.8 7.2-7 9.2-4.2-2-7-4.9-7-9.2V6l7-2.5Z" />
          <path d="m8.5 12 2.2 2.2 4.8-5" />
        </>
      );
    case "star":
      return <path d="m12 4 2.3 4.7 5.2.7-3.8 3.7.9 5.2-4.6-2.5-4.6 2.5.9-5.2-3.8-3.7 5.2-.7L12 4Z" />;
    case "tag":
      return (
        <>
          <path d="M4 5h7l8 8-6 6-8-8V5Z" />
          <path d="M8 8.5h.01" />
        </>
      );
    case "users":
      return (
        <>
          <circle cx="9" cy="8" r="3" />
          <path d="M3.8 18c.8-3 2.7-4.5 5.2-4.5s4.4 1.5 5.2 4.5" />
          <path d="M15.2 11.3a2.8 2.8 0 1 0 0-5.2" />
          <path d="M16.5 14c2 .4 3.2 1.7 3.7 4" />
        </>
      );
    case "whatsapp":
      return (
        <>
          <path d="M5.2 19 6 15.8A7 7 0 1 1 9 18.3L5.2 19Z" />
          <path d="M9.5 8.8c.3 2.4 2.1 4.1 4.6 4.7l1.2-1.2 2 1.1c-.2 1.1-.9 1.8-2 2-4.3-.4-7.2-3.3-7.7-7.6.2-1.1.9-1.8 2-2l1.1 2-1.2 1Z" />
        </>
      );
    case "x":
      return (
        <>
          <path d="m7 7 10 10" />
          <path d="M17 7 7 17" />
        </>
      );
    default:
      return <path d="M12 5v14" />;
  }
}

export default Page;
