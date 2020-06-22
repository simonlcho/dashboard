import React, {useState} from 'react';
import { ResponsiveLine } from '@nivo/line';
import Box from '@material-ui/core/Box';

export default function LineChartComponent() {

    const [data, setData] = useState(
      [

        {
          "id": "Full Utliization Hours",
          "color": "hsl(84, 70%, 50%)",
          //"color": "#D52F06",
          "data": [
            {
              "x": "2019-03",
              "y": 240
            },
            {
              "x": "2019-04",
              "y": 240
            },
            {
              "x": "2019-05",
              "y": 240
            },
            {
              "x": "2019-06",
              "y": 240
            },
            {
              "x": "2019-07",
              "y": 240
            },
            {
              "x": "2019-08",
              "y": 240
            },
            {
              "x": "2019-09",
              "y": 240
            },
            {
              "x": "2019-10",
              "y": 240
            },
            {
              "x": "2019-11",
              "y": 240
            },
            {
              "x": "2019-12",
              "y": 240
            },
            {
              "x": "2020-01",
              "y": 240
            },
            {
              "x": "2020-02",
              "y": 240
            },
            {
              "x": "2020-03",
              "y": 240
            },            
            {
              "x": "2020-04",
              "y": 240
            },
            {
              "x": "2020-05",
              "y": 240
            },            
            {
              "x": "2020-06",
              "y": 240
            },
            {
              "x": "2020-07",
              "y": 240
            },            
            {
              "x": "2020-08",
              "y": 240
            },
            {
              "x": "2020-09",
              "y": 240
            },            
            {
              "x": "2020-10",
              "y": 240
            },
            {
              "x": "2020-11",
              "y": 240
            },   
            {
              "x": "2020-12",
              "y": 240
            },            
            {
              "x": "2021-01",
              "y": 240
            },
            {
              "x": "2021-02",
              "y": 240
            },                       
          ]
        },

        {
          "id": "Comitted Work",
          "color": "hsl(71, 70%, 50%)",
          //"color": "#0683D5",          
          "data": [
            {
              "x": "2019-03",
              "y": 88
            },
            {
              "x": "2019-04",
              "y": 171
            },
            {
              "x": "2019-05",
              "y": 70
            },
            {
              "x": "2019-06",
              "y": 187
            },
            {
              "x": "2019-07",
              "y": 232
            },
            {
              "x": "2019-08",
              "y": 271
            },
            {
              "x": "2019-09",
              "y": 288
            },
            {
              "x": "2019-10",
              "y": 115
            },
            {
              "x": "2019-11",
              "y": 70
            },
            {
              "x": "2019-12",
              "y": 233
            },
            {
              "x": "2020-01",
              "y": 41
            },
            {
              "x": "2020-02",
              "y": 275
            },
            {
              "x": "2020-03",
              "y": 240
            },            
            {
              "x": "2020-04",
              "y": 230
            },
            {
              "x": "2020-05",
              "y": 140
            },            
            {
              "x": "2020-06",
              "y": 240
            },
            {
              "x": "2020-07",
              "y": 40
            },            
            {
              "x": "2020-08",
              "y": 120
            },
            {
              "x": "2020-09",
              "y": 270
            },            
            {
              "x": "2020-10",
              "y": 200
            },
            {
              "x": "2020-11",
              "y": 230
            },   
            {
              "x": "2020-12",
              "y": 250
            },            
            {
              "x": "2021-01",
              "y": 230
            },
            {
              "x": "2021-02",
              "y": 260
            },                                   
          ]
        },        
      ]      
    );

    return (
        <Box 
          height={640}
          minWidth={0}
        >

        <ResponsiveLine
          data={data}
          margin={{ top: 30, right: 140, bottom: 40, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 0, max: 'auto', stacked: false, reverse: false }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
              orient: 'bottom',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: -45,
              //legend: 'Calendar Month',
              //legendOffset: 36,
              //legendPosition: 'middle'
          }}
          axisLeft={{
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Hours',
              legendOffset: -40,
              legendPosition: 'middle'
          }}
          colors={{ scheme: 'nivo' }}
          //colors={d => d.color}          
          //colors={{ scheme: 'accent' }}          
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabel="y"
          pointLabelYOffset={-2}
          useMesh={true}
          legends={[
              {
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: 'left-to-right',
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: 'circle',
                  symbolBorderColor: 'rgba(0, 0, 0, .5)',
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemBackground: 'rgba(0, 0, 0, .03)',
                              itemOpacity: 1
                          }
                      }
                  ]
              }
          ]}
        />

        </Box>
    );
  }
  
