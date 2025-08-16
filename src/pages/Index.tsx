import { useState } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { OperatorCard } from "@/components/OperatorCard";
import { SEOSchema } from "@/components/SEOSchema";
import { operators } from "@/data/operators";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOperators = operators.filter(operator =>
    operator.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearSearch = () => setSearchTerm("");

  return (
    <>
      <SEOSchema />
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Telefones das Operadoras de Internet no Brasil
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              SAC, Suporte, Vendas e Atendimento ao Cliente - Todos os números atualizados
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar operadora (ex: Vivo, Claro, TIM...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-10"
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearSearch}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>
            
            {searchTerm && (
              <p className="text-sm text-muted-foreground mt-2">
                {filteredOperators.length} operadora{filteredOperators.length !== 1 ? 's' : ''} encontrada{filteredOperators.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Intro Text */}
          <section className="mb-12 bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Como Encontrar o Telefone da Sua Operadora de Internet
            </h2>
            <div className="prose max-w-none text-foreground">
              <p className="mb-4">
                Encontrar o número de telefone correto da sua operadora de internet pode ser um desafio. 
                Reunimos todos os telefones das principais operadoras de banda larga do Brasil em um só lugar, 
                incluindo números para SAC (Serviço de Atendimento ao Cliente), suporte técnico, vendas e cancelamento.
              </p>
              <p className="mb-4">
                As operadoras de internet oferecem diferentes canais de atendimento para cada tipo de necessidade. 
                Para problemas técnicos, use o suporte técnico. Para questões comerciais como mudança de plano ou 
                cancelamento, procure o SAC. Para contratar novos serviços, utilize o telefone de vendas.
              </p>
              <p className="mb-4">
                <strong>Horários de Funcionamento:</strong> A maioria das operadoras oferece atendimento 24 horas 
                para emergências técnicas, enquanto o atendimento comercial geralmente funciona de segunda a sexta, 
                das 8h às 20h, e sábados das 8h às 14h. Sempre verifique os horários específicos de cada operadora.
              </p>
              <p>
                Mantenha sempre em mãos o número do seu contrato ou CPF para agilizar o atendimento. 
                Todos os números listados são gratuitos ou cobrados conforme sua operadora de telefonia móvel.
              </p>
            </div>
          </section>

          {/* Operators List */}
          {filteredOperators.length > 0 ? (
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-primary">
                Telefones por Operadora
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredOperators.map((operator) => (
                  <OperatorCard key={operator.id} operator={operator} />
                ))}
              </div>
            </section>
          ) : (
            <section className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="mb-4">
                  <Search className="mx-auto h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Nenhuma operadora encontrada</h3>
                <p className="text-muted-foreground mb-4">
                  Não encontramos operadoras com o termo "{searchTerm}". 
                  Tente buscar por "Vivo", "Claro", "TIM", "Oi" ou "Algar".
                </p>
                <Button onClick={clearSearch}>
                  Ver todas as operadoras
                </Button>
              </div>
            </section>
          )}
        </main>

        <footer className="bg-white border-t mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>Última atualização:</strong> Janeiro 2024
              </p>
              <p className="mb-4">
                Os números de telefone são fornecidos pelas próprias operadoras. 
                Recomendamos sempre verificar no site oficial da operadora para informações mais recentes.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="/politica-privacidade" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
                <span>•</span>
                <a href="/termos-uso" className="hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
