export interface PhoneNumber {
  number: string;
  description: string;
  type: 'sac' | 'suporte' | 'vendas' | 'cancelamento';
}

export interface Operator {
  id: string;
  name: string;
  color: string;
  phones: PhoneNumber[];
}

export const operators: Operator[] = [
  {
    id: 'vivo',
    name: 'Vivo',
    color: 'vivo',
    phones: [
      { number: '*8486', description: 'SAC Vivo - Atendimento ao Cliente', type: 'sac' },
      { number: '1058', description: 'SAC Vivo - Do telefone fixo', type: 'sac' },
      { number: '0800 779 0000', description: 'Suporte Técnico Vivo Fibra', type: 'suporte' },
      { number: '0800 978 8000', description: 'Vendas Vivo Internet', type: 'vendas' },
      { number: '*8486', description: 'Cancelamento Vivo', type: 'cancelamento' },
    ],
  },
  {
    id: 'claro',
    name: 'Claro',
    color: 'claro',
    phones: [
      { number: '1052', description: 'SAC Claro - Atendimento ao Cliente', type: 'sac' },
      { number: '0800 720 0000', description: 'Suporte Técnico Claro Internet', type: 'suporte' },
      { number: '0800 036 2121', description: 'Vendas Claro NET', type: 'vendas' },
      { number: '106 21', description: 'SAC Claro do celular', type: 'sac' },
      { number: '1052', description: 'Cancelamento Claro', type: 'cancelamento' },
    ],
  },
  {
    id: 'tim',
    name: 'TIM',
    color: 'tim',
    phones: [
      { number: '*144', description: 'SAC TIM - Atendimento ao Cliente', type: 'sac' },
      { number: '1056', description: 'SAC TIM do telefone fixo', type: 'sac' },
      { number: '0800 741 2580', description: 'Suporte Técnico TIM Live', type: 'suporte' },
      { number: '0800 941 0210', description: 'Vendas TIM Internet', type: 'vendas' },
      { number: '*144', description: 'Cancelamento TIM', type: 'cancelamento' },
    ],
  },
  {
    id: 'oi',
    name: 'Oi',
    color: 'oi',
    phones: [
      { number: '31', description: 'SAC Oi - Atendimento ao Cliente', type: 'sac' },
      { number: '103 31', description: 'SAC Oi do telefone fixo', type: 'sac' },
      { number: '0800 031 0031', description: 'Suporte Técnico Oi Fibra', type: 'suporte' },
      { number: '0800 580 0031', description: 'Vendas Oi Internet', type: 'vendas' },
      { number: '31', description: 'Cancelamento Oi', type: 'cancelamento' },
    ],
  },
  {
    id: 'algar',
    name: 'Algar',
    color: 'algar',
    phones: [
      { number: '0800 034 1234', description: 'SAC Algar - Atendimento ao Cliente', type: 'sac' },
      { number: '0800 701 5000', description: 'Suporte Técnico Algar Internet', type: 'suporte' },
      { number: '0800 034 1234', description: 'Vendas Algar Internet', type: 'vendas' },
      { number: '0800 034 1234', description: 'Cancelamento Algar', type: 'cancelamento' },
    ],
  },
];