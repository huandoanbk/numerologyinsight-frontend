# 🎨 NumerologyInsight – Frontend (Angular + TailwindCSS)

This is the frontend client of the **NumerologyInsight Web App**, built with **Angular v17+** using **Standalone Components**, **Signals**, and styled with **TailwindCSS**.

Users can input their full name and birthdate to receive a personalized numerology report, with AI-generated insights using Azure OpenAI (via backend API).

---

## 📦 Tech Stack

- ⚙️ **Angular 17+** – standalone components, modern DI with `inject()`
- 🎨 **TailwindCSS v3+** – for modern, responsive UI
- 🔗 **REST API Integration** – connects to Django backend
- 🚫 No SSR/SSG – purely SPA (Single Page App)

---

## 🚀 Getting Started

### 📁 Clone this repository
```bash
git clone https://github.com/your-org/numerologyinsight-frontend.git
cd numerologyinsight-frontend
```

### 🔧 Install dependencies
```bash
npm install
```

### ▶️ Run development server
```bash
ng serve
```

The app will be running at `http://localhost:4200`

---

## 📁 Folder Structure (Recommended)

```bash
src/
├── app/
│   ├── core/                # Services & models
│   ├── shared/              # Reusable components (header, footer, etc.)
│   ├── pages/
│   │   ├── home/            # Input form UI
│   │   ├── result/          # Result page + AI display
│   │   └── disc-test/       # (Phase 2+)
│   ├── admin/               # (Phase 1+) Admin panel
│   ├── app.routes.ts
│   └── app.config.ts
├── assets/
├── environments/
```

---

## 🌐 API Integration

| Action | API Endpoint |
|--------|--------------|
| Submit name + birthdate | `POST /api/numerology/` |
| Get AI report | (combined in response from backend) |

> All API calls require `environment.apiUrl` to be set correctly per environment.

---

## 🧠 Dev Tips

- Use `inject()` instead of `constructor` for service DI
- Leverage `signal()` for local state (Angular 17+)
- Tailwind utility-first class naming
- Use `@defer`, `*ngIf`, or router-based lazy loading for performance

---

## 🔄 Git Branch Convention

> See full rules in `../docs/branch-naming.md`

Example branches:
```
feature/home-form
feature/result-page
bugfix/ai-loading-error
```

---

## 👤 Author

- Doan Vo Hoang Huan – Product Owner / FE Dev Lead  
- Simulating 5-person Agile team  
- Contact: [your-email@example.com]

---

## 📄 License

MIT License – feel free to fork or build your own version.
