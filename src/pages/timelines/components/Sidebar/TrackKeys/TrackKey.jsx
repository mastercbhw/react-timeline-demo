import React from 'react';
import cls from 'classnames';
import styles from '../../../less/index.less';
import TrackKeys from './index';

const TrackKey = ({ track, toggleOpen, clickTrackButton }) => {
  const { title, tracks, isOpen, hasButton, sideComponent } = track;
  const isExpandable = isOpen !== undefined;

  const buildSideComponent = () => {
    if (sideComponent) {
      return React.cloneElement(sideComponent);
    }
    if (hasButton && clickTrackButton) {
      const handleClick = () => clickTrackButton(track);
      // eslint-disable-next-line jsx-a11y/control-has-associated-label
      return (
        <span
          className={styles['rt-track-key__side-button']}
          onClick={handleClick}
          type="button"
        />
      );
    }

    return null;
  };

  return (
    <li className={styles['rt-track-key']}>
      <div className={styles['rt-track-key__entry']}>
        {isExpandable && (
          <button
            title="Expand track"
            className={cls({
              [styles['rt-track-key__toggle']]: true,
              [styles['rt-track-key__toggle--close']]: isOpen,
              [styles['rt-track-key__toggle--open']]: !isOpen,
            })}
            onClick={() => toggleOpen(track)}
            type="button"
          >
            {isOpen ? 'Close' : 'Open'}
          </button>
        )}
        <span className={styles['rt-track-key__title']}>{title}</span>
        {buildSideComponent()}
      </div>
      {isOpen && tracks && tracks.length > 0 && (
        <TrackKeys tracks={tracks} toggleOpen={toggleOpen} />
      )}
    </li>
  );
};

export default TrackKey;
