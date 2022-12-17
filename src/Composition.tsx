import {AbsoluteFill, Img, staticFile} from 'remotion';

export const MyComposition = () => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Img
				style={{
					height: 200,
				}}
				src={staticFile('ledevevent.png')}
			/>
		</AbsoluteFill>
	);
};
