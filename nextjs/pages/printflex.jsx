import Chart from '../src/Chart';
import KPI from '../src/KPI';

export default function PrintFlex() {
    return (
        <div className="flex items-center flex-wrap space-y-3">
            <Chart className="w-full" />
            <div className="w-full flex items-center space-x-3">
                <KPI className="w-1/3" />
                <KPI className="w-1/3" />
                <KPI className="w-1/3" />
            </div>
        </div>
    );
}
