const cookieConsentAccept = (req, res) => {
	res.cookie("cookieConsent", "accepted", {
		maxAge: 1000 * 60 * 24 * 365,
		httpOnly: true,
		sameSite: "lax",
	});
	 res.status(200).json({ message: "Cookie consent accepted"});
};

const checkCookieConsent = (req, res) => {
	const cookieConsent = req.cookies.cookieConsent;

	if (cookieConsent === "accepted" || cookieConsent === "declined") {
res.status(200).json({ cookieConsent });
	} else {
res.status(200).json({ cookieConsent: "missing" });
	}
};

module.exports = {
cookieConsentAccept,
	cookieConsentDecline,
	checkCookieConsent,
};
