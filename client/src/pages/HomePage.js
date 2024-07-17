import GlobeComponent from "../components/GlobeComponent";
import OverviewComponent from "../components/homePageComponents/OverviewComponent";

export default function HomePage({user,theme}){
    return (
        <div style = {{overflow: 'hidden'}}>
            <OverviewComponent />
            <GlobeComponent user = {user} theme = {theme}/>
        </div>
    )
}