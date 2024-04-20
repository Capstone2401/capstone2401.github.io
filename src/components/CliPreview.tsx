export default function CliPreview(): JSX.Element {
  return (
    <div className="-z-20 flex sm:flex-row flex-col justify-center items-center gap-10 py-20 px-10 bg-zinc-100 dark:bg-zinc-900">
      <div>
        <img
          src={require("/static/img/Windows_Terminal_logo.png").default}
          alt="Preview of custom CLI"
          width="700"
        />
      </div>
      <div>
        <div>
          <h3>With just a few clicks of the CLI, you can deploy:</h3>
          <ul>
            <li>Amazon Redshift cluster</li>
            <li>Amazon Data Firehose</li>
            <li>AWS Lambda</li>
            <li>Amazon EC2</li>
            <li>Amazon S3</li>
            <li>and more...</li>
          </ul>
        </div>
        <div>
          <p>Technologies:</p>
          <ul className="flex list-none gap-2 px-0 py-5">
            <li>
              <img
                src={require("/static/img/gopher.png").default}
                alt="golang icon"
                width="75"
                className="rounded-lg"
              />
            </li>
            <li>
              <img
                src={require("/static/img/terraform.png").default}
                alt="terraform icon"
                width="75"
                className="rounded-lg"
              />
            </li>
            <li>
              <img
                src={require("/static/img/aws-sdk.png").default}
                alt="aws sdk icon for node"
                width="75"
                className="rounded-lg"
              />
            </li>
            <li>
              <img
                src={require("/static/img/docker.jpg").default}
                alt="docker icon"
                width="75"
                className="rounded-lg"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
