

import { useState } from 'react'
// import { Switch } from '@headlessui/react'
import React from 'react';
import { Chart } from 'react-charts'
 
// type MyDatum = { date: Date, stars: number }
function MyChart() {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      // {
      //   label: 'Series 2',
      //   data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      // }
    ],
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
  // const primaryAxis = React.useMemo<
  //   AxisOptions<typeof data[number]["data"][number]>
  // >(
  //   () => ({
  //     getValue: (datum) => datum.primary as Date,
  //   }),
  //   []
  // );

  // const secondaryAxes = React.useMemo<
  //   AxisOptions<typeof data[number]["data"][number]>[]
  // >(
  //   () => [
  //     {
  //       getValue: (datum) => datum.secondary,
  //       stacked: true,
  //       // OR
  //       // elementType: "area",
  //     },
  //   ],
  //   []
  // );
  return (
    <div
    style={{
      width: '400px',
      height: '300px'
    }}
  >
    {/* <Chart
      options={{
        data,
        axes,
      }}
    /> */}
    <div>hello</div>
    <Chart data={data} axes={axes} />
    </div>
  )
}


// function Counter(){
//   const [count, setcount] = useState(0);
//   return(
//     <div>
//       <p>you clicked {count} times</p>
//       <button onClick={()=> setcount(count +1)}>
//         click
//       </button>
//     </div>
//   )
// }
// var darkMode ="";
// if(checkEnable){
//   darkMode="dark"
// }
// else{
//   darkMode="darka"
// }


export default function Learn() {

    return (
        <html>
        {/* <div>{MyToggle()}</div> */}
        {/* <div>{Counter()}</div> */}
        <div>{MyChart()}</div>
        </html>
    )
}