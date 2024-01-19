/**
 * Settings User Provisioning
 * Add, manage, and remove users from your account
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* A user creation request
*/
export class UserProvisionRequest {
    /**
    * The user's primary team
    */
    'primaryTeamId'?: string;
    /**
    * Whether to send a welcome email
    */
    'sendWelcomeEmail'?: boolean;
    /**
    * The user's role
    */
    'roleId'?: string;
    /**
    * The user's additional teams
    */
    'secondaryTeamIds'?: Array<string>;
    /**
    * The created user's email
    */
    'email': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "primaryTeamId",
            "baseName": "primaryTeamId",
            "type": "string",
            "format": ""
        },
        {
            "name": "sendWelcomeEmail",
            "baseName": "sendWelcomeEmail",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "string",
            "format": ""
        },
        {
            "name": "secondaryTeamIds",
            "baseName": "secondaryTeamIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserProvisionRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

