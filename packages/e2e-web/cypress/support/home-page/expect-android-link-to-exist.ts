export const expectAndroidLinkToExist = () =>
  cy.get('[data-e2e="android-app-download"]')
    .should(
      'have.attr',
      'href',
      'https://play.google.com/store/apps/details'
        + '?id=com.chrisbdev.seasonal&pcampaignid='
        + 'MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
    );
