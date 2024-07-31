import GlobeComponent from "../components/GlobeComponent";
import OverviewComponent from "../components/homePageComponents/OverviewComponent";

export default function HomePage(){
    return (
        <div style = {{overflow: 'hidden'}}>
            <OverviewComponent />
            <GlobeComponent/>
        </div>
    )
}