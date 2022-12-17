import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const Gradient: React.FC = () => {
	const {height, width, fps} = useVideoConfig();

	const frame = useCurrentFrame();

	const spr = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});

	const offset = interpolate(spr, [0, 1], [-width, 0]);

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				left: offset,
			}}
		>
			<div
				style={{
					height: 0.35 * height,
					width: '100%',
					background:
						'linear-gradient(to right, #05002d, #3f00ae, #f66bee, #ffe9fa)',
				}}
			/>
		</AbsoluteFill>
	);
};
