import type { DrawerPlacements } from "../../../store/useDrawerStore";
import useDrawerStore from "../../../store/useDrawerStore";
import cn from "../../../utils/classNames";

interface Props {
  view: React.ReactElement;
  placement?: DrawerPlacements;
  containerClassName?: string;
  className?: string;
}

export default function HamburgerButton({
  view,
  placement = 'left',
  containerClassName = 'max-w-[320px]',
  className,
}: Props) {
  const openDrawer = useDrawerStore(state => state.openDrawer);
  return (
    <div
      aria-label="Open Sidebar Menu"
      className={cn('me-3 h-auto w-auto p-0 sm:me-4 xl:hidden cursor-pointer', className)}
      onClick={() => {
        openDrawer({
          view,
          placement,
          containerClassName,
        });
      }
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
        />
      </svg>
    </div>
  );
}
