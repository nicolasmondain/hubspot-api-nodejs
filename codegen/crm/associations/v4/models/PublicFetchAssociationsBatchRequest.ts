/**
 * CrmPublicAssociationsServiceV4
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class PublicFetchAssociationsBatchRequest {
    'id': string;
    'after'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "after",
            "baseName": "after",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicFetchAssociationsBatchRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

