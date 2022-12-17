import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import {Gradient} from './Gradient';
import {GradientWithMatte} from './GradientWithMatte';
import {Typeface} from './Logo';

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
			<Composition
				id="GradientWithMatter"
				component={GradientWithMatte}
				durationInFrames={90}
				fps={30}
				width={1920 * 2}
				height={1080}
			/>
			<Composition
				id="Type"
				component={Typeface}
				durationInFrames={90}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
