export default function DashBoardPreview(): JSX.Element {
  return (
    <div className="flex flex-col bg-white dark:bg-base justify-center items-center gap-4 py-10">
      <h2>Custom React Dashboard to display event and user insights</h2>
      <img
        src={require("/static/img/dataloaf-dashboard.png").default}
        alt="Image of Dataloaf Dashboard UI"
        width="1300"
        className="rounded-lg border border-white"
      />
      <caption>
        Provides ability to select an event type, an aggregation type, and
        filter based on both user and event attributes
      </caption>
    </div>
  );
}
