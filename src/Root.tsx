import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import {Gradient} from './Gradient';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Stinger"
				component={MyComposition}
				durationInFrames={90}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Gradient"
				component={Gradient}
				durationInFrames={90}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
