import CodeBlock from "@theme/CodeBlock";
import sdkSnippet from "@site/snippets/sdk-home-page";
import DocsLink from "./DocsLink";

export default function SDKPreview(): JSX.Element {
  return (
    <div className="bg-zinc-100 flex flex-col md:flex-row justify-center items-center gap-20 py-20 px-10 dark:bg-zinc-900">
      <div>
        <h3>Use the SDK for event and user generation</h3>
        <ul>
          <li>Provides simple interface</li>
          <li>Easy to import</li>
          <li>Easy to use</li>
        </ul>
        <div className="pl-3">
          <DocsLink text="Check out the SDK" link="/docs/api/sdk" />
        </div>
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
