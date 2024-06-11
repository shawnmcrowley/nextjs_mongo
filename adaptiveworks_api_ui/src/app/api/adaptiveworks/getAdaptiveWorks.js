//import Milestone from "@/app/resources/milestone";

export async function getAdaptviewWorks() {
    const res = await fetch("https://api.clarizentb.com/v2.0/services//data/entityQuery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ApiKey": "`${process.env.ADAPTIVE_WORKS_API_KEY}`"
      },
      body: 
        {
          "typeName": "Milestone",
          "fields": [
              "C_MilestoneDescription",
              "C_MilestoneOwner",
              "C_Notes",
              "C_Plant",
              "C_ResourceAssignment",
              "C_ResourceAssignment",
              "C_ResourceSignOff",
              "CreatedOn",
              "Description",
              "DueDate",
              "EntityOwner",
              "EntityType",
              "Name",
              "ParentProject",
              "PercentCompleted",
              "Project",
              "SYSID",
              "StartDate",
              "State"
              ],
          "orders": [{
              "fieldName": "SYSID", 
              "order": "Descending"
              }],
          "paging": {"limit": 50}
          }

      
    });
    const allEntities = res.json();
  console.log (allEntities);
    return {
        props: {allEntities }
    }
  }

    export default function getAdaptiveWorks ({allEntities}) {
      return(
        <>
        <div>{allEntities.Project}</div>
        </>
      )
    }