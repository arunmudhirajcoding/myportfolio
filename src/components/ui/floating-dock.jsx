import { cn } from "@/lib/utils";
import {
	AnimatePresence,
	motion,
	useMotionValue,
	useSpring,
	useTransform,
} from "motion/react";

import React, { useRef, useState } from "react";

export const FloatingDock = ({ items, desktopClassName }) => {
	return (
		<>
			<FloatingDockDesktop items={items} className={desktopClassName} />
			{/* <FloatingDockMobile items={items} className={mobileClassName} /> */}
		</>
	);
};

const FloatingDockDesktop = ({ items, className }) => {
	let mouseX = useMotionValue(Infinity);
	return (
		<motion.div
			onMouseMove={(e) => mouseX.set(e.pageX)}
			onMouseLeave={() => mouseX.set(Infinity)}
			className={cn(
				" h-16 items-end gap-4 rounded-2xl px-4 pb-3 flex bg-neutral-900",
				className,
			)}
		>
			{items.map((item) => (
				<IconContainer mouseX={mouseX} key={item.name} {...item} />
			))}
		</motion.div>
	);
};

function IconContainer({ mouseX, name, icon, desc }) {
	let ref = useRef(null);

	let distance = useTransform(mouseX, (val) => {
		let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

		return val - bounds.x - bounds.width / 2;
	});

	let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
	let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

	let widthTransformIcon = useTransform(
		distance,
		[-150, 0, 150],
		[30, 120, 30],
	);
	let heightTransformIcon = useTransform(
		distance,
		[-150, 0, 150],
		[30, 120, 30],
	);

	let width = useSpring(widthTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});
	let height = useSpring(heightTransform, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	let widthIcon = useSpring(widthTransformIcon, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});
	let heightIcon = useSpring(heightTransformIcon, {
		mass: 0.1,
		stiffness: 150,
		damping: 12,
	});

	const [hovered, setHovered] = useState(false);

	return (
		<a href={`${name}`}>
			<motion.div
				ref={ref}
				style={{ width, height }}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				className="relative flex aspect-square items-center justify-center rounded-full bg-neutral-800"
			>
				<AnimatePresence>
					{hovered && (
						<motion.div
							initial={{ opacity: 0, y: 20, scale: 0.6 }}
							animate={{
								opacity: 1,
								y: 0,
								scale: 1,
								transition: {
									type: "spring",
									stiffness: 260,
									damping: 10,
								},
							}}
							exit={{ opacity: 0, y: 20, scale: 0.6 }}
							style={{
								
								
								whiteSpace: "nowrap",
							}}
							className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
							key={name}
						>
							<div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-linear-to-r from-transparent via-emerald-500 to-transparent" />
							<div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-linear-to-r from-transparent via-sky-500 to-transparent" />
							<div className="relative z-30 text-base font-bold text-white">
								{name}
							</div>
							<div className="text-xs text-white">
								{desc}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
				<motion.span
					style={{ width: widthIcon, height: heightIcon }}
					className="flex items-center justify-center"
				>
					{icon}
				</motion.span>
			</motion.div>
		</a>
	);
}
