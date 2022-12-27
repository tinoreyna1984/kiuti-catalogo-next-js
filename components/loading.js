import { Hearts } from "react-loader-spinner";

export default function Loading() {
    return (
        <div className="col">
            <div className="card h-100 border-0">
                <div className="card-body">
                    <Hearts
                        height="282"
                        width="282"
                        color="#f16c94"
                        ariaLabel="hearts-loading"
                        wrapperStyle={{}}
                        wrapperClass="card-img-top h-100 w-100"
                        visible={true}
                    />
                </div>
            </div>
        </div>
    );
}