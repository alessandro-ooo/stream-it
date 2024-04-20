import { CTA, Ghost } from "../Inputs/Buttons";
import { TPagination } from "./types"

const Pagination = (props: TPagination) => {
    const { pages, current } = props;
    const pageZero: number = current - 1;

    if (pages <= 3) {
        if (current + 1 == pages) {
            return (
                <div
                    className="flex flex-row space-x-4 w-full justify-center mt-32 mb-12"
                >
                    {pageZero != 0 &&
                        <a
                            href={`/?page=${current - 1}`}>
                            <Ghost
                                text={`${current - 1}`}
                            />
                        </a>
                    }
                    <a
                        href={`/?page=${current}`}>
                        <CTA
                            text={`${current}`}
                        />
                    </a>

                    <a
                        href={`/?page=${pages}`}>
                        <Ghost
                            text={`${pages}`}
                        />
                    </a>
                </div>
            )
        }

        if (current + 2 == pages) {
            return (
                <div
                    className="flex flex-row space-x-4 w-full justify-center mt-32 mb-12"
                >
                    <Ghost
                        text={`<`}
                    />
                    <a
                        href={`/?page=${current}`}>
                        <CTA
                            text={`${current}`}
                        />
                    </a>

                    <a
                        href={`/?page=${current + 1}`}>
                        <Ghost
                            text={`${current + 1}`}
                        />
                    </a>

                    <a
                        href={`/?page=${current + 2}`}>
                        <Ghost
                            text={`${current + 2}`}
                        />
                    </a>

                    <Ghost
                        text={`>`}
                    />
                </div>
            )
        }
    }

    if (current + 1 == pages) {
        return (
            <div
                className="flex flex-row space-x-4 w-full justify-center mt-32 mb-12"
            >
                <Ghost
                    text="<"
                />
                <a
                    href={`/?page=${current - 1}`}>
                    <Ghost
                        text={`${current - 1}`}
                    />
                </a>

                <a
                    href={`/?page=${current}`}>
                    <CTA
                        text={`${current}`}
                    />
                </a>

                <a
                    href={`/?page=${pages}`}>
                    <Ghost
                        text={`${pages}`}
                    />
                </a>
                <Ghost
                    text="..."
                />
                <Ghost
                    text=">"
                />
            </div>
        )
    }

    if (pages == current) {
        return (
            <div
                className="flex flex-row space-x-4 w-full justify-center mt-32 mb-12"
            >
                <Ghost
                    text="<"
                />

                <a
                    href={`/?page=${current - 2}`}>
                    <Ghost
                        text={`${current - 2}`}
                    />
                </a>

                <a
                    href={`/?page=${pages - 1}`}>
                    <Ghost
                        text={`${pages - 1}`}
                    />
                </a>

                <a
                    href={`/?page=${pages}`}>
                    <CTA
                        text={`${pages}`}
                    />
                </a>

                <Ghost
                    text="..."
                />

                <Ghost
                    text=">"
                />

            </div>
        )
    }
    return (
        <div
            className="flex flex-row space-x-4 w-full justify-center mt-32 mb-12"
        >
            <Ghost
                text="<"
            />

            <a
                href={`/?page=${current}`}>
                <CTA
                    text={`${current}`}
                />
            </a>

            <a
                href={`/?page=${current + 1}`}>
                <Ghost
                    text={`${current + 1}`}
                />
            </a>

            <a
                href={`/?page=${current + 2}`}>
                <Ghost
                    text={`${current + 2}`}
                />
            </a>

            <Ghost
                text="..."
            />

            <a
                href={`/?page=${pages}`}>
                <Ghost
                    text={`${pages}`}
                />
            </a>

            <Ghost
                text=">"
            />

        </div>
    )
}

export default Pagination;