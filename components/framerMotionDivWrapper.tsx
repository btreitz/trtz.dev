"use client";

import { HTMLMotionProps, motion } from "framer-motion";

export default function FramerMotionDivWrapper({ children, ...props }: HTMLMotionProps<"div">) {
	return <motion.div {...props}>{children}</motion.div>;
}
