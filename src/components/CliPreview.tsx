export default function CliPreview(): JSX.Element {
  return (
    <div className="-z-20 flex md:flex-row flex-col justify-center items-center gap-16 py-20 px-10 bg-zinc-100 dark:bg-zinc-900">
      <div className="bg-[#1d1d2d] p-2 rounded-md border border-zinc-700 drop-shadow-xl">
        <video loop autoPlay playsInline muted width="900">
          <source
            src={require("/static/img/loaf-cli-trimmed.mp4").default}
          ></source>
        </video>
      </div>
      <div>
        <div>
          <h3>With just a few clicks of the CLI, deploy:</h3>
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
          <p>CLI Technologies:</p>
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
