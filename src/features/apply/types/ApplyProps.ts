import type { Status } from "./ApplyTypes";

export interface ApplyNotice {
  id: string;
  status: Status;
  titleLine1: string;
  titleLine2: string;
  periodFrom: string;
  periodTo: string;
  emphasis?: boolean;
}
export interface ApplyNoticeApi {
  id: number;
  title: string;
  startAt: string;
  endAt: string;
}
