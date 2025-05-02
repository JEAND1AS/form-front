'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useState, useEffect } from 'react';
import { Roboto } from 'next/font/google'


type TipoBolsa = 'convenio' | 'sac' | 'merito' | 'cadunico' | 'bancocarioca';
type Escola = 'cel' | 'franco';

interface CampoFormulario {
  nome: string;
  tipos: { [key in TipoBolsa]: boolean };
  tipoInput?: 'text' | 'number' | 'date' | 'dropdown';
  opcoesDropdown?: string[];
  obrigatorio?: boolean;
  placeholder?: string;
}



const opcoesAnoEscolar = [
  'Berçário I (Bebês a partir de 3 meses de idade)',
  'Berçário II (Bebês a partir de 1 ano e meio de idade com avaliação da equipe pedagógica)',
  'Maternal I (2 anos completos até 31 de março de 2024)',
  'Maternal II (3 anos completos até 31 de março de 2024)',
  'Pré-escola I (4 anos completos até 31 de março de 2024)',
  'Pré-escola II (5 anos completos até 31 de março de 2024)',
  '1º ano do Ensino Fundamental (6 anos completos até 31 de março de 2024)',
  '2º ano do Ensino Fundamental',
  '3º ano do Ensino Fundamental',
  '4º ano do Ensino Fundamental',
  '5º ano do Ensino Fundamental',
  '6º ano do Ensino Fundamental',
  '7º ano do Ensino Fundamental',
  '8º ano do Ensino Fundamental',
  '9º ano do Ensino Fundamental',
  '1ª série do Ensino Médio',
  '2ª série do Ensino Médio',
  '3ª série do Ensino Médio',
];

const camposFormulario: CampoFormulario[][] = [

  [
    {
      nome: 'Ano de interesse:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'dropdown',
      opcoesDropdown: ['2024', '2025', '2026'],
      obrigatorio: true
    },

    {
      nome: 'Nome completo do(a) estudante:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
      obrigatorio: true,
      placeholder: 'Nome completo'
    },

    {
      nome: 'Data de nascimento:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'date',
      obrigatorio: true
    },

    {
      nome: 'Naturalidade do(a) estudante:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
      obrigatorio: true
    },

    {
      nome: 'NIS:', tipos: {
        convenio: false,
        sac: false,
        merito: false,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'number',
      obrigatorio: true
    },



    {
      nome: 'Matrícula:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'number',
      obrigatorio: true
    },

    {
      nome: 'Ano escolar de interesse:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'dropdown',
      opcoesDropdown: opcoesAnoEscolar,
      obrigatorio: true
    },

    {
      nome: 'Endereço:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
      obrigatorio: true
    },

    {
      nome: 'Bairro:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
      obrigatorio: true
    },

    {
      nome: 'CEP:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
      obrigatorio: true
    },

    {
      nome: 'Unidade:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'dropdown',
      opcoesDropdown: ['Maria Angélica - Jardim Botânico', 'Lopes Quintas   - Jardim Botânico', 'Barra da Tijuca', 'Norte Shopping'],
      obrigatorio: true
    },

    {
      nome: 'Está matriculado no CEL Intercultural School/Colégio Franco em 2023?', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'dropdown',
      opcoesDropdown: ['Sim', 'Não'],
      obrigatorio: true
    },
  ],

  

  [
    {
      nome: 'Nome completo do responsável 1', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },

    {
      nome: 'Profissão responsável 1', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },


    {
      nome: 'CPF do responsável 1', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
      obrigatorio: true
    },

    {
      nome: 'Renda presumida em n° de Salários Mínimos - Responsável 1', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'dropdown',
      opcoesDropdown: [
        '1- salário mínimo',
        '2- salários mínimos',
        '3- ou mais salários mínimos'],
      obrigatorio: true
    },

    {
      nome: 'Endereço do responsável 1', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },

    {
      nome: 'Bairro do responsável 1', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },

    {
      nome: 'CEP do responsável 1', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },

    {
      nome: 'Telefone do responsável 1', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },
  ],

  [
    {
      nome: 'Nome completo do responsável 2', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },

    {
      nome: 'Profissão responsável 2', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },


    {
      nome: 'CPF do responsável 2', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
      obrigatorio: true
    },

    {
      nome: 'Renda presumida em n° de Salários Mínimos - Responsável 2', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'dropdown',
      opcoesDropdown: [
        '1- salário mínimo',
        '2- salários mínimos',
        '3- ou mais salários mínimos'],
      obrigatorio: true
    },

    {
      nome: 'Endereço do responsável 2', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },

    {
      nome: 'Bairro do responsável 2', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },

    {
      nome: 'CEP do responsável 2', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },

    {
      nome: 'Telefone do responsável 2', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },

  ],

  [
    {
      nome: 'Endereço do responsável financeiro', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },

    {
      nome: 'Bairro do responsável financeiro', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },

    {
      nome: 'CEP do responsável financeiro', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },

    {
      nome: 'Telefone do responsável financeiro', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    }, 
  ],

  [
    {
      nome: 'Aluno reside com', tipos: {
        convenio: false,
        sac: true,
        merito: false,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'dropdown',
      opcoesDropdown: [
        'Responsável 1',
        'Responsável 2',
        'Ambos'],
      obrigatorio: true
    },

    {
      nome: 'Se orfão, indicar:', tipos: {
        convenio: false,
        sac: true,
        merito: false,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'dropdown',
      opcoesDropdown: [
        'Sim',
        'Não'],
      obrigatorio: true
    },

    {
      nome: 'Já solicitou bolsa de estudos?', tipos: {
        convenio: false,
        sac: true,
        merito: false,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'dropdown', opcoesDropdown: [
        'Sim',
        'Não'],
      obrigatorio: true
    },

    {
      nome: 'Se sim, em que ano?', tipos: {
        convenio: false,
        sac: true,
        merito: false,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: false
    },

    {
      nome: 'Se sim, qual percentual da bolsa?', tipos: {
        convenio: false,
        sac: true,
        merito: false,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: false
    },

    {
      nome: 'Irmãos que sejam alunos da escola (Nome completo/Série):', tipos: {
        convenio: false,
        sac: true,
        merito: false,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },

    {
      nome: 'Relacione as despesas da família:', tipos: {
        convenio: false,
        sac: true,
        merito: false,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },

    {
      nome: 'Por que a família está solicitando a bolsa de estudos?', tipos: {
        convenio: false,
        sac: true,
        merito: false,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },

    {
      nome: 'Observações Gerais', tipos: {
        convenio: false,
        sac: false,
        merito: false,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: false
    },
  ],
];


export default function HomePage() {
  const searchParams = useSearchParams();

  const escola = searchParams.get('escola') as Escola | null;
  const tipoPBE = searchParams.get('tipoPBE') as TipoBolsa | null;

  const combinacoesPermitidas: { [key in Escola]: TipoBolsa[] } = {
    franco: ['convenio', 'sac'],
    cel: ['convenio', 'sac', 'merito', 'cadunico', 'bancocarioca'],
  };

  
  if (!escola || !tipoPBE || !combinacoesPermitidas[escola]?.includes(tipoPBE)) { 
    return (
      <div className="min-h-screen bg-white-300 flex flex-col justify-center items-center text-center p-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg shadow-black/15 max-w-md w-full">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-2">
          Página não encontrada!
        </p>
        <p className="text-md text-gray-600 mb-6">
          Parece que você se perdeu nos corredores da escola...
        </p>
        <p>Contate o administrador</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3443/3443338.png"
          alt="Desenho de quadro-negro"
          className="w-32 h-32 mx-auto mb-6"
        />
      </div>
    </div>
    );
  }



  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const camposVisiveis = camposFormulario[currentStep].filter(campo => campo.tipos[tipoPBE]);

  // Função para calcular idade
  const calcularIdade = (dataNascimento: string) => {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  };

  // Função para validar CPF
  const validarCPF = (cpf: string) => {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regex.test(cpf);
  };

  const formatarCPF = (valor: string) => {
    return valor
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o primeiro ponto
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona o segundo ponto
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o hífen
  };

  const formatarTelefone = (valor: string) => {
    return valor
      .replace(/\D/g, '') // Remove caracteres não numéricos
      .replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3'); // Formata como (XX) XXXXX-XXXX
  };
  
  const validarNome = (nome: string) => /^[A-Za-zÀ-ÿ\s]+$/.test(nome);
  
  
  useEffect(() => {
    const dadosSalvos = localStorage.getItem('formData');
    if (dadosSalvos) {
      setFormData(JSON.parse(dadosSalvos));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);
  
  const handleChange = (campo: string, valor: string) => {
    let valorFormatado = valor;

    if (campo.includes('Telefone')) {
      valorFormatado = formatarTelefone(valor);
    } else if (campo.includes('CPF')) {
      valorFormatado = formatarCPF(valor);
    }

    setFormData(prev => ({ ...prev, [campo]: valorFormatado }));
    setErrors(prev => ({ ...prev, [campo]: '' }));
  };

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};

    camposVisiveis.forEach(campo => {
      const valor = formData[campo.nome]?.toString().trim();

      // Validação de campos obrigatórios
      if (campo.obrigatorio && !valor) {
        newErrors[campo.nome] = 'Este campo é obrigatório.';
      }

      // Validação de idade
      if (campo.nome === 'Data de nascimento:' && valor) {
        const idade = calcularIdade(valor);
        if (idade < 1 || idade > 20) {
          newErrors[campo.nome] = 'A idade deve estar entre 1 e 20 anos.';
        }
      }

      // Validação de CPF
      if (campo.nome === 'CPF do responsável 1' && valor) {
        if (!validarCPF(valor)) {
          newErrors[campo.nome] = 'O CPF deve estar no formato 000.000.000-00.';
        }
      }

      if (campo.nome === 'CPF do responsável 2' && valor) {
        if (!validarCPF(valor)) {
          newErrors[campo.nome] = 'O CPF deve estar no formato 000.000.000-00.';
        }
      }

      if (campo.nome.includes('Nome completo') && valor && !validarNome(valor)) {
        newErrors[campo.nome] = 'O nome deve conter apenas letras e espaços.';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const copiarDadosResponsavel1 = () => {
    const camposResponsavel1 = [
      'Endereço do responsável 1',
      'Bairro do responsável 1',
      'CEP do responsável 1',
    ];
  
    const camposResponsavel2 = [
      'Endereço do responsável 2',
      'Bairro do responsável 2',
      'CEP do responsável 2',
    ];
  
    const novosDados = { ...formData };
  
    camposResponsavel1.forEach((campo, index) => {
      if (formData[campo]) {
        novosDados[camposResponsavel2[index]] = formData[campo];
      }
    });
  
    setFormData(novosDados);
  };

  const handleNext = () => {
    if (validateFields()) {
      if (currentStep < camposFormulario.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        console.log('Dados do formulário:', formData); // Exibe os dados no console
        setFormSubmitted(true); // Marca o formulário como enviado
        localStorage.removeItem('formData');
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <div className="w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Formulário - Etapa {currentStep + 1}</h1>
        {formSubmitted ? (
          <div className="text-center">
            <p className="text-green-600 font-medium">Formulário enviado com sucesso!</p>
          </div>
        ) : (
          <form>
            {camposVisiveis.map((campo, index) => (
              <div key={index} className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {campo.nome} {campo.obrigatorio && <span className="text-red-500">*</span>}
                </label>
                {campo.tipoInput === 'dropdown' ? (
                  <select
                    className={`w-full border ${errors[campo.nome] ? 'border-red-700' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg shadow-black/15`}
                    value={formData[campo.nome] || ''}
                    onChange={(e) => handleChange(campo.nome, e.target.value)}
                  >
                    <option value="" disabled>{campo.placeholder || 'Selecione uma opção'}</option>
                    {campo.opcoesDropdown?.map((opcao, idx) => (
                      <option key={idx} value={opcao}>{opcao}</option>
                    ))}
                  </select>
                ) : (

                  <span
                  className='text-sm font-medium text-gray-700 mb-1'>
                  <input
                    type={campo.tipoInput || 'text'}
                    className={`w-full border ${errors[campo.nome] ? 'border-red-700' : 'border-gray-300'} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg shadow-black/15`}
                    value={formData[campo.nome] || ''}
                    onChange={(e) => handleChange(campo.nome, e.target.value)}
                    placeholder={campo.placeholder || ''}
                  />
                  </span>
                )}
                {errors[campo.nome] && <p className="text-red-500 text-xs mt-1">{errors[campo.nome]}</p>}
              </div>
            ))}

            {currentStep === 2 && (
              <div className="mb-4">
                <button
                  type="button"
                  onClick={copiarDadosResponsavel1}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg"
                >
                  Reutilizar dados do responsável 1
                </button>
              </div>
            )}

            <div className="flex justify-between mt-6">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg"
                >
                  Anterior
                </button>
              )}
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
              >
                {currentStep < camposFormulario.length - 1 ? 'Próximo' : 'Enviar'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}