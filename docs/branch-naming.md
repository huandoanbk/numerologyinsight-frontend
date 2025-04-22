# 🏷 Git Branch Naming Convention

This document defines the standard branch naming strategy for the NumerologyInsight Web App project.

---

## 🌳 Base Branches

### `main`

- Contains production-ready code.
- Only stable, tested features are merged here.
- All deployments are made from this branch.

### `develop`

- Contains all development and staging features.
- Ongoing integration from feature/ and bugfix/ branches.
- Regularly updated, but not guaranteed stable for production.

---

## 🚧 Working Branches

### `feature/<name>`

- Used for new feature development.
- Based on `develop`, merged back into `develop`.

Example:

```bash
feature/home-page
feature/shared-header-footer
```

### `bugfix/<name>`

- Used for fixing minor bugs discovered during development or testing.
- Based on `develop`, merged back into `develop`.

Example:

```bash
bugfix/footer-overlap
bugfix/form-date-validation
```

---

✅ Always use lowercase with hyphens (`-`) for readability.  
✅ Be descriptive but concise (avoid overly generic names like `feature/update`).
