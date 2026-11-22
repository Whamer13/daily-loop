# Daily Loop — website files

A responsive, static directory of daily puzzle games. It runs without a database, build process or paid hosting. All game entries live in `app.js`.

## Preview locally

Open `index.html` in a modern browser. The search, category filters, random pick and favourites work locally. Favourites are saved in that browser using local storage.

## Publish it free with GitHub Pages

1. Create a GitHub account (or sign in) and create a new **public** repository, for example `daily-loop`.
2. Upload every file and folder in this project to the repository's root. Keep `index.html`, `styles.css` and `app.js` together in the root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. GitHub will show the published address after deployment. Test it on both a phone and a computer.
6. A custom domain is optional. Buy one from a domain registrar, then follow GitHub's current custom-domain instructions in Pages settings.

GitHub's official guide: https://docs.github.com/en/pages/quickstart

## How to add a game

Open `app.js` and add another object inside the `games` array. Example:

```js
{
  name: "Example Game",
  category: "Trivia",
  description: "A short original description of the daily challenge.",
  url: "https://official-game-website.example/",
  featured: false
},
```

Use one of the existing category names so the category filter works. Check that the URL is the game's official destination and that it opens successfully. Keep descriptions in your own words. Remove games that have closed or changed address.

## Advertising setup (not active yet)

The two ad spaces on the homepage are visual placeholders only. They do not load ads and do not earn revenue until an advertising account accepts the site and you install the provider's real code.

For Google AdSense:

1. The site needs to be published at its final address and contain useful, original content. A directory made only of outbound links may not be accepted; keep improving it with genuinely useful editorial descriptions, original category guides, accurate availability notes and a clear user experience. Approval is never guaranteed.
2. The AdSense account holder must be at least 18. If the site owner is under 18, Google says a parent or guardian can apply using their own Google Account; that adult is responsible for the account and receives the payments. See: https://support.google.com/adsense/answer/14230
3. Apply through https://adsense.google.com/ and follow the current review process.
4. Once approved, copy the exact AdSense script and ad-unit snippets supplied in the account. Replace the commented publisher-ID example in the `<head>` of `index.html`, and replace the notes inside the two `.ad-slot` containers with your own approved ad unit code. Do not guess publisher IDs or ad-slot IDs.
5. Follow the AdSense setup process for `ads.txt` and publish the exact line supplied by Google at `/ads.txt`. Do not publish a made-up `ads.txt` record.
6. For personalised ads to visitors in the UK and EEA, Google requires a Google-certified consent management platform (CMP) integrated with the IAB Transparency and Consent Framework. Configure the consent message in AdSense/Privacy & messaging and check the latest requirements before enabling ads: https://support.google.com/adsense/answer/13554116
7. Update `privacy.html` so it truthfully describes the real advertising provider, cookies/local storage, consent choices and contact details. This starter notice is not legal advice.

## Before launch checklist

- [ ] Replace `hello@yourdomain.com` in `index.html`, `about.html` and `privacy.html` with an email you control.
- [ ] Review every game link and remove any that are unavailable or incorrect.
- [ ] Review `privacy.html` against your actual host, analytics and advertising configuration.
- [ ] Add your own original descriptions, editorial guides and useful content.
- [ ] Test keyboard controls, search, favourites and mobile layout.
- [ ] Only activate advertising after the advertising provider has approved the site and consent/privacy setup is complete.

## Notes

- This is an independent directory. It links to third-party games and does not reproduce or embed them.
- Game names and trademarks belong to their respective owners. Listings do not imply endorsement or affiliation.
- The initial collection is curated, not exhaustive. Daily games frequently launch, move or close.
