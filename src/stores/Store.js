import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('useStore',  {
  state(){
    return {
      idContaSelecionado:'',
      idSelecionadoFormaPagamento:'',
      dadosSelecionadosContasAPagar: [],
      actionButtonSelected: '',
      employee: {
        ID: 1,
        FirstName: 'John',
        LastName: 'Heart',
        Position: 'CEO',
        BirthDate: '1964/03/16',
        HireDate: '1995/01/15',
        Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
        Address: '351 S Hill St., Los Angeles, CA',
        Phone: '360-684-1334',
        Email: 'jheart@dx-email.com',
      },
      
      documentos: [
        {
          ID: 1,
          Numero: 1,
          Descricao: 'Documento A',
          ValorTotal: 5000,
          ValorTotalImposto: 500,
          DataEmissao: new Date('2023/07/30'),
          Situacao: 'Pago',
          TipoDocID: 1,
          Itens: [
            {
              Descricao: 'Item A',
              Quantidade: 5,
              ValorUni: 50,
              ValorTotal: 250
            },
            {
              Descricao: 'Item B',
              Quantidade: 5,
              ValorUni: 50,
              ValorTotal: 250
            },
            {
              Descricao: 'Item C',
              Quantidade: 5,
              ValorUni: 50,
              ValorTotal: 250
            },
            {
              Descricao: 'Item D',
              Quantidade: 5,
              ValorUni: 50,
              ValorTotal: 250
            },
          ]
        },
        {
          ID: 2,
          Numero: 2,
          Descricao: 'Documento B',
          ValorTotal: 5000,
          ValorTotalImposto: 500,
          DataEmissao: new Date('2023/07/30'),
          Situacao: 'Pago',
          TipoDocID: 2,
          Itens: [
            {
              Descricao: 'Item A',
              Quantidade: 5,
              ValorUni: 50,
              ValorTotal: 250
            },
            {
              Descricao: 'Item B',
              Quantidade: 5,
              ValorUni: 50,
              ValorTotal: 250
            },
            {
              Descricao: 'Item C',
              Quantidade: 5,
              ValorUni: 50,
              ValorTotal: 250
            },
          ]
        },
      ],

      contasAPagar: [
        {
          ID: 1,
          Valor: '',
          DataVencimento: new Date('2023/07/30'),
          DataCompetencia: new Date('2023/07/30'),
          DataRegistro: new Date('2023/07/30'),
          Ativo: 'Ativo',
          Usuario: 'Admin',
          UltimaAtualizacao: [
            { Data: new Date('2023/07/30') },
            { Usuario: 'Admin' },
            { Mudancas: '' },
          ],
          Descricao: "Conta para pagar...",
          Status: '',
          Juros: 50,
          Multa: 100,
          Desconto: 5,
          IdEmpresa: 1,
          PrevisaoPagamento: '',
          DtPrevistaPagamento: new Date('2023/07/30'),
          NumConta: '',
          Grupo: "Aluguel",
          item: "Casa 1",
        },
        {
          ID: 2,
          Valor: '',
          DataVencimento: new Date('2023/07/30'),
          DataCompetencia: new Date('2023/07/30'),
          DataRegistro: new Date('2023/07/30'),
          Ativo: 'Ativo',
          Usuario: 'Admin',
          UltimaAtualizacao: [
            { Data: new Date('2023/07/30') },
            { Usuario: 'Admin' },
            { Mudancas: '' },
          ],
          Descricao: "Conta para pagar...",
          Status: '',
          Juros: 50,
          Multa: 100,
          Desconto: 5,
          IdEmpresa: 1,
          PrevisaoPagamento: '',
          DtPrevistaPagamento: new Date('2023/07/30'),
          NumConta: '',
          Grupo: "Padaria",
          item: "Pão",
        },
        {
          ID: 3,
          Valor: '',
          DataVencimento: new Date('2023/07/30'),
          DataCompetencia: new Date('2023/07/30'),
          DataRegistro: new Date('2023/07/30'),
          Ativo: 'Ativo',
          Usuario: 'Admin',
          UltimaAtualizacao: [
            { Data: new Date('2023/07/30') },
            { Usuario: 'Admin' },
            { Mudancas: '' },
          ],
          Descricao: "Conta para pagar...",
          Status: '',
          Juros: 50,
          Multa: 100,
          Desconto: 5,
          IdEmpresa: 1,
          PrevisaoPagamento: "",
          DtPrevistaPagamento: new Date('2023/07/30'),
          NumConta: "",
          Grupo: "Carro",
          item: "Manutenção"
        },
      ],
      contasPagas: [
        {
          ID: 1,
          Conta: 'Despesa x',
          ValorPago: 5000,
          MultaPaga: 0,
          DataPagamento: new Date('2023/07/30'),
          DescontoAplicado: 100,
          FormaPagmento: '',
        }
      ],
    }
  },

  actions: {
    getEmployee() {
      return this.employee;
    },

    getDadosAPI(){
      alert('teste')
    },
 },

  getters: {}
})
