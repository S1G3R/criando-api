
## ✅ Usando uma API de Tarefas no Postman (passo a passo)

### 🔧 Antes de tudo: ligue o servidor

Abra o terminal na pasta do seu projeto e execute:

```bash
npm run dev
```

Confirme qual porta está ativa (ex: `localhost:3000`).

---

### 1. **Mostrar todas as tarefas**

* **Método:** `GET`
* **URL:** `http://localhost:3000/tasks`
* **Ação:** Retorna a lista de todas as tarefas.
* **No Postman:** basta clicar em **Send**.

---

### 2. **Criar uma nova tarefa**

* **Método:** `POST`
* **URL:** `http://localhost:3000/tasks`
* **Body → raw → JSON:**

```json
{
  "title": "Estudar Node.js",
  "description": "Revisar API REST",
  "completed": false
}
```

* **Ação:** Cria uma nova tarefa.

---

### 3. **Editar uma tarefa existente**

* **Método:** `PUT`
* **URL:** `http://localhost:3000/tasks/ID_DA_TAREFA`
* **Body → raw → JSON:**

```json
{
  "title": "Estudar Express.js",
  "description": "Revisar rotas e middlewares",
  "completed": false
}
```

* **Ação:** Atualiza os dados da tarefa.

---

### 4. **Concluir uma tarefa**

* **Método:** `PATCH`
* **URL:** `http://localhost:3000/tasks/ID_DA_TAREFA`
* **Body → raw → JSON:**

```json
{
  "completed": true
}
```

* **Ação:** Marca a tarefa como concluída (ou não concluída).

---

### 5. **Apagar uma tarefa**

* **Método:** `DELETE`
* **URL:** `http://localhost:3000/tasks/ID_DA_TAREFA`
* **Ação:** Remove a tarefa do sistema.
