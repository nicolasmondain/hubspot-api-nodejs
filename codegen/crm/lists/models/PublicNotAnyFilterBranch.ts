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

import { PublicPropertyAssociationFilterBranchFilterBranchesInner } from '../models/PublicPropertyAssociationFilterBranchFilterBranchesInner';
import { PublicPropertyAssociationFilterBranchFiltersInner } from '../models/PublicPropertyAssociationFilterBranchFiltersInner';

export class PublicNotAnyFilterBranch {
    'filterBranchType': PublicNotAnyFilterBranchFilterBranchTypeEnum;
    'filterBranchOperator': string;
    'filterBranches': Array<PublicPropertyAssociationFilterBranchFilterBranchesInner>;
    'filters': Array<PublicPropertyAssociationFilterBranchFiltersInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "filterBranchType",
            "baseName": "filterBranchType",
            "type": "PublicNotAnyFilterBranchFilterBranchTypeEnum",
            "format": ""
        },
        {
            "name": "filterBranchOperator",
            "baseName": "filterBranchOperator",
            "type": "string",
            "format": ""
        },
        {
            "name": "filterBranches",
            "baseName": "filterBranches",
            "type": "Array<PublicPropertyAssociationFilterBranchFilterBranchesInner>",
            "format": ""
        },
        {
            "name": "filters",
            "baseName": "filters",
            "type": "Array<PublicPropertyAssociationFilterBranchFiltersInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicNotAnyFilterBranch.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PublicNotAnyFilterBranchFilterBranchTypeEnum = "NOT_ANY" ;

