/**
 * A word that explains itself: <gloss note="…">word</gloss> shows the note in a box above the
 * word on hover or keyboard focus, and hands it to screen readers through aria-describedby.
 */
import React, {useId} from 'react';

export default function Gloss({note, children}) {
  const id = useId();

  return (
    <span className="kl-gloss" tabIndex={0} aria-describedby={id}>
      {children}
      <span className="kl-gloss-note" role="tooltip" id={id}>
        {note}
      </span>
    </span>
  );
}
