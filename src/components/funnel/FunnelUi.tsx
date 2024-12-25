import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import { Button as ButtonUI } from "../ui/button";

function Funnel({
  children,
  className,
  goBack,
}: {
  children: React.ReactNode;
  className?: string;
  goBack?: () => void;
}) {
  return (
    <div
      className={cn(
        "pb-24 h-full flex flex-col overflow-hidden px-4 gap-6 md:px-6 ",
        className
      )}
    >
      <header className="flex h-12 items-center justify-between px-4 border-b border-gray-100 -mx-6">
        {goBack && <BackButton onClick={goBack}>Back</BackButton>}
      </header>
      {children}
    </div>
  );
}

function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-3xl font-medium leading-9 text-center font-ubuntu text-grey-700",
        className
      )}
    >
      {children}
    </h2>
  );
}

function BoldTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-blackHanSans text-[60px] sm:text-[80px] md:text-[100px] text-gray-200 text-center leading-[55px] sm:leading-[70px] md:leading-[90px] select-none",
        className
      )}
    >
      {children}
    </p>
  );
}

function GrayText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "my-0.5 text-sm font-normal font-orbit text-gray-700",
        className
      )}
    >
      {children}
    </p>
  );
}

function FieldWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-8 flex flex-col gap-2 font-medium", className)}>
      {children}
    </div>
  );
}

function TextRow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>{children}</div>
  );
}

function Label({
  children,
  htmlFor,
  className,
}: {
  children: React.ReactNode;
  htmlFor: string;
  className?: string;
}) {
  return (
    <label className={cn("text-sm font-medium ", className)} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <ButtonUI
      className={cn("btn bg-black px-6 py-4 border", className)}
      {...props}
    >
      {children}
    </ButtonUI>
  );
}

function ButtonWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "fixed bottom-20 left-1/2 flex w-full max-w-[400px] -translate-x-1/2 justify-center gap-2 px-6 z-10",
        className
      )}
    >
      {children}
    </div>
  );
}

function BackButton({ children, className, ...props }: ButtonProps) {
  return (
    <button className={cn("btn flex items-center gap-1", className)} {...props}>
      <ArrowLeftIcon />
      {children}
    </button>
  );
}

Funnel.Title = Title;
Funnel.BoldTitle = BoldTitle;
Funnel.GrayText = GrayText;
Funnel.TextRow = TextRow;
Funnel.FieldWrapper = FieldWrapper;
Funnel.Label = Label;
Funnel.ButtonWrapper = ButtonWrapper;
Funnel.Button = Button;
Funnel.BackButton = BackButton;

export default Funnel;
