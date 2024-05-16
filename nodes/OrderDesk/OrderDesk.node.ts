import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { orderDeskVerbFields, orderDeskVerbOperations } from './OrderDeskVerbDescription';

export class OrderDesk implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OrderDesk',
		name: 'OrderDesk',
		icon: 'file:orderdesk.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with OrderDesk API',
		defaults: {
			name: 'OrderDesk',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'OrderDesk',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://app.orderdesk.me',
			/**
			 * TESTING
			 */
			//baseURL: 'https://webhook.site/4ba31e26-a47b-4b5f-8ae2-7575f594f215',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		/**
		 * In the properties array we have two mandatory options objects required
		 *
		 * [Resource & Operation]
		 *
		 * https://docs.n8n.io/integrations/creating-nodes/code/create-first-node/#resources-and-operations
		 *
		 * In our example, the operations are separated into their own file (HTTPVerbDescription.ts)
		 * to keep this class easy to read.
		 *
		 */
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Orders',
						value: 'orders',
					},
					{
						name: 'Shipments',
						value: 'shipments',
					},
					{
						name: 'Inventory Items',
						value: 'inventory',
					},
					{
						name: 'Move Orders',
						value: 'moveOrders',
					},
					{
						name: "Store Settings",
						value: 'storeSettings',
					},
				],
				default: 'orders',
			},
			...orderDeskVerbOperations,
			...orderDeskVerbFields,
		],

	};

}
