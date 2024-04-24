import CodeBlock from "@theme/CodeBlock";
import sdkSnippet from "../../snippets/sdk-home-page";

export function SDKPreview(): JSX.Element {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-800 flex flex-col md:flex-row justify-center items-center gap-20 py-20 px-10">
      <div>
        <h3>Use the SDK for event and user generation</h3>
        <ul>
          <li>Provides simple interface</li>
          <li>Easy to import</li>
          <li>Easy to use</li>
        </ul>
        <button className="font-semibold p-2 rounded-xl transition ease-in-out duration-300 hover:scale-[0.96]">
          <div className="flex items-center gap-3 border-b border-b-black pb-1 dark:border-b-white">
            <span>Check out the docs </span>
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
        </button>
      </div>
      <div className="w-5/6 xl:w-fit l:w-1/2 md:w-1/2">
        <CodeBlock
          language="js"
          className="text-sm border border-zinc-700 overflow-clip"
        >
          {sdkSnippet.code}
        </CodeBlock>
      </div>
    </div>
  );
}
