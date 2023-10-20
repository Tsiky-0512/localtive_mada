# Locative Mada

**Locative Mada** est une application conçue pour la gestion des biens immobiliers des propriétaires. Cette application simplifie la gestion de vos propriétés et de vos locataires, en offrant des fonctionnalités de base, notamment la possibilité d'ajouter, modifier, supprimer et afficher les propriétés et les locataires. De plus, elle propose un générateur de factures et un système d'envoi de factures par e-mail.

## Fonctionnalités

- **CRUD Propriété (Créer, Lire, Mettre à jour, Supprimer) :** Vous pouvez ajouter de nouvelles propriétés, consulter les détails des propriétés existantes, les mettre à jour si nécessaire, et supprimer celles qui ne sont plus pertinentes.

- **CRUD Locataire (Créer, Lire, Mettre à jour, Supprimer) :** Vous avez la possibilité de gérer les informations de vos locataires, en ajoutant de nouveaux locataires, en consultant leurs informations, en mettant à jour leurs détails, ou en les retirant de la liste si nécessaire.

- **Générateur de Factures :** L'application offre un générateur de factures intégré qui vous permet de créer des factures pour les locations de propriétés. Vous pouvez personnaliser les factures en fonction de vos besoins et de vos tarifs.

- **Envoi de Factures par E-mail :** Vous pouvez envoyer les factures générées directement par e-mail à vos locataires, ce qui simplifie le processus de paiement et de suivi des finances.

## Structures
Cette application Angular suit une structure de répertoires organisée pour simplifier la gestion du code source. Voici un aperçu de la structure :


```
  src
├── app
│   ├── containers
│   │   └── default-layout
│   │       ├── default-footer
│   │       └── default-header
│   ├── guards
│   ├── icons
│   ├── pages
│   │   ├── invoice
│   │   │   ├── invoice-generator
│   │   │   ├── invoice-list
│   │   │   └── invoice-mail-sender
│   │   ├── properties
│   │   │   ├── properties-form
│   │   │   └── properties-list
│   │   ├── tenant
│   │   │   ├── tenant-form
│   │   │   └── tenant-list
│   │   └── user
│   │       ├── login
│   │       └── register
│   └── services
│       ├── interceptor
│       ├── invoice
│       ├── properties
│       ├── tenant
│       └── user
├── assets
│   ├── images
│   └── img
│       ├── avatars
│       └── brand
├── components
│   ├── input
│   ├── paginated-table
│   └── table
├── config
├── interfaces
└── scss
```


- **app**: Ce répertoire contient les composants, les gardes et les services principaux de l'application. Les composants sont organisés en fonction de leur rôle et de leur emplacement.

- **assets**: Ici, vous stockez les ressources statiques telles que les images et les fichiers CSS.

- **components**: Ce répertoire contient des composants réutilisables qui peuvent être utilisés à différents endroits de l'application.

- **config**: Vous pouvez stocker des fichiers de configuration ici, par exemple, des fichiers de configuration pour l'authentification ou d'autres paramètres.

- **interfaces**: Les interfaces TypeScript utilisées dans l'ensemble de l'application sont stockées ici.

- **scss**: C'est l'emplacement des fichiers SCSS pour la personnalisation de la présentation de votre application.

Cette structure de répertoires favorise une organisation propre et logique de votre code source, ce qui rend la maintenance et la collaboration plus efficaces.

N'hésitez pas à personnaliser cette description pour correspondre à votre application spécifique.

