import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class OrderDesk implements ICredentialType {
	name = 'OrderDesk';
	displayName = 'OrderDesk API';
	// Uses the link to this tutorial as an example
	// Replace with your own docs links when building your own nodes
	documentationUrl = 'https://apidocs.orderdesk.com/#authentication';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Store ID',
			name: 'storeID',
			type: 'string',
			default: '',
		}
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'ORDERDESK-API-KEY': '={{$credentials.apiKey}}',
				'ORDERDESK-STORE-ID': '={{$credentials.storeID}}'
			}
		},
	} as IAuthenticateGeneric;
}
