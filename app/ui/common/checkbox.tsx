interface ChechboxProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  item: string;
}

export function Chechbox({ item, ...rest }: ChechboxProps) {
  return (
    <>
      <li className="mb-4 flex items-center">
        <label
          htmlFor={item}
          className="ms-2 flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <input
            id={item}
            type="checkbox"
            className="w-4 rounded border-gray-300 bg-gray-100 text-blue-600 first-letter:h-4 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          {item}
        </label>
      </li>
    </>
  );
}
