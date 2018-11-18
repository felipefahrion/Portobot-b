var request = require('request');

var appRouter = function(app) {
	app.get("/creditoPessoal/status", function(req, res) {
        var options = {
            url: "https://sb-api.portocred.com.br/credito-pessoal-demo/v1/propostas/1/status",
          headers: {
            'client_id': 'a23b6e86-5db4-3ffb-9161-af4f0ec02c20'
          }
        }
         
        function callback(error, response, body) {
          if (!error && response.statusCode == 200) {
            return res.send(body);
          }
        };
         
        request(options, callback);
    });
    
    app.get("/creditoPessoal/propostas", function(req, res) {
        var options = {
            url: "https://sb-api.portocred.com.br/credito-pessoal-demo/v1/propostas",
          headers: {
            'client_id': 'a23b6e86-5db4-3ffb-9161-af4f0ec02c20',
            'Content-Type': 'application/json'
          },
          data:
           { 'content-type': 'application/json'
              ,  body: {
                  "cliente": {
                      "nome": "WILLIAN ALVES",
                      "cpf": "036961550",
                      "data-nascimento": "1997-01-12",
                      "email": "willian.alves@edu.pucrs.br",
                      "redes-sociais": [
                        {
                          "nome": "FACEBOOK",
                          "conta": "wbaalves"
                        }
                      ],
                      "escolaridade": "SUPERIOR",
                      "documentos": [
                        {
                          "numero": "3103704692",
                          "tipo": "RG",
                          "uf": "RS"
                        }
                      ],
                      "estado-civil": "SOLTEIRO",
                      "sexo": "MASCULINO",
                      "endereco-residencial": {
                        "logradouro": "RUA DAS RENDEIRAS",
                        "numero": "325",
                        "complemento": "apto 202",
                        "bairro": "BARRA DA TIJUCA",
                        "cidade": "RIO DE JANEIRO",
                        "uf": "RJ",
                        "cep": "20715430"
                      },
                      "negativado": "NAO",
                      "contas-bancarias": [
                        {
                          "codigo-banco": "0237",
                          "tipo-conta": "CONTA_CORRENTE",
                          "agencia": "0325",
                          "conta": "65429"
                        }
                      ],
                      "telefones": [
                        {
                          "tipo": "CELULAR",
                          "ddd": "21",
                          "numero": "985214545"
                        }
                      ],
                      "situacao-profissional": {
                        "classe-profissional": "ENGENHEIRO",
                        "nome-empresa": "INDUSTRIAS STARK",
                        "renda": 5200,
                        "endereco-comercial": {
                          "logradouro": "AV PRINCIPAL",
                          "numero": "1200",
                          "complemento": "",
                          "bairro": "CENTRO",
                          "cidade": "RIO DE JANEIRO",
                          "uf": "RJ",
                          "cep": "20715550"
                        }
                      }
                    },
                    "proposta": {
                      "valor-desejado": 1500,
                      "data-primeira-parcela": "2018-12-18",
                      "seguro": "SIM",
                      "produto": "CARNE"
                    },
                    "dados-adicionais": [
                      {
                        "campo": "MOTIVO_EMPRESTIMO",
                        "valor": "GASTOS NÃO PREVISTOS"
                      }
                  ]
                }
              }
            
        };
         
        function callback(error, response, body) {
          if (!error && response.statusCode == 201) {
            return res.send(body);
          }
        };
         
        request.post(options, callback);
    });
    
    app.get("/whatsapp", function(req, res){
        var options = {
            url: "https://sb-api.portocred.com.br/credito-pessoal-demo/v1/propostas/1/status",
          headers: {
            'client_id': 'a23b6e86-5db4-3ffb-9161-af4f0ec02c20'
          }
        }
         
        function callback(error, response, body) {
          if (!error && response.statusCode == 200) {
            return res.send(body);
          }
        };
         
        request(options, callback);
    });

	app.post("/variables", function(req, res) {
		oModel.oVariables = req.body !== null ? req.body : {};
		return res.send(oModel.oVariables);
	});
}

module.exports = appRouter;