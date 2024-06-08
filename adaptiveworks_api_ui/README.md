
## Getting Started: Version 1.0  by Shawn M. Crowley

## Design Goals

1. Connect via API to Adaptive Works api service and acquire current exported data in realtime
2. Validate the API's provide the same data and valiation as the existing export, just in real time without exports, staging, scripts, loads. etc.
3. Validate that changes in the data schema within Adaptive Works is available in real time without data manipulation
4. Store REST API Data in a NoSQL DataStore
5. Display Data in a UI that can pull from Adaptive Works/NoSQL Data Store/Compare the Two
6. Make Next JS UI PWA so it can be downloaded or used easily via mobile

## Process Goals

1. Demonstrate a Design and Code First Agile Process
2. Version Control
3. Documentation
4. API First Design
5. Containerization

## Next Steps
1. Testing Power BI ability to query API's Directly or NoSQL Directly for it's reporting needs
2. Evaluate API push directly to a SnowFlake Warehouse for Power BI reporting and remove NoSQL

## To Do
1. Fix FS Tab Images
2. Add Header and & Footer and make page specific layout


First, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000/adaptiveworks](http://localhost:3000/adaptiveworks) with your browser to see the result.


## Deploy on Vercel

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

