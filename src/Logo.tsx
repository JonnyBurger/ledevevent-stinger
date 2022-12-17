import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';

export const Typeface: React.FC = () => {
	const frame = Math.max(0, useCurrentFrame() - 20);
	const letters = 'LE DEV\nEVENT'.substring(0, frame).split('\n');

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				fontSize: 120,
				color: 'white',
				fontFamily: 'Arial',
				fontWeight: 'bolder',
				lineHeight: 0.85,
			}}
		>
			<div>
				{letters.map((word) => {
					const letters = word.split('');
					return (
						<div>
							{letters.map((letter) => {
								return <span>{letter}</span>;
							})}
						</div>
					);
				})}
			</div>
		</AbsoluteFill>
	);
};
