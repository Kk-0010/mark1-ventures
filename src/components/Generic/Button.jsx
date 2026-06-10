const Button = ({
  type = "secondary",
  size = "base",
  label,
  Icon,
  iconClass,
  buttonClassName = "",
  children,
  disabled,
}) => {
  let buttonClass =
    type === "primary"
      ? "from-red-700 to-red-500 hover:from-red-500 hover:to-red-700 text-white"
      : type === "secondary"
      ? "border border-red-400 from-red-700 to-red-600 hover:from-red-500 hover:to-red-700 text-white shadow-red-900/75"
      : "";

  let buttonSize =
    size === "lg"
      ? "text-sm font-medium px-5 py-3"
      : "text-[10px] xl:text-xs font-semibold px-2 lg:px-3 py-1.5 lg:py-2";

  return (
    <button
      type="submit"
      disabled={disabled}
      className={`bg-gradient-to-tr text-center min-w-40 rounded-sm shadow-md transition duration-500 cursor-pointer ${buttonClass} ${buttonSize} ${buttonClassName}`}
    >
      {children || label || (Icon && <Icon className={iconClass} />)}
    </button>
  );
};

export default Button;
