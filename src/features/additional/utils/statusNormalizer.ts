export type AdditionalStatusEnum =
  | "ATTENDING"
  | "LEAVE_OF_ABSENCE"
  | "GRADUATION_DEFERRAL";

export const ADDITIONAL_STATUS_OPTIONS: ReadonlyArray<{
  label: string;
  value: AdditionalStatusEnum;
}> = [
  { label: "재학", value: "ATTENDING" },
  { label: "휴학", value: "LEAVE_OF_ABSENCE" },
  { label: "졸업유예", value: "GRADUATION_DEFERRAL" },
];

const STATUS_ALIAS_MAP: Record<string, AdditionalStatusEnum> = {
  ATTENDING: "ATTENDING",
  LEAVE_OF_ABSENCE: "LEAVE_OF_ABSENCE",
  GRADUATION_DEFERRAL: "GRADUATION_DEFERRAL",
  재학: "ATTENDING",
  휴학: "LEAVE_OF_ABSENCE",
  졸업유예: "GRADUATION_DEFERRAL",
};

const normalizeStatus = (
  input: string | null | undefined,
): AdditionalStatusEnum | "" => {
  const normalized = input?.trim();
  if (!normalized) return "";
  return STATUS_ALIAS_MAP[normalized] ?? "";
};

export const normalizeStatusFromApi = (
  input: string | null | undefined,
): AdditionalStatusEnum | "" => normalizeStatus(input);

export const normalizeStatusForSubmit = (
  input: string | null | undefined,
): AdditionalStatusEnum | "" => normalizeStatus(input);
