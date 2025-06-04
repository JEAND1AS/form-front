/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* 

Parâmetros de URL:

http://localhost:3000/?escola=cel&tipoPBE=convenio
http://localhost:3000/?escola=cel&tipoPBE=sac
http://localhost:3000/?escola=cel&tipoPBE=merito
http://localhost:3000/?escola=cel&tipoPBE=cadunico
http://localhost:3000/?escola=cel&tipoPBE=bancocarioca
http://localhost:3000/?escola=franco&tipoPBE=sac
http://localhost:3000/?escola=franco&tipoPBE=convenio


*/



"use client";

import { useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';
import { useState, useEffect } from 'react';
import BarraProgresso from '@/components/ui/BarraProgresso';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { filiais } from '@/lib/filiais';
import { error } from 'console';





type TipoBolsa = 'convenio' | 'sac' | 'merito' | 'cadunico' | 'bancocarioca';
type Escola = 'cel' | 'franco';

interface CampoFormulario {
  nome: string;
  tipos: { [key in TipoBolsa]: boolean };
  tipoInput?: 'text' | 'number' | 'date' | 'dropdown' | 'email';
  opcoesDropdown?: string[];
  obrigatorio?: boolean;
  placeholder?: string;
  validacao?: 'email';

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
      nome: 'Ano de interesse da matrícula:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'dropdown',
      opcoesDropdown: ['2024', '2025'],
      obrigatorio: true
    },
    {
      nome: 'Está matriculado no CEL Intercultural School?', tipos: {
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
      nome: 'Está matriculado no colégio franco?', tipos: {
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
      nome: 'Unidade:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'dropdown',
      obrigatorio: true,
    },
    {
      nome: 'Ano escolar de interesse do(a) estudante:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'dropdown',
      opcoesDropdown: opcoesAnoEscolar,
      obrigatorio: true,
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
      nome: 'Endereço:', tipos: {
        convenio: false,
        sac: false,
        merito: false,
        cadunico: false,
        bancocarioca: false
      },
      tipoInput: 'text',
      obrigatorio: false
    },
  ],

  [

    {
      nome: 'Esse responsável reside com o estudante?', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true,
      tipoInput: 'dropdown',
      opcoesDropdown: [
        'Sim',
        'Não'
      ],
    },
    {
      nome: 'Nome completo - Responsável 1:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },
    {
      nome: 'Profissão - Responsável 1:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: true
    },
    {
      nome: 'CPF - Responsável 1:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
      obrigatorio: true,
      placeholder: '___.___.___-__'
    },
    {
      nome: 'Renda presumida em n° de Salários Mínimos - Responsável 1:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'dropdown',
      opcoesDropdown: [
        '1 S/M',
        '2 S/M',
        '3 OU MAIS S/M'],
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
      nome: 'Endereço - Responsável 1:', tipos: {
        convenio: false,
        sac: false,
        merito: false,
        cadunico: false,
        bancocarioca: false
      },
      tipoInput: 'text',
      obrigatorio: false
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
      nome: 'Telefone - Responsável 1:', tipos: {
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
      nome: 'E-mail - Responsável 1:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
      obrigatorio: true,
      validacao: 'email'
    },
    {
      nome: 'Responsável 2 reside com o estudante?', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      obrigatorio: false,
      tipoInput: 'dropdown',
      opcoesDropdown: [
        'Sim',
        'Não'
      ],
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
      tipoInput: 'text',
      obrigatorio: false,
      placeholder: '___.___.___-__'
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
        '1 S/M',
        '2 S/M',
        '3 OU MAIS S/M'],
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
      tipoInput: 'text',
      obrigatorio: false,
      placeholder: '_____-___'
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
      nome: 'Endereço - Responsável 2:', tipos: {
        convenio: false,
        sac: false,
        merito: false,
        cadunico: false,
        bancocarioca: false
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
      nome: 'Telefone - Responsável 2:', tipos: {
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
      nome: 'E-mail - Responsável 2:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
      obrigatorio: false,
      validacao: 'email'
    },
  ],

  [
    {
      nome: 'Deseja copiar os dados de algum responsável?', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'dropdown',
      opcoesDropdown: [
        'Não',
        'Responsável 1',
        'Responsável 2',
      ],
      obrigatorio: false,
    },
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
      obrigatorio: true,
      placeholder: '___.___.___-__'
    },
    {
      nome: 'Renda presumida em n° de Salários Mínimos - Responsável financeiro:', tipos: {
        convenio: true,
        sac: true,
        merito: true,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'dropdown',
      obrigatorio: true,
      opcoesDropdown: [
        '1 S/M',
        '2 S/M',
        '3 OU MAIS S/M'],
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
      obrigatorio: true,
      placeholder: '_____-___'
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
      nome: 'Endereço - Responsável financeiro:', tipos: {
        convenio: false,
        sac: false,
        merito: false,
        cadunico: false,
        bancocarioca: false
      },
      tipoInput: 'text',
      obrigatorio: false
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
      obrigatorio: false
    },
    {
      nome: 'Telefone - Responsável financeiro:', tipos: {
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
      obrigatorio: true,
      validacao: 'email'
    },
  ],

  [
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
      nome: 'Relação de pessoas que residem no mesmo endereço (Nome/Grau de parentesco/Idade): ', tipos: {
        convenio: false,
        sac: true,
        merito: false,
        cadunico: true,
        bancocarioca: true
      },
      tipoInput: 'text',
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
      nome: 'Irmãos que sejam alunos da escola (Nome completo/Série):', tipos: {
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

export const mapearCampos = async (dados: { [key: string]: string }, tipoPBE: TipoBolsa, escola: Escola) => {
  const CD_Coligada = escola === 'cel' ? 1 : 5;
  const filiacao2Preenchido = [
    'Nome completo - Responsável 2:',
    'Profissão - Responsável 2:',
    'CPF - Responsável 2:',
    'Renda presumida em n° de Salários Mínimos - Responsável 2:',
    'Endereço - Responsável 2:',
    'Logradouro - Responsável 2:',
    'Número - Responsável 2:',
    'Complemento - Responsável 2:',
    'CEP - Responsável 2:',
    'Bairro - Responsável 2:',
    'Cidade - Responsável 2:',
    'Estado - Responsável 2:',
    'Telefone - Responsável 2:',
  ].some(campo => dados[campo]?.trim());

  const SG_Filial = escola === 'franco'
    ? 'FB'
    : (filiais.find(f => f.name === dados['Unidade:'])?.code || 'NA');

  const limparTexto = (texto: string | undefined | null): string => {
    if (!texto) return '';
    return texto.trim().replace(/\s+/g, ' ');
  };




  const corpo = {
    estudante: {
      CD_Ano_Interesse: limparTexto(dados['Ano de interesse da matrícula:']),
      NM_Aluno: limparTexto(dados['Nome completo do(a) estudante:']),
      DT_Nascimento: limparTexto(dados['Data de nascimento:']),
      NM_Naturalidade: limparTexto(dados['Naturalidade do(a) estudante:']),
      TX_Tipo_PBE: tipoPBE,
      CD_NIS: limparTexto(dados['NIS:']) || null,
      CD_Matricula: limparTexto(dados['Matrícula:']) || null,
      CD_Coligada,
      CD_Ano_Escolar: limparTexto(dados['Ano escolar de interesse do(a) estudante:']),
      TX_Logradouro: limparTexto(dados['Logradouro:']),
      NM_Bairro: limparTexto(dados['Bairro:']),
      NM_Cidade: limparTexto(dados['Cidade:']),
      SG_Estado: limparTexto(dados['Estado:']),
      TX_Complemento: limparTexto(dados['Complemento:']) || null,
      NR_Endereco: limparTexto(dados['Número:']) || '',
      CD_CEP: limparTexto(dados['CEP:']) || '',
      NM_Unidade: dados['Unidade:'] || 'LFB',
      IN_Aluno: dados['Está matriculado no CEL Intercultural School?'] || limparTexto(dados['Está matriculado no colégio franco?']) || null,
      TX_Endereco: `${dados['Endereço:'] || ''}${dados['Complemento:'] ? ' - complemento: ' + dados['Complemento:'] : ''}`.trim() || '',
      SG_Filial: SG_Filial,
    },

    filiacao1: {
      TX_Tipo_Responsavel: 'FILIACAO1',
      NM_Responsavel: limparTexto(dados['Nome completo - Responsável 1:']),
      NM_Profissao: limparTexto(dados['Profissão - Responsável 1:']),
      CD_CPF: limparTexto(dados['CPF - Responsável 1:']),
      TX_Renda: limparTexto(dados['Renda presumida em n° de Salários Mínimos - Responsável 1:']),
      TX_Logradouro: limparTexto(dados['Logradouro - Responsável 1:']),
      TX_Endereco: `${dados['Endereço - Responsável 1:']}${dados['Complemento - Responsável 1:'] ? ' - complemento: ' + dados['Complemento - Responsável 1:'] : ''}`.trim() || null,
      NR_Endereco: limparTexto(dados['Número - Responsável 1:']) || null,
      TX_Complemento: limparTexto(dados['Complemento - Responsável 1:']) || null,
      CD_CEP: limparTexto(dados['CEP - Responsável 1:']),
      NM_Bairro: limparTexto(dados['Bairro - Responsável 1:']),
      NM_Cidade: limparTexto(dados['Cidade - Responsável 1:']),
      SG_Estado: limparTexto(dados['Estado - Responsável 1:']),
      NR_Telefone: limparTexto(dados['Telefone - Responsável 1:']) || null,
      TX_Email: limparTexto(dados['E-mail - Responsável 1:']),
    },

    filiacao2: filiacao2Preenchido
      ? {
        TX_Tipo_Responsavel: 'FILIACAO2',
        NM_Responsavel: limparTexto(dados['Nome completo - Responsável 2:']) || null,
        NM_Profissao: limparTexto(dados['Profissão - Responsável 2:']) || null,
        CD_CPF: limparTexto(dados['CPF - Responsável 2:']) || null,
        TX_Renda: limparTexto(dados['Renda presumida em n° de Salários Mínimos - Responsável 2:']) || null,
        TX_Endereco: `${dados['Endereço - Responsável 2:'] || ''}${dados['Complemento - Responsável 2:'] ? ' - complemento: ' + dados['Complemento - Responsável 2:'] : ''}`.trim() || null,
        TX_Logradouro: limparTexto(dados['Logradouro - Responsável 2:']) || null,
        NR_Endereco: limparTexto(dados['Número - Responsável 2:']) || null,
        TX_Complemento: limparTexto(dados['Complemento - Responsável 2:']) || null,
        CD_CEP: limparTexto(dados['CEP - Responsável 2:']) || null,
        NM_Bairro: limparTexto(dados['Bairro - Responsável 2:']) || null,
        NM_Cidade: limparTexto(dados['Cidade - Responsável 2:']) || null,
        SG_Estado: limparTexto(dados['Estado - Responsável 2:']) || null,
        NR_Telefone: limparTexto(dados['Telefone - Responsável 2:']) || null,
        TX_Email: limparTexto(dados['E-mail - Responsável 2:']) || null,
      }
      : null,

    responsavelFinanceiro: {
      TX_Tipo_Responsavel: 'RESPONSAVEL FINANCEIRO',
      NM_Responsavel: limparTexto(dados['Nome completo - Responsável financeiro:']),
      NM_Profissao: limparTexto(dados['Profissão - Responsável financeiro:']),
      CD_CPF: limparTexto(dados['CPF - Responsável financeiro:']),
      TX_Renda: limparTexto(dados['Renda presumida em n° de Salários Mínimos - Responsável financeiro:']),
      TX_Endereco: `${dados['Endereço - Responsável financeiro:']}${dados['Complemento - Responsável financeiro:'] ? ' - complemento: ' + dados['Complemento - Responsável financeiro:'] : ''}`.trim() || null,
      TX_Logradouro: limparTexto(dados['Logradouro - Responsável financeiro:']),
      NR_Endereco: limparTexto(dados['Número - Responsável financeiro:']),
      TX_Complemento: limparTexto(dados['Complemento - Responsável financeiro:']) || null,
      CD_CEP: limparTexto(dados['CEP - Responsável financeiro:']),
      NM_Bairro: limparTexto(dados['Bairro - Responsável financeiro:']),
      NM_Cidade: limparTexto(dados['Cidade - Responsável financeiro:']),
      SG_Estado: limparTexto(dados['Estado - Responsável financeiro:']),
      NR_Telefone: limparTexto(dados['Telefone - Responsável financeiro:']),
      TX_Email: limparTexto(dados['E-mail - Responsável financeiro:']),
    },

    informacoesAdicionais: {
      TX_Aluno_Reside_Com: limparTexto(dados['Aluno reside com']) || null,
      IN_Orfao: limparTexto(dados['Se orfão, indicar:']) || null,
      IN_Solicitou_Bolsa_Antes: limparTexto(dados['Já solicitou bolsa de estudos?']) || null,
      CD_Bolsa_Ano: limparTexto(dados['Se sim, em que ano?']) || null,
      TX_Bolsa_Percentual: limparTexto(dados['Se sim, qual percentual da bolsa?']) || null,
      IN_Irmaos_Alunos: limparTexto(dados['Irmãos que sejam alunos da escola (Nome completo/Série):']) || null,
      TX_Relacao_Residentes: limparTexto(dados['Relação de pessoas que residem no mesmo endereço (Nome/Grau de parentesco/Idade): ']) || null,
      TX_Relacao_Despesas: limparTexto(dados['Relacione as despesas da família:']) || null,
      TX_Motivo_Bolsa: limparTexto(dados['Por que a família está solicitando a bolsa de estudos?']) || null,
      TX_Observacoes_Gerais: limparTexto(dados['Observações Gerais']) || null,
    }
  };

  return corpo;
};

function normalizarParametro(param: string | null): string | null {
  if (!param) return null;
  return param
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export default function HomePage() {
  const searchParams = useSearchParams();

  const escola = normalizarParametro(searchParams.get('escola')) as Escola | null;
  const tipoPBE = normalizarParametro(searchParams.get('tipoPBE')) as TipoBolsa | null;


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
  const totalEtapasVisiveis = camposFormulario.filter(etapa =>
    etapa.some(campo => campo.tipos[tipoPBE])
  ).length;

  const opcoesUnidade = useMemo(() => {
    if (tipoPBE === 'bancocarioca') {
      return filiais.filter(f => f.name.includes('Maria Angélica')).map(f => ({ label: f.name, value: f.code }));
    }
    return filiais
      .filter(f => (escola === 'franco' ? f.coligada === 5 : f.coligada === 1))
      .map(f => ({ label: f.name, value: f.code }));


  }, [escola]);

  useEffect(() => {
    const ultimoTipo = localStorage.getItem('ultimoTipoPBE');
    const ultimaEscola = localStorage.getItem('ultimaEscola');
    const escolaValida = escola === 'franco' ? 5 : 1;
    const escolastring = String(escolaValida);
  



    if (tipoPBE && escolaValida) {
      const mudouTipo = ultimoTipo !== tipoPBE;
      const mudouEscola = ultimaEscola !== escolastring;


       if (mudouTipo || mudouEscola) {
        setFormData({});
        setCurrentStep(0);
        localStorage.removeItem('formData');

        localStorage.setItem('ultimoTipoPBE', tipoPBE);
        localStorage.setItem('ultimaEscola', escolastring);
      } else {
        const dadosSalvos = localStorage.getItem('formData');
        if (dadosSalvos) {
          setFormData(JSON.parse(dadosSalvos));
        }
      }
    } 
  }, [tipoPBE, escola]);



  const opcoesAnoEscolar = useMemo(() => {
    const anoInteresse = formData['Ano de interesse da matrícula:'];
    const unidadeSelecionada = formData['Unidade:'];


    return !anoInteresse ||(escola !== 'franco' && !unidadeSelecionada) ? [] 
  : ( 
    (tipoPBE === 'bancocarioca' && anoInteresse === '2024'
      ? filiais.find(f => f.code === 'MA')?.segmentos.find(s => s.code === 'EM')?.series
      : (escola === 'franco'
          ? filiais.filter(f => f.coligada === 5)
          : filiais.filter(f => f.code === unidadeSelecionada)
        ).flatMap(f => f.segmentos.flatMap(s => s.series))
    ) || []
  ).map(s => s.name.replace('2024', anoInteresse));

  }, [
    formData['Ano de interesse da matrícula:'],
    formData['Unidade:'],
    tipoPBE,
    escola
  ]);

  const selecionarAnoEscolar = useMemo(() => {
    if (escola === 'cel') {
      return !!formData['Ano de interesse da matrícula:'] && !!formData['Unidade:'];
    }
    return true;
  }, [
    formData['Ano de interesse da matrícula:'],
    formData['Unidade:'],
    escola
  ]);


  const camposVisiveis = camposFormulario[currentStep].filter(campo => {
    if (
      campo.nome === 'Matrícula:' &&
      formData['Está matriculado no CEL Intercultural School?'] !== 'Sim' &&
      formData['Está matriculado no colégio franco?'] !== 'Sim'
    ) {
      return false;
    }

    if (
      campo.nome === 'Está matriculado no CEL Intercultural School?' &&
      escola !== 'cel'
    ) {
      return false;
    }

    if (
      campo.nome === 'Está matriculado no colégio franco?' &&
      escola !== 'franco'
    ) {
      return false
    }

    if (
      campo.nome === 'Unidade:' &&
      escola === 'franco'
    ) {
      return false;
    }



    return campo.tipos[tipoPBE];
  });


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
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);



  const buscarEndereco = async (cep: string, campo: string) => {
    if (cep.length === 9) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep.replace('-', '')}/json/`);
        if (!response.ok) throw new Error('Erro ao buscar o endereço');

        const { logradouro, bairro, localidade, uf, erro } = await response.json();

        if (erro) {
          toast.error('CEP não encontrado');
          return;
        }


        const camposMap: Record<string, { logradouro: string; bairro: string; cidade: string; estado: string }> = {
          'CEP:': {
            logradouro: 'Logradouro:',
            bairro: 'Bairro:',
            cidade: 'Cidade:',
            estado: 'Estado:',
          },
          'CEP - Responsável 1:': {
            logradouro: 'Logradouro - Responsável 1:',
            bairro: 'Bairro - Responsável 1:',
            cidade: 'Cidade - Responsável 1:',
            estado: 'Estado - Responsável 1:',
          },
          'CEP - Responsável 2:': {
            logradouro: 'Logradouro - Responsável 2:',
            bairro: 'Bairro - Responsável 2:',
            cidade: 'Cidade - Responsável 2:',
            estado: 'Estado - Responsável 2:',
          },
          'CEP - Responsável financeiro:': {
            logradouro: 'Logradouro - Responsável financeiro:',
            bairro: 'Bairro - Responsável financeiro:',
            cidade: 'Cidade - Responsável financeiro:',
            estado: 'Estado - Responsável financeiro:',
          },
        };

        const campos = camposMap[campo];
        if (!campos) {
          toast.error('Campo de CEP não mapeado');
          return;
        }

        setFormData(prev => ({
          ...prev,
          [campos.logradouro]: logradouro || '',
          [campos.bairro]: bairro || '',
          [campos.cidade]: localidade || '',
          [campos.estado]: uf || '',
        }));
      } catch (error) {
        toast.error('Erro ao buscar endereço');
      }
    }
  };




  const handleChange = (campo: string, valor: string) => {
    let valorFormatado = valor;


    if (campo.includes('Data de nascimento:') && valor > new Date().toISOString().slice(0, 10)) {
      errors[campo] = 'Data de nascimento não pode ser futura';
      setErrors({ ...errors });
      return;
    }

    (campo.includes('CEP')) && (
      valorFormatado = valor.replace(/\D/g, '').replace(/(\d{5})(\d{1,3})/, '$1-$2').slice(0, 9),
      buscarEndereco(valorFormatado, campo)
    );

    (campo.includes('Telefone')) && (
      valorFormatado = formatarTelefone(valor)
    );

    (campo.includes('CPF')) && (
      valorFormatado = formatarCPF(valor)
    );





    setFormData(prev => {
      const novoFormData = { ...prev, [campo]: valorFormatado };

      if (campo === 'Deseja copiar os dados de algum responsável?') {
        [
          'Nome completo - Responsável financeiro:',
          'Profissão - Responsável financeiro:',
          'CPF - Responsável financeiro:',
          'Telefone - Responsável financeiro:',
          'Renda presumida em n° de Salários Mínimos - Responsável financeiro:',
          'CEP - Responsável financeiro:',
          'Logradouro - Responsável financeiro:',
          'Bairro - Responsável financeiro:',
          'Cidade - Responsável financeiro:',
          'Estado - Responsável financeiro:',
          'Número - Responsável financeiro:',
          'Complemento - Responsável financeiro:',
          'Endereço - Responsável financeiro:',
          'E-mail - Responsável financeiro:'
        ].forEach(campoFin => {
          novoFormData[campoFin] = '';
        });

        if (valor === 'Responsável 1' || valor === 'Responsável 2') {
          const prefixo = valor === 'Responsável 1' ? 'Responsável 1' : 'Responsável 2';
          const camposOrigem = [
            { origem: `Nome ${prefixo.includes('1') ? 'completo - Responsável 1:' : 'completo - Responsável 2:'}`, destino: 'Nome completo - Responsável financeiro:' },
            { origem: `Profissão - ${prefixo}:`, destino: 'Profissão - Responsável financeiro:' },
            { origem: `CPF - ${prefixo}:`, destino: 'CPF - Responsável financeiro:' },
            { origem: `Telefone - ${prefixo}:`, destino: 'Telefone - Responsável financeiro:' },
            { origem: `Renda presumida em n° de Salários Mínimos - ${prefixo}:`, destino: 'Renda presumida em n° de Salários Mínimos - Responsável financeiro:' },
            { origem: `CEP - ${prefixo}:`, destino: 'CEP - Responsável financeiro:' },
            { origem: `Logradouro - ${prefixo}:`, destino: 'Logradouro - Responsável financeiro:' },
            { origem: `Bairro - ${prefixo}:`, destino: 'Bairro - Responsável financeiro:' },
            { origem: `Cidade - ${prefixo}:`, destino: 'Cidade - Responsável financeiro:' },
            { origem: `Estado - ${prefixo}:`, destino: 'Estado - Responsável financeiro:' },
            { origem: `Número - ${prefixo}:`, destino: 'Número - Responsável financeiro:' },
            { origem: `Complemento - ${prefixo}:`, destino: 'Complemento - Responsável financeiro:' },
            { origem: `E-mail - ${prefixo}:`, destino: 'E-mail - Responsável financeiro:' },
          ];

          camposOrigem.forEach(({ origem, destino }) => {
            novoFormData[destino] = prev[origem] || '';
          });

          // Atualize o campo concatenado após copiar os dados
          novoFormData['Endereço - Responsável financeiro:'] =
            `${prev[`Logradouro - ${prefixo}:`] || ''}, ${prev[`Número - ${prefixo}:`] || ''}, ${prev[`Bairro - ${prefixo}:`] || ''}, ${prev[`Cidade - ${prefixo}:`] || ''}, ${prev[`Estado - ${prefixo}:`] || ''} - ${prev[`CEP - ${prefixo}:`] || ''}`.replace(/(, )+/g, ', ').replace(/^, |, $/g, '').replace(/, ,/g, ',');
        }


      }

      if (campo === 'Esse responsável reside com o estudante?' && valor === 'Não') {
        [
          'Nome completo - Responsável 1:',
          'Profissão - Responsável 1:',
          'CPF - Responsável 1:',
          'Telefone - Responsável 1:',
          'Renda presumida em n° de Salários Mínimos - Responsável 1:',
          'CEP - Responsável 1:',
          'Logradouro - Responsável 1:',
          'Bairro - Responsável 1:',
          'Cidade - Responsável 1:',
          'Estado - Responsável 1:',
          'Número - Responsável 1:',
          'Complemento - Responsável 1:',
          'Endereço - Responsável 1:',
          'E-mail - Responsável 1:'
        ].forEach(campoResp1 => {
          novoFormData[campoResp1] = '';
        });
      }


      if (campo === 'Responsável 2 reside com o estudante?' && valor === 'Não') {
        [
          'Nome completo - Responsável 2:',
          'Profissão - Responsável 2:',
          'CPF - Responsável 2:',
          'Telefone - Responsável 2:',
          'Renda presumida em n° de Salários Mínimos - Responsável 2:',
          'CEP - Responsável 2:',
          'Logradouro - Responsável 2:',
          'Bairro - Responsável 2:',
          'Cidade - Responsável 2:',
          'Estado - Responsável 2:',
          'Número - Responsável 2:',
          'Complemento - Responsável 2:',
          'Endereço - Responsável 2:',
          'E-mail - Responsável 2:'
        ].forEach(campoResp2 => {
          novoFormData[campoResp2] = '';
        });
      }

      if (
        campo === 'Esse responsável reside com o estudante?' &&
        valor === 'Sim' &&
        camposVisiveis.some(c => c.nome === 'Logradouro - Responsável 1:')
      ) {
        novoFormData['CEP - Responsável 1:'] = prev['CEP:'] || '';
        novoFormData['Logradouro - Responsável 1:'] = prev['Logradouro:'] || '';
        novoFormData['Bairro - Responsável 1:'] = prev['Bairro:'] || '';
        novoFormData['Cidade - Responsável 1:'] = prev['Cidade:'] || '';
        novoFormData['Estado - Responsável 1:'] = prev['Estado:'] || '';
        novoFormData['Número - Responsável 1:'] = prev['Número:'] || '';
        novoFormData['Complemento - Responsável 1:'] = prev['Complemento:'] || '';
        novoFormData['Endereço - Responsável 1:'] =
          `${prev['Logradouro:'] || ''}, ${prev['Número:'] || ''}, ${prev['Bairro:'] || ''}, ${prev['Cidade:'] || ''}, ${prev['Estado:'] || ''} - ${prev['CEP:'] || ''}`.replace(/(, )+/g, ', ').replace(/^, |, $/g, '').replace(/, ,/g, ',');
      }

      if (
        campo === 'Responsável 2 reside com o estudante?' &&
        valor === 'Sim' &&
        camposVisiveis.some(c => c.nome === 'Logradouro - Responsável 2:')
      ) {
        novoFormData['CEP - Responsável 2:'] = prev['CEP:'] || '';
        novoFormData['Logradouro - Responsável 2:'] = prev['Logradouro:'] || '';
        novoFormData['Bairro - Responsável 2:'] = prev['Bairro:'] || '';
        novoFormData['Cidade - Responsável 2:'] = prev['Cidade:'] || '';
        novoFormData['Estado - Responsável 2:'] = prev['Estado:'] || '';
        novoFormData['Número - Responsável 2:'] = prev['Número:'] || '';
        novoFormData['Complemento - Responsável 2:'] = prev['Complemento:'] || '';
        novoFormData['Endereço - Responsável 2:'] =
          `${prev['Logradouro:'] || ''}, ${prev['Número:'] || ''}, ${prev['Bairro:'] || ''}, ${prev['Cidade:'] || ''}, ${prev['Estado:'] || ''} - ${prev['CEP:'] || ''}`.replace(/(, )+/g, ', ').replace(/^, |, $/g, '').replace(/, ,/g, ',');
      }


      if (
        [
          'Logradouro:', 'Número:', 'Bairro:', 'Cidade:', 'Estado:', 'CEP:'
        ].includes(campo)
      ) {
        novoFormData['Endereço:'] =
          `${novoFormData['Logradouro:'] || ''}, ${novoFormData['Número:'] || ''}, ${novoFormData['Bairro:'] || ''}, ${novoFormData['Cidade:'] || ''}, ${novoFormData['Estado:'] || ''} - ${novoFormData['CEP:'] || ''}`.replace(/(, )+/g, ', ').replace(/^, |, $/g, '').replace(/, ,/g, ',');
      }

      if (
        [
          'Logradouro - Responsável 1:', 'Número - Responsável 1:', 'Bairro - Responsável 1:', 'Cidade - Responsável 1:', 'Estado - Responsável 1:', 'CEP - Responsável 1:'
        ].includes(campo)
      ) {
        novoFormData['Endereço - Responsável 1:'] =
          `${novoFormData['Logradouro - Responsável 1:'] || ''}, ${novoFormData['Número - Responsável 1:'] || ''}, ${novoFormData['Bairro - Responsável 1:'] || ''}, ${novoFormData['Cidade - Responsável 1:'] || ''}, ${novoFormData['Estado - Responsável 1:'] || ''} - ${novoFormData['CEP - Responsável 1:'] || ''}`.replace(/(, )+/g, ', ').replace(/^, |, $/g, '').replace(/, ,/g, ',');
      }


      if (
        [
          'Logradouro - Responsável 2:', 'Número - Responsável 2:', 'Bairro - Responsável 2:', 'Cidade - Responsável 2:', 'Estado - Responsável 2:', 'CEP - Responsável 2:'
        ].includes(campo)
      ) {
        novoFormData['Endereço - Responsável 2:'] =
          `${novoFormData['Logradouro - Responsável 2:'] || ''}, ${novoFormData['Número - Responsável 2:'] || ''}, ${novoFormData['Bairro - Responsável 2:'] || ''}, ${novoFormData['Cidade - Responsável 2:'] || ''}, ${novoFormData['Estado - Responsável 2:'] || ''} - ${novoFormData['CEP - Responsável 2:'] || ''}`.replace(/(, )+/g, ', ').replace(/^, |, $/g, '').replace(/, ,/g, ',');
      }


      if (
        [
          'Logradouro - Responsável financeiro:', 'Número - Responsável financeiro:', 'Bairro - Responsável financeiro:', 'Cidade - Responsável financeiro:', 'Estado - Responsável financeiro:', 'CEP - Responsável financeiro:'
        ].includes(campo)
      ) {
        novoFormData['Endereço - Responsável financeiro:'] =
          `${novoFormData['Logradouro - Responsável financeiro:'] || ''}, ${novoFormData['Número - Responsável financeiro:'] || ''}, ${novoFormData['Bairro - Responsável financeiro:'] || ''}, ${novoFormData['Cidade - Responsável financeiro:'] || ''}, ${novoFormData['Estado - Responsável financeiro:'] || ''} - ${novoFormData['CEP - Responsável financeiro:'] || ''}`.replace(/(, )+/g, ', ').replace(/^, |, $/g, '').replace(/, ,/g, ',');
      }

      return novoFormData;
    });


    setErrors(prev => ({ ...prev, [campo]: '' }));
  };

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};

    camposVisiveis.forEach(campo => {
      const valor = formData[campo.nome]?.toString().trim();

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      (campo.obrigatorio && !valor) && (
        newErrors[campo.nome] = 'Este campo é obrigatório.'
      )

      if (campo.nome === 'Data de nascimento:' && valor) {

        const dataAtual = new Date();
        const nascimento = new Date(valor);
        const dataMinima = new Date();
        dataMinima.setMonth(dataMinima.getMonth() - 3);

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        (nascimento > dataAtual)
          && (
            newErrors[campo.nome] = 'Insira uma idade válida.',
            toast.error('Digite uma data válida')
          );

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        (nascimento <= dataAtual && nascimento > dataMinima)
          && (
            newErrors[campo.nome] = 'Digite uma data válida.',
            toast.error('Digite uma data válida')
          );


      }


      if (campo.nome.includes('CPF') && valor) {
        if (!validarCPF(valor)) {
          newErrors[campo.nome] = 'O CPF deve estar no formato 000.000.000-00.';
        }
      }

      if (campo.nome.includes('Nome completo -') && valor && !validarNome(valor)) {
        newErrors[campo.nome] = 'O nome deve conter apenas letras e espaços.';
      }

      if (campo.validacao === 'email' && valor) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(valor)) {
          newErrors[campo.nome] = 'Digite um e-mail válido.';
          toast.error('Digite um email válido')
        }
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleNext = async () => {
    if (validateFields()) {
      if (currentStep < totalEtapasVisiveis - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        try {
          const dadosParaEnvio = await mapearCampos(formData, tipoPBE!, escola!);

          const res = await fetch('http://localhost:3001/pbe/criar', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosParaEnvio),
          });

          if (!res.ok) {
            const erro = await res.json();
            toast.error(`Erro: ${erro?.message || 'Erro ao enviar o formulário'}`);
            return;
          }

          toast.success('Formulário enviado com sucesso!');
          setFormSubmitted(true);
          localStorage.removeItem('formData');

        } catch (error: unknown) {
          console.error('Erro no envio:', error);
          setFormSubmitted(false);
          toast.error(`Erro no envio do formulário!`);

        }

        if (escola === 'cel' && !formData['Unidade:']) {
          toast.error('Selecione a unidade');
          return;
        }
        if (!formData['Ano de interesse da matrícula:']) {
          toast.error('Selecione o ano de interesse');
          return;
        }
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const stepsDinamicos = useMemo(() => {
    const etapas = [
      { nome: 'Dados do(a) estudante', indice: 0 },
      { nome: 'Dados dos(as) responsáveis', indice: 1 },
      { nome: 'Responsável financeiro', indice: 2 },
      { nome: 'Informações adicionais', indice: 3 }
    ];


    return etapas
      .filter((_, idx) =>
        camposFormulario[idx]?.some(campo => campo.tipos[tipoPBE])
      )
      .map(e => e.nome)
      .concat('Finalizado');
  }, [tipoPBE]);



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
        </div>

        {formSubmitted ? (
          <div className="text-center p-6 border border-green-300 bg-green-50 rounded-lg col-span-2">
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              Formulário enviado com sucesso!
            </h2>
            <p className="text-green-600">Agradecemos pelo envio. Entraremos em contato.</p>
          </div>

        ) : (
          <form>
            <BarraProgresso currentStep={currentStep} steps={stepsDinamicos} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {camposVisiveis.map((campo, index) => (
                <React.Fragment key={index}>
                  {campo.nome === 'Ano de interesse da matrícula:' && (
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-6 col-span-2">Estudante</h3>
                  )}

                  {campo.nome === 'Esse responsável reside com o estudante?' && (
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-6 col-span-2">Responsável 1</h3>
                  )}

                  {campo.nome === 'Responsável 2 reside com o estudante?' && (
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-6 col-span-2">Responsável 2</h3>
                  )}

                  {campo.nome === 'Deseja copiar os dados de algum responsável?' && (
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-6 col-span-2">Responsável Financeiro</h3>
                  )}

                  <div key={index} className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-2 break-words w-full">
                      {campo.nome} {campo.obrigatorio && <span className="text-red-500">*</span>}
                    </label>
                    {campo.tipoInput === 'dropdown' ? (
                      <div className="relative w-full">
                        <select
                          disabled={campo.nome === 'Ano escolar de interesse do(a) estudante:' && !selecionarAnoEscolar}
                          className={`w-full border rounded-lg px-4 py-2 pr-10 focus:outline-none shadow-sm
        ${!selecionarAnoEscolar && campo.nome === 'Ano escolar de interesse do(a) estudante:'
                              ? 'bg-gray-100 cursor-not-allowed text-gray-500 border-gray-300'
                              : 'border-gray-300 focus:ring-2 focus:ring-blue-500'}
        ${errors[campo.nome] ? 'border-red-700' : ''}
      `}
                          value={formData[campo.nome] || ''}
                          onChange={(e) => handleChange(campo.nome, e.target.value)}
                        >
                          <option value="" disabled>
                            {campo.placeholder || 'Selecione uma opção'}
                          </option>

                          {(
                            campo.nome === 'Ano escolar de interesse do(a) estudante:'
                              ? opcoesAnoEscolar
                              : campo.nome === 'Unidade:'
                                ? opcoesUnidade
                                : campo.opcoesDropdown
                          )?.map((opcao, idx) => {
                            const label = typeof opcao === 'string' ? opcao : opcao.label;
                            const value = typeof opcao === 'string' ? opcao : opcao.value;

                            return (
                              <option key={value} value={value}>
                                {label}
                              </option>
                            );
                          })}
                        </select>

                        {campo.nome === 'Ano escolar de interesse do(a) estudante:' && !selecionarAnoEscolar && (
                          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                          </div>
                        )}
                      </div>
                    ) : (
                      <input
                        type={campo.tipoInput || 'text'

                        }
                        className={`w-full border ${errors[campo.nome] ? 'border-red-700' : 'border-gray-300'} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm`}
                        value={formData[campo.nome] || ''}
                        onChange={(e) => handleChange(campo.nome, e.target.value)}
                        placeholder={campo.placeholder || ''}
                        {... (campo.tipoInput === 'date' ? { max: new Date().toISOString().slice(0, 10) } : {})}

                      />
                    )}

                    {errors[campo.nome] && (
                      <p className="text-red-500 text-xs mt-1 col-span-2">{errors[campo.nome]}</p>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition duration-200"
                >
                  ← Anterior
                </button>
              )}
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
              >
                {currentStep < totalEtapasVisiveis - 1 ? 'Próximo →' : 'Enviar'}
              </button>
            </div>
          </form>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div >

  );

  <html />
}

function slice(arg0: number, arg1: number) {
  throw new Error('Function not implemented.');
}
