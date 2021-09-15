import Chart from '../src/Chart';
import KPI from '../src/KPI';

export default function PrintGrid() {
    return (
        <div className="flex flex-col w-full">
            <div className="w-full grid grid-cols-12 gap-y-8 lg:gap-y-12 gap-x-2 xl:gap-x-m 2xl:gap-x-5 break-after">
                <Chart className="col-span-full" />
                <KPI className="col-span-full sm:col-span-6 lg:col-span-4" />
                <KPI className="col-span-full sm:col-span-6 lg:col-span-4" />
                <KPI className="col-span-full sm:col-span-6 lg:col-span-4" />
            </div>
            <div className="w-full grid grid-cols-12 gap-y-8 lg:gap-y-12 gap-x-2 xl:gap-x-m 2xl:gap-x-5 break-after">
                <Chart className="col-span-full" />
                <KPI className="col-span-full sm:col-span-6 lg:col-span-4" />
                <KPI className="col-span-full sm:col-span-6 lg:col-span-4" />
                <KPI className="col-span-full sm:col-span-6 lg:col-span-4" />
            </div>
        </div>
    );
}
