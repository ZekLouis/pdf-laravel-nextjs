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
                <tr>
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
                <tr>
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


// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}