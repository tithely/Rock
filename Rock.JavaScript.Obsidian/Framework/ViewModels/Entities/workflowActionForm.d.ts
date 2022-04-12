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

import { IEntity } from "../entity";
import { Guid } from "@Obsidian/Types";

export type WorkflowActionForm = IEntity & {
    actionAttributeGuid?: Guid | null;
    actions?: string | null;
    allowNotes?: boolean | null;
    allowPersonEntry?: boolean;
    footer?: string | null;
    header?: string | null;
    includeActionsInNotification?: boolean;
    notificationSystemCommunicationId?: number | null;
    personEntryAddressEntryOption?: number;
    personEntryAutofillCurrentPerson?: boolean;
    personEntryBirthdateEntryOption?: number;
    personEntryCampusIsVisible?: boolean;
    personEntryCampusStatusValueId?: number | null;
    personEntryCampusTypeValueId?: number | null;
    personEntryConnectionStatusValueId?: number | null;
    personEntryDescription?: string | null;
    personEntryEmailEntryOption?: number;
    personEntryFamilyAttributeGuid?: Guid | null;
    personEntryGenderEntryOption?: number;
    personEntryGroupLocationTypeValueId?: number | null;
    personEntryHideIfCurrentPersonKnown?: boolean;
    personEntryMaritalStatusEntryOption?: number;
    personEntryMobilePhoneEntryOption?: number;
    personEntryPersonAttributeGuid?: Guid | null;
    personEntryPostHtml?: string | null;
    personEntryPreHtml?: string | null;
    personEntryRecordStatusValueId?: number | null;
    personEntrySectionTypeValueId?: number | null;
    personEntryShowHeadingSeparator?: boolean;
    personEntrySpouseAttributeGuid?: Guid | null;
    personEntrySpouseEntryOption?: number;
    personEntrySpouseLabel?: string | null;
    personEntryTitle?: string | null;
    createdDateTime?: string | null;
    modifiedDateTime?: string | null;
    createdByPersonAliasId?: number | null;
    modifiedByPersonAliasId?: number | null;
};