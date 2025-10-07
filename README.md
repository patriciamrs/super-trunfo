# 🏎️ Super Trunfo F1 - React Native App

Este projeto é um aplicativo desenvolvido com **React Native** com fins educacionais para a disciplina de Soluções Mobile. O app simula uma carta do jogo **Super Trunfo**, exibindo informações de pilotos históricos da Fórmula 1.

## 📱 Sobre o App

O aplicativo mostra uma tela com as informações de um piloto de F1, incluindo:

- Nome
- Descrição
- Equipe
- País
- Quantidade de estrelas (rating)
- Foto do piloto (carregada por URL)

Os dados estão armazenados em um arquivo JavaScript estático (`drivers.js`) simulando um pequeno "banco de dados".

## 🧑‍💻 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/) (para desenvolvimento mais rápido e simples)
- JavaScript (dados estáticos)

## 🗂 Estrutura do Projeto

```
.
├── App.js               # Tela principal do app
├── data
│   └── drivers.js        # Lista de pilotos
└── assets               # (opcional, caso use assets locais)
```

## 🚀 Como Executar

1. Certifique-se de ter o **Node.js** e o **Expo CLI** instalados:

```bash
npm install -g expo-cli
```

2. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/super-trunfo-f1.git
cd super-trunfo-f1
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o projeto:

```bash
npx expo start
```

Abra no navegador, emulador Android/iOS ou no celular com o app **Expo Go**.

## 🌍 Fontes das Imagens

As imagens dos pilotos são carregadas diretamente via URLs públicas. Este uso é estritamente para fins **educacionais**, sem fins lucrativos.

## 👨‍🏫 Créditos

Este projeto foi desenvolvido como atividade prática da disciplina de **Soluções Mobile** dos cursos de **Engenharia de Software e Engenharia da Computação** na [UniSATC](https://www.satc.edu.br/), orientado pelo prof. Thyerri Mezzari.

---

Se quiser contribuir ou adaptar o projeto, fique à vontade para fazer fork e enviar um pull request.
