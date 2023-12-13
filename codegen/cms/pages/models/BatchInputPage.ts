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

import { Page } from '../models/Page';

/**
* Wrapper for providing an array of pages as inputs.
*/
export class BatchInputPage {
    /**
    * Pages to input.
    */
    'inputs': Array<Page>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<Page>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchInputPage.attributeTypeMap;
    }

    public constructor() {
    }
}

