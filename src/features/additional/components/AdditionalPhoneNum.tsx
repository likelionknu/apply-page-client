interface AdditionalPhoneInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const AdditionalPhoneInputComponent = ({
  label,
  placeholder,
  value,
  onChange,
}: AdditionalPhoneInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    onChange(formattedValue);
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/[^0-9]/g, "");

    if (numbers.length <= 3) {
      return numbers;
    }

    if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    }

    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  };

  return (
    <div className="flex w-68 flex-row-reverse items-center gap-13 lg:h-13.5 lg:w-99.25">
      <div className="inline-block rounded-lg bg-[linear-gradient(178deg,#FFF_-42.66%,#427E9C_97.86%)] p-px outline-white lg:rounded-xl">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          maxLength={13}
          className="h-8.25 w-44 rounded-md bg-black px-5 py-3.5 text-[10px] leading-6 font-medium text-white outline-none placeholder:text-zinc-500 lg:h-14 lg:w-62 lg:rounded-[11px] lg:px-5 lg:py-3 lg:text-sm"
        />
      </div>
      <div className="text-xs font-medium text-white lg:text-2xl lg:font-semibold">
        {label}
      </div>
    </div>
  );
};

export default AdditionalPhoneInputComponent;
