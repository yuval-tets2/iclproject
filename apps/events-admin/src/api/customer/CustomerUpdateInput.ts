import { EventUpdateManyWithoutCustomersInput } from "./EventUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  events?: EventUpdateManyWithoutCustomersInput;
  firstNAme?: string | null;
  lastName?: string | null;
};
