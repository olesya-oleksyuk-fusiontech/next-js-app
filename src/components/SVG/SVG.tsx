/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/naming-convention */
import type { ReactNode, RefObject } from 'react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface SVGProps {
  rawSvg: string;
  height: number;
  width: number;
  children?: ReactNode;
  trigger?: RefObject<HTMLDivElement> | undefined;
  alt: string;
  isOnlyLayout?: boolean;
  hoverColor?: string;
  defaultBackgroundColor?: string;
  hoverBackgroundColor?: string;
  defaultColor?: string;
  transition?: string;
}

type MouseEventTriggerVariant = 'enter' | 'leave';

/**
 * @param svg - svg for prepare,
 * @syntax const SVG = '<svg></svg>'
 *
 * @param fromColor - initial color of svg (in HEX format)
 * @param toColor - color in which svg will be repainted
 * @returns svg with changed color
 */
const reColorSvg = (svg: string, fromColor: string, toColor: string) => {
  return svg.replaceAll(fromColor.replaceAll('#', '%23'), toColor.replaceAll('#', '%23'));
};

const prepareSvg = (svg: string) => {
  return svg.replaceAll('#', '%23');
};

/**
 *
 * @param svg - svg for changing color
 * @param defaultColor - set default color in svg (or the most dominant)
 * @param hoverColor - change the svg color when mouse on svg
 * @param defaultBackgroundColor - set default background color for trigger ref
 * @param hoverBackgroundColor - change background color for trigger ref
 * @param defaultColor - set default color in svg (or the most dominant)
 * @param isOnlyLayout - only layout without Hover effect
 * @param transition - set the transition for hover (e.g. '1s')
 * @param trigger - set trigger for hover (accept a ref)
 * @param alt - native alt attribute for img
 * @returns the img tag with the SVG in src attribute
 */
const SVG: React.FC<SVGProps> = (props) => {
  const {
    rawSvg,
    height,
    width,
    hoverColor,
    isOnlyLayout,
    transition,
    trigger,
    defaultColor,
    alt,
    defaultBackgroundColor,
    hoverBackgroundColor,
  } = props;

  const svg = prepareSvg(rawSvg);

  const [newSVG, setNewSVG] = useState(svg);

  const MouseSVGTrigger = (type: MouseEventTriggerVariant) => {
    setNewSVG(type === 'enter' ? reColorSvg(svg, `${defaultColor}`, `${hoverColor}`) : reColorSvg(svg, `${hoverColor}`, `${defaultColor}`));
    if (trigger && trigger.current) {
      trigger.current.style.backgroundColor = type === 'enter' ? `${hoverBackgroundColor}` : `${defaultBackgroundColor}`;
      trigger.current.style.transition = `${transition}`;
    }
  };

  useEffect(() => {
    const ref_node = trigger?.current;

    const RunMouseEnter = () => ref_node?.addEventListener('mouseenter', () => MouseSVGTrigger('enter'));
    const RunMouseLeave = () => ref_node?.addEventListener('mouseleave', () => MouseSVGTrigger('leave'));

    if (trigger) {
      RunMouseEnter();
      RunMouseLeave();
    }

    return () => {
      if (trigger) {
        ref_node?.removeEventListener('mouseenter', () => RunMouseEnter());
        ref_node?.removeEventListener('mouseleave', () => RunMouseLeave());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  // don't add any mouse events for improving performance
  if (isOnlyLayout) {
    return <img src={`data:image/svg+xml;utf8,${newSVG}`} alt={alt} />;
  }

  return (
    <Image
      src={`data:image/svg+xml;utf8,${newSVG}`}
      onMouseEnter={() => (typeof trigger !== 'undefined' ? null : MouseSVGTrigger('enter'))}
      onMouseLeave={() => (typeof trigger !== 'undefined' ? null : MouseSVGTrigger('leave'))}
      alt={alt}
      width={width}
      height={height}
    />);
};

export default SVG;
