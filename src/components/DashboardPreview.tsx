export default function DashBoardPreview(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-20 px-10">
      <h2>React Dashboard to display event and user insights</h2>
      <img
        src={require("/static/img/dataloaf-dashboard-new.png").default}
        alt="Image of Dataloaf Dashboard UI"
        className="rounded-lg border border-accent"
        width={1306}
      />
      <p>
        Provides ability to select an event type, an aggregation type, and
        filter based on both user and event attributes
      </p>
    </div>
  );
}
