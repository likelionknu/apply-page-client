import { useState } from "react";

interface AdditionalStatusProps {
  value: string;
  onChange: (value: string) => void;
}

const AdditionalStatusComponent = ({ onChange }: AdditionalStatusProps) => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  interface StatusSelectButtonProps {
    text: string;
    selected: boolean;
    onClick: () => void;
  }

  const StatusSelectButton = ({
    text,
    selected,
    onClick,
  }: StatusSelectButtonProps) => {
    return (
      <div
        className="inline-block cursor-pointer rounded-lg bg-[linear-gradient(178deg,#FFF_-42.66%,#427E9C_97.86%)] p-px lg:rounded-xl"
        onClick={onClick}
      >
        <div
          className={`flex h-8 w-11 items-center justify-center rounded-md text-[10px] text-white transition-colors lg:h-13.5 lg:w-[70.116px] lg:rounded-[11px] lg:text-sm lg:duration-200 ${
            selected
              ? "bg-[rgba(0,63,135)]"
              : "bg-black hover:bg-[rgba(0,63,135)]"
          }`}
        >
          {text}
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-68 flex-row-reverse items-center gap-13 lg:h-13.5 lg:w-100">
      <div className="flex w-44 flex-row justify-between lg:h-14 lg:w-62">
        <StatusSelectButton
          text="재학"
          selected={selectedStatus === "재학"}
          onClick={() => {
            setSelectedStatus("재학");
            onChange("재학");
          }}
        />

        <StatusSelectButton
          text="휴학"
          selected={selectedStatus === "휴학"}
          onClick={() => {
            setSelectedStatus("휴학");
            onChange("휴학");
          }}
        />

        <StatusSelectButton
          text="졸업유예"
          selected={selectedStatus === "졸업유예"}
          onClick={() => {
            setSelectedStatus("졸업유예");
            onChange("졸업유예");
          }}
        />
      </div>

      <div className="justify-start text-xs font-medium text-white lg:text-2xl lg:font-semibold">
        학적상태
      </div>
    </div>
  );
};

export default AdditionalStatusComponent;
