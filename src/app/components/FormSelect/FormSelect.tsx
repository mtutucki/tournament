import { Option } from "@/app/types/types";

type FormSelectProps = {
  defaultOption: string;
  options: Option[];
};

export default function FormSelect({
  defaultOption,
  options,
}: FormSelectProps) {
  return (
    <div className="rounded border border-[var(--button)]">
      <select
        className="w-full rounded p-2"
        defaultValue=""
        name="mode"
        required
        style={{ borderRight: "1rem solid transparent" }}
      >
        <option value="" disabled>
          {defaultOption}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            className="text-black"
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
