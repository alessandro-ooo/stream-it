import MediaPasswordForm from "@/app/Components/Forms/MediaPassword";
import Modal from "@/app/Components/Modal/Modal";

type SearchParamProps = {
    searchParams: Record<string, string> | null | undefined;
};

const Access = async ({ searchParams }: SearchParamProps) => {

    const URL: string | undefined = searchParams?.to;

    return (
        <div className="flex items-center justify-center space-y-24 z-50 h-screen w-full absolute transition bg-gray-900 ease-in-out delay-500">
            <Modal>
                <MediaPasswordForm
                    URL={URL as string}
                />
            </Modal>
        </div>
    )
}

export default Access