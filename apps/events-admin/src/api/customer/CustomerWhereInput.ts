import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  email?: StringNullableFilter;
  events?: EventListRelationFilter;
  firstNAme?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
