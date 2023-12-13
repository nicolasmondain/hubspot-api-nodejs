/**
 * Pages
 * Use these endpoints for interacting with Landing Pages and Site Pages
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { NextPage } from '../models/NextPage';
import { PreviousPage } from '../models/PreviousPage';

/**
* Model definition for paging.
*/
export class Paging {
    'next'?: NextPage;
    'prev'?: PreviousPage;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "next",
            "baseName": "next",
            "type": "NextPage",
            "format": ""
        },
        {
            "name": "prev",
            "baseName": "prev",
            "type": "PreviousPage",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Paging.attributeTypeMap;
    }

    public constructor() {
    }
}

