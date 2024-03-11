import { useRef, useState } from 'react';

interface MenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  dropitem: React.ReactNode;
}

export function MenuButton({
  children,
  dropitem,
  className,
  ...rest
}: MenuButtonProps) {
  const dropRef = useRef<HTMLDivElement>(null);
  const dropButtonRef = useRef<HTMLButtonElement>(null);

  const [dropIsOpen, setDropIsOpen] = useState<boolean>(false);

  function ToggleDropDown() {
    setDropIsOpen(!dropIsOpen);
    // document.querySelectorAll('.drop-down.active').forEach((item) => {
    //   item?.classList.remove('active');
    // });
  }

  return (
    <div className="relative">
      <button
        ref={dropButtonRef}
        onClick={ToggleDropDown}
        {...rest}
        className={`btn-icon`}
      >
        {children}
      </button>
      <div
        ref={dropRef}
        className={`${
          dropIsOpen && 'active'
        } drop-down absolute right-0 top-[60px] rounded-md bg-[var(--black)] p-3 text-white`}
      >
        <span className="absolute right-3 top-[-7px] block h-[20px] w-[20px] rotate-45 bg-[var(--black)]"></span>
        {dropitem}
      </div>
    </div>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return <button {...rest}>{children}</button>;
}
