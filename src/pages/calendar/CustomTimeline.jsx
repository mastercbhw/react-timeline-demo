import React, { Component } from 'react';
import moment from 'moment';
import { Icon, Tooltip, Tabs, Button } from 'antd';
import Timeline, {
  HelpersContext,
  SidebarHeader,
  TimelineHeaders,
  DateHeader,
  TodayMarker,
  CursorMarker,
  CustomHeader,
  CustomMarker,
  RowItems,
  GroupRow,
} from 'react-calendar-timeline';
import { Spring } from 'react-spring/renderprops';
import styles from './CustomTimeline.less';
import tabStyles from './tabs.less';
import generateFakeData from './generate-fake-data';

console.log('HelpersContext', HelpersContext);

function UnavailableLayer({
  getLayerRootProps,
  groupUnavailableSlots,
  getLeftOffsetFromDate,
}) {
  return (
    <div {...getLayerRootProps()}>
      {groupUnavailableSlots.map(slot => {
        const left = getLeftOffsetFromDate(slot.start.valueOf());
        const right = getLeftOffsetFromDate(slot.end.valueOf());
        return (
          <div
            key={slot.id}
            style={{
              position: 'absolute',
              left,
              width: right - left,
              backgroundColor: '#F2E3FF',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        );
      })}
    </div>
  );
}

const { TabPane } = Tabs;

const tomorrow = moment().valueOf();

const minTime = moment()
  .add(-6, 'months')
  .valueOf();
const maxTime = moment()
  .add(6, 'months')
  .valueOf();

const labelFormat = (param, timeType) => {
  const formatObj = {
    year: 'YYYY年',
    month: 'YYYY年MM月',
    week: 'YYYY年MM月DD日 w星期',
    day: 'YYYY年MM月DD日',
    hour: 'YYYY年MM月DD日 HH时',
    minute: 'YYYY年MM月DD日 HH时',
  };
  return moment(param[0]).format(formatObj[timeType]);
};

const secondLabel = (param, timeType) => {
  const formatObj = {
    year: 'YYYY年',
    month: 'MM月',
    week: 'DD日 w星期',
    day: 'DD日',
    hour: 'HH时',
    minute: 'mm',
  };
  return moment(param[0]).format(formatObj[timeType]);
};

const keys = {
  groupIdKey: 'id',
  groupTitleKey: 'title',
  groupRightTitleKey: 'rightTitle',
  itemIdKey: 'id',
  itemTitleKey: 'title',
  itemDivTitleKey: 'title',
  itemGroupKey: 'group',
  itemTimeStartKey: 'start',
  itemTimeEndKey: 'end',
  groupLabelKey: 'title',
};

export default class App extends Component {
  constructor(props) {
    super(props);

    const { groups, items } = generateFakeData();
    const defaultTimeStart = moment()
      .startOf('day')
      .toDate();
    const defaultTimeEnd = moment()
      .startOf('day')
      .add(1, 'day')
      .toDate();

    const visibleTimeStart = moment().valueOf();
    const visibleTimeEnd = moment()
      .add(2, 'day')
      .valueOf();

    // convert every 2 groups out of 3 to nodes, leaving the first as the root
    const newGroups = groups.map(group => {
      const isRoot = (parseInt(group.id, 10) - 1) % 3 === 0;
      const parent = isRoot
        ? null
        : Math.floor((parseInt(group.id, 10) - 1) / 3) * 3 + 1;

      return Object.assign({}, group, {
        root: isRoot,
        parent,
      });
    });

    this.state = {
      groups: newGroups,
      items,
      defaultTimeStart,
      defaultTimeEnd,
      visibleTimeStart,
      visibleTimeEnd,
      openGroups: {},

      customEvents: [
        {
          id: 1,
          start: moment()
            .startOf('week')
            .add(12, 'h'),
          end: moment()
            .startOf('week')
            .endOf('day'),
          title: '门诊',
        },
        {
          id: 2,
          start: moment()
            .startOf('week')
            .add(3, 'd'),
          end: moment()
            .startOf('week')
            .add(5, 'd'),
          title: '住院',
        },
      ],
    };
  }

  toggleGroup = id => {
    const { openGroups } = this.state;
    this.setState({
      openGroups: {
        ...openGroups,
        [id]: !openGroups[id],
      },
    });
  };

  clickItem = (itemId, e, time) => {
    console.log('clickItem -> time', time);
    console.log('clickItem -> e', e);
    console.log('clickItem -> itemId', itemId);
  };

  groupRenderer = ({ group }) => {
    return (
      <div className={styles.leftItem}>
        <span className={styles.iconBox}>
          {!group.parent ? (
            <Icon type="plus" onClick={group.title.props.onClick} />
          ) : null}
        </span>
        <span className="title">{group.titleBak}</span>
        <p className="tip">{group.tip}</p>
      </div>
    );
  };

  itemRenderer = ({
    item,
    timelineContext,
    itemContext,
    getItemProps,
    getResizeProps,
  }) => {
    const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
    // const backgroundColor = itemContext.selected ? (itemContext.dragging ? "red" : item.selectedBgColor) : item.bgColor;
    return (
      <div
        {...getItemProps({
          style: {
            background: '#ccc',
            color: item.color,
            border: `1px solid ${itemContext.resizing ? 'red' : item.color}`,
            borderRadius: 4,
            borderLeftWidth: itemContext.selected ? 3 : 1,
            borderRightWidth: itemContext.selected ? 3 : 1,
          },
        })}
      >
        {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}
        <div
          style={{
            height: itemContext.dimensions.height,
            overflow: 'hidden',
            paddingLeft: 3,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {itemContext.title}
        </div>

        {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
      </div>
    );
  };

  logScroll = () => {
    console.log('render -> this.scrollRef', this.scrollRef);
  };

  handleTimeChange = (visibleTimeStart, visibleTimeEnd, updateScrollCanvas) => {
    console.log('handleTimeChange -> visibleTimeEnd', visibleTimeEnd);
    console.log('handleTimeChange -> visibleTimeStart', visibleTimeStart);
    // if (visibleTimeStart < minTime && visibleTimeEnd > maxTime) {
    //   // this.setState({ visibleTimeStart: minTime, visibleTimeEnd: maxTime })

    //   updateScrollCanvas(minTime, maxTime)
    // } else if (visibleTimeStart < minTime) {
    //   // this.setState({ visibleTimeStart: minTime, visibleTimeEnd: minTime + (visibleTimeEnd - visibleTimeStart) })

    //   updateScrollCanvas(minTime, minTime + (visibleTimeEnd - visibleTimeStart))
    // } else if (visibleTimeEnd > maxTime) {
    //   // this.setState({ visibleTimeStart: maxTime - (visibleTimeEnd - visibleTimeStart), visibleTimeEnd: maxTime })

    //   updateScrollCanvas(maxTime - (visibleTimeEnd - visibleTimeStart), maxTime)
    // } else {
    //   updateScrollCanvas(visibleTimeStart, visibleTimeEnd)
    // }
    // this.setState({ visibleTimeStart, visibleTimeEnd })
    this.setState({
      visibleTimeStart,
      visibleTimeEnd,
      scrolling: true,
    });
  };

  moveResizeValidator = (action, item, time) => {
    if (time < new Date().getTime()) {
      const newTime =
        Math.ceil(new Date().getTime() / (15 * 60 * 1000)) * (15 * 60 * 1000);
      return newTime;
    }

    return time;
  };

  tabsClick = event => {
    console.log('event', event);

    this.setState({
      visibleTimeStart: event.start.valueOf(),
      visibleTimeEnd: event.end.valueOf(),
    });
  };

  render() {
    const {
      groups,
      items,
      openGroups,
      visibleTimeStart,
      visibleTimeEnd,
      defaultTimeStart,
      defaultTimeEnd,
    } = this.state;

    // hide (filter) the groups that are closed, for the rest, patch their "title" and add some callbacks or padding
    const newGroups = groups
      .filter(g => g.root || openGroups[g.parent])
      .map(group => {
        return Object.assign({}, group, {
          title: group.root ? (
            <div
              onClick={() => this.toggleGroup(parseInt(group.id, 10))}
              style={{ cursor: 'pointer' }}
            >
              {openGroups[parseInt(group.id, 10)] ? '[-]' : '[+]'} {group.title}
            </div>
          ) : (
            <div style={{ paddingLeft: 20 }}>{group.title}</div>
          ),
        });
      });

    return (
      <div style={{ paddingTop: 100 }}>
        <Button onClick={this.logScroll}>点击</Button>
        <div className={tabStyles.cardContainer}>
          <Tabs type="card">
            <TabPane tab="Tab Title 1" key="1" style={{ width: 10 }} />
            <TabPane tab="Tab Title 2" key="2" />
            <TabPane tab="Tab Title 3" key="3" />
            <TabPane tab="Tab Title 4" key="4" />
            <TabPane tab="Tab Title 5" key="5" />
            <TabPane tab="Tab Title 6" key="6" />
            <TabPane tab="Tab Title 7" key="7" />
            <TabPane tab="Tab Title 8" key="8" />
            <TabPane tab="Tab Title 9" key="9" />
            <TabPane tab="Tab Title 10" key="10" />
            <TabPane tab="Tab Title 11" key="11" />
            <TabPane tab="Tab Title 12" key="12" />
            <TabPane tab="Tab Title 13" key="13" />
            <TabPane tab="Tab Title 14" key="14" />
            <TabPane tab="Tab Title 15" key="15" />
            <TabPane tab="Tab Title 16" key="16" />
            <TabPane tab="Tab Title 17" key="17" />
            <TabPane tab="Tab Title 18" key="18" />
            <TabPane tab="Tab Title 19" key="19" />
            <TabPane tab="Tab Title 20" key="20" />
            <TabPane tab="Tab Title 21" key="21" />
            <TabPane tab="Tab Title 22" key="22" />
          </Tabs>
        </div>
        <Spring
          config={{ duration: 250 }}
          to={{ visibleTimeStart, visibleTimeEnd }}
          immediate={this.state.scrolling}
        >
          {props => (
            <Timeline
              groups={newGroups}
              items={items}
              fixedHeader="fixed"
              canMove={false}
              canResize={false}
              traditionalZoom
              itemsSorted
              itemTouchSendsClick={false}
              keys={keys}
              onItemClick={this.clickItem}
              sidebarWidth={150}
              groupRenderer={this.groupRenderer}
              stackItems
              itemHeightRatio={0.75}
              showCursorLine
              // defaultTimeStart={defaultTimeStart}
              // defaultTimeEnd={defaultTimeEnd}
              itemRenderer={this.itemRenderer}
              // scrollRef={ref => { this.scrollRef = ref }}
              // verticalLineClassNamesForTime={(timeStart, timeEnd) => {
              //   // remove next line then, everyThing is Ok
              //   if (moment().add(-1, 'day').add(5, 'hour').valueOf() < timeStart && timeStart < moment().valueOf()) return ['verticalLine', 'verticalLine--past'];
              //   return []
              // }
              // }
              visibleTimeStart={props.visibleTimeStart}
              visibleTimeEnd={props.visibleTimeEnd}
              onTimeChange={this.handleTimeChange}
              // moveResizeValidator={this.moveResizeValidator}
              rowRenderer={({ getLayerRootProps }) => {
                const { getLeftOffsetFromDate } = React.useContext(
                  HelpersContext,
                );
                const groupUnavailableSlots = this.state.customEvents;

                return (
                  <GroupRow>
                    <RowItems />
                    <UnavailableLayer
                      getLayerRootProps={getLayerRootProps}
                      getLeftOffsetFromDate={getLeftOffsetFromDate}
                      groupUnavailableSlots={groupUnavailableSlots}
                    />
                  </GroupRow>
                );
              }}
              onItemContextMenu={item => {
                console.log(`Context Menu: ${item}`);
              }}
            >
              <TimelineHeaders className={styles.sticky}>
                <SidebarHeader>
                  {({ getRootProps }) => {
                    return (
                      <div
                        {...getRootProps()}
                        style={{
                          ...getRootProps().style,
                          borderRight: '1px solid #f3f3f3',
                        }}
                      >
                        siderleft title
                      </div>
                    );
                  }}
                </SidebarHeader>
                <CustomHeader
                  headerData={{ customEvents: this.state.customEvents }}
                  height={30}
                >
                  {({ getRootProps, data: { customEvents } }) => {
                    return (
                      <div {...getRootProps()}>
                        {customEvents.map(event => {
                          const { getLeftOffsetFromDate } = React.useContext(
                            HelpersContext,
                          );
                          const left = getLeftOffsetFromDate(
                            event.start.valueOf(),
                          );
                          const right = getLeftOffsetFromDate(
                            event.end.valueOf(),
                          );
                          const width = right - left;
                          return (
                            <div
                              key={event.id}
                              style={{
                                position: 'absolute',
                                left,
                                width,
                                height: 30,
                                lineHeight: '30px',
                                backgroundColor: '#F2E3FF',
                                overflow: 'hidden',
                                textAlign: 'center',
                                cursor: 'pointer',
                              }}
                              onClick={() => {
                                this.tabsClick(event);
                              }}
                            >
                              {event.title}
                            </div>
                          );
                        })}
                      </div>
                    );
                  }}
                </CustomHeader>
                <CustomHeader
                  headerData={{ customEvents: this.state.customEvents }}
                  height={30}
                  style={{ border: '1px solid #178aea' }}
                >
                  {({ getRootProps, data: { customEvents } }) => {
                    return (
                      <div
                        style={{
                          ...getRootProps().style,
                          borderTop: '1px solid #178aea',
                        }}
                      >
                        sadasda
                      </div>
                    );
                  }}
                </CustomHeader>
                <DateHeader unit="primaryHeader" labelFormat={labelFormat} />
                <DateHeader labelFormat={secondLabel} />
              </TimelineHeaders>
            </Timeline>
          )}
        </Spring>
      </div>
    );
  }
}
