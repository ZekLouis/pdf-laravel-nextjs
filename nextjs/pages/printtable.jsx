import Chart from '../src/Chart';
import KPI from '../src/KPI';

export default function PrintTable() {
    return (
        <table class="table-auto w-full">
            <tbody>
                <tr>
                    <td colSpan={3} className="w-full p-4">
                        <Chart className="w-full" />
                    </td>
                </tr>
                <tr class="break-after">
                    <td className="p-4">
                        <KPI />
                    </td>
                    <td className="p-4">
                        <KPI />
                    </td>
                    <td className="p-4">
                        <KPI />
                    </td>
                </tr>

                <tr>
                    <td colSpan={3} className="w-full p-4">
                        <Chart className="w-full" />
                    </td>
                </tr>
                <tr class="break-after">
                    <td className="p-4">
                        <KPI />
                    </td>
                    <td className="p-4">
                        <KPI />
                    </td>
                    <td className="p-4">
                        <KPI />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
