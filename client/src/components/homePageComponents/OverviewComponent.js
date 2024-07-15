import CurrentEventsComponent from "../CurrentEventsComponent";
import DreamListComponent from "../DreamListComponent";
import WeatherComponent from "../WeatherComponent";

export default function OverviewComponents() {
    return (
        <div style = {{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 15
        }}>
            <CurrentEventsComponent />
            <WeatherComponent />
            <DreamListComponent />
        </div>
    )
}