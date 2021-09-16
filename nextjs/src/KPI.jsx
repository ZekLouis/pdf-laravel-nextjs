import clsx from 'clsx';

const KPI = ({ className }) => {
    return (
        <div
            className={clsx(
                className,
                'p-12 shadow-xl rounded-md flex justify-center items-center'
            )}>
            <div className="h-17 w-17 rounded-full bg-icoBlue-200 mr-5"></div>
            <div>
                <p className="font-extrabold text-4xl">47.2k</p>
                <span className="text-icoGray-500 font-bold">Total followers</span>
            </div>
        </div>
    );
};

export default KPI;
