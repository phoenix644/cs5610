const {MongoClient} = require('mongodb');

async function main() {
	
    /**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */
const uri = "mongodb+srv://admin:Xx123456@cs5610.cus0jqi.mongodb.net/?retryWrites=true&w=majority";

 const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true

});

// const client = new MongoClient(uri);

try {
    await client.connect();

    await listDatabases(client);
} catch (e) {
    console.error(e);
    
}

finally {
    await client.close();
}

}

main().catch(console.error);


async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};