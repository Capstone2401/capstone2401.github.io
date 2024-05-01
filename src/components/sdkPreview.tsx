import CodeBlock from "@theme/CodeBlock";
import sdkSnippet from "../../snippets/sdk-home-page";
import Link from "@docusaurus/Link";

export function SDKPreview(): JSX.Element {
  return (
    <div className="bg-zinc-100 flex flex-col md:flex-row justify-center items-center gap-20 py-20 px-10 dark:bg-zinc-900">
      <div>
        <h3>Use the SDK for event and user generation</h3>
        <ul>
          <li>Provides simple interface</li>
          <li>Easy to import</li>
          <li>Easy to use</li>
        </ul>
        <button className="font-semibold p-2 rounded-xl transition ease-in-out duration-200 subpixel-antialiased hover:scale-[1.048]">
          <Link
            to="/docs/api/sdk"
            className="no-underline hover:text-black hover:dark:text-white"
            style={{ textDecoration: "none", zIndex: 10 }}
          >
            <div className="flex items-center gap-3 border-b border-b-black pb-1 dark:border-b-white">
              <span>Check out the docs</span>
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
      </div>
      <div className="w-full xl:w-[700px] l:w-1/2 md:w-1/2">
        <CodeBlock
          language="js"
          className="text-sm border border-accent overflow-clip"
        >
          {sdkSnippet.code}
        </CodeBlock>
      </div>
    </div>
  );
}
