/**
 * Business Units
 * Retrieve Business Unit information.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PublicBusinessUnit } from '../models/PublicBusinessUnit';

/**
* A response object containing a collection of Business Units
*/
export class CollectionResponsePublicBusinessUnitNoPaging {
    /**
    * The collection of Business Units
    */
    'results': Array<PublicBusinessUnit>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<PublicBusinessUnit>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponsePublicBusinessUnitNoPaging.attributeTypeMap;
    }

    public constructor() {
    }
}

