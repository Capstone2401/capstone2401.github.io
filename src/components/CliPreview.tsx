export default function CliPreview() {
  return (
    <div className="flex justify-center gap-10">
      <div>
        <img
          src={require("/static/img/Windows_Terminal_logo.png").default}
          alt="Preview of custom CLI"
          className="w-64"
        />
      </div>
      <div className="self-center">
        <span>With just a few clicks, you will deploy:</span>
        <ul>
          <li>Amazon Redshift cluster</li>
          <li>Amazon Data Firehose</li>
          <li>AWS Lambda</li>
          <li>Amazon EC2</li>
          <li>and more...</li>
        </ul>
      </div>
    </div>
  );
}
