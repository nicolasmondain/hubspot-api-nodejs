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


/**
* Request body object for rerunning A/B tests.
*/
export class AbTestRerunRequestVNext {
    /**
    * ID of the object to reactivate as a test variation.
    */
    'variationId': string;
    /**
    * ID of the test to rerun.
    */
    'abTestId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "variationId",
            "baseName": "variationId",
            "type": "string",
            "format": ""
        },
        {
            "name": "abTestId",
            "baseName": "abTestId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AbTestRerunRequestVNext.attributeTypeMap;
    }

    public constructor() {
    }
}

