import { CTA, Ghost } from "../Inputs/Buttons";
import { TPagination } from "./types"

const Pagination = (props: TPagination) => {
    const { pages, current } = props;

    current = Math.max(1, Math.min(current, pages));

    return(
        <div
            className="flex flex-row space-x-4 w-full justify-center my-12"
        >
            <Ghost 
                text="<"
            />
            <CTA 
                text="1"
            />

            <Ghost 
                text="2"
            />

            <Ghost 
                text="3"
            />

            <Ghost 
                text="..."
            />

            <Ghost 
                text="10"
            />

            <Ghost 
                text=">"
            />
        </div>
    )
}

export default Pagination;