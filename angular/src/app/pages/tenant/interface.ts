import {Property} from "../properties/interfaces";

export interface Tenant {
  nom: string,
  prenom: string,
  adressePostale: string,
  email: string,
  telephone: string,
  bien?: Property
}
