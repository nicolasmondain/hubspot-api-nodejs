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


export class PublicAllHistoryRefineBy {
    'type': PublicAllHistoryRefineByTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "PublicAllHistoryRefineByTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicAllHistoryRefineBy.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PublicAllHistoryRefineByTypeEnum = "ALL_HISTORY" ;

