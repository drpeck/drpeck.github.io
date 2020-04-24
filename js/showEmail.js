$(function ($) {
  $(document).on("click", ".js-contact", function (event) {
    var preferEmailLink, emailAddress;
    preferEmailLink = $(".contact [data-email-user][data-email-domain]");
    if (!preferEmailLink.length) return;

    emailAddress =
      preferEmailLink.data("emailUser") +
      "@" +
      preferEmailLink.data("emailDomain");
    preferEmailLink.text(emailAddress);
    preferEmailLink.attr("href", "mailto:" + emailAddress);

    preferEmailLink.parent().show();

    //Clear the data to avoid subsquent population
    preferEmailLink.removeAttr("data-email-user data-email-domain");
    preferEmailLink.removeData("emailUser emailDomain");
  });
});
