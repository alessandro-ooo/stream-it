import { TCollection } from "./types"

const Collection = (props: TCollection) => {
    return (
        <div className="mt-12 grid justify-items-center grid-cols-3 gap-y-32 pl-32 pr-32">
            {props.children}
        </div>
    )
}

export default Collection;