import { useEffect } from "react";
import { Phone, Search, Clock, Info } from "lucide-react";
import { OperatorCard } from "@/components/OperatorCard";
import { SEOSchema } from "@/components/SEOSchema";
import { operators } from "@/data/operators";

const Index = () => {
  useEffect(() => {
    // Set document title and meta description for SEO
    document.title = "Telefones das Operadoras de Internet no Brasil | SAC e Suporte 2024";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '📞 Todos os telefones das operadoras de internet: Vivo, Claro, TIM, Oi, Algar. SAC, suporte técnico, vendas e cancelamento. Números atualizados 2024.');
    }
  }, []);

  return (
    <>
      <SEOSchema />
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-card border-b border-border">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-8 h-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Telefones das Operadoras de Internet no Brasil
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl">
              SAC, Suporte Técnico, Vendas e Atendimento ao Cliente - Números Atualizados 2024
            </p>
          </div>
        </header>

        {/* Introduction */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg border border-border p-6 mb-8">
              <div className="flex items-start gap-3 mb-4">
                <Info className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">
                    Como Encontrar o Telefone da Sua Operadora de Internet
                  </h2>
                  <div className="prose text-muted-foreground space-y-4">
                    <p>
                      Encontrar o <strong>telefone da operadora de internet</strong> certa pode ser desafiador quando você precisa de suporte urgente. 
                      Este guia completo reúne todos os <strong>números de telefone das principais operadoras do Brasil</strong>, 
                      incluindo Vivo, Claro, TIM, Oi e Algar Telecom.
                    </p>
                    <p>
                      Cada <strong>operadora de internet</strong> possui diferentes números para atendimento especializado: 
                      <strong>SAC para questões gerais</strong>, <strong>suporte técnico para problemas de conexão</strong>, 
                      <strong>vendas para novos planos</strong> e <strong>cancelamento para encerrar contratos</strong>.
                    </p>
                    <p>
                      É importante conhecer o <strong>horário de funcionamento</strong> de cada serviço. 
                      O SAC geralmente funciona 24 horas, enquanto vendas e alguns suportes operam das 8h às 22h. 
                      Para um atendimento mais eficiente, tenha sempre em mãos seu <strong>CPF e número do contrato</strong>.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-success" />
                  <span className="text-muted-foreground">Atendimento 24h (SAC)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Search className="w-4 h-4 text-info" />
                  <span className="text-muted-foreground">Números atualizados</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-warning" />
                  <span className="text-muted-foreground">Ligação gratuita</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operators List */}
        <main className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-2" id="operadoras">
              Telefones das Operadoras por Tipo de Atendimento
            </h2>
            <p className="text-muted-foreground mb-8">
              Clique nos números abaixo para ligar diretamente da sua operadora de internet.
            </p>
            
            <div className="grid gap-8">
              {operators.map((operator, index) => (
                <OperatorCard
                  key={index}
                  name={operator.name}
                  brand={operator.brand}
                  numbers={operator.numbers}
                  color={operator.color}
                />
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-card border-t border-border mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Informações Atualizadas sobre Telefones das Operadoras
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Última atualização: Dezembro 2024. Os números de telefone das operadoras podem sofrer alterações. 
                Sempre confirme no site oficial da sua operadora de internet.
              </p>
              <div className="flex justify-center gap-4 text-xs text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
                <span>•</span>
                <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
                <span>•</span>
                <a href="#" className="hover:text-primary transition-colors">Contato</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
