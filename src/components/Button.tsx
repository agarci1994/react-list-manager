export function Button({
  onClick,
  type,
  children,
  disabled,
}: {
  onClick: () => void;
  type: "primary" | "secondary";
  children: React.ReactNode;
  disabled?: boolean;
}) {
  const baseStyles = "px-4 py-2 rounded-full";
  const primaryStyles = "bg-primary text-white px-10";
  const secondaryStyles = "bg-white text-primary border border-primary px-5";

  return (
    <button
      className={`${baseStyles} ${
        type === "primary" ? primaryStyles : secondaryStyles
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
