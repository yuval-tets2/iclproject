import { EventCreateNestedManyWithoutCustomersInput } from "./EventCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  events?: EventCreateNestedManyWithoutCustomersInput;
  firstNAme?: string | null;
  lastName?: string | null;
};
