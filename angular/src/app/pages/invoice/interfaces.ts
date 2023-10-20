import {User} from "../../services/user/interfaces";
import {Property} from "../properties/interfaces";
import {Tenant} from "../tenant/interface";

export interface InvoiceDataGenerator {
  dateQuittance: Date,
  datePaiement: Date,
  mois: string
}

export interface Invoice {
  _id: string
  dateQuittance: string
  datePaiement: string
  mois: string
  bailleurId: string
  bienId: string
  locataireId: string
  __v: number
  bailleurDetails: User
  bienDetails: Property
  locataireDetails: Tenant
  loyer: number
}
