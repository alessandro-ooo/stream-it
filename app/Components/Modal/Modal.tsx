"use client"
import { TModal } from "./types";
import { motion } from "framer-motion"

const variants = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0 },
}

const Modal = (props: TModal) => {
    return (
        <motion.div 
            className="flex items-center justify-center space-y-24 z-50 h-full w-full absolute bg-gray-900"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={props.status != undefined ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.2 }}    
        >
            <div className="bg-white rounded-xl border-gray-200 shadow-sm pointer-events-auto w-fit p-8 z-50"
            >
                {props.children}
            </div>
        </motion.div>
    )
}

export default Modal;