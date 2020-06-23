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
          "numberofdays": 142,
          "numberofdaysColor": "#D51F06",
        },
        {
          "project": "Project 2",
          "start": 186,
          "startColor":"#FFFFFF00",
          "numberofdays": 113,
          "numberofdaysColor": "#D51F06",
        },
        {
          "project": "Project 3",
          "start": 66,
          "startColor":"#FFFFFF00",
          "numberofdays": 45,
          "numberofdaysColor": "#D51F06",
        },
        {
          "project": "Project 4",
          "start": 196,
          "startColor":"#FFFFFF00",
          "numberofdays": 189,
          "numberofdaysColor": "#D51F06",
        },
        {
          "project": "Project 5",
          "start": 40,
          "startColor":"#FFFFFF00",
          "numberofdays": 141,
          "numberofdaysColor": "#D51F06",
        },
        {
          "project": "Project 6",
          "start": 49,
          "startColor":"#FFFFFF00",
          "numberofdays": 89,
          "numberofdaysColor": "#D51F06",
        }
      ]
    );

    let startDate = new Date(2019,2,1)

    const addToStartDate = (d) => {
      let startDate1 = new Date(startDate)      
      startDate1.setDate(startDate1.getDate() + d)      
      startDate1 = startDate1.toISOString().split('T')[0] 
      return startDate1
    }      

    const getDateScale = (d) => {
      let startDate1 = addToStartDate(d)
      return startDate1.substring(0, startDate1.length - 0)
    }

    return (
  
          <Box 
            height={640}
            minWidth={0}
          >
          <ResponsiveBar
                  data={data}
                  keys={['start', 'numberofdays']}
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
                  tooltip={({ id, value, color, data }) => (
                    <strong>
                        {"Start Date"}: {addToStartDate(data.start)}<br/>                      
                        {"End Date"}: {addToStartDate(data.start+value)}<br/>                                              
                        {"Number of Days"}: {value}
                    </strong>
                  )}                  
                  animate={true}
                  motionStiffness={90}
                  motionDamping={15}
          />
          </Box>
      );
}