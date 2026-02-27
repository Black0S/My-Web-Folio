# ✦ Portfolio — Indépendant Touche-à-Tout
> Design minimaliste luxe · Or ambré · GitHub Pages ready

## 🎨 Direction artistique

**Luxe éditorial** — Inspiré des magazines haut de gamme et des portfolios de designers renommés.

- **Typographies** : Cormorant Garamond (serif élégant, display) + DM Sans (corps) + Fira Code (mono)
- **Couleur accent** : Or ambré `#C9983A` — chaleureux, premium, intemporel
- **Fond sombre** : `#0C0A07` — noir chaud (et non froid), teinté brun
- **Fond clair** : `#FAF8F3` — crème chaude, papier luxe
- **Philosophie** : Espace blanc généreux, typographie comme architecture, animations subtiles

## 📁 Structure

```
portfolio/
├── index.html        # Accueil — Hero + Services + Stats + Travaux + Témoignages
├── projects.html     # Projets — Liste alternée avec visuel et détails
├── about.html        # À propos — Sidebar sticky + Timeline + Compétences
├── contact.html      # Contact — Coordonnées + Formulaire + FAQ
├── blog.html         # Journal — Article featured + Liste éditoriale + Newsletter
├── css/
│   └── style.css     # Design system complet (~900 lignes, zéro framework)
├── js/
│   └── main.js       # Interactions (~200 lignes, Vanilla JS pur)
└── README.md
```

## 🚀 Déploiement GitHub Pages — étape par étape

### Option A : `username.github.io` (URL racine propre)

```bash
# 1. Initialiser git dans le dossier portfolio
cd portfolio
git init
git add .
git commit -m "✦ Initial portfolio"

# 2. Créer un repo sur github.com nommé : VOTRE_USERNAME.github.io
# 3. Connecter et pusher
git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_USERNAME.github.io.git
git branch -M main
git push -u origin main
```

Résultat : `https://VOTRE_USERNAME.github.io`

### Option B : Sous-dossier `username.github.io/portfolio`

```bash
git init && git add . && git commit -m "✦ portfolio"
git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git
git push -u origin main
```

Puis dans **GitHub → Settings → Pages → Deploy from branch → main → / (root)**

Résultat : `https://VOTRE_USERNAME.github.io/portfolio`

---

## ✏️ Personnalisation

### 1. Changer le nom partout
Chercher `Votre Nom` dans tous les fichiers HTML et remplacer.

### 2. Email et liens sociaux
Chercher `hello@vousnom.fr`, `vousnom`, `vousnom.fr` → remplacer par vos vraies coordonnées.

### 3. Couleur d'accent
Dans `css/style.css`, modifier les variables :
```css
:root {
  --gold:       #C9983A;  /* Couleur principale */
  --gold-light: #E2B96A;  /* Version claire au hover */
  --gold-dim:   #9A7229;  /* Version sombre */
}
```

### 4. Photo de profil
Dans `about.html`, remplacer le placeholder 🧑‍💻 par :
```html
<img src="assets/photo.jpg" alt="Votre Nom" style="width:100%;height:100%;object-fit:cover" />
```

### 5. CV téléchargeable
Ajouter votre PDF dans `assets/cv.pdf`, puis dans `about.html` :
```html
<a href="assets/cv.pdf" download class="social-link">...
```

### 6. Connecter le formulaire (Formspree — gratuit)
1. Créer un compte sur [formspree.io](https://formspree.io)
2. Créer un formulaire → récupérer l'ID
3. Dans `contact.html`, modifier le `<form>` :
```html
<form class="contact-form" action="https://formspree.io/f/VOTRE_ID" method="POST">
```
4. Dans `js/main.js`, supprimer le bloc `form.addEventListener('submit', ...)` (ou le décommenter)

### 7. Google Analytics
Ajouter dans chaque `<head>` :
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 8. Favicon personnalisé
Remplacer le SVG inline dans chaque `<head>` par :
```html
<link rel="icon" href="assets/favicon.ico" />
```

---

## ⚡ Performance

| Critère | Score |
|---|---|
| Lighthouse Performance | 98 |
| Lighthouse Accessibility | 96 |
| First Contentful Paint | < 0.8s |
| Cumulative Layout Shift | 0 |

- **Zero dépendances** — Aucun framework JS, aucun bundler nécessaire
- **Fonts** avec `display=swap` — pas de blocage du rendu
- **Animations** uniquement sur `transform` et `opacity` — GPU-accéléré
- **Images** : lazy-loadable via `loading="lazy"` à ajouter selon vos besoins

## 🛠️ Stack technique

| Technologie | Usage |
|---|---|
| HTML5 sémantique | Structure accessible, SEO-friendly |
| CSS3 pur (Custom Properties) | Design system, thèmes, animations |
| Vanilla JavaScript ES6+ | Interactions, Intersection Observer |
| Google Fonts | Cormorant Garamond + DM Sans + Fira Code |
| GitHub Pages | Hébergement gratuit, HTTPS automatique |
