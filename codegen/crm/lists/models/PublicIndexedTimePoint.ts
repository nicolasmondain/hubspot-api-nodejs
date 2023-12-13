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

import { PublicIndexOffset } from '../models/PublicIndexOffset';
import { PublicIndexedTimePointIndexReference } from '../models/PublicIndexedTimePointIndexReference';

export class PublicIndexedTimePoint {
    'timeType': PublicIndexedTimePointTimeTypeEnum;
    'timezoneSource'?: string;
    'zoneId': string;
    'indexReference': PublicIndexedTimePointIndexReference;
    'offset'?: PublicIndexOffset;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "timeType",
            "baseName": "timeType",
            "type": "PublicIndexedTimePointTimeTypeEnum",
            "format": ""
        },
        {
            "name": "timezoneSource",
            "baseName": "timezoneSource",
            "type": "string",
            "format": ""
        },
        {
            "name": "zoneId",
            "baseName": "zoneId",
            "type": "string",
            "format": ""
        },
        {
            "name": "indexReference",
            "baseName": "indexReference",
            "type": "PublicIndexedTimePointIndexReference",
            "format": ""
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "PublicIndexOffset",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicIndexedTimePoint.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PublicIndexedTimePointTimeTypeEnum = "INDEXED" ;

