export interface PhoneNumber {
  number: string;
  description: string;
  type: 'sac' | 'vendas' | 'suporte' | 'cancelamento';
}

export interface Operator {
  name: string;
  brand: string;
  numbers: PhoneNumber[];
  color: string;
}

export const operators: Operator[] = [
  {
    name: "Vivo",
    brand: "vivo",
    color: "vivo",
    numbers: [
      {
        number: "103 31",
        description: "SAC Vivo - Atendimento ao Cliente Internet Fibra",
        type: "sac"
      },
      {
        number: "0800 580 0687",
        description: "Vivo Vendas - Contratar Internet Fibra e TV",
        type: "vendas"
      },
      {
        number: "106 21",
        description: "Suporte Técnico Vivo Internet - Problemas de Conexão",
        type: "suporte"
      },
      {
        number: "0800 880 0486",
        description: "Cancelamento Vivo Internet - Rescisão de Contrato",
        type: "cancelamento"
      }
    ]
  },
  {
    name: "Claro",
    brand: "claro", 
    color: "claro",
    numbers: [
      {
        number: "1052",
        description: "SAC Claro - Atendimento Internet Banda Larga",
        type: "sac"
      },
      {
        number: "0800 036 2121",
        description: "Claro Vendas - Assinar Internet e TV por Assinatura",
        type: "vendas"
      },
      {
        number: "106 21",
        description: "Suporte Claro Internet - Assistência Técnica Online",
        type: "suporte"
      },
      {
        number: "1052",
        description: "Cancelar Claro Internet - Central de Cancelamento",
        type: "cancelamento"
      }
    ]
  },
  {
    name: "TIM",
    brand: "tim",
    color: "tim", 
    numbers: [
      {
        number: "1056",
        description: "SAC TIM Live - Atendimento Internet Fibra Óptica",
        type: "sac"
      },
      {
        number: "0800 741 2585",
        description: "TIM Vendas - Contratar TIM Live Internet",
        type: "vendas"
      },
      {
        number: "1056",
        description: "Suporte TIM Internet - Problemas Técnicos Live",
        type: "suporte"
      },
      {
        number: "0800 880 0141",
        description: "Cancelamento TIM Live - Encerrar Contrato Internet",
        type: "cancelamento"
      }
    ]
  },
  {
    name: "Oi",
    brand: "oi",
    color: "oi",
    numbers: [
      {
        number: "103 14",
        description: "SAC Oi Fibra - Atendimento Internet Banda Larga",
        type: "sac"
      },
      {
        number: "0800 031 0800",
        description: "Oi Vendas - Assinar Internet Fibra e TV",
        type: "vendas"
      },
      {
        number: "103 14",
        description: "Suporte Oi Internet - Assistência Técnica Fibra",
        type: "suporte"
      },
      {
        number: "0800 031 4141",
        description: "Cancelar Oi Internet - Central de Cancelamento",
        type: "cancelamento"
      }
    ]
  },
  {
    name: "Algar Telecom",
    brand: "algar",
    color: "algar",
    numbers: [
      {
        number: "0800 940 0115",
        description: "SAC Algar - Atendimento Internet e TV",
        type: "sac"
      },
      {
        number: "0800 704 1234",
        description: "Algar Vendas - Contratar Internet Fibra",
        type: "vendas"
      },
      {
        number: "0800 940 0115",
        description: "Suporte Algar Internet - Problemas Técnicos",
        type: "suporte"
      },
      {
        number: "0800 940 0115",
        description: "Cancelamento Algar - Encerrar Serviços",
        type: "cancelamento"
      }
    ]
  }
];