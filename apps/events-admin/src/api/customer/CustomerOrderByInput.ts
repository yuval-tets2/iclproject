import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstNAme?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
};
