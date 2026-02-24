# CareApp (working title) — Trouver un·e praticien·ne bienveillant·e et inclusif·ve

CareApp est une application web **mobile-first** qui aide à trouver des professionnel·les de santé selon leur **spécialité**, leur **localisation**, et des **tags d’éthique et d’inclusion** (bienveillance, écoute, handicap, LGBTQIA+, maladies chroniques…), construits avec l’appui d’associations.

> Objectif : réduire le renoncement aux soins en rendant plus simple l’accès à des praticien·nes respectueux·ses et adaptés aux réalités des personnes minorisées.

---

## ✨ Contexte & problème

Dans le parcours de soins, certaines personnes (femmes, personnes LGBTQIA+, personnes racisées, personnes en situation de handicap, personnes avec pathologies chroniques…) rencontrent davantage :

- de **non-écoute** / minimisation des symptômes,
- de **difficultés à être prises au sérieux**,
- un **renoncement aux soins** ou **retardement aux soins** par manque de confiance ou de praticien·nes adaptés.

CareApp propose une recherche simple et rassurante, avec des tags et une expérience centrée sur la **confiance**, la **sécurité des données** et la **facilité d’usage**.

---

## 🚀 MVP — Fonctionnalités disponibles / en cours

### ✅ MVP (actuel)

- Affichage d’une **liste de praticien·nes**
- **Tags colorés** (éthique / inclusion / pathologies / accessibilité…)
- **Géolocalisation** et affichage sur une **carte**
- **Recherche** via une search bar :
  - spécialité
  - code postal / ville
- Expérience **mobile-first**
- charte graphique
- Footer

### 🔜 À venir (post-MVP)

- Authentification (inscription/connexion)
- creation espace utilateur côté patient
- creation espace utilisateur côté association (avec une gestion à plusieurs utilisateurs)
- creation espace modérateur pour voir et valider les avis, et avoir des alertes nouveaux utilisateurs.
- Accès à davantage d’informations si connecté·e
- Ajout / formulaire recommandation de praticien·nes par les patient·es
- Ajout / formulaire recommandation de praticien·nes par les associations.
- Ajout / après recommandation badge sur fiche praticiens
- Modération + validation (avec associations)
- Prise de RDV via lien externe (ex : Doctolib) si disponible

---

## 🧭 Parcours utilisateur principal

1. Ouverture → écran d’accueil (scroll)
2. Recherche : via search bar spécialité + filtre (ville / code postal)
3. Résultats :
   - si aucun résultat → nouvelle recherche
   - si résultat → consultation sur carte (proche domicile/travail) ou via la liste
4. Ouverture d’une fiche praticien·ne (tags + infos)
5. Si besoin d’informations avancées → proposition de connexion/inscription (future feature)
6. Option : lien de prise de RDV externe (future feature)

---

## 🧱 Stack technique

- **Front** : React + Vite + Typescript + Tailwind CSS
- **Back** : Node.js + Express
- **Base de données** : PostgreSQL (Neon)
- **API** : API maison (Express)
- **Map** : (à définir) ex. Mapbox / Leaflet / Google Maps

---

## 🗂️ Architecture (repo)

> Monorepo (prévu)

Structure indicative :

- `client/` : app React (UI, pages, composants)
- `server/` : API Express (routes, contrôleurs, accès BDD)
- `docs/` : wireframes, user flow, MLD, etc. (optionnel)

---

## 🔒 Données & sécurité (intentions)

CareApp vise une approche “privacy by design” :

- limitation des données collectées au strict nécessaire,
- sécurisation des accès (auth à venir),
- vigilance sur le stockage de données sensibles (santé).

> MVP : l’auth n’est pas encore implémentée (en cours d’apprentissage).  
> L’objectif est de rendre l’inscription **rassurante**, claire, et conforme aux bonnes pratiques.
