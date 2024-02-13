import { TCollection } from "./types"

const Collection = (props: TCollection) => {
    const { reactClass } = props;
    return (
        <div className={reactClass}>
            {props.children}
        </div>
    )
}

export default Collection