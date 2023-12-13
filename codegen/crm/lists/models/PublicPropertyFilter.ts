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

import { PublicPropertyFilterOperation } from '../models/PublicPropertyFilterOperation';

export class PublicPropertyFilter {
    'filterType': PublicPropertyFilterFilterTypeEnum;
    'property': string;
    'operation': PublicPropertyFilterOperation;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "filterType",
            "baseName": "filterType",
            "type": "PublicPropertyFilterFilterTypeEnum",
            "format": ""
        },
        {
            "name": "property",
            "baseName": "property",
            "type": "string",
            "format": ""
        },
        {
            "name": "operation",
            "baseName": "operation",
            "type": "PublicPropertyFilterOperation",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicPropertyFilter.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PublicPropertyFilterFilterTypeEnum = "PROPERTY" ;

