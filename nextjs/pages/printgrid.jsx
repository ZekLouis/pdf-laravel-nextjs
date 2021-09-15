import Chart from '../src/Chart';
import KPI from '../src/KPI';

export default function PrintGrid() {
    return (
        <div className="flex flex-col w-full">
            <div className="w-full grid grid-cols-12 gap-y-8 gap-x-2 break-after">
                <Chart className="col-span-full" />
                <KPI className="col-span-full col-span-4" />
                <KPI className="col-span-full col-span-4" />
                <KPI className="col-span-full col-span-4" />
            </div>
            <div className="w-full grid grid-cols-12 gap-y-8 gap-x-2 break-after">
                <Chart className="col-span-full col-span-6" />
                <Chart className="col-span-full col-span-6" />
                <Chart className="col-span-full" />
            </div>
            <div className="w-full grid grid-cols-12 gap-y-8 gap-x-2 break-after">
                <Chart className="col-span-full" />
                <KPI className="col-span-full col-span-4" />
                <KPI className="col-span-full col-span-4" />
                <KPI className="col-span-full col-span-4" />
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