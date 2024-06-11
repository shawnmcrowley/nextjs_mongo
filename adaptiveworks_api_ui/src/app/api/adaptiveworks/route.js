import Milestone from "@/app/resources/milestone";


export async function GET() {

    const res = await fetch("https://pokeapi.co/api/v2/pokemon/")

    const data = await res.json()
    console.log(data)
    return Response.json(data)

}


export async function POST() {

    const myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.ADAPTIVE_WORKS_API_KEY)
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
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
        "orders": [
          {
            "fieldName": "SYSID",
            "order": "Descending"
          }
        ],
        "paging": {
          "limit": 50
        }
      });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
   const res = await fetch("https://api.clarizentb.com/v2.0/services//data/entityQuery", requestOptions)
   const data = await res.json()
   console.log(data)
   return Response.json(data)


}



/*
export async function POST() {
    const res = await fetch("https://api.clarizentb.com/v2.0/services//data/entityQuery",
        {
            method: "POST",
            header: {
                "Content-Type": "application/json",
                "Authorization": "ApiKey eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNyc2Etc2hhNTEyIiwidHlwIjoiSldUIn0.eyJ1c2VyTmFtZSI6InNoYXduLmNyb3dsZXlAbHljcmEuY29tIiwidXNlcklkIjoiOS42ODcwODE1MzkuMzk5MTE1NTMiLCJhcGlLZXlJZCI6IjY3MC43NTQ0MzUuMzk5MTE1NTMiLCJhcHBsaWNhdGlvbkFjY2VzcyI6IkFwaSIsIm5iZiI6MTcxNzUyNjAxNCwiZXhwIjoxNzQ5MDYyMDE0LCJpc3MiOiJjbGFyaXplbi5jb20ifQ.EohOFb92mPZS4NFY80pbjXhqUJN0T5LnIvfbuPIcqlLjkwPa4ZY9NyAJGYrwyGjoJ4edcmHTyQEyeHwJfbq14BHpFhsKMUK3tFi3cmmiM4JwX8wiROA9SjWaRNYphKeYH7l5oHgHjGVgbCav2sOD5b0Bj2F_YqWON4QF9gpcv_BPvAmG_lBlWgTJ_3SKnwjbvnGSRgJflHG-XIhz4vaaSKOz4XTmdd47B0Ii7T7RPu8rxtjFt6CM0jZzntIo0U9beYQ2npbExFMaw5Uz7VPLbYVWKMvIEoVBaFpiXMTbmPhvu61dqMdkJboDkUV0v7nMBvKk-nRiNPgCXGewuM7dKQ",
            },
            body: {
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
            "paging": { "limit": 50 }
        }
 
     
    

     })
const data = await res.json()
console.log(data)
return Response.json(data)

} */