import { type IDValueDesc } from "~/types/common";
import { type People } from "~/types/people";
import { atom } from "jotai";

export type SplitBill = {
  step: number;
  peoples: People[];
  multiplier: IDValueDesc[];
  additions: IDValueDesc[];
};

export const splitBillAtom = atom<SplitBill>({
  step: 1,
  peoples: [],
  multiplier: [],
  additions: [],
});
