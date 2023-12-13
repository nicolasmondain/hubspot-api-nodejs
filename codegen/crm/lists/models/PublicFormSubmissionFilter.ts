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

import { PublicEventAnalyticsFilterCoalescingRefineBy } from '../models/PublicEventAnalyticsFilterCoalescingRefineBy';

export class PublicFormSubmissionFilter {
    'filterType': PublicFormSubmissionFilterFilterTypeEnum;
    'formId'?: string;
    'pruningRefineBy'?: PublicEventAnalyticsFilterCoalescingRefineBy;
    'coalescingRefineBy'?: PublicEventAnalyticsFilterCoalescingRefineBy;
    'operator': PublicFormSubmissionFilterOperatorEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "filterType",
            "baseName": "filterType",
            "type": "PublicFormSubmissionFilterFilterTypeEnum",
            "format": ""
        },
        {
            "name": "formId",
            "baseName": "formId",
            "type": "string",
            "format": ""
        },
        {
            "name": "pruningRefineBy",
            "baseName": "pruningRefineBy",
            "type": "PublicEventAnalyticsFilterCoalescingRefineBy",
            "format": ""
        },
        {
            "name": "coalescingRefineBy",
            "baseName": "coalescingRefineBy",
            "type": "PublicEventAnalyticsFilterCoalescingRefineBy",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "PublicFormSubmissionFilterOperatorEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicFormSubmissionFilter.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PublicFormSubmissionFilterFilterTypeEnum = "FORM_SUBMISSION" ;
export type PublicFormSubmissionFilterOperatorEnum = "FILLED_OUT" | "NOT_FILLED_OUT" ;

