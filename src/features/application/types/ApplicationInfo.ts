import type { Status } from "@my/types/ApplicationItem";

export interface ApplicationInfo {
  recruitId?: number;
  title: string;
  start_at: string;
  end_at: string;
  status?: Status;
}

export interface ApplicationInfoProps {
  info: ApplicationInfo;
}
