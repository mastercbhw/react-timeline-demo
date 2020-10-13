import React, { useState } from 'react';
import { Collapse } from 'antd';
import SwiperCore, { Virtual, Controller, Scrollbar, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './index.less';

import 'swiper/swiper.less';
import 'swiper/components/pagination/pagination.less';
import 'swiper/components/scrollbar/scrollbar.less';

// install Virtual module
SwiperCore.use([Virtual, Controller, Scrollbar, Mousewheel]);

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const slides = Array.from({ length: 200 }).map(
  (el, index) => `Slide ${index + 1}`,
);

function SwiperGantt() {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [activeKey, setActiveKey] = useState(['1']);

  return (
    <div className={styles.gantt}>
      <div className={styles.top}>
        <Swiper
          slidesPerView="auto"
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          {slides.map((slideContent, index) => {
            return (
              <SwiperSlide
                key={slideContent}
                virtualIndex={index}
                style={{ marginRight: 70 }}
              >
                {slideContent}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <Collapse
            style={{ width: '100%' }}
            expandIconPosition="right"
            activeKey={activeKey}
            onChange={e => {
              setActiveKey(e);
            }}
          >
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>
        <div className={styles.right}>
          {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper> */}

          <Swiper
            mousewheel
            // spaceBetween={50}
            // slidesPerView="auto"
            onSlideChange={e => console.log(e, 'slide change')}
            onSwiper={swiper => console.log(swiper)}
            scrollbar={{ draggable: true }}
            virtual
            className={styles.mainSwiper}
          >
            {slides.map((slideContent, index) => {
              return (
                <SwiperSlide
                  key={slideContent}
                  virtualIndex={index}
                  style={{ marginRight: 70 }}
                >
                  <Collapse
                    style={{ width: '100%' }}
                    expandIconPosition="right"
                    activeKey={activeKey}
                    onChange={e => {
                      setActiveKey(e);
                    }}
                  >
                    <Panel header="This is panel header 1" key="1">
                      <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                      <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                      <p>{text}</p>
                    </Panel>
                  </Collapse>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SwiperGantt;
