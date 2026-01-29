import clsx from "clsx";
import Image from "next/image";

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: "bottom" | "center";
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="overflow-hidden">
        {props.src ? (
          <Image
            className={clsx("h-full w-full object-cover", {
              "transition duration-300 ease-in-out hover:scale-105":
                isInteractive,
            })}
            {...props}
          />
        ) : null}
      </figure>
    </div>
  );
}
