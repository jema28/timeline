import * as React from 'react';
import * as d3 from 'd3';

type TimelineState = {
  data: any[];
};

export class Timeline extends React.Component<{}, TimelineState> {
  state = {
    data: [
      {
        label: 'person a',
        times: [
          { starting_time: 1355752800000, ending_time: 1355759900000 },
          { starting_time: 1355767900000, ending_time: 1355774400000 }
        ]
      },
      {
        label: 'person b',
        times: [{ starting_time: 1355759910000, ending_time: 1355761900000 }]
      },
      {
        label: 'person c',
        times: [{ starting_time: 1355761910000, ending_time: 1355763910000 }]
      }
    ]
  };

  componentDidMount() {
    //  need to fetch data from database and put in state
    // for now just use dummy data
    this.drawTimeLine();
  }
  drawTimeLine = () => {
    var chart = d3.timeline();

    var svg = d3
      .select('#chartContainer')
      .append('svg')
      .attr('width', 500)
      .datum(this.state.data)
      .call(chart);
  };

  render() {
    return <div id="chartContainer">YYYYYYYYYY</div>;
  }
}
