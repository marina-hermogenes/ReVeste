# ReVeste

# ReVeste

<p align="center">
  <img src="view/imagens/revestelogo.png" alt="Logo do ReVeste" width="200">
</p>

## Visão geral do produto
### Descrição do sistema
O software tem como finalidade organizar o sistema online de um brechó. Ele simplifica a gestão e o monitoramento das transações de compra e venda de produtos, proporcionando um controle eficiente sobre produtos, clientes, vendedores, vendas e operações logísticas.

### Tecnologias utilizadas
- IDE: Visual Studio Code 1.95
- Node.js v22.11.0
- PostgreSQL 17.2
- HTML: HTML5
- CSS: CSS3

### Principais funcionalidades
- **Administração de usuários**
    - Cadastrar, excluir, alterar e consultar os dados de usuários registrados na plataforma.
- **Gerenciamento de produtos**
    - Cadastrar, excluir, alterar e consultar peças de vestuário disponíveis para venda no brechó, incluindo informações como descrição e preço.
- **Gestão de compras** 
    - Gerenciar compras realizadas, incluindo detalhes como data e comprador.

### Sistemas relacionados
O sistema opera de forma autônoma e completa, sem a necessidade de integração com outras plataformas ou sistemas externos.

### Tipos de usuários
- **Vendedor**
    - Responsável por gerenciar seus produtos no sistema.
- **Comprador**
    - Utiliza o sistema para consultar os produtos e realizar compras.

### Estrutura de diretório
```
ReVeste/
|-- Padrões Adotados/
|   |-- Regras de Verificação e Analise de Requisitos.md
|-- Requisitos/
|   |-- docRequisitosVersao1.0.odt
|-- |-- Diagrama de casos de uso/
|-- |-- |-- compradorUML.png
|-- |-- |-- usuarioUML.png
|-- |-- |-- vendedorUML.png
|-- Diagramas/
|   |-- diagramaDeClasses.drawio.png
|-- README.md
```
### Padronização de Commits

- **feat:** adição de um novo recurso.
- **fix:** correção de um bug.
- **style:** alterações relacionadas à formatação ou estilo do código, sem impactar a lógica.
- **refactor:** refatoração de uma parte específica do código, sem alterar sua funcionalidade.
- **test:** adição ou modificação de testes.
- **docs:** alterações na documentação.
- **chore:** tarefas de manutenção do código, como atualização de dependências ou configurações.

### Regras de programação

- **Princípio da responsabilidade única** 
    - Uma classe deve ter apenas uma responsabilidade no software.
- **Nomenclatura**
    - Ao nomear algo, é preciso considerar que os nomes precisam passar uma ideia do que a função, classe ou atributo representa.
- **Funções pequenas**
    -  As funções devem executar apenas uma tarefa e cumprir sua função da maneira mais simples possível.
- **Duplicação de código**
    - Não pode existir duas partes do código que realizem a mesma função.
- **Comentários**
    - Comentar somente o que for necessário e revisar os comentários juntamente com o código.
- **Tratamento de erro**
    - Quando algo der errado, o código deve fazer o que precisa ser feito para tratar os erros.


