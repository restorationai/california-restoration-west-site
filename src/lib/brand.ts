// Brand config — hydrated at scaffold time by build_site.py from
// plan-input.json and the client record. All {{TOKENS}} are replaced
// by the scaffold step; this file should not be hand-edited after that.

export const brand = {
  slug: "california-restoration-west",
  displayName: "California Restoration West",
  shortName: "California Restoration West",
  legalName: "California Restoration West LLC",
  // Registered DBA / trade name — filled by rename_site_sync.py the moment
  // the state approves the client's DBA filing (empty until then). When set,
  // the footer carries the "[legal] doing business as [DBA]" line and schema
  // declares it as the business name, so Google/BrightLocal find the new
  // name corroborated on the site before and during the GBP rename.
  dbaName: "California Restoration West - 24/7 Emergency Water Damage and Mold Remediation",
  // Brand name as text beside the header logo (Santino 2026-11-21): set
  // ONLY by the rename flow (header_name_rollout.py) from the Citations
  // Building stage on. false = logo only.
  headerName: true,
  domain: "californiarestorationwest.com",
  canonicalUrl: "https://californiarestorationwest.com",
  phone: "(805) 290-7292",
  phoneRaw: "+18052907292",
  hideMobileHeaderCall: false,
  // Sitewide call-tracking number (2026-08-24). When BOTH fields are set,
  // a tiny inline script in BaseLayout swaps every visible phone mention
  // and tel: link to this number AFTER the page renders. The HTML source,
  // the JSON-LD in schema.ts, and anything crawlers/citation-checkers read
  // keep the canonical NAP number above — humans dial the tracked line,
  // Google sees consistent NAP. Empty = feature off (default at scaffold;
  // filled by the call-tracking provisioning step).
  trackingPhone: "(805) 465-6397",
  trackingPhoneRaw: "+18054656397",
  email: "californiarestorationwest@gmail.com",
  hours: "24/7",
  // AVAILABILITY 24/7 (Santino 2026-11-21, scripts/availability.py): calls are
  // answered 24/7 (the AI receptionist), every trade, default true; false only
  // when the client said not to. Separate from the emergency-SERVICE rule
  // (emergency_policy.py, the `hours` gate above). openingHoursSpec = the
  // schema hours (scripts/schema_hours.py): 24/7 when available, else the
  // real Google hours, else none.
  available247: true,
  openingHoursSpec: [{"days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "00:00", "closes": "23:59"}] as { days: string[]; opens: string; closes: string }[],
  foundedYear: "2025",
  primaryCity: "Ventura",
  primaryState: "CA",
  // SERVICE REGION (Santino 2026-11-19): multi-metro clients name the region
  // on every region-wide surface (see src/lib/region.ts); city pages and the
  // address/NAP keep the city. Empty = one-metro client, city wording.
  serviceRegion: "Ventura County",
  serviceRegionDetail: "Santa Paula, Ojai, Fillmore, Camarillo, Oxnard, Moorpark, Thousand Oaks, Simi Valley",
  // primaryCity/primaryState = the #1 MARKETING city (headlines, coverage
  // copy). addressCity/addressState = where the business PHYSICALLY is.
  // They are usually the same and often diverge (DISS: Farrell PA office,
  // Youngstown OH target) — only the address pair may go in a PostalAddress.
  addressCity: "Ventura",
  addressState: "CA",
  streetAddress: "363 mackay ave ",
  postalCode: "93004",
  lat: "34.4458248",
  lng: "-119.0779359",
  placeId: "ChIJx7cmNM8b-ioRFlPXDWY8C-A",
  googleCid: "",
  imagesBase: "https://images.californiarestorationwest.com",
  googleMapsApiKey: "",
  // Analytics — set post-scaffold (scripts/analytics_set.py / create_ga4.py); no-op if empty
  ga4MeasurementId: "G-5DKZE0DK8C",
  clarityProjectId: "",
  logoUrl: "/images/logo.webp",
  licenseNumbers: [] as string[],
  licenseAuthority: "",
  // State license-verification page — the footer links the license number here.
  licenseLookupUrl: "",
  licenseType: "",
  // Operator-confirmed "licensed & insured" attestation from plan-input.json —
  // lets the TrustStrip show the badge before a license number is on file.
  licensedInsuredAttested: false as boolean,
  certifications: ["IICRC WRT (Water)", "IICRC AMRT (Mold)", "IICRC ASD (Structural Drying)", "IICRC Certified Firm", "OSHA Trained"] as string[],
  trustBadges: ["IICRC Certified Firm", "Insured", "24/7 Emergency Service", "Locally Owned & Operated"] as string[],
  jobPhotos: [] as string[],
  sameAsUrls: ["https://www.facebook.com/people/CAlifornia-REstoration-West/61583226071533/", "https://www.facebook.com/p/CAlifornia-REstoration-West-61583226071533/", "https://maps.google.com/maps?cid=16144063698256220950", "https://www.yelp.com/biz/california-restoration-west-ventura", "https://www.houzz.com/pro/webuser-84932668/california-restoration-west", "https://homeguide.com/ca/ventura/water-damage-restoration/california-restoration-west-bWIQJ-q7t"] as string[],
  credentials: [{"name": "IICRC WRT (Water)", "kind": "certification", "authority": "IICRC", "holder": "technicians", "course": "WRT"}, {"name": "IICRC AMRT (Mold)", "kind": "certification", "authority": "IICRC", "holder": "technicians", "course": "AMRT"}, {"name": "IICRC ASD (Structural Drying)", "kind": "certification", "authority": "IICRC", "holder": "technicians", "course": "ASD"}, {"name": "IICRC Certified Firm", "kind": "certification", "authority": "IICRC", "holder": "company"}, {"name": "OSHA Trained", "kind": "certification", "holder": "company"}] as { name: string; kind: string; number?: string; authority?: string; url?: string; since?: string; state?: string; holder?: string; course?: string }[],
  credentialsLine: [{"text": "IICRC-certified technicians (WRT, AMRT, ASD)"}, {"text": "IICRC Certified Firm"}, {"text": "OSHA Trained"}] as { text: string; url?: string }[],
  // GBP rating fields — synced from the live Google Business Profile by
  // scripts/sync_brand_reviews.py; never hand-edited (real ratings only).
  gbpRatingValue: "5.0",
  gbpReviewCount: "12",
  gbpReviews: [
    { author: "Barbara", rating: 5, text: "Jimmy did a great restoration job for us. He was very professional & extremely competent & completed everything perfectly.", when: "November 2026" },
    { author: "Mike", rating: 5, text: "Made me feel comfortable and in good hands from the moment we spoke. Gave details on what was needed and what to expect.", when: "November 2026" },
    { author: "Adokht", rating: 5, text: "Jimmy and this company are a true GEM!! I truly had the best experience with them. He answered all my questions, super professional, and his work was absolutely perfect. He is very kind and knowledgeable in what he is doing. God sent!", when: "November 2026" },
    { author: "Karen", rating: 5, text: "Jim was professional, courteous and respectful of my spaces.", when: "October 2026" },
    { author: "Atila", rating: 5, text: "Jimmy provided excellent water restoration service. He was professional, responsive, and did a great job from start to finish. I really appreciate his attention to detail and customer service. Highly recommended!", when: "September 2026" },
    { author: "Jeffrey", rating: 5, text: "Jimmy is Very Professional and knowledgeable. One of the best in the industry.", when: "November 2025" },
  ] as { author: string; rating: number; text: string; when: string }[],
  tagline: "24/7 restoration services in Ventura, CA.",
  ctaLabel: "24/7 Emergency Line",
  // Vertical trade-identity copy — resolved at scaffold time from
  // templates/{vertical}/vertical-tokens.json (see scripts/verticals.py).
  // Components must use these instead of hardcoding a trade phrase.
  // vertical gates layout too: restoration is call-first, so the homepage
  // hero renders NO estimate form there (Santino 2026-09-11).
  vertical: "restoration",
  tradeNoun: "restoration",
  specialistPhrase: "Damage Restoration Specialists",
  announcementSuffix: "24/7 Emergency Response",
  homeAboutBlurb: "California Restoration West  serves Ventura and the surrounding CA area with professional damage restoration for homes and businesses. From the first emergency call to the final walkthrough, our team manages the entire recovery, and we answer the phone 24/7, so help is on the way the moment something goes wrong.",
} as const;

export const entityId = `${brand.canonicalUrl}/#identity`;
