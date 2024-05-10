import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import dataloafDashboardImage from "/static/img/dataloaf-dashboard-final.png";
import dataloafFeaturesImage from "/static/img/dataloaf-dashboard-features-final.png";

export default function DashBoardPreview(): JSX.Element {
  const thumbs = [
    dataloafDashboardImage,
    dataloafFeaturesImage,
    dataloafFeaturesImage,
  ];

  const renderThumbs = () => {
    return thumbs.map((thumb, index) => (
      <img
        src={thumb}
        alt="thumbnail for dataloaf dashboard carousel"
        key={index}
      />
    ));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 py-20 px-10">
      <h2 className="text-center">
        React Dashboard to display event and user insights
      </h2>
      <Carousel className="max-w-[1308px] w-full" renderThumbs={renderThumbs}>
        <div>
          <img
            src={dataloafDashboardImage}
            alt="Image of Dataloaf Dashboard UI"
            className="rounded-lg border border-accent"
          />
          <p className="legend hidden md:block lg:block xl:block">
            Select an event type, an aggregation type, and filter based on both
            user and event attributes
          </p>
        </div>
        <div>
          <img
            src={dataloafFeaturesImage}
            alt="Image of Dataloaf Dashboard UI"
            className="rounded-lg border border-accent"
          />
          <p className="legend hidden md:block lg:block xl:block">
            Provides simple to understand visualizations such as line, area, and
            bar chart
          </p>
        </div>
        <div>
          <video loop autoPlay playsInline muted className="rounded-md">
            <source
              src={require("/static/img/loaf-dashboard-demo.mp4").default}
            ></source>
          </video>
          <p className="legend hidden md:block lg:block xl:block">
            Brief demo showing off the dashboard
          </p>
        </div>
      </Carousel>
    </div>
  );
}
