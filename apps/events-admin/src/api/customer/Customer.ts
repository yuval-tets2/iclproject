import { Event } from "../event/Event";

export type Customer = {
  createdAt: Date;
  email: string | null;
  events?: Array<Event>;
  firstNAme: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  updatedAt: Date;
};
