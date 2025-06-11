# Portfólio Neobrutalista Interativo

Bem-vindo ao código-fonte da minha página de apresentação pessoal. Este não é um portfólio comum; é uma exploração do estilo de design com base no estilo neobrutalista sugerido por uma amiga design, construído com Angular moderno e focado em interatividade, animações e uma arquitetura de código limpa.

---

## ✨ Filosofia do Projeto

O objetivo era criar uma experiência digital que fosse:

- **Visualmente Impactante:** Utilizando cores vibrantes, sombras fortes e tipografia expressiva.
- **Interativa e Divertida:** Com microinterações, animações e um sistema de tema dual (claro/escuro).
- **Tecnicamente Robusta:** Escrito com boas práticas do Angular, incluindo componentes `standalone` que é mais recente.

---

## 🚀 Tecnologias Utilizadas

- **Framework:** [Angular](https://angular.io/) (^20.0.0)
- **Arquitetura:** Componentes `Standalone` para uma estrutura mais modular e sem a necessidade de `NgModules`.
- **Estilização:** [SCSS](https://sass-lang.com/) com uma arquitetura de tema centralizada usando variáveis CSS.
- **Ícones:** [Font Awesome](https://fontawesome.com/) para ícones nítidos e personalizáveis.
- **Fontes:** 'Bebas Neue' para títulos e 'Fira Sans' para o corpo do texto.

---

## 🌟 Principais Features

- **Design Neobrutalista:** Bordas grossas, sombras sólidas e sem gradientes.
- **Sistema de Tema Dual:**
  - Um tema colorido (padrão) e um tema escuro.
  - A troca é feita por um botão interativo e controla todo o site através de variáveis CSS globais definidas em `src/styles.scss`.
- **Componentização Granular:** Cada seção da página (`About`, `Skills`, `Projects`, etc.) é seu próprio componente `standalone`.
- **Animações CSS:**
  - Efeito de digitação na introdução.
  - Mosaico de habilidades com animação de flutuação contínua.
  - Efeitos de `hover` interativos em todos os botões e cards.
- **Layout Responsivo:** Se adapta de forma fluida a telas de desktop, tablets e dispositivos móveis.

---

## 🛠️ Como Executar Localmente

Para clonar e rodar este projeto em sua máquina, você precisará do [Node.js](https://nodejs.org/) (que inclui o `npm`) e do [Angular CLI](https://angular.io/cli) instalados.

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# 2. Navegue até o diretório do projeto
cd brutalispersonalpage

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
ng serve

# 5. Abra seu navegador em http://localhost:4200/
```

---

## 📂 Estrutura do Projeto

A estrutura de arquivos foi pensada para ser escalável e organizada:

```
/src
├── /app
│   ├── /components/      # Componentes "burros" de apresentação
│   │   ├── /about/
│   │   ├── /experiences/
│   │   ├── /footer/
│   │   ├── /projects/
│   │   └── /skills/
│   ├── /core/            # Lógica central e serviços
│   │   └── /services/
│   │       └── portfolio-data.service.ts
│   ├── /pages/           # Componentes "inteligentes" que montam as páginas
│   │   └── /home/
│   ├── app.component.ts  # Componente raiz
│   └── app.config.ts     # Configuração da aplicação (standalone)
│
├── /assets/              # Imagens, fontes, etc.
│
└── styles.scss           # Estilos globais e o manifesto dos temas
```

---

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
