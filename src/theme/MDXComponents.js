import MDXComponents from '@theme-original/MDXComponents';
import Gloss from '@site/src/components/Gloss';
import MdxVideo from '@site/src/components/MdxVideo';

export default {
  ...MDXComponents,
  // A native <details>: the theme's Details stops clicks from bubbling, so timestamp links inside
  // a box would no longer seek the recording.
  details: 'details',
  // <gloss note="…">word</gloss>: an explanation that opens over the word.
  gloss: Gloss,
  video: MdxVideo,
};
