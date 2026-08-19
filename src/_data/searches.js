import 'dotenv/config';
import PocketBase from 'pocketbase';
const searches = async () => {
	const pb = new PocketBase(process.env.API_BASEURL);

	const records = await pb.collection('searches').getFullList({
		sort: 'job_number',
	});

	return records;
};
export default searches;
