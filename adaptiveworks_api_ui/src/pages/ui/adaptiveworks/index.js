import Card from "@/app/components/cards";
import Layout from "@/app/adaptiveworks/layout";

export default function Home({ allEntities }) {
	return (
		<>
		<ul>
			{allEntities.map((data) => (
				<Card SYSID={data.SYSID} Name={data.Name} PercentCompleted={data.PercentCompleted}/>
			))}
		</ul>
		</>
	);
}

export async function getStaticProps() {

	
	const response = await fetch("http://localhost:3000/api/adaptiveworks/" ,
	{
		"method":"POST",
		"content-type": "application/json"
	}
)

	// Parse the JSON
	const data = await response.json();
	

	return {
		props: {allEntities: data.entities},
	};
}
 


    