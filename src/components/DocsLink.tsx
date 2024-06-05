import Link from "@docusaurus/Link";
export default function DocsLink({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <button className="font-semibold rounded-xl transition ease-in-out duration-200 subpixel-antialiased hover:scale-[1.048]">
      <Link
        to={link}
        className="no-underline hover:text-black hover:dark:text-white"
        style={{ textDecoration: "none", zIndex: 10 }}
      >
        <div className="flex items-center gap-3 border-b border-b-black pb-1 dark:border-b-white">
          <span>{text}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 25"
            className="w-6 font-bold"
          >
            <path
              className="fill-zinc-800 stroke-[1.5px] stroke-zinc-800 dark:fill-white dark:stroke-white"
              d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
              data-name="Right"
            />
          </svg>
        </div>
      </Link>
    </button>
  );
}
