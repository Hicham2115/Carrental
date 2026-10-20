import Image from "next/image";

type LogoProps = { className?: string };

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/images/carrental-logo.png"
      alt="Carrental.ma"
      width={280}
      height={50}
      priority
      className={className ?? "h-auto w-[184px] sm:w-[220px] lg:w-[290px]"}
    />
  );
}

export default Logo;
