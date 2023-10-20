import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Biens',
    url: '/biens',
    iconComponent: { name: 'cil-house' },
    children: [
      {
        name: "Ajout de bien",
        url: "/biens/ajout"
      },
      {
        name: "Liste des biens",
        url: "/biens/liste"
      }
    ]
  },
  {
    name: "Locataire",
    url: "/locataire",
    iconComponent: {name: "cil-user"},
    children: [
      {
        name: "Ajout de locataire",
        url: "/locataire/ajout"
      },
      {
        name: "Liste des locataires",
        url: "/locataire/liste"
      }
    ]
  },
  {
    name: "Factures",
    url: "/factures",
    iconComponent: {name: "cil-money"},
    children: [
      {
        name: "Générateur de facture",
        url: "/factures/generateur"
      },
      {
        name: "Liste des factures",
        url: "/factures/liste"
      },
      {
        name: "Envoie de mail",
        url: "/factures/mailer"
      }
    ]
  }
];
