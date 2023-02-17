import 'css-spinners/dist/whirly/whirly.min.css';

interface IProps {
    isLoading: boolean;
    children: any;
}

const Loading = (props: IProps) => {
    const { isLoading, children } = props;
    return (
        <>
            {isLoading ? (
                <div className="z-3 bg-black absolute top-0 left-0 h-screen w-full" >
                    <div className="whirly-loader"></div>
                    {children}
                </div>
            ) : children}
        </>
    )
}

export default Loading;