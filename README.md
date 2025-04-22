# StartApp React Native

Bem-vindo ao **StartApp**, um projeto inicial em React Native que demonstra uma navegação simples com uma tela de boas-vindas e um dashboard personalizado. Este é um projeto ideal para iniciantes que desejam aprender sobre navegação, componentes personalizados e estados no React Native.

## 📋 Descrição

O StartApp possui duas telas principais:
1. **Tela Inicial (Index)**: Permite que o usuário insira seu nome. Após inserir um nome válido, ele é redirecionado para o dashboard.
2. **Dashboard**: Exibe uma mensagem de boas-vindas personalizada com o nome do usuário e um botão para voltar à tela inicial.

O projeto utiliza **Expo Router** para navegação, componentes personalizados (`Button` e `Input`), e estilização com `StyleSheet`. Ele também implementa boas práticas como tratamento de teclado e validação de entrada.

## 📽️ Demonstração 
Clique na imagem abaixo para assistir à demonstração no YouTube:  
[![Demonstração do StartApp](https://img.youtube.com/vi/gs38PRXokNM/maxresdefault.jpg)](https://www.youtube.com/shorts/gs38PRXokNM)

## 🛠️ Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento mobile.
- **Expo**: Ferramenta para facilitar o desenvolvimento e teste.
- **Expo Router**: Navegação baseada em arquivos.
- **JavaScript/JSX**: Linguagem principal do projeto.

## 📦 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou Yarn
- Expo CLI (`npm install -g expo-cli`)
- Dispositivo ou emulador Android/iOS

## 🚀 Instalação

1. Clone o repositório:
   ```bash
   git clone git@github.com:BrunoHoinacki/startapp-reactnative.git
   cd startapp-reactnative
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o projeto:
   ```bash
   npx expo start
   ```

4. Escaneie o QR code com o aplicativo **Expo Go** no seu dispositivo ou use um emulador.

## 🖥️ Como Usar

1. Na tela inicial, digite seu nome no campo de entrada.
2. Pressione o botão **Continuar** para ir ao dashboard.
3. No dashboard, veja a mensagem de boas-vindas com seu nome.
4. Clique em **Voltar** para retornar à tela inicial.

**Nota**: Se o campo de nome estiver vazio, um alerta será exibido solicitando que você insira um nome.

## 📂 Estrutura do Projeto

```
startapp-reactnative/
├── assets/
├── components/
│   ├── button/
│   └── input/
├── app/
│   ├── index.js
│   └── dashboard.js
├── README.md
├── package.json
└── ...
```

## 🙌 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests com melhorias, correções ou novas funcionalidades.

## 📧 Contato

Se tiver dúvidas ou sugestões, entre em contato pelo e-mail: <brunohoinackib1@gmail.com> ou abra uma issue no repositório.

---

Desenvolvido com 💙 por Bruno Hoinacki