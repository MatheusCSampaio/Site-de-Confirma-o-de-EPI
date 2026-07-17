# Controle de Retirada de EPI

Sistema web desenvolvido para realizar o controle de retirada de Equipamentos de Proteção Individual (EPIs) de forma simples, rápida e intuitiva.

O sistema permite registrar o nome do funcionário, selecionar um ou mais equipamentos, informar a quantidade retirada e realizar uma assinatura digital antes da confirmação da entrega.

**Desenvolvedor:** MatheusCSampaio

---

# Funcionalidades

- Cadastro do nome do funcionário;
- Seleção de múltiplos EPIs;
- Registro da quantidade retirada;
- Assinatura digital utilizando Canvas;
- Limpeza da assinatura;
- Confirmação da retirada;
- Compatível com computadores, tablets e smartphones;
- Preparado para funcionamento como Progressive Web App (PWA).

---

# Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Canvas API
- Service Worker
- Web App Manifest

---

# Estrutura do Projeto

```text
Controle-Retirada-EPI/
│
├── index.html
├── estilo.css
├── logica.js
├── manifest.json
├── sw.js
└── README.md
```

| Arquivo | Descrição |
|----------|-----------|
| `index.html` | Estrutura da aplicação e formulário de retirada. |
| `estilo.css` | Responsável por toda a aparência da aplicação. |
| `logica.js` | Contém toda a lógica do sistema e funcionamento da assinatura digital. |
| `manifest.json` | Configuração do Progressive Web App. |
| `sw.js` | Service Worker utilizado pelo PWA. |

---

# Como Executar o Projeto

## Método 1 - Abrindo diretamente

Basta abrir o arquivo `index.html` em qualquer navegador moderno.

---

## Método 2 - Visual Studio Code

É recomendado utilizar a extensão **Live Server**.

1. Abra a pasta do projeto no VS Code;
2. Instale a extensão **Live Server**;
3. Clique com o botão direito sobre `index.html`;
4. Selecione **Open with Live Server**.

---

# Como Utilizar

## 1. Informar o funcionário

No campo **Nome completo do Funcionário**, digite o nome completo da pessoa que está retirando os equipamentos.

**Exemplo:**

```text
Matheus Cavalcante Sampaio
```

---

## 2. Selecionar os EPIs

Na lista de equipamentos, selecione um ou mais EPIs.

### Para selecionar vários itens

No Windows:

- mantenha pressionada a tecla **Ctrl**.

No MacOS:

- mantenha pressionada a tecla **Command (⌘)**.

Depois clique sobre cada equipamento desejado.

Caso não encontre o EPI desejado, pode pesquisar na caixa de "Pesquise o EPI" para encontra-lo mais facilmente.

---

## 3. Informar a quantidade

Digite a quantidade retirada.

O sistema aceita valores entre **1** e **100**.

---

## 4. Realizar a assinatura

Utilize o mouse ou o dedo (em dispositivos móveis) para assinar dentro da área indicada.

Caso deseje apagar a assinatura, pressione o botão:

```text
Limpar Assinatura
```

---

## 5. Confirmar a retirada

Clique no botão:

```text
Confirmar Retirada
```

Após isso o sistema irá:

- Ler todos os dados do formulário;
- Capturar a assinatura digital;
- Exibir uma confirmação;
- Limpar o formulário;
- Apagar a assinatura.

---

# Como Adicionar Novos EPIs

Os equipamentos disponíveis ficam dentro do arquivo `index.html`.

Exemplo:

```html
<option value="Capacete">Capacete de Segurança</option>
```

Para adicionar um novo equipamento, basta inserir uma nova linha seguindo o mesmo padrão.

**Exemplo:**

```html
<option value="Luva">Luva de Proteção</option>
```

Automaticamente ele aparecerá na lista do formulário.

---

# Como Alterar as Cores

Todas as cores da aplicação encontram-se no arquivo:

```text
estilo.css
```

Exemplo:

```css
body{
    background-color:#c9f9fa;
}
```

Alterando esse valor você modifica a cor do fundo da aplicação.

Também podem ser alteradas:

- botões;
- textos;
- bordas;
- formulário;
- área da assinatura.

---

# Como Funciona a Assinatura Digital

A assinatura utiliza a **Canvas API** do HTML5.

Sempre que o usuário desenha sobre o canvas, o JavaScript registra as coordenadas do mouse ou do toque e cria o desenho em tempo real.

Ao confirmar o formulário, a assinatura é convertida para uma imagem utilizando:

```javascript
canvas.toDataURL();
```

Esse método gera uma imagem em formato Base64, permitindo futuramente armazená-la em banco de dados ou enviá-la para um servidor.

---

# Funcionamento do Sistema

```text
Funcionário

      │
      ▼

Digita o Nome

      │
      ▼

Seleciona os EPIs

      │
      ▼

Informa a Quantidade

      │
      ▼

Realiza a Assinatura

      │
      ▼

Confirma a Retirada

      │
      ▼

JavaScript Processa os Dados

      │
      ▼

Mensagem de Confirmação

      │
      ▼

Limpeza do Formulário
```

---

# Personalização

Caso seja necessário adaptar o sistema para outra empresa, basta alterar:

- Nome da empresa;
- Lista de EPIs;
- Cores;
- Logo (caso exista);
- Campos do formulário.

Toda a lógica continuará funcionando normalmente.

---

# Licença

Este projeto foi desenvolvido exclusivamente para fins de estudo e aprendizado.

Sinta-se livre para utilizá-lo como base para novos projetos, mantendo os devidos créditos ao autor.

---

# Desenvolvedor

## MatheusCSampaio

Desenvolvedor de Software.
