import React, { Component } from 'react';
import moment from 'moment';
import { Icon, Tooltip } from 'antd';
import Timeline, {
  SidebarHeader,
  TimelineHeaders,
  DateHeader,
  TodayMarker,
  CursorMarker,
  CustomHeader,
} from 'react-calendar-timeline';
import styles from './CustomTimeline.less';
import generateFakeData from './generate-fake-data';

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
      openGroups: {},
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

  clickItem = (itemId, e, time) => {};

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

  render() {
    const {
      groups,
      items,
      defaultTimeStart,
      defaultTimeEnd,
      openGroups,
    } = this.state;
    console.log('render -> defaultTimeStart', defaultTimeStart);
    console.log('render -> defaultTimeEnd', defaultTimeEnd);

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
      <Timeline
        groups={newGroups}
        items={items}
        keys={keys}
        sidebarWidth={150}
        canResize="right"
        itemsSorted
        canMove={false}
        groupRenderer={this.groupRenderer}
        // itemTouchSendsClick={false}
        stackItems
        onItemClick={this.clickItem}
        itemHeightRatio={0.75}
        showCursorLine
        defaultTimeStart={defaultTimeStart}
        defaultTimeEnd={defaultTimeEnd}
        // visibleTimeStart={defaultTimeStart}
        // visibleTimeEnd={defaultTimeEnd}
      >
        <TimelineHeaders>
          <TodayMarker />
          {/* <CursorMarker /> */}
          <CursorMarker>
            {({ styles: style, date }) => {
              return (
                <div style={style}>
                  <div>{moment(date).format('YYYY/MM/DD HH:mm:ss')}</div>
                </div>
              );
            }}
          </CursorMarker>
          <SidebarHeader>
            {({ getRootProps }) => {
              return (
                <div
                  {...getRootProps()}
                  style={{ ...getRootProps().style, background: '#fff' }}
                />
              );
            }}
          </SidebarHeader>
          <DateHeader unit="primaryHeader" labelFormat={labelFormat} />
          <DateHeader labelFormat={secondLabel} />
          {/* <DateHeader
            unit="day"
            labelFormat=""
            style={{ height: 50 }}
            data={{ someData: 'example' }}
            interval
            intervalRenderer={({ getIntervalProps, intervalContext, data }) => {

              return <div {...getIntervalProps()} style={{ ...getIntervalProps().style, background: '#fff', }}>
                {intervalContext.intervalText}
              住院
            </div>
            }}
          /> */}
          {/* <CustomHeader height={50} headerData={{ someData: 'data' }}>
            {({
              headerContext,
              getRootProps,
              getIntervalProps,
              showPeriod,
              data,
            }) => {
              // console.log('data', data)
              // console.log('headerContext', headerContext)
              // console.log('getRootProps()', getRootProps())
              const { intervals } = headerContext
              return (
                <div {...getRootProps()}>
                  {intervals.map(interval => {
                    const intervalStyle = {
                      lineHeight: '30px',
                      textAlign: 'center',
                      borderLeft: '1px solid black',
                      cursor: 'pointer',
                      backgroundColor: 'Turquoise',
                      color: 'white'
                    }
                    return (
                      <div
                        onClick={() => {
                          showPeriod(interval.startTime, interval.endTime)
                        }}
                        {...getIntervalProps({
                          interval,
                          style: intervalStyle
                        })}
                      >
                        <div className="sticky">
                          {interval.startTime.format('YYYY')}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            }}
          </CustomHeader> */}
        </TimelineHeaders>
      </Timeline>
    );
  }
}
