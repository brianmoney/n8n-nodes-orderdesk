import type {
	IExecuteSingleFunctions,
	IHttpRequestOptions,

} from 'n8n-workflow';

/******
 * This is necessary because n8n insists on quoting and wrapping text in {}
 * for any value sent in the request.body
 * gpt-4o unable to resolve
 * used as guide : https://github.com/n8n-io/n8n/blob/master/packages/nodes-base/nodes/PostBin/RequestDescription.ts
 */
export async function formatPostBody(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const postData = this.getNodeParameter('postData');
	//console.log(postData);
	requestOptions.body = postData;
	return requestOptions;
}

