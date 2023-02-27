# Tithely Financial Gateway Custom Blocks

Currently, the Tithely Financial Gateway needs to be used in conjunction with custom blocks that add support for Cover Fees and other Tithely specific features. In the future, these blocks will be optional and the Financial Gateway can be used like any other financial gateway.

For now, these blocks need to be kept in sync with any upstream changes to the blocks as Rock iterates.

## Finance - Tithely Transaction Entry

This block as a new checkbox available called Cover Fees which users can select. It will charge them extra to cover the processing fees of the transaction, and update the Covered Fees attribute for Transaction and ScheduledTransaction entities in Rock with the selection.

## Event - Tithely Registration Entry

This block is configurable based on Registration Instance Attributes.

1. `CoverFees` - This controls whether or not a payment through the event registration will cover the fees or not. This should be a Boolean and the Default Value of Yes will make each payment cover the fees and a value of No will not cover the fees.
1. `UserCanSelectCoverFees` - This will give your users the ability to select if they want to cover the fees during registration or not. This should be a Boolean and the Default Value of Yes will show a checkbox (similar to the Transaction Entry block) to the user to Cover the Fees or not. No will not display the checkbox. Note that in order to use this attribute, you should have the CoverFees attribute's DefaultValue set to Yes.
1. `TriggerConfirmation` - Specifies whether Tithely should send a confirmation email after the event registration. Defaults to Yes.