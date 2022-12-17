import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Typeface} from './Logo';

export const Gradient: React.FC<{
	matte?: boolean;
	overrideWidth?: number;
}> = ({matte = false, overrideWidth}) => {
	const {height, width: compWidth, fps} = useVideoConfig();
	const width = overrideWidth ?? compWidth;

	const frame = useCurrentFrame();

	const spr = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 15,
	});

	const heightSpr = spring({
		fps,
		frame: frame - 15,
		config: {
			damping: 200,
		},
		durationInFrames: 10,
	});

	const disappear = spring({
		fps,
		frame: frame - 45,
		config: {
			damping: 200,
		},
	});

	const offset = interpolate(spr, [0, 1], [-width, 0]);
	const barHeight = interpolate(heightSpr, [0, 1], [0.1, 1]);

	const actualHeight = barHeight * height;

	const borderRadius = interpolate(heightSpr, [0, 1], [actualHeight / 2, 0]);

	return (
		<AbsoluteFill
			style={{
				left: interpolate(disappear, [0, 1], [0, width]),
			}}
		>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					left: offset,
				}}
			>
				<div
					style={{
						height: actualHeight,
						width: '100%',
						borderRadius,
						background: matte
							? 'white'
							: 'linear-gradient(to right, #05002d, #3f00ae, #f66bee, #ffe9fa)',
					}}
				/>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					scale: String(heightSpr),
				}}
			>
				<Typeface />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
