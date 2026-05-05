
---

# 📚 Magic Books

O **Magic Books** é uma aplicação full-stack para gerenciamento de acervo literário. O projeto permite que usuários explorem, cadastrem e gerenciem livros de forma intuitiva, unindo a performance do ecossistema Spring no backend com a tipagem segura e reatividade do React no frontend.

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**
*   **React** (com TypeScript)
*   **Lucide React** (Ícones)
*   **Tailwind** 
*   **Vite** 

### **Backend**
*   **Java 21+**
*   **Spring Boot 3**
*   **Spring Data JPA**
*   **PostgreSQL** 

---

## 🚀 Funcionalidades

*   🛍️ **Compra de Livros:** Orçamento, atualização e exclusão.
*   🔍 **Busca Avançada:** Filtros por título, autor ou categoria.
*   📱 **Interface Responsiva:** Otimizado para diferentes tamanhos de tela.
*   🛡️ **Consumo de API:** Integração completa com os endpoints do Spring Boot.

---

## 🏗️ Arquitetura do Sistema

O sistema é dividido em dois repositórios principais para garantir a separação de responsabilidades:

1.  **Frontend (UI):** [Link para o repositório front](https://github.com/DocCaio/Magic-Books)
2.  **Backend (API):** [Link para o repositório back](https://github.com/DocCaio/Magic-books-api)



---

## 🔧 Como Executar o Projeto

### 1. Pré-requisitos
*   Node.js instalado.
*   JDK 17 ou superior.
*   Maven instalado (ou usar o `mvnw` incluso).

### 2. Configurando o Backend
```bash
# Clone o repositório da API
git clone https://github.com/DocCaio/Magic-books-api.git

# Entre na pasta
cd Magic-books-api

# Configure o banco de dados no application.properties
# Execute o projeto
./mvnw spring-boot:run
```

### 3. Configurando o Frontend
```bash
# Clone o repositório do Frontend
git clone https://github.com/DocCaio/Magic-Books.git

# Entre na pasta
cd Magic-Books

# Instale as dependências
npm install

# Inicie a aplicação
npm run dev
```

---

## 🛣️ Endpoints Principais (API)

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **GET** | `/api/books` | Retorna todos os livros |
| **POST** | `/api/books` | Cria um novo livro |
| **GET** | `/api/books/{id}` | Busca um livro por ID |
| **PUT** | `/api/books/{id}` | Atualiza dados de um livro |
| **DELETE** | `/api/books/{id}` | Remove um livro do sistema |

---

## ✒️ Autor

Desenvolvido com ☕ e TypeScript por **Caio**.

---
