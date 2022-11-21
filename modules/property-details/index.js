/* eslint-disable max-statements */
import { add, format } from "date-fns";
import React from "react";
import { Button } from "../../components/button";
import RowContainer from "../../components/row-container";
import PropTypes from "prop-types";
import {
  AccountHeadline,
  AccountLabel,
  AccountList,
  AccountListItem,
  AccountSection,
  BoldText,
  HighlightText,
  InfoText,
  Inset,
  LoadingScreen,
} from "./style";
import useSwr from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

const Detail = ({}) => {
  const { data, error } = useSwr("/api/account", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <LoadingScreen>Loading...</LoadingScreen>;

  const account = data.account;

  const {
    name,
    bankName,
    postcode,
    originalPurchasePrice,
    originalPurchasePriceDate,
    recentValuation,
    associatedMortgages,
    // lastUpdate,
    updateAfterDays,
  } = account;

  let mortgage;
  const lastUpdate = new Date(account.lastUpdate);
  if (associatedMortgages.length) {
    mortgage = associatedMortgages[0];
  }
  const sincePurchase = recentValuation.amount - originalPurchasePrice;
  const sincePurchasePercentage = (sincePurchase / originalPurchasePrice) * 100;
  const presentYear = new Date().getFullYear();
  const purchaseYear = new Date(originalPurchasePriceDate).getFullYear();
  const annualAppreciation =
    sincePurchasePercentage / (presentYear - purchaseYear);

  return (
    <Inset>
      <AccountSection>
        <AccountLabel>Estimated Value</AccountLabel>
        <AccountHeadline>
          {new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(recentValuation.amount)}
        </AccountHeadline>
        <AccountList>
          <AccountListItem>
            <InfoText>
              {`Last updated ${format(lastUpdate, "do MMM yyyy")}`}
            </InfoText>
          </AccountListItem>
          <AccountListItem>
            <InfoText>
              {`Next update ${format(
                add(lastUpdate, { days: updateAfterDays }),
                "do MMM yyyy"
              )}`}
            </InfoText>
          </AccountListItem>
        </AccountList>
      </AccountSection>
      <AccountSection>
        <AccountLabel>Property details</AccountLabel>
        <RowContainer>
          <AccountList>
            <AccountListItem>
              <InfoText>{name}</InfoText>
            </AccountListItem>
            <AccountListItem>
              <InfoText>{bankName}</InfoText>
            </AccountListItem>
            <AccountListItem>
              <InfoText>{postcode}</InfoText>
            </AccountListItem>
          </AccountList>
        </RowContainer>
      </AccountSection>
      <AccountSection>
        <AccountLabel>Valuation change</AccountLabel>
        <AccountList>
          <AccountListItem>
            <InfoText>
              Purchased for{" "}
              <BoldText>
                {new Intl.NumberFormat("en-GB", {
                  style: "currency",
                  currency: "GBP",
                }).format(originalPurchasePrice)}
              </BoldText>
              {" in " +
                format(new Date(originalPurchasePriceDate), "MMMM yyyy")}
            </InfoText>
          </AccountListItem>
          <AccountListItem>
            <InfoText>{"Since purchase"}</InfoText>
            <HighlightText>
              {new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
                maximumSignificantDigits: 1,
              }).format(sincePurchase) +
                " (" +
                sincePurchasePercentage +
                "%)"}
            </HighlightText>
          </AccountListItem>
          <AccountListItem>
            <InfoText>{"Annual appreciation"}</InfoText>
            <HighlightText>{annualAppreciation + "%"}</HighlightText>
          </AccountListItem>
        </AccountList>
      </AccountSection>
      {mortgage && (
        <AccountSection>
          <AccountLabel>Mortgage</AccountLabel>
          <RowContainer
            // This is a dummy action
            onClick={() => alert("You have navigated to the mortgage page")}
          >
            <AccountList>
              <AccountListItem>
                <InfoText>
                  {new Intl.NumberFormat("en-GB", {
                    style: "currency",
                    currency: "GBP",
                  }).format(Math.abs(associatedMortgages[0].currentBalance))}
                </InfoText>
              </AccountListItem>
              <AccountListItem>
                <InfoText>{associatedMortgages[0].name}</InfoText>
              </AccountListItem>
            </AccountList>
          </RowContainer>
        </AccountSection>
      )}
      <Button
        // This is a dummy action
        onClick={() => alert("You have navigated to the edit account page")}
      >
        Edit account
      </Button>
    </Inset>
  );
};

Detail.propTypes = {
  account: PropTypes.shape({
    name: PropTypes.string,
    bankName: PropTypes.string,
    postcode: PropTypes.string,
    originalPurchasePrice: PropTypes.number,
    originalPurchasePriceDate: PropTypes.string,
    recentValuation: PropTypes.shape({
      amount: PropTypes.number,
    }),
    associatedMortgages: PropTypes.arrayOf(
      PropTypes.shape({
        currentBalance: PropTypes.number,
        name: PropTypes.string,
      })
    ),
    lastUpdate: PropTypes.string,
    updateAfterDays: PropTypes.number,
  }),
};

export default Detail;
