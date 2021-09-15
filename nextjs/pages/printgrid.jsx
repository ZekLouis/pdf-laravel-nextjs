import Chart from '../src/Chart';
import KPI from '../src/KPI';

export default function PrintGrid() {
    return (
        <div className="w-full grid grid-cols-12 gap-y-8 lg:gap-y-12 gap-x-2 xl:gap-x-m 2xl:gap-x-5">
            <Chart className="col-span-full" />
            <KPI className="col-span-full sm:col-span-6 lg:col-span-4" />
            <KPI className="col-span-full sm:col-span-6 lg:col-span-4" />
            <KPI className="col-span-full sm:col-span-6 lg:col-span-4" />
        </div>
    );
}
