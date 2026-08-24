"use client";

import { useRef, useState, FormEvent } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("Erro ao enviar mensagem:", err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-platinum text-space-indigo selection:bg-punch-red selection:text-platinum">
      
      {/* HEADER FIXO */}
      <header className="fixed top-0 left-0 w-full z-50 bg-space-indigo/95 backdrop-blur border-b border-lavender-grey/20 text-platinum shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="#hero" className="text-2xl font-black tracking-widest text-platinum uppercase hover:text-blue-500 transition">
            VIGA
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
            <a href="#solucoes" className="hover:text-blue-500 transition-colors">
              Operação & Inteligência
            </a>
            <a href="#governanca" className="hover:text-blue-500 transition-colors">
              Governança & Auditoria
            </a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">
              Parcerias
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Link
            href="/login"
            className="px-3 py-2.5 text-sm font-bold text-[#004b23] bg-[#70e000] hover:bg-[#9ef01aff] rounded-lg transition-all duration-300 shadow-[0_0_15px_#70e00080] hover:shadow-[0_0_25px_#9ef01affcc]"
          >     
            LOGIN
          </Link>
          </div>
        </div>
      </header>

      {/* SECTION 1: HERO (100vh) */}
<section
  id="hero"
  className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative bg-cover bg-center bg-no-repeat text-platinum overflow-hidden"
  style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
>
  {/* OVERLAY COM OPACIDADE E GRADIENTE PARA LEITURA PERFEITA */}
  <div className="absolute inset-0 bg-space-indigo/10 backdrop-blur-[2px] bg-gradient-to-b from-space-indigo/90 via-space-indigo/80 to-space-indigo" />

  {/* CONTEÚDO */}
  <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-space-indigo/60 border border-lavender-grey/40 text-platinum text-xs md:text-sm font-semibold tracking-wider uppercase backdrop-blur-sm shadow-md">
      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      Plataforma de Gestão & Inteligência Operacional Ativa
    </div>

    <h1 className="text-4xl sm:text-6xl md:text-4xl font-black tracking-tight leading-tight drop-shadow-md">
      CENTRALIZAÇÃO E AGILIDADE PARA <br />
      <span className="text-[#abc4ff] drop-shadow-[0_0_4px_#abc4ff66]">
  DECISÕES DE ALTO IMPACTO
</span>
    </h1>

    <p className="text-base sm:text-xl text-platinum/90 max-w-3xl mx-auto leading-relaxed drop-shadow">
      Elimine planilhas dispersas e canais fragmentados. O <strong>VIGA</strong> consolida rotinas operacionais, passagens de turno, ocorrências críticas e análise preditiva em uma camada de governança unificada.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
   <a
  href="#contact"
  className="w-full max-w-80 h-16 flex items-center justify-center px-4 bg-[#1b4965] hover:bg-[#5fa8d3] text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_15px_#1b496566] hover:shadow-[0_0_25px_#5fa8d399] text-center"
>
  Solicitar Acesso Corporativo
</a>

<a
  href="#solucoes"
  className="w-full max-w-80 h-16 flex items-center justify-center px-4 bg-[#1b4965]/40 border-2 border-[#62b6cb] hover:bg-[#1b4965] hover:border-[#bee9e8] text-[#cae9ff] hover:text-white font-bold rounded-lg transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-[0_0_15px_#bee9e84D] text-center"
>
  Conhecer a Arquitetura
</a>
    </div>
  </div>
</section>

      {/* SECTION 2: ESCOPO & SOLUÇÕES (100vh) */}
      <section id="solucoes" className="min-h-screen flex flex-col justify-center px-6 pt-20 bg-platinum text-space-indigo">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-sm font-bold uppercase tracking-widest text-punch-red">
              Controle Operacional Integrado
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-space-indigo leading-tight">
              Dados estruturados da linha de frente à alta liderança
            </h2>
            <p className="text-space-indigo/80 text-base sm:text-lg leading-relaxed">
              O VIGA transforma eventos pontuais de turno em histórico auditável e visibilidade imediata de gargalos, status de ações e prioridades da planta.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div className="border-l-4 border-punch-red pl-4">
                <h4 className="font-extrabold text-2xl sm:text-3xl text-space-indigo">Zero</h4>
                <p className="text-sm text-lavender-grey font-semibold">Fragmentação de Dados</p>
              </div>
              <div className="border-l-4 border-space-indigo pl-4">
                <h4 className="font-extrabold text-2xl sm:text-3xl text-space-indigo">Tempo Real</h4>
                <p className="text-sm text-lavender-grey font-semibold">Rastreabilidade & Status</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-lavender-grey/30 shadow-xl space-y-5">
            <h3 className="text-xl font-bold text-space-indigo border-b border-lavender-grey/20 pb-3">
              Módulos em Execução
            </h3>
            <div className="space-y-4 text-space-indigo">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-punch-red/10 text-punch-red flex items-center justify-center font-bold shrink-0">01</div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base">Registro Diário & Passagem de Turno</h4>
                  <p className="text-xs sm:text-sm text-lavender-grey">Consolidação imediata de eventos, equipes e compromissos operacionais.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-punch-red/10 text-punch-red flex items-center justify-center font-bold shrink-0">02</div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base">Gestão de Ocorrências & Ações Pendentes</h4>
                  <p className="text-xs sm:text-sm text-lavender-grey">Mapeamento de impacto, severidade e acompanhamento de planos de ação.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-punch-red/10 text-punch-red flex items-center justify-center font-bold shrink-0">03</div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base">Camada de Inteligência Analítica & IA</h4>
                  <p className="text-xs sm:text-sm text-lavender-grey">Resumos automatizados, detecção de padrões de falhas e suporte à decisão.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SEGURANÇA & GOVERNANÇA (100vh com imagem de fundo e overlay) */}
<section
  id="governanca"
  className="min-h-screen flex flex-col justify-center px-6 pt-20 relative bg-cover bg-center bg-no-repeat text-platinum overflow-hidden"
  style={{ backgroundImage: "url('/gov-bg.jpeg')" }}
>
  {/* OVERLAY TRANSLÚCIDO PARA LEITURA NÍTIDA */}
  <div className="absolute inset-0 bg-space-indigo/10 backdrop-blur-[2px] bg-gradient-to-b from-space-indigo/90 via-space-indigo/80 to-space-indigo" />

  {/* CONTEÚDO */}
  <div className="relative z-10 max-w-7xl mx-auto w-full space-y-12">
    <div className="text-center space-y-3 max-w-3xl mx-auto">
      <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-punch-red drop-shadow">
        Governança & Rastreabilidade
      </span>
      <h2 className="text-3xl sm:text-5xl font-black text-platinum drop-shadow-md">
        Segurança corporativa em cada camada de acesso
      </h2>
      <p className="text-platinum/90 text-base drop-shadow">
        A tecnologia apoia o processo enquanto o controle e a responsabilidade decisória permanecem estritamente sob as diretrizes institucionais.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-space-indigo/60 border border-lavender-grey/30 p-8 rounded-2xl space-y-4 hover:border-punch-red/60 transition backdrop-blur-md shadow-xl">
        <div className="text-punch-red font-black text-2xl">RBAC</div>
        <h3 className="font-bold text-lg text-platinum">Controle Estrito de Acesso</h3>
        <p className="text-lavender-grey text-sm leading-relaxed">
          Permissões granulares configuradas por perfil, setor e nível de supervisão para isolamento de dados críticos.
        </p>
      </div>

      <div className="bg-space-indigo/60 border border-lavender-grey/30 p-8 rounded-2xl space-y-4 hover:border-punch-red/60 transition backdrop-blur-md shadow-xl">
        <div className="text-punch-red font-black text-2xl">AUDIT</div>
        <h3 className="font-bold text-lg text-platinum">Trilhas de Auditoria</h3>
        <p className="text-lavender-grey text-sm leading-relaxed">
          Rastreabilidade de quem gerou, visualizou ou atualizou registros com carimbos de tempo e histórico imutável.
        </p>
      </div>

      <div className="bg-space-indigo/60 border border-lavender-grey/30 p-8 rounded-2xl space-y-4 hover:border-punch-red/60 transition backdrop-blur-md shadow-xl">
        <div className="text-punch-red font-black text-2xl">AI GUARD</div>
        <h3 className="font-bold text-lg text-platinum">IA Supervisionada</h3>
        <p className="text-lavender-grey text-sm leading-relaxed">
          Modelos de linguagem e motores estatísticos operando como assistentes analíticos sem bypass de aprovação humana.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* SECTION 4: CONTACT & PARCERIAS (100vh) */}
      <section id="contact" className="min-h-screen flex flex-col justify-between px-6 pt-24 pb-6 bg-platinum text-space-indigo relative">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-punch-red">
              Integração Institucional
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-space-indigo">
              Implemente o VIGA na sua Operação
            </h2>
            <p className="text-space-indigo/70 text-sm sm:text-base max-w-xl mx-auto">
              Conecte sua unidade operacional à plataforma e receba suporte técnico dedicado para implantação.
            </p>
          </div>

          <form
            ref={formRef}
            onSubmit={handleContactSubmit}
            className="bg-white text-space-indigo p-6 sm:p-8 rounded-2xl shadow-xl border border-lavender-grey/30 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-space-indigo mb-1">
                  Nome / Responsável
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-2.5 rounded-lg border border-lavender-grey/40 focus:border-punch-red focus:ring-1 focus:ring-punch-red outline-none transition text-sm text-space-indigo"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-space-indigo mb-1">
                  E-mail Corporativo
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="diretoria@empresa.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-lavender-grey/40 focus:border-punch-red focus:ring-1 focus:ring-punch-red outline-none transition text-sm text-space-indigo"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-space-indigo mb-1">
                Contexto Operacional / Demanda
              </label>
              <textarea
                name="message"
                rows={3}
                required
                placeholder="Descreva o escopo da planta ou objetivo de integração do sistema..."
                className="w-full px-4 py-2.5 rounded-lg border border-lavender-grey/40 focus:border-punch-red focus:ring-1 focus:ring-punch-red outline-none transition text-sm text-space-indigo"
              />
            </div>

            <button
  type="submit"
  disabled={status === "loading"}
  className="w-full py-3.5 bg-[#70e000] hover:bg-[#9ef01a] text-[#004b23] font-bold rounded-lg transition-all duration-300 shadow-[0_0_15px_#70e00080] hover:shadow-[0_0_25px_#9ef01acc] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#70e000] disabled:hover:shadow-[0_0_15px_#70e00080] text-sm tracking-wide"
>
  {status === "loading" ? "Processando Envio..." : "Solicitar Contato Técnico"}
</button>

            {status === "success" && (
              <p className="p-3 bg-green-50 border border-green-200 text-green-800 text-xs font-semibold rounded-md text-center">
                Solicitação registrada com sucesso! Nossa equipe entrará em contato.
              </p>
            )}

            {status === "error" && (
              <p className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs font-semibold rounded-md text-center">
                Erro na transmissão. Verifique os dados ou tente novamente.
              </p>
            )}
          </form>
        </div>

        {/* FOOTER */}
        <footer className="w-full border-t border-lavender-grey/30 pt-4 text-center text-xs text-lavender-grey">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <p>© {new Date().getFullYear()} VIGA — Plataforma de Gestão e Inteligência Operacional.</p>
            <div className="flex gap-6">
              <a href="#solucoes" className="hover:text-punch-red transition">Operações</a>
              <a href="#governanca" className="hover:text-punch-red transition">Segurança</a>
              <Link href="/login" className="hover:text-punch-red transition">Acesso Restrito</Link>
            </div>
          </div>
        </footer>
      </section>

    </div>
  );
}