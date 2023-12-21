// Interface for our props.
interface NavButtonProps {
  text: string;
  name?: string;
  age?: number;
  city?: string;
  variant: "primary" | "secondary"; // Enums to props
  children: any;
}

export default function NavButton({
  text,
  name,
  age,
  city = "Lyngby", // Adding default values to props
  variant,
  children,
}: NavButtonProps) {
  const lastName: string = "Mathias";

  return (
    <div>
      {text}
      {children}
    </div>
  );
}
