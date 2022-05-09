//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by the Rock.CodeGeneration project
//     Changes to this file will be lost when the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
// <copyright>
// Copyright by the Spark Development Network
//
// Licensed under the Rock Community License (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.rockrms.com/license
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// </copyright>
//

import { Guid } from "@Obsidian/Types";
import { PublicAttributeBag } from "@Obsidian/ViewModels/Utility/publicAttributeBag";

/** History View Model */
export type HistoryBag = {
    /** Gets or sets the Caption. */
    caption?: string | null;

    /** Gets or sets the CategoryId. */
    categoryId: number;

    /** Gets or sets the ChangeType. */
    changeType?: string | null;

    /** Gets or sets the EntityId. */
    entityId: number;

    /** Gets or sets the EntityTypeId. */
    entityTypeId: number;

    /** Gets or sets the IsSensitive. */
    isSensitive?: boolean | null;

    /** Gets or sets the IsSystem. */
    isSystem: boolean;

    /** Gets or sets the NewRawValue. */
    newRawValue?: string | null;

    /** Gets or sets the NewValue. */
    newValue?: string | null;

    /** Gets or sets the OldRawValue. */
    oldRawValue?: string | null;

    /** Gets or sets the OldValue. */
    oldValue?: string | null;

    /** Gets or sets the RelatedData. */
    relatedData?: string | null;

    /** Gets or sets the RelatedEntityId. */
    relatedEntityId?: number | null;

    /** Gets or sets the RelatedEntityTypeId. */
    relatedEntityTypeId?: number | null;

    /** Gets or sets the SourceOfChange. */
    sourceOfChange?: string | null;

    /** Gets or sets the ValueName. */
    valueName?: string | null;

    /** Gets or sets the Verb. */
    verb?: string | null;

    /** Gets or sets the CreatedDateTime. */
    createdDateTime?: string | null;

    /** Gets or sets the ModifiedDateTime. */
    modifiedDateTime?: string | null;

    /** Gets or sets the CreatedByPersonAliasId. */
    createdByPersonAliasId?: number | null;

    /** Gets or sets the ModifiedByPersonAliasId. */
    modifiedByPersonAliasId?: number | null;

    /** Gets or sets the Id. */
    id: number;

    /** Gets or sets the Guid. */
    guid?: Guid | null;

    /** Gets or sets the identifier key of this entity. */
    idKey?: string | null;

    /** Gets or sets the attributes. */
    attributes?: Record<string, PublicAttributeBag> | null;

    /** Gets or sets the attribute values. */
    attributeValues?: Record<string, string> | null;
};