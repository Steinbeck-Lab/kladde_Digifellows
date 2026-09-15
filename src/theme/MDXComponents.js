import MDXComponents from '@theme-original/MDXComponents';
import MdxVideo from '@site/src/components/MdxVideo';
import StepHeading from '@site/src/components/StepHeading';

export default {
  ...MDXComponents,
  // A native <details>: the theme's Details stops clicks from bubbling, so timestamp links inside
  // a box would no longer seek the recording.
  details: 'details',
  h2: StepHeading,
  video: MdxVideo,
};
