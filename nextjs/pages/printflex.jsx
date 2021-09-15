import Chart from '../src/Chart';
import KPI from '../src/KPI';

export default function PrintFlex() {
    return (
        <div className="flex flex-col">
            <div className="flex items-center flex-wrap space-y-3 break-after">
                <Chart className="w-full" />
                <div className="w-full flex items-center space-x-3">
                    <KPI className="w-1/3" />
                    <KPI className="w-1/3" />
                    <KPI className="w-1/3" />
                </div>
                <Chart className="w-1/2" />
                <Chart className="w-1/2" />
            </div>
            <div className="flex items-center flex-wrap space-y-3 break-after">
                <Chart className="w-full" />
                <div className="w-full flex items-center space-x-3">
                    <KPI className="w-1/3" />
                    <KPI className="w-1/3" />
                    <KPI className="w-1/3" />
                </div>
                <Chart className="w-1/2" />
                <Chart className="w-1/2" />
            </div>
        </div>
    );
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}
