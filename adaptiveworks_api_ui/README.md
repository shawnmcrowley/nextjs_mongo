
## Getting Started will update by Shawn M. Crowley

## Design Goals

1. Connect via API to Adaptive Works api service and acquire current exported data in realtime
2. Validate the API's provide the same data and valiation as the existing export, just in real time with out exports, staging, scripts, loads. etc.
3. Validate that changes in the data schema within Adaptive Works is available in real time without data manipulation
4. Store REST API Data in a NoSQL DataStore
5. Display Data in a UI that can pull from Adaptive Works/NoSQL Data Store/Compare the Two

## Process Goals

1. Demonstrate a Design and Code First Agile Process
2. Version Control
3. Documentation
4. API First Design
5. Containerization

## Next Steps
1. Testing Power BI ability to query API's Directly or NoSQL Directly for it's reporting needs
2. Evaluate API push directly to a SnowFlake Warehouse for Power BI reporting and remove NoSQL


First, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000/AdaptiveWorks.js](http://localhost:3000/AdaptiveWorks.js) with your browser to see the result.


## Deploy on Vercel

The easiest way to deploy your this app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
