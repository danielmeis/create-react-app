import React, { useState, useEffect } from 'react';
import SVGIcons from '../../css/Icons/Icons.svg';
import '../../css/scss/Media/Icons.scss';

function Icons( props ) {
  const [classes, setClasses] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    if (props.classes !== classes) {
      setClasses(props.classes);
    }
  }, [props.classes, classes]);

  useEffect(() => {
    if (props.icon !== icon) {
      setIcon(props.icon);
    }
  }, [props.icon, icon]);

  const getIcon = `${SVGIcons}#${icon}`;

  return(
    <svg className={classes}>
      <use xlinkHref={getIcon} />
    </svg>
  );
}

export default Icons;
