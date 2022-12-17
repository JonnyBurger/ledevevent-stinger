import React from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {Gradient} from './Gradient';

export const GradientWithMatte: React.FC = () => {
	const {width} = useVideoConfig();
	return (
		<AbsoluteFill>
			<AbsoluteFill style={{width: width / 2, overflow: 'hidden'}}>
				<Gradient overrideWidth={width / 2} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{width: width / 2, left: width / 2, overflow: 'hidden'}}
			>
				<Gradient matte overrideWidth={width / 2} />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
