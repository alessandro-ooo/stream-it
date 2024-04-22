"use client"
import { motion, useAnimate, useInView, useTime } from "framer-motion";
import Text from "../Typography/Paragraphs";
import { TNotify } from "./types"
import { useEffect } from "react";

const Notify = (props: TNotify) => {
    const { text, trigger, uploading } = props;
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (trigger == true) {
            animate(scope.current, { opacity: 1, scale: 1 }).then(() => {
                if(uploading == false || undefined) {
                    animate(scope.current, { opacity: 0, scale: 0 }, {delay: 1.5});
                }
            })
        }
     }, [])

    return (
        <motion.div 
            className="flex flex-row absolute z-50 w-full justify-center mt-12"
            initial={{ opacity: 0, scale: 0.5 }}
            ref={scope}
        >
            <div className={`bg-gray-800 rounded-2xl pt-4 pb-4 pl-6 pr-6 flex flex-row`}>
                {uploading == true && 
                    <motion.div
                        animate={{ rotate: 360  }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="mr-6"
                    >
                        <Text 
                            fweight={"font-semibold"} 
                            fsize={"text-2xl"}
                            extra={"text-slate-100"}                
                        >
                            .
                        </Text>
                    </motion.div>
                }

                <Text 
                    fweight={"font-semibold"} 
                    fsize={"text-regular"}
                    extra={"text-slate-100"}                
                >
                    {text}
                </Text>
            </div>
        </motion.div>
    )
}

export default Notify