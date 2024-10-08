// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.

import { ReactNode } from "react";

// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
export type Comment = {
  commentText: string;
  date?: Date;
};
export type Candidate = {
  commentMngNames: any;
  age: ReactNode;
  professionDescription: ReactNode;
  drivePermis: ReactNode;
  leaving: any;
  commentCand: ReactNode;
  _id: any;
  id: string;
  name: string;
  phone: string;
  locationName?: string;
  professionName?: string;
  documentName?: string;
  managerName?: string;
  statusName?: string;
  langueName?: string;
  createdAt?: Date | string;
  comments?: Comment[];
};

// export type Candidate = {
//   [x: string]: ReactNode;
//   managerName: ReactNode;
//   comment: ReactNode;
//   commentMng: Comment[];
//   statusName: ReactNode;
//   langueName: ReactNode;
//   documentName: ReactNode;
//   createdAt: any;
//   professionName: ReactNode;
//   id: string;
//   name: string;
//   phone: string;
//   location: string;
// };

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type LocationField = {
  _id: string;
  name: string;
};
export type ProfessionField = {
  _id: string;
  name: string;
  description: String;
};
export type DocumentField = {
  _id: string;
  name: string;
  dateExp:string;
  numberDoc: string;
}
export type LangueField = {
  _id: string;
  name: string;
}
export type ManagerField = {
  _id: string;
  name: string;
  phone: string;
  viber: string;
  whatsapp: string;
  telegram: string;
  image: {
    name: string;
    data: Buffer; // или другой тип, представляющий бинарные данные
    contentType: string;
};
}
export type CandidateForm = {
  _id: string;
  name: string;
  phone: number;
  location: string;
};
export type StatusField = {
_id: string;
name: string;
}
export type PartnersField = {
  _id: string;
  name: string;
  companyName: string;
}
// export interface Vacancy {
//   _id?: string;
//   job_title?: string;
//   location?: string;
//   roof_type?: string;
//   salary?: string;
//   homePrice?: string;
//   auto?: string;
//   documents?: string;
//   positions_available?: number;
//   contact?: string;
//   managerImg?: string;
//   telegram?: string;
//   viber?: string;
//   whatsapp?: string;
//   image?: string;
//   category?: string;
//   work_descr?: string;
//   home_descr?: string;
//   grafik?: string;
// }
export interface Vacancy {
  _id: string;
  job_title: string;
  location: string;
  roof_type?: string;
  salary: string;
  homePrice: string;
  auto: string;
  documents: string;
  viber: string;
  telegram: string;
  whatsapp: string;
  image?: {
      contentType: string;
      data: string;
      name: string;
  };
}
export interface News {
  _id?: string;
  title?: string;
  category?: string;
  image?: string;
  description?: string;
  date?: string;
  content?: {
    article?: {
      title?: string;
      image?: string;
      content?: string;
    }[];
  };
  h1?: string;
  h2?: string;
  h3?: string;
  minDescr?: string;
  source?: string;
}

 interface Article {
  title: string;
  a: string;
  image: string;
  content: string;
}

export interface Userfull {
  _id: string;
  source: string;
  title: string;
  h1: string;
  h2: string;
  h3: string;
  category: string;
  description: string;
  content?: {
    article?: {
      title?: string;
      image?: string;
      content?: string;
    }[];
  };
  image: string;
}
