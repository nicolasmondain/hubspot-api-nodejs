/**
 * Lists
 * CRUD operations to manage lists and list memberships
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class PublicCommunicationSubscriptionFilter {
    'filterType': PublicCommunicationSubscriptionFilterFilterTypeEnum;
    'subscriptionIds': Array<number>;
    'channel': string;
    'acceptedOptStates': Array<string>;
    'businessUnitId'?: number;
    'subscriptionType': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "filterType",
            "baseName": "filterType",
            "type": "PublicCommunicationSubscriptionFilterFilterTypeEnum",
            "format": ""
        },
        {
            "name": "subscriptionIds",
            "baseName": "subscriptionIds",
            "type": "Array<number>",
            "format": "int64"
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string",
            "format": ""
        },
        {
            "name": "acceptedOptStates",
            "baseName": "acceptedOptStates",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "businessUnitId",
            "baseName": "businessUnitId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "subscriptionType",
            "baseName": "subscriptionType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicCommunicationSubscriptionFilter.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PublicCommunicationSubscriptionFilterFilterTypeEnum = "COMMUNICATION_SUBSCRIPTION" ;
