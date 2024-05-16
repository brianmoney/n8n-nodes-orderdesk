import { INodeProperties } from 'n8n-workflow';

import { formatPostBody } from './GenericFunctions';

// When the resource `httpVerb` is selected, this `operation` parameter will be shown.
export const orderDeskVerbOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'listOrders',
		displayOptions: {
			show: {
				resource: [
					'orders',
				],
			},
		},
		options: [
			{
				name: 'List',
				value: 'listOrders',
				action: 'List Orders',
				description: 'GET list of Orders',
				routing: {
					request: {
						method: 'GET',
						url: '/api/v2/orders',
					},
				},
			},
			{
				name: 'Get',
				value: 'getOrder',
				action: 'Get Single Order',
				description: 'GET a single order',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v2/orders/{{$parameter["orderId"]}}',
					},
				},
			},
			{
				name: 'Update',
				value: 'updateOrder',
				action: 'UPDATE Single Order',
				description: 'UPDATE a single order',
				routing: {
					request: {
						method: 'PUT',
						url: '=/api/v2/orders/{{$parameter["orderId"]}}',
					},
					send: {
						preSend: [ formatPostBody ],
					}
				},
			},
			{
				name: 'Delete',
				value: 'deleteOrder',
				action: 'DELETE Single Order',
				description: 'DELETE a single order',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v2/orders/{{$parameter["orderId"]}}',
					},
				},
			},
			{
				name: 'Create',
				value: 'createOrder',
				action: 'Create Single Order',
				description: 'CREATE a single order',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v2/orders',
					},
					send: {
						preSend: [ formatPostBody ],
					}
				},
			},
		],
	},

	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getShipments',
		displayOptions: {
			show: {
				resource: [
					'shipments',
				],
			},
		},
		options: [
			{
				name: 'Get Order Shipments',
				value: 'getShipments',
				action: 'Get Order Shipments',
				description: 'GET shipments for a single order',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v2/orders/{{$parameter["orderId"]}}/shipments',
					},
				},
			},
			{
				name: 'Get Order Shipment',
				value: 'getOrderShipment',
				action: 'Get Shipment',
				description: 'GET single shipment for a single order',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v2/orders/{{$parameter["orderId"]}}/shipments/{{$parameter["shipmentId"]}}',
					},
				},
			},
			{
				name: 'Create Shipment',
				value: 'createShipment',
				action: 'Create Shipment',
				description: 'Create a shipment for an order',
				routing: {
						request: {
								method: 'POST',
								url: '=/api/v2/orders/{{$parameter["orderId"]}}/shipments',
						},
						send: {
							preSend: [ formatPostBody ],
						}
				},
			},
			{
				name: 'Delete Shipment',
				value: 'deleteShipment',
				action: 'Delete Shipment',
				description: 'DELETE a shipment for an order',
				routing: {
						request: {
								method: 'DELETE',
								url: '=/api/v2/orders/{{$parameter["orderId"]}}/shipments/{{$parameter["shipmentId"]}}',
						},
				},
			},
			{
				name: 'Update Shipment',
				value: 'updateShipment',
				action: 'Update Shipment',
				description: 'UPDATE a shipment for an order',
				routing: {
						request: {
								method: 'PUT',
								url: '=/api/v2/orders/{{$parameter["orderId"]}}/shipments/{{$parameter["shipmentId"]}}',
						},
						send: {
							preSend: [ formatPostBody ],
						}
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'inventory',
				],
			},
		},
		options: [
			{
				name: 'List',
				value: 'listInventory',
				action: 'Inventory Items',
				description: 'LIST Inventory Items',
				routing: {
					request: {
						method: 'GET',
						url: '/api/v2/inventory-items',
					},
				},
			},
			{
				name: 'Get',
				value: 'getInventory',
				action: 'Inventory Item',
				description: 'GET Inventory Item',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v2/inventory-items/{{$parameter["inventoryId"]}}',
					},
				},
			},
			{
				name: 'Update',
				value: 'updateInventory',
				action: 'Inventory Item',
				description: 'UPDATE Inventory Item',
				routing: {
					request: {
						method: 'PUT',
						url: '=/api/v2/inventory-items/{{$parameter["inventoryId"]}}',
					},
					send: {
						preSend: [ formatPostBody ],
					}
				},
			},
			{
				name: 'Create',
				value: 'createInventory',
				action: 'Inventory Item',
				description: 'CREATE Inventory Item',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v2/inventory-items',
					},
					send: {
						preSend: [ formatPostBody ],
					}
				},
			},
			{
				name: 'Delete',
				value: 'deleteInventory',
				action: 'Inventory Item',
				description: 'DELETE Inventory Item',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/v2/inventory-items/{{$parameter["inventoryId"]}}',
					},
				},
			},
		],
		default: 'getInventory',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'moveOrders',
		displayOptions: {
			show: {
				resource: [
					'moveOrders',
				],
			},
		},
		options: [
			{
				name: 'Move Orders',
				value: 'moveOrders',
				action: 'Move Orders',
				description: 'Move orders from one folder to another',
				routing: {
					request: {
						method: 'POST',
						url: '/api/v2/move-orders',
					},
					send: {
						preSend: [ formatPostBody ],
					}
				},
			},
		],
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'get',
		displayOptions: {
			show: {
				resource: [
					'storeSettings',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Store Settings',
				description: 'GET Store Settings',
				routing: {
					request: {
						method: 'GET',
						url: '/api/v2/store',
					},
				},
			},
		],
	},
];

// Here we define what to show when the `get` operation is selected.
// We do that by adding `operation: ["get"]` to `displayOptions.show`
const sharedOperation: INodeProperties[] = [
	{
		displayName: 'Type of Data',
		name: 'typeofData',
		default: 'queryParameter',
		description: 'Select type of data to send [Query Parameters]',
		displayOptions: {
			show: {
				operation: ['listOrders','listInventory'],
			},
		},
		type: 'options',
		options: [
			{
				name: 'Query',
				value: 'queryParameter',
			},
		],
		required: true,
	},
	{
		displayName: 'Filter criteria',
		name: 'arguments',
		default: {},
		description: "Enter filter criteria as key/value pairs",
		displayOptions: {
			show: {
				operation: ['listOrders','listInventory'],
			},
		},
		options: [
			{
				name: 'keyvalue',
				displayName: 'Key:Value',
				values: [
					{
						displayName: 'Key',
						name: 'key',
						type: 'string',
						default: '',
						required: true,
						description: 'Key of query parameter',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						routing: {
							send: {
								property: '={{$parent.key}}',
								type: 'query',
							},
						},
						required: true,
						description: 'Value of query parameter',
						requiresDataPath: 'single',
					},
				],
			},
		],
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
	},
	{
		displayName: 'Order ID',
		name: 'orderId',
		type: 'string',
		default: '4289986323',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'getOrder',
					'updateOrder',
					'deleteOrder',
					'getShipments',
					'createShipment',
					'deleteShipment',
					'updateShipment',
					'getOrderShipment',
				],
			},
		},
		requiresDataPath: 'single',
	},
	{
		displayName: 'Shipment ID',
		name: 'shipmentId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'getShipment',
					'deleteShipment',
					'updateShipment',
					'getOrderShipment',
				],
			},
		},
		requiresDataPath: 'single',
	},
	{
		displayName: 'Inventory ID',
		name: 'inventoryId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: [
					'getInventory',
					'updateInventory',
					'deleteInventory',
				],
			},
		},
		requiresDataPath: 'single',
	},
];

const createOperation: INodeProperties[] = [

	{
		displayName: 'Post Data',
		name: 'postData',
		type: 'json',
		default: '',
		required: true,
		placeholder: 'Data in JSON format varies by action https://apidocs.orderdesk.com/#',
		description: 'The data for the item being updated/created in JSON format',
		displayOptions: {
				show: {
						operation: [
								'createOrder',
								'updateOrder',
								'createShipment',
								'updateShipment',
								'createInventory',
								'updateInventory',
								'moveOrders',
						],
				},
		},
		routing: {
			send: {
				type: 'body',
				property: '={{parameter["postData"]}}',
			},
		},
	},

];


export const orderDeskVerbFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                orderDesk:shared                            */
	/* -------------------------------------------------------------------------- */
	...sharedOperation,

	/* -------------------------------------------------------------------------- */
	/*                              orderDesk:create                              */
	/* -------------------------------------------------------------------------- */
	...createOperation,
];


