import GlobeComponent from "../components/GlobeComponent";
import OverviewComponent from "../components/homePageComponents/OverviewComponent";

export default function HomePage({theme}){
    return (
        <div style = {{overflow: 'hidden'}}>
            <OverviewComponent />
            <GlobeComponent theme = {theme}/>
        </div>
    )
}