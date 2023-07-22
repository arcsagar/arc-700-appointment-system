import React from "react";
import moment from "moment";
import momentTz from "moment-timezone";
import Button from "./Button";
interface Props {
  appData: any[];
  tHead: string[];
  buttonOptionArr?: any[]
}

const AppTable: React.FC<Props> = ({ tHead, appData, buttonOptionArr }) => {
  const tHeadContent = tHead.map((thValue: string) => {
    return (
      <th
        key={thValue}
        scope="col"
        className=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        {thValue}
      </th>
    );
  });

  const tBodyContent = appData.map((trValue: any) => {
    // const isHR = trValue.hr > 120 ? 'high' : trValue.hr > 90 ? 'mid' : 'low' ;

    return (
      <tr key={trValue.id}>
        {tHead.map((thValue: string) => {
          // const eventST = 1577556000000;
          // const eventTZ = "America/New_York";
          // const getEventTimeBasedOnTZ = moment.utc(eventST).tz(eventTZ);
          const getEventTimeBasedOnTZ = momentTz.tz(
            trValue[thValue],
            "America/New_York"
          );
          let tdRow = <td></td>;
          if (thValue === "start" || thValue === "end") {
            tdRow = (
              <td key={thValue} className="px-2 py-3 whitespace-nowrap">
                {getEventTimeBasedOnTZ.format("MM-DD-YYYY HH:MM")}
              </td>
            );
          } else if (thValue == "options") {
            const optionButton = buttonOptionArr?.map((btData:any) => {
              return (<Button btName={btData.label} btFun={() => btData?.btFun(trValue)} />)
            })
            tdRow = (
              <td key={thValue} className="px-2 py-3 whitespace-nowrap">
                  {optionButton}
              </td>
            );
          } else {
            tdRow = (
              <td key={thValue} className="px-2 py-3 whitespace-nowrap">
                {String(trValue[thValue]) !== "undefined"
                  ? String(trValue[thValue])
                  : "-"}
              </td>
            );
          }

          return tdRow;
        })}
      </tr>
    );
  });

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>{tHeadContent}</tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {tBodyContent}
      </tbody>
    </table>
  );
};

export default AppTable;
