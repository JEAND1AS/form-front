/* 

Parâmetros de URL:

http://localhost:3000/?escola=cel&tipoPBE=convênio
http://localhost:3000/?escola=cel&tipoPBE=sac
http://localhost:3000/?escola=cel&tipoPBE=Mérito
http://localhost:3000/?escola=cel&tipoPBE=sac
http://localhost:3000/?escola=cel&tipoPBE=cadunico
http://localhost:3000/?escola=cel&tipoPBE=bancocarioca
http://localhost:3000/?escola=franco&tipoPBE=sac
http://localhost:3000/?escola=franco&tipoPBE=convenio


*/



'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useState, useEffect } from 'react';



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
      obrigatorio: true,
      placeholder: 'DD/MM/AAAA'
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
      nome: 'CEP:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
      obrigatorio: true,
      placeholder: '_____-___'
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
      nome: 'Logradouro:', tipos: {
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
      nome: 'Cidade:', tipos: {
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
      nome: 'Estado:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'dropdown',
      opcoesDropdown: ['RJ', 'SP', 'MG', 'ES', 'RS', 'SC', 'PR', 'BA', 'PE', 'CE', 'MA', 'PI', 'AL', 'SE', 'PB', 'RN', 'TO', 'GO', 'DF'],
      obrigatorio: true
    },

    {
      nome: 'Número:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'number',
      obrigatorio: false
    },

    {
      nome: 'Telefone:', tipos: {
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
      nome: 'Complemento:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
      obrigatorio: false
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

    
  ],

  [
    {
      nome: 'Nome - Responsável 1', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },

    {
      nome: 'Profissão - Responsável 1', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },


    {
      nome: 'CPF - Responsável 1', tipos: {
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
        '1SM',
        '2SM',
        '3ouMaisSM'],
      obrigatorio: true
    },

    {
      nome: 'CEP - Responsável 1:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
      obrigatorio: true,
      placeholder: '_____-___'
    },

    {
      nome: 'Estado - Responsável 1:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'dropdown',
      opcoesDropdown: ['RJ', 'SP', 'MG', 'ES', 'RS', 'SC', 'PR', 'BA', 'PE', 'CE', 'MA', 'PI', 'AL', 'SE', 'PB', 'RN', 'TO', 'GO', 'DF'],
      obrigatorio: true
    },


    {
      nome: 'Logradouro - Responsável 1:', tipos: {
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
      nome: 'Bairro - Responsável 1:', tipos: {
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
      nome: 'Cidade - Responsável 1:', tipos: {
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
      nome: 'Número - Responsável 1:', tipos: {
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
      nome: 'Complemento - Responsável 1:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
      obrigatorio: false
    },

    {
      nome: 'Telefone - Responsável 1', tipos: {
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
      nome: 'E-mail - responsável 1:', tipos: {
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
      nome: 'Mora com o responsável 2:?', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: false,
      tipoInput: 'dropdown',
      opcoesDropdown: ['Sim', 'Não'],
    },

    {
      nome: 'Nome completo - Responsável 2:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: false
    },

    {
      nome: 'Profissão - Responsável 2:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: false
    },


    {
      nome: 'CPF - Responsável 2:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'number',
      obrigatorio: false
    },

    {
      nome: 'Renda presumida em n° de Salários Mínimos - Responsável 2:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'dropdown',
      opcoesDropdown: [
        '1SM',
        '2SM',
        '3ouMaisSM'],
      obrigatorio: false
    },


    {
      nome: 'CEP - Responsável 2:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'number',
      obrigatorio: false,
      placeholder: '_____-___'
    },

    {
      nome: 'Estado - Responsável 2:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: false
      },
      tipoInput: 'dropdown',
      opcoesDropdown: ['RJ', 'SP', 'MG', 'ES', 'RS', 'SC', 'PR', 'BA', 'PE', 'CE', 'MA', 'PI', 'AL', 'SE', 'PB', 'RN', 'TO', 'GO', 'DF'],
      obrigatorio: false
    },


    {
      nome: 'Logradouro - Responsável 2:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
      obrigatorio: false
    },

    {
      nome: 'Bairro - Responsável 2:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
      obrigatorio: false
    },


    {
      nome: 'Cidade - Responsável 2:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
      obrigatorio: false
    },

    {
      nome: 'Complemento - Responsável 2:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
      obrigatorio: false
    },

    {
      nome: 'Número - Responsável 2:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'number',
      obrigatorio: false
    },

    {
      nome: 'Telefone - Responsável 2', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: false
    },

    {
      nome: 'E-mail - Responsável 2:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
      obrigatorio: false
    },

    
  ],

  [


    {
      nome: 'Nome completo - Responsável financeiro:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true,
      placeholder: 'Nome completo'
    },

    
    

    {
      nome: 'Profissão - Responsável financeiro:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },

    {
      nome: 'CPF - Responsável financeiro:', tipos: {
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
      nome: 'Renda presumida em n° de Salários Mínimos - Responsável financeiro', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'dropdown',
      obrigatorio: true,
      opcoesDropdown: [
        '1SM',
        '2SM',
        '3ouMaisSM'],
    },

    {
      nome: 'CEP - Responsável financeiro:', tipos: {
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
      nome: 'Estado - Responsável financeiro:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'dropdown',
      opcoesDropdown: ['RJ', 'SP', 'MG', 'ES', 'RS', 'SC', 'PR', 'BA', 'PE', 'CE', 'MA', 'PI', 'AL', 'SE', 'PB', 'RN', 'TO', 'GO', 'DF'],
      obrigatorio: true
    },


    {
      nome: 'Logradouro - Responsável financeiro:', tipos: {
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
      nome: 'Bairro - Responsável financeiro:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
      obrigatorio: false
    },


    {
      nome: 'Cidade - Responsável financeiro:', tipos: {
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
      nome: 'Número - Responsável financeiro:', tipos: {
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
      nome: 'Complemento - Responsável financeiro:', tipos: {
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
      nome: 'Telefone - Responsável financeiro', tipos: {
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
      nome: 'E-mail - Responsável financeiro:', tipos: {
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
      obrigatorio: false
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

export const mapearCampos = (dados: { [key: string]: string }, tipoPBE: TipoBolsa) => {
  const filiacao2Preenchido = [
    'Nome completo do responsável 2',
    'Profissão responsável 2',
    'CPF do responsável 2',
    'Renda presumida em n° de Salários Mínimos - Responsável 2',
    'Endereço - Responsável 2:',
    'Logradouro - Responsável 2:',
    'Número - Responsável 2:',
    'Complemento - Responsável 2:',
    'CEP - Responsável 2:',
    'Bairro - Responsável 2:',
    'Cidade - Responsável 2:',
    'Estado - Responsável 2:',
    'Telefone do responsável 2',
  ].some(campo => dados[campo]?.trim());

  return {
    estudante: {
      CD_Ano_Interesse: dados['Ano de interesse:'],

      NM_Aluno: dados['Nome completo do(a) estudante:'],

      DT_Nascimento: dados['Data de nascimento:'],
      
      NM_Naturalidade: dados['Naturalidade do(a) estudante:'],

      TX_Tipo_PBE: tipoPBE || '',

      CD_NIS: dados['NIS:'],

      CD_Matricula: dados['Matrícula:'],

      CD_Ano_Escolar: dados['Ano escolar de interesse:'],

      TX_Logradouro: dados['Logradouro:'],

      NM_Bairro: dados['Bairro:'],

      NM_Cidade: dados['Cidade'],

      SG_Estado: dados['Estado'],

      TX_Complemento: dados['Complemento:'],

      NR_Endereco: dados['Número:'],

      CD_CEP: dados['CEP:'],

      NM_Unidade: dados['Unidade:'],

      IN_Aluno: dados['Está matriculado no CEL Intercultural School/Colégio Franco em 2023?'],
    },
    filiacao1: {
      TX_Tipo_Responsavel: 'RESPONSAVEL FINANCEIRO',
      NM_Responsavel: dados['Nome - Responsável 1'],

      NM_Profissao: dados['Profissão - Responsável 1'],
      CD_CPF: dados['CPF - Responsável 1'],

      TX_Renda: dados['Renda presumida em n° de Salários Mínimos - Responsável 1'],

      TX_Logradouro: dados['Logradouro - Responsável 1:'],

      NR_Endereco: dados['Número - Responsável 1:'],

      TX_Complemento: dados['Complemento - Responsável 1:'],

      CD_CEP: dados['CEP - Responsável 1:'],

      NM_Bairro: dados['Bairro - Responsável 1:'],

      NM_Cidade: dados['Cidade - Responsável 1:'],

      SG_Estado: dados['Estado - Responsável 1:'],

      NR_Telefone: dados['Telefone - Responsável 1'],

      Tx_Email: dados['E-mail - responsável 1:'],
    },

    filiacao2: filiacao2Preenchido
      ? {
        TX_Tipo_Responsavel: 'RESPONSAVEL FINANCEIRO',

        NM_Responsavel: dados['Nome completo - Responsável 2:'],
        
        NM_Profissao: dados['Profissão - Responsável 2:'],

        CD_CPF: dados['CPF - Responsável 2:'],

        TX_Renda: dados['Renda presumida em n° de Salários Mínimos - Responsável 2:'],


        TX_Logradouro: dados['Logradouro - Responsável 2:'],

        NR_Endereco: dados['Número endereço - Responsável 2:'],

        TX_Complemento: dados['Complemento - Responsável 2:'],

        CD_CEP: dados['CEP - Responsável 2:'],

        NM_Bairro: dados['Bairro - Responsável 2:'],

        NM_Cidade: dados['Cidade - Responsável 2:'],

        SG_Estado: dados['Estado - Responsável 2:'],

        NR_Telefone: dados['Telefone - responsável 2'],

        Tx_Email: dados['E-mail - responsável 2:'],
        }
      : null,

    responsaveFinanceiro: {
      TX_Tipo_Responsavel: 'RESPONSAVEL FINANCEIRO',
      NM_Responsavel: dados['Nome completo - Responsável financeiro:'],

      NM_Profissao: dados['Profissão - Responsável financeiro:'],

      CD_CPF: dados['CPF - Responsável financeiro:'],

      TX_Renda: dados['Renda presumida em n° de Salários Mínimos - Responsável 1'],

      TX_Logradouro: dados['Logradouro - Responsável financeiro:'],

      NR_Endereco: dados['Número - Responsável 1:'],

      TX_Complemento: dados['Complemento - Responsável 1:'],

      CD_CEP: dados['CEP - Responsável 1:'],

      NM_Bairro: dados['Bairro - Responsável financeiro:'],

      NM_Cidade: dados['Cidade - Responsável financeiro:'],

      SG_Estado: dados['Estado - Responsável financeiro:'],

      NR_Telefone: dados['Telefone - Responsável financeiro:'],

      Tx_Email: dados['E-mail - Responsável financeiro:'],
    },
  };
};

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

  const camposVisiveis = camposFormulario[currentStep].filter(campo => {
    if (
      campo.nome === 'Matrícula:' &&
      formData['Está matriculado no CEL Intercultural School/Colégio Franco em 2023?'] !== 'Sim'
    ) {
      return false; // Oculta o campo "Matrícula" se a resposta for diferente de "Sim"
    }
  
    if (
      campo.nome === 'Unidade:' &&
      escola === 'franco'
    ) {
      return false; 
    }
  
  
    return campo.tipos[tipoPBE];
  });

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
      .replace(/\D/g, '')
      .slice(0, 11)
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  };

  const formatarTelefone = (valor: string) => {
    return valor
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3'); 
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
  
  const buscarEndereco = async (cep: string, campo: string) => {
    if (cep.length === 9) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const { logradouro, bairro, localidade, uf } = await response.json();
  
        const prefixos: Record<string, string> = {
          'CEP:': '',
          'CEP - Responsável 1:': 'Responsável 1:',
          'CEP - Responsável 2:': 'Responsável 2:',
          'CEP - Responsável financeiro:': 'Responsável financeiro:',
        };
  
        const prefixo = prefixos[campo] || '';
  
        setFormData(prev => ({
          ...prev,
          [`Logradouro - ${prefixo}`.trim()]: logradouro || '',
          [`Bairro - ${prefixo}`.trim()]: bairro || '',
          [`Cidade - ${prefixo}`.trim()]: localidade || '',
          [`Estado - ${prefixo}`.trim()]: uf || '',
        }));
      } catch (error) {
        console.error('Erro ao buscar endereço:', error);
      }
    }
  };
  
  

  const handleChange = (campo: string, valor: string) => {
    let valorFormatado = valor;
  
    if (campo.includes('CEP')) {
      valorFormatado = valor.replace(/\D/g, '').replace(/(\d{5})(\d{1,3})/, '$1-$2').slice(0, 9);
      buscarEndereco(valorFormatado, campo);
    }
  
    if (campo.includes('Telefone')) {
      valorFormatado = formatarTelefone(valor);
    }
  
    if (campo.includes('CPF')) {
      valorFormatado = formatarCPF(valor);
    }
  
    setFormData(prev => ({ ...prev, [campo]: valorFormatado }));
    setErrors(prev => ({ ...prev, [campo]: '' }));
  };
  
  

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};

    camposVisiveis.forEach(campo => {
      const valor = formData[campo.nome]?.toString().trim();

 
      if (campo.obrigatorio && !valor) {
        newErrors[campo.nome] = 'Este campo é obrigatório.';
      }

  
      if (campo.nome === 'Data de nascimento:' && valor) {
        const idade = calcularIdade(valor);
        if (idade < 1 || idade > 20) {
          newErrors[campo.nome] = 'A idade deve estar entre 1 e 20 anos.';
        }
      }

     
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

    if (formData['Mora com o responsável 2:?'] === 'Sim') {
      const camposResponsavel2 = [
        'Nome completo - Responsável 2:',
        'Profissão - Responsável 2:',
        'CPF - Responsável 2:',
        'Renda presumida em n° de Salários Mínimos - Responsável 2:',
        'Logradouro - Responsável 2:',
        'Número - Responsável 2:',
        'Complemento - Responsável 2:',
        'CEP - Responsável 2:',
        'Bairro - Responsável 2:',
        'Cidade - Responsável 2:',
        'Estado - Responsável 2:',
        'Telefone - Responsável 2:',
        'E-mail - Responsável 2:',
      ];

      camposResponsavel2.forEach(campo => {
        if (!formData[campo]?.trim()) {
          newErrors[campo] = 'Este campo é obrigatório ao selecionar SIM.';
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const copiarDadosResponsavel1 = () => {
    const camposResponsavel1 = [
      'Logradouro - Responsável 1:',
      'Bairro - Responsável 1:',
      'Cidade - Responsável 1:',
      'Estado - Responsável 1:',
      'CEP - Responsável 1:',
      'Número - Responsável 1:',
    ];
  
    const camposResponsavel2 = [
      'Logradouro - Responsável 2:',
      'Bairro - Responsável 2:',
      'Cidade - Responsável 2:',
      'Estado - Responsável 2:',
      'CEP - Responsável 2:',
      'Número - Responsável 2:',
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
        console.log('Dados do formulário:', formData); 
        setFormSubmitted(true);
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-900 text-center mb-6">
          Formulário - Etapa {currentStep + 1} de {camposFormulario.length}
        </h1>
        {formSubmitted ? (
          <div className="text-center">
            <p className="text-green-600 font-medium text-lg">
              Formulário enviado com sucesso!
            </p>
          </div>
        ) : (
          <form>
            {camposVisiveis.map((campo, index) => (
              <div key={index} className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {campo.nome} {campo.obrigatorio && <span className="text-red-500">*</span>}
                </label>
                {campo.tipoInput === 'dropdown' ? (
                  <select
                    className={`w-full border ${errors[campo.nome] ? 'border-red-700' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm`}
                    value={formData[campo.nome] || ''}
                    onChange={(e) => handleChange(campo.nome, e.target.value)}
                  >
                    <option value="" disabled>{campo.placeholder || 'Selecione uma opção'}</option>
                    {campo.opcoesDropdown?.map((opcao, idx) => (
                      <option key={idx} value={opcao}>{opcao}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={campo.tipoInput || 'text'}
                    className={`w-full border ${errors[campo.nome] ? 'border-red-700' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm`}
                    value={formData[campo.nome] || ''}
                    onChange={(e) => handleChange(campo.nome, e.target.value)}
                    placeholder={campo.placeholder || ''}
                  />
                )}
                {errors[campo.nome] && <p className="text-red-500 text-xs mt-1">{errors[campo.nome]}</p>}
              </div>
            ))}

            {currentStep === 1 && (
              <div className="mb-6">
                <button
                  type="button"
                  onClick={copiarDadosResponsavel1}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-200"
                >
                  Reutilizar dados do responsável 1
                </button>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition duration-200"
                >
                  Anterior
                </button>
              )}
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
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

function slice(arg0: number, arg1: number) {
  throw new Error('Function not implemented.');
}
