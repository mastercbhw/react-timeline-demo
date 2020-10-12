import React, { useRef, useEffect, useMemo } from 'react';
import styles from './index.less';

function TimeRangeBar() {
  const centerRef = useRef();
  const scrollWapRef = useRef();
  console.log('TimeRangeBar -> scrollWapRef', scrollWapRef);

  // 整个区间选择的长度
  const scrollwarpWidth = useMemo(() => {
    if (scrollWapRef.current) {
      return (
        scrollWapRef.current.clientWidth || scrollWapRef.current.offsetWidth
      );
    }
    return 0;
  }, [scrollWapRef.current]);

  const centerWidth = useMemo(() => {
    if (centerRef.current) {
      return centerRef.current.clientWidth || centerRef.current.offsetWidth;
    }
    return 0;
  }, [centerRef.current]);
  console.log('scrollwarpWidth -> scrollwarpWidth', scrollwarpWidth);

  useEffect(() => {
    if (centerRef.current) {
      centerRef.current.onmousedown = ev => {
        const disX = ev.clientX - centerRef.current.offsetLeft;
        console.log('centerRef.current.onmousedown -> disX', disX);
        centerRef.current.onmousemove = moveEvent => {
          let l = moveEvent.clientX - disX;
          if (l < 0) {
            l = 0;
          }
          if (l > scrollwarpWidth - centerWidth) {
            l = scrollwarpWidth - centerWidth;
          }
          console.log(
            'centerRef.current.onmousemove -> moveEvent.clientX',
            moveEvent.clientX,
          );
          centerRef.current.style.left = `${l}px`;
        };

        // 鼠标抬起和鼠标离开时，移除事件
        centerRef.current.onmouseup = () => {
          centerRef.current.onmousemove = null;
          centerRef.current.onmouseup = null;
        };
        centerRef.current.onmouseleave = () => {
          centerRef.current.onmousemove = null;
          centerRef.current.onmouseup = null;
        };
      };
    }
    return () => {
      centerRef.current.onmousedown = null;
      centerRef.current.onmousemove = null;
      centerRef.current.onmouseup = null;
    };
  }, [centerRef.current]);

  return (
    <div className={styles.scrollWarp} ref={scrollWapRef}>
      <div className={styles.centerBar} ref={centerRef}>
        <span className={styles.leftBar} ref={centerRef} />
        <span className={styles.rightBar} />
      </div>
    </div>
  );
}

export default TimeRangeBar;
