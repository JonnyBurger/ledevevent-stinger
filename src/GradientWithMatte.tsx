import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import {Gradient} from './Gradient';

export const GradientWithMatte: React.FC = () => {
	const {width} = useVideoConfig();
	const frame = useCurrentFrame();
	return (
		<AbsoluteFill>
			<AbsoluteFill style={{width: width / 2, overflow: 'hidden'}}>
				<Gradient overrideWidth={width / 2} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{width: width / 2, left: width / 2, overflow: 'hidden'}}
			>
				<AbsoluteFill
					style={{
						background: 'black',
					}}
				/>
				<Gradient matte overrideWidth={width / 2} />
				{frame > 30 ? (
					<AbsoluteFill style={{backgroundColor: 'white'}} />
				) : null}
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
