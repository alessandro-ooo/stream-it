import { TCollection } from "./types"

const Collection = (props: TCollection) => {
    return (
        <div className="grid justify-items-center grid-cols-3 gap-y-10 pl-32 pr-32">
            {props.children}
        </div>
    )
}

export default Collection