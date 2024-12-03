"use client"

interface Props {
    state: boolean;
    setState: (value: boolean) => void;
}

function Rememberme({ state, setState }: Props) {


    return (
        <div className="flex items-center">

            <input
                id="remember-me"
                name="remember-me"
                checked={state}
                onChange={() => {
                    setState(!state)
                    console.log("this remeber checked box", state)
                }}
                type="checkbox"
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
            />

            <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-300">
                Remember me
            </label>
        </div>
    );
}

export default Rememberme;