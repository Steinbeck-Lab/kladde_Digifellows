/**
 * Tabs in page content: <tabs> holding a <tab label="…"> per panel. One panel shows at a time and
 * the row of labels switches between them — for alternatives a reader takes one of, not steps they
 * all follow. Both tags are registered in src/theme/MDXComponents.js, so .md pages write them as
 * plain HTML.
 *
 * Every panel is rendered and the closed ones are hidden, never dropped, so the search index still
 * reaches what is behind a label the reader has not pressed.
 */
import React, {useId, useRef, useState} from 'react';

export default function Tabs({children}) {
  const panels = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.props?.label,
  );
  const [active, setActive] = useState(0);
  const labels = useRef([]);
  const id = useId();

  if (panels.length === 0) return null;

  // Left and right walk the row and wrap; Home and End jump to its ends. Selection follows focus,
  // so a panel is never one keystroke behind the label that looks chosen.
  function onKeyDown(event) {
    const last = panels.length - 1;
    const target = {
      ArrowLeft: active === 0 ? last : active - 1,
      ArrowRight: active === last ? 0 : active + 1,
      Home: 0,
      End: last,
    }[event.key];

    if (target === undefined) return;
    event.preventDefault();
    setActive(target);
    labels.current[target]?.focus();
  }

  return (
    <div className="kl-tabs">
      <div className="kl-tabs-row" role="tablist" onKeyDown={onKeyDown}>
        {panels.map((panel, index) => (
          <button
            key={index}
            ref={(node) => {
              labels.current[index] = node;
            }}
            type="button"
            role="tab"
            id={`${id}-label-${index}`}
            className="kl-tabs-label"
            aria-controls={`${id}-panel-${index}`}
            aria-selected={index === active}
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
          >
            {panel.props.label}
          </button>
        ))}
      </div>

      {panels.map((panel, index) => (
        <div
          key={index}
          role="tabpanel"
          id={`${id}-panel-${index}`}
          className="kl-tabs-panel"
          aria-labelledby={`${id}-label-${index}`}
          hidden={index !== active}
        >
          {panel.props.children}
        </div>
      ))}
    </div>
  );
}

/** A single panel. Its label and contents are read by <tabs>; it never renders a wrapper itself. */
export function Tab({children}) {
  return <>{children}</>;
}
