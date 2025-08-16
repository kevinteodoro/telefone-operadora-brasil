import { Phone, Headphones, ShoppingCart, UserX } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Operator, PhoneNumber } from "@/data/operators";

interface OperatorCardProps {
  operator: Operator;
}

const getIcon = (type: PhoneNumber['type']) => {
  switch (type) {
    case 'sac':
      return <Phone className="h-4 w-4" />;
    case 'suporte':
      return <Headphones className="h-4 w-4" />;
    case 'vendas':
      return <ShoppingCart className="h-4 w-4" />;
    case 'cancelamento':
      return <UserX className="h-4 w-4" />;
    default:
      return <Phone className="h-4 w-4" />;
  }
};

const getTypeLabel = (type: PhoneNumber['type']) => {
  switch (type) {
    case 'sac':
      return 'SAC';
    case 'suporte':
      return 'Suporte';
    case 'vendas':
      return 'Vendas';
    case 'cancelamento':
      return 'Cancelamento';
    default:
      return 'Telefone';
  }
};

export const OperatorCard = ({ operator }: OperatorCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader className={`bg-${operator.color} text-white`}>
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <Phone className="h-5 w-5" />
          {operator.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          {operator.phones.map((phone, index) => (
            <div key={index} className="border-l-4 border-secondary pl-3">
              <div className="flex items-center gap-2 mb-1">
                {getIcon(phone.type)}
                <span className="text-xs font-medium text-muted-foreground uppercase">
                  {getTypeLabel(phone.type)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-lg">{phone.number}</p>
                  <p className="text-sm text-muted-foreground">{phone.description}</p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="shrink-0 ml-2"
                >
                  <a href={`tel:${phone.number.replace(/\s/g, '')}`}>
                    <Phone className="h-3 w-3 mr-1" />
                    Ligar
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};