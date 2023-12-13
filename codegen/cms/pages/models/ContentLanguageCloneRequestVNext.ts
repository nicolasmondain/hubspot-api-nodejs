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
* Request body object for creating new language variant content.
*/
export class ContentLanguageCloneRequestVNext {
    /**
    * Target language of new variant.
    */
    'language'?: string;
    /**
    * ID of content to clone.
    */
    'id': string;
    /**
    * Language of primary content to clone.
    */
    'primaryLanguage'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "language",
            "baseName": "language",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "primaryLanguage",
            "baseName": "primaryLanguage",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ContentLanguageCloneRequestVNext.attributeTypeMap;
    }

    public constructor() {
    }
}

