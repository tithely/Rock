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

using System;
using System.Linq;

using Rock.ViewModels.Utility;

namespace Rock.ViewModels.Entities
{
    /// <summary>
    /// GroupMember View Model
    /// </summary>
    public partial class GroupMemberBag : EntityBagBase
    {
        /// <summary>
        /// Gets or sets the ArchivedByPersonAliasId.
        /// </summary>
        /// <value>
        /// The ArchivedByPersonAliasId.
        /// </value>
        public int? ArchivedByPersonAliasId { get; set; }

        /// <summary>
        /// Gets or sets the ArchivedDateTime.
        /// </summary>
        /// <value>
        /// The ArchivedDateTime.
        /// </value>
        public DateTime? ArchivedDateTime { get; set; }

        /// <summary>
        /// Gets or sets the CommunicationPreference.
        /// </summary>
        /// <value>
        /// The CommunicationPreference.
        /// </value>
        public int CommunicationPreference { get; set; }

        /// <summary>
        /// Gets or sets the DateTimeAdded.
        /// </summary>
        /// <value>
        /// The DateTimeAdded.
        /// </value>
        public DateTime? DateTimeAdded { get; set; }

        /// <summary>
        /// Gets or sets the GroupId.
        /// </summary>
        /// <value>
        /// The GroupId.
        /// </value>
        public int GroupId { get; set; }

        /// <summary>
        /// Gets or sets the GroupMemberStatus.
        /// </summary>
        /// <value>
        /// The GroupMemberStatus.
        /// </value>
        public int GroupMemberStatus { get; set; }

        /// <summary>
        /// Gets or sets the GroupOrder.
        /// </summary>
        /// <value>
        /// The GroupOrder.
        /// </value>
        public int? GroupOrder { get; set; }

        /// <summary>
        /// Gets or sets the GroupRoleId.
        /// </summary>
        /// <value>
        /// The GroupRoleId.
        /// </value>
        public int GroupRoleId { get; set; }

        /// <summary>
        /// Gets or sets the GuestCount.
        /// </summary>
        /// <value>
        /// The GuestCount.
        /// </value>
        public int? GuestCount { get; set; }

        /// <summary>
        /// Gets or sets the InactiveDateTime.
        /// </summary>
        /// <value>
        /// The InactiveDateTime.
        /// </value>
        public DateTime? InactiveDateTime { get; set; }

        /// <summary>
        /// Gets or sets the IsArchived.
        /// </summary>
        /// <value>
        /// The IsArchived.
        /// </value>
        public bool IsArchived { get; set; }

        /// <summary>
        /// Gets or sets the IsNotified.
        /// </summary>
        /// <value>
        /// The IsNotified.
        /// </value>
        public bool IsNotified { get; set; }

        /// <summary>
        /// Gets or sets the IsSystem.
        /// </summary>
        /// <value>
        /// The IsSystem.
        /// </value>
        public bool IsSystem { get; set; }

        /// <summary>
        /// Gets or sets the Note.
        /// </summary>
        /// <value>
        /// The Note.
        /// </value>
        public string Note { get; set; }

        /// <summary>
        /// Gets or sets the PersonId.
        /// </summary>
        /// <value>
        /// The PersonId.
        /// </value>
        public int PersonId { get; set; }

        /// <summary>
        /// Gets or sets the ScheduleReminderEmailOffsetDays.
        /// </summary>
        /// <value>
        /// The ScheduleReminderEmailOffsetDays.
        /// </value>
        public int? ScheduleReminderEmailOffsetDays { get; set; }

        /// <summary>
        /// Gets or sets the ScheduleStartDate.
        /// </summary>
        /// <value>
        /// The ScheduleStartDate.
        /// </value>
        public DateTime? ScheduleStartDate { get; set; }

        /// <summary>
        /// Gets or sets the ScheduleTemplateId.
        /// </summary>
        /// <value>
        /// The ScheduleTemplateId.
        /// </value>
        public int? ScheduleTemplateId { get; set; }

        /// <summary>
        /// Gets or sets the CreatedDateTime.
        /// </summary>
        /// <value>
        /// The CreatedDateTime.
        /// </value>
        public DateTime? CreatedDateTime { get; set; }

        /// <summary>
        /// Gets or sets the ModifiedDateTime.
        /// </summary>
        /// <value>
        /// The ModifiedDateTime.
        /// </value>
        public DateTime? ModifiedDateTime { get; set; }

        /// <summary>
        /// Gets or sets the CreatedByPersonAliasId.
        /// </summary>
        /// <value>
        /// The CreatedByPersonAliasId.
        /// </value>
        public int? CreatedByPersonAliasId { get; set; }

        /// <summary>
        /// Gets or sets the ModifiedByPersonAliasId.
        /// </summary>
        /// <value>
        /// The ModifiedByPersonAliasId.
        /// </value>
        public int? ModifiedByPersonAliasId { get; set; }

    }
}