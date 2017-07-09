const Elasticsearch = require('elasticsearch');
const dbClient = new Elasticsearch.Client({ host: `http://${process.env.ES_USERNAME}:${process.env.ES_PASSWORD}@qa-es.regsvcs.theknot.com` });

const id = '945d448a-9920-4381-aa9d-212325e15952';

// sync
function getCoupleById(id) {
	dbClient.get({
	  index: 'couple',
	  type: 'couple',
	  id: id
	}, function (error, response) {
	  console.log(response);
	});
}

// async
async function asyncGetCoupleById(id) {
	const res = await dbClient.get({
	  index: 'couple',
	  type: 'couple',
	  id: id
	});
	console.log(res);
}

async function getCoupleByQuery(id) {
	const res = await dbClient.search({
		index: 'couple',
		type: 'couple',
		q: `coupleUUID:${id}`
	});
	console.log(res);
}

async function getCoupleBySearch() {
	const res = await dbClient.search({
		index: 'couple_20170627',
		type: 'couple',
		_source: true,
		body: {
			query: {
				bool: {
					must: [
						{ match: { eventTypeId: 1 } }
					],
					should: [
						{ match: { memberUuid: '59049eaf-f067-4162-9040-abea66d65fd6' } },
						{ match: { memberUuid: '59049EAF-F067-4162-9040-ABEA66D65FD6' } }
					]
				}
			}
		}
	});
	console.log(res);
	console.log('----');
	console.log(res.hits.hits[0]);
}

// asyncGetCoupleById(id);
// getCoupleById(id);
// getCoupleByQuery(id);
getCoupleBySearch();