import {
	IDataObject,
	IExecuteFunctions,
	ILoadOptionsFunctions,
	INodeExecutionData,
	INodePropertyOptions,
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
	NodeExecutionWithMetadata,
} from 'n8n-workflow';
import emojis from './data/emojis.json';
import { additionalFields } from './fields/additionalFields';
import { generalFields } from './fields/generalFields';
import { jsonFields } from './fields/jsonFields';
import { mainFields } from './fields/mainFields';
import { constructRequestData, requestNTFYApi } from './genericFunctions';

export class Ntfy implements INodeType {
	description: INodeTypeDescription = {
		name: 'ntfy',
		displayName: 'NTFY',
		icon: 'file:ntfy.svg',
		version: 1,
		description: 'Send notifications with ntfy.sh',
		subtitle: `={{ "Send to topic: " + $parameter["topic"] }}`,
		group: [],
		defaults: {
			name: 'NTFY',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		properties: [...mainFields, ...generalFields, ...additionalFields, ...jsonFields],
		credentials: [
			{
				name: 'ntfyApi',
				required: false,
			},
		],
	};

	methods = {
		loadOptions: {
			async getEmojis(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return emojis.map((emoji) => ({
					name: `${emoji.emoji} - ${emoji.text}`,
					value: emoji.text,
				}));
			},
		},
	};

	async execute(
		this: IExecuteFunctions,
	): Promise<INodeExecutionData[][] | NodeExecutionWithMetadata[][] | null> {
		const items = this.getInputData();
		const returnData: IDataObject[] = [];

		for (let i = 0; i < items.length; i++) {
			try {
				const requestData = await constructRequestData.call(this, i, [
					'topic',
					'title',
					'priority',
					'tags',
					'message',
					'attach',
					'actions',
					'click',
					'icon',
					'markdown',
					'delay',
					'manualJson',
					'fileAttachment',
				]);

				const response = await requestNTFYApi.call(this, i, requestData);
				returnData.push(response);
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ error: error.message });
					continue;
				}
				throw error;
			}
		}

		return [this.helpers.returnJsonArray(returnData)];
	}
}
