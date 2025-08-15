import { Phone, Clock, User } from "lucide-react";

interface PhoneNumber {
  number: string;
  description: string;
  type: 'sac' | 'vendas' | 'suporte' | 'cancelamento';
}

interface OperatorCardProps {
  name: string;
  brand: string;
  numbers: PhoneNumber[];
  color: string;
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'sac':
      return <User className="w-4 h-4 text-muted-foreground" />;
    case 'vendas':
      return <Phone className="w-4 h-4 text-success" />;
    case 'suporte':
      return <Phone className="w-4 h-4 text-info" />;
    case 'cancelamento':
      return <Phone className="w-4 h-4 text-destructive" />;
    default:
      return <Phone className="w-4 h-4 text-muted-foreground" />;
  }
};

export const OperatorCard = ({ name, brand, numbers, color }: OperatorCardProps) => {
  return (
    <section className="bg-card rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
      <header className="mb-4">
        <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
          <div 
            className="w-4 h-4 rounded-full" 
            style={{ backgroundColor: `hsl(var(--${color}))` }}
            aria-hidden="true"
          />
          Telefone {name}
        </h2>
        <p className="text-muted-foreground">
          Números de telefone da operadora {name} para atendimento ao cliente, SAC, suporte técnico e vendas.
        </p>
      </header>

      <div className="grid gap-4">
        {numbers.map((phone, index) => (
          <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-md">
            {getTypeIcon(phone.type)}
            <div className="flex-1">
              <div className="font-semibold text-lg text-foreground">
                <a 
                  href={`tel:${phone.number.replace(/\D/g, '')}`}
                  className="hover:text-primary transition-colors"
                  aria-label={`Ligar para ${phone.description}`}
                >
                  {phone.number}
                </a>
              </div>
              <p className="text-sm text-muted-foreground">{phone.description}</p>
            </div>
            <Clock className="w-4 h-4 text-muted-foreground" />
          </div>
        ))}
      </div>

      <div className="mt-4 text-xs text-muted-foreground bg-muted/30 p-3 rounded-md">
        <p><strong>Horário de funcionamento:</strong> Segunda a domingo, 24 horas (SAC). Vendas: 8h às 22h.</p>
        <p><strong>Dica:</strong> Para atendimento mais rápido, tenha em mãos CPF e número do contrato.</p>
      </div>
    </section>
  );
};