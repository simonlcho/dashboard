import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import { ResponsiveBar } from '@nivo/bar'

export default function GanttChartComponent() {

    const [data, setData] = useState(
      [
        {
          "project": "Project 1",
          "start": 109,
          "startColor":"#FFFFFF00",
          "period1": 142,
          "period1Color": "#D51F06",
        },
        {
          "project": "Project 2",
          "start": 186,
          "startColor":"#FFFFFF00",
          "period1": 113,
          "period1Color": "#D51F06",
        },
        {
          "project": "Project 3",
          "start": 66,
          "startColor":"#FFFFFF00",
          "period1": 45,
          "period1Color": "#D51F06",
        },
        {
          "project": "Project 4",
          "start": 196,
          "startColor":"#FFFFFF00",
          "period1": 189,
          "period1Color": "#D51F06",
        },
        {
          "project": "Project 5",
          "start": 40,
          "startColor":"#FFFFFF00",
          "period1": 141,
          "period1Color": "#D51F06",
        },
        {
          "project": "Project 6",
          "start": 49,
          "startColor":"#FFFFFF00",
          "period1": 89,
          "period1Color": "#D51F06",
        }
      ]
    );

    let startDate = new Date(2019,2,1)

    const getDateScale = (d) => {
      let startDate1 = new Date(startDate)      
      startDate1.setDate(startDate1.getDate() + d)      
      return startDate1.toISOString().split('T')[0]
    }

    return (
  
          <Box 
            height={640}
            minWidth={0}
          >
          <ResponsiveBar
                  data={data}
                  keys={['start', 'period1']}
                  indexBy="project"
                  margin={{ top: 40, right: 0, bottom: 0, left: 60 }}
                  padding={0.3}
                  layout="horizontal"
                  //colors={{ scheme: 'nivo' }}
                  colors={(bar) => bar.data[bar.id+"Color"]}
                  borderColor={{ from: 'color', modifiers: [[ 'darker', 1.6 ]]}}
                  xScale={{ type: 'time' }}                
                  axisBottom={null}
                  axisRight={null}
                  axisTop={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      tickValues: [0, 90, 180, 270, 360, 450, 540, 630],
                      format: d => getDateScale(d)
                      //legend: 'date',
                      //legendPosition: 'middle',
                      //legendOffset: -40
                  }}
                  axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      //legend: 'Project',
                      //legendPosition: 'middle',
                      //legendOffset: -40
                  }}
                  enableGridX={true}
                  gridXValues={[0, 90, 180, 270, 360, 450, 540, 630]}
                  enableGridY={true}                
                  enableLabel={false}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                  animate={true}
                  motionStiffness={90}
                  motionDamping={15}
          />
          </Box>
      );
}