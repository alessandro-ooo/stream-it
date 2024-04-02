import { CTA, Ghost } from "../Inputs/Buttons";
import { TPagination } from "./types"

const Pagination = (props: TPagination) => {
    const { pages, current } = props;
    const pageZero: number = current-1;

    if(pages <= 3) {
        if(current+1 == pages) {
            return (
                <div
                    className="flex flex-row space-x-4 w-full justify-center my-12"
                >
                    {pageZero != 0 &&
                        <Ghost
                            text={`${current-1}`}
                        />                   
                    }
                    <CTA
                        text={`${current}`}
                    />
                    <Ghost
                        text={`${pages}`}
                    />
                </div>
            )
        }

        if(current+2 == pages) {
            return (
                <div
                    className="flex flex-row space-x-4 w-full justify-center my-12"
                >
                    <Ghost
                        text={`<`}
                    />
                    <CTA
                        text={`${current}`}
                    />
                    <Ghost
                        text={`${current+1}`}
                    />
                    <Ghost
                        text={`${current+2}`}
                    />
                    <Ghost
                        text={`>`}
                    />
                </div>
            )
        }
    }

    if(current+1 == pages) {
        return (
            <div
                className="flex flex-row space-x-4 w-full justify-center my-12"
            >
                <Ghost
                    text="<"
                />
                <Ghost
                    text={`${current - 1}`}
                />                   
                <CTA
                    text={`${current}`}
                />
                <Ghost
                    text={`${pages}`}
                />
                <Ghost
                    text="..."
                />
                <Ghost
                    text=">"
                />
            </div>
        )
    }

    if(pages == current) {
        return(
            <div
                className="flex flex-row space-x-4 w-full justify-center my-12"
            >
                <Ghost
                    text="<"
                />

                <Ghost
                    text={`${pages - 2}`}
                />

                <Ghost
                    text={`${pages - 1}`}
                />

                <CTA
                    text={`${pages}`}
                />

                <Ghost
                    text="..."
                />

                <Ghost
                    text=">"
                />

            </div>
        )
    }
    return(
        <div
            className="flex flex-row space-x-4 w-full justify-center my-12"
        >
            <Ghost
                text="<"
            />

            <CTA
                text={`${current}`}
            />

            <Ghost
                text={`${current+1}`}
            />

            <Ghost
                text={`${current+2}`}
            />  

            <Ghost
                text="..."
            />

            <Ghost
                text={`${pages}`}
            />

            <Ghost
                text=">"
            />

        </div>
    )

    /*return(
        <div>

            {pages <= 3 &&
                
                <div
                    className="flex flex-row space-x-4 w-full justify-center my-12"
                >
                    <Ghost 
                        text="<"
                    />

                    <CTA 
                        text={`${current}`}
                    />
                    {twop != pages &&
                        <div>
                            <Ghost 
                                text={`${current+1}`}
                            />

                            <Ghost 
                                text={`${current+2}`}
                            />

                            <Ghost 
                                text=">"
                            />
                        </div>
                    }

                    {twop == pages &&
                        <div>
                            <Ghost 
                                text={`${pages}`}
                            />

                            <Ghost 
                                text=">"
                            />
                        </div>
                    }
                </div>
            
            }*/




            {/* <Ghost 
                text="<"
            />
            <CTA 
                text={`${current}`}
            />

            {pages > 3 && 

                <div 
                    className="flex flex-row space-x-4"
                >
                    {c > pages && 
                        
                        <div>
                            <Ghost
                                text={`${current+1}`}
                            />

                            <Ghost
                                text={`${pages}`}
                            />
                        </div>
                    }

                    {c < pages && 
                        <div>
                            <Ghost 
                                text={`${current+1}`}
                            />

                            <Ghost 
                                text={`${current+2}`}
                            />
                        </div>
                    }
                </div>          
            }

            <Ghost 
                text="..."
            />

            <Ghost 
                text={`${pages}`}
            />

            <Ghost 
                text=">"
            /> */}
        // </div>
    // )
}

export default Pagination;