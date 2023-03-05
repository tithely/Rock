# Tithely Financial Gateway Custom Blocks

Currently, the Tithely Financial Gateway needs to be used in conjunction with custom blocks that add support for Cover Fees and other Tithely specific features. In the future, these blocks will be optional and the Financial Gateway can be used like any other financial gateway.

For now, these blocks need to be kept in sync with any upstream changes to the blocks as Rock iterates.

## com.tithely.TithelyFinancialGateway Requirement

In order for these custom blocks to function, you'll need to pull in the `.dll` file from the [`rfgp-library`](https://github.com/tithely/rfgp-library) repo. To do this locally, right click on the RockWeb project in the Solution Explorer. Select Add and then Reference. From here, click Browse at the bottom of the window and select the `com.tithely.TithelyFinancialGateway.dll` from the `rfgp-library` project on your system. For example, my path is `C:\Users\Max\Code\rfgp-library\com.tithely.TithelyFinancialGateway\bin\Debug\net4.7.2\com.tithely.TithelyFinancialGateway.dll`. Then click Okay and rebuild the solution. RockWeb should launch without issue.

## Tithely Financial Gateway Setup

Before using the custom blocks, you'll need to configure a Tithely Financial Gateway for use by the blocks.

1. Configure a new Financial Gateway that uses this plugin:
    1. Go to Admin Tools (toolbox icon) > System Settings > Financial Gateways > ⨁ icon (ALT+N)
        1. Name: `Tithely`
        1. Gateway Type: `Tithe.ly Financial Gateway`
        1. API Key: <your giving API key. Note there are different keys for QA and Production>
        1. Organization Id: <your organization UUID> (e.g. `fbb70809-c2fd-4b4d-8911-13e139f38c1f`)
        1. Location Id: <the location UUID to associate gifts with> (e.g. `007cb8bb-a19b-49d2-b3e5-373e45a844af`)
        1. Fund Id: <the fund UUId to associate gifts with> (e.g. `1e6bf609-90c9-433d-b0e1-86bc59c5ddd9`)
        1. Leave all other defaults as displayed.
        1. Click `Save` button

## Finance - Tithely Transaction Entry

This block as a new checkbox available called Cover Fees which users can select. It will charge them extra to cover the processing fees of the transaction, and update the Covered Fees attribute for Transaction and ScheduledTransaction entities in Rock with the selection.

## Event - Tithely Registration Entry

This block is configurable based on Registration Instance Attributes.

1. `CoverFees` - This controls whether or not a payment through the event registration will cover the fees or not. This should be a Boolean and the Default Value of Yes will make each payment cover the fees and a value of No will not cover the fees.
1. `UserCanSelectCoverFees` - This will give your users the ability to select if they want to cover the fees during registration or not. This should be a Boolean and the Default Value of Yes will show a checkbox (similar to the Transaction Entry block) to the user to Cover the Fees or not. No will not display the checkbox. Note that in order to use this attribute, you should have the CoverFees attribute's DefaultValue set to Yes.
1. `TriggerConfirmation` - Specifies whether Tithely should send a confirmation email after the event registration. Defaults to Yes.